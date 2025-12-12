n.d(t, {
    N: () => l,
    g: () => o,
}),
    n(388685),
    n(415506);
var r = n(54381),
    i = n(473749);
let a = i.createContext(null);
function l(e) {
    let { children: t } = e,
        [n, l] = i.useState(!1);
    return (0, r.jsx)(a.Provider, {
        value: {
            expanded: n,
            setExpanded: l,
        },
        children: t,
    });
}
function o() {
    let e = i.useContext(a);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
