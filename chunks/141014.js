n.d(t, {
    N: () => a,
    g: () => o,
}),
    n(415506);
var r = n(54381),
    i = n(473749);
let l = i.createContext(null);
function a(e) {
    let { value: t, children: n } = e;
    return (0, r.jsx)(l.Provider, {
        value: t,
        children: n,
    });
}
function o() {
    let e = i.useContext(l);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
