import React, {useState} from 'react';
import './App.css';
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
    const [todos, setTodos] = useState([
        {
            id:1,
            text: "Learn about React",
            isCompleted: false
        },
        {
            id:2,
            text: "Meet friend for lunch",
            isCompleted: false
        },
        {
            id:3,
            text: "Build really cool todo app",
            isCompleted: false
        }
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, {text:todo}] );
    };

    const markComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const editTitle = (index, title) => {
        const newTodos = [...todos];
        newTodos[index].text = title;
        setTodos(newTodos);
    };

    return (
      <div className="parent-container">
          <div className="container top-container">
              <div className="app">
                  <div className="todoform">
                      <TodoForm addTodo={addTodo} />
                      <Todos todos={todos} markComplete={markComplete} editTitle={editTitle}/>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default App;
