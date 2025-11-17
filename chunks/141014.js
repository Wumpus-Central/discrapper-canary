n.d(t, {
    N: () => l,
    g: () => o,
}),
    n(415506);
var r = n(54381),
    i = n(473749);
let a = i.createContext(null);
function l(e) {
    let { value: t, children: n } = e;
    return (0, r.jsx)(a.Provider, {
        value: t,
        children: n,
    });
}
function o() {
    let e = i.useContext(a);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
