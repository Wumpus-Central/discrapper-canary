n.d(t, {
    N: () => s,
    g: () => u,
}),
    n(388685),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    l = n(224724),
    o = n(86419);
let c = i.createContext(null);
function s(e) {
    let { widgetType: t, children: n } = e,
        s = (0, a.e7)([l.Z], () => {
            let e = l.Z.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let r = (0, o.Gv)(t);
            return n.games.length > r;
        }),
        [u, d] = i.useState(s);
    return (0, r.jsx)(c.Provider, {
        value: {
            expanded: u,
            setExpanded: d,
        },
        children: n,
    });
}
function u() {
    let e = i.useContext(c);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
