n.d(t, {
    Ay: () => f,
    di: () => c,
    f5: () => u,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(812729),
    s = n.n(a),
    o = n(735438),
    l = n.n(o);
let c = i.createContext([]);
function u(e) {
    let { children: t, value: n } = e;
    return (0, r.jsx)(c.Provider, {
        value: n,
        children: t,
    });
}
function d(e, t) {
    return 0 === t.length ? e : [...e, ...l().flatten(t)];
}
function f() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [r, a] = i.useState(t),
        o = i.useContext(c),
        l = i.useMemo(() => d(o, r), [r, o]),
        u = i.useMemo(() => d(o, r.slice(0, r.length - 1)), [r, o]);
    return (
        i.useEffect(() => {
            s()(t, r) || a(t);
        }, [t, r]),
        {
            analyticsLocations: l,
            sourceAnalyticsLocations: u,
            parentAnalyticsLocation: u[u.length - 1],
            newestAnalyticsLocation: l[l.length - 1],
        }
    );
}
