"use strict";
n.d(t, { A: () => a, O: () => r });
var i = n(627968),
    s = n(64700);
let l = s.createContext(void 0);
function r() {
    let e = s.useContext(l);
    if (null == e) throw Error("No edit state; are you missing an <EditStateContextProvider />?");
    return e;
}
function a(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)(l.Provider, { value: n, children: t });
}
