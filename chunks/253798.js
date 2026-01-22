n.d(t, {
    B: () => u,
    M: () => c,
}),
    n(896048),
    n(65821);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(61881),
    s = n(735321);
let o = l.createContext(null);

function c(e) {
    let { widgetType: t, children: n } = e,
        c = (0, i.bG)([a.A], () => {
            let e = a.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let r = (0, s.cv)(t);
            return n.games.length > r;
        }),
        [u, d] = l.useState(c);
    return (0, r.jsx)(o.Provider, {
        value: {
            expanded: u,
            setExpanded: d,
        },
        children: n,
    });
}

function u() {
    let e = l.useContext(o);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
