n.d(t, { A: () => a, O: () => r });
var i = n(627968),
    l = n(64700);
let s = l.createContext(void 0);
function r() {
    let e = l.useContext(s);
    if (null == e) throw Error("No edit state; are you missing an <EditStateContextProvider />?");
    return e;
}
function a(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)(s.Provider, { value: n, children: t });
}
