i.d(t, { B: () => c, M: () => o });
var n = i(627968),
    l = i(64700),
    s = i(311907),
    a = i(61881),
    r = i(735321);
let d = l.createContext(null);
function o(e) {
    let { widgetType: t, children: i } = e,
        o = (0, s.bG)([a.A], () => {
            let e = a.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, r.cv)(t);
            return i.games.length > n;
        }),
        [c, u] = l.useState(o);
    return (0, n.jsx)(d.Provider, { value: { expanded: c, setExpanded: u }, children: i });
}
function c() {
    let e = l.useContext(d);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
