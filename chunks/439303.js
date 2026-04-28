r.d(t, { E9: () => o, jM: () => s });
var n = r(627968),
    u = r(64700),
    l = r(812729),
    a = r.n(l);
let i = u.createContext({});
function s() {
    return u.useContext(i);
}
function o(e) {
    let { newValue: t, children: r } = e,
        l = s(),
        o = u.useMemo(() => {
            let e = { ...l, ...t };
            return a()(l, e) ? (l ?? e) : e;
        }, [l, t]);
    return (0, n.jsx)(i.Provider, { value: o, children: r });
}
