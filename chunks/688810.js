"use strict";
n.d(t, { Ay: () => _, di: () => u, f5: () => c });
var r = n(627968),
    i = n(64700),
    a = n(812729),
    s = n.n(a),
    o = n(735438),
    l = n.n(o);
let u = i.createContext([]);
function c(e) {
    let { children: t, value: n } = e;
    return (0, r.jsx)(u.Provider, { value: n, children: t });
}
function d(e, t) {
    return 0 === t.length ? e : [...e, ...l().flatten(t)];
}
function _() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [r, a] = i.useState(t),
        o = i.useContext(u),
        l = i.useMemo(() => d(o, r), [r, o]),
        c = i.useMemo(() => d(o, r.slice(0, r.length - 1)), [r, o]);
    return (
        i.useEffect(() => {
            s()(t, r) || a(t);
        }, [t, r]),
        {
            analyticsLocations: l,
            sourceAnalyticsLocations: c,
            parentAnalyticsLocation: c[c.length - 1],
            newestAnalyticsLocation: l[l.length - 1],
        }
    );
}
