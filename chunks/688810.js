"use strict";
n.d(t, { Ay: () => _, Db: () => E, f5: () => c });
var i = n(627968),
    r = n(64700),
    a = n(812729),
    s = n.n(a),
    l = n(735438),
    o = n.n(l);
let d = r.createContext([]);
function c(e) {
    let { children: t, value: n } = e;
    return (0, i.jsx)(d.Provider, { value: n, children: t });
}
function u(e, t) {
    return 0 === t.length ? e : [...e, ...o().flatten(t)];
}
function _() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, a] = r.useState(t),
        l = r.useContext(d),
        o = r.useMemo(() => u(l, i), [i, l]),
        c = r.useMemo(() => u(l, i.slice(0, i.length - 1)), [i, l]);
    return (
        r.useEffect(() => {
            s()(t, i) || a(t);
        }, [t, i]),
        {
            analyticsLocations: o,
            sourceAnalyticsLocations: c,
            parentAnalyticsLocation: c[c.length - 1],
            newestAnalyticsLocation: o[o.length - 1],
        }
    );
}
function E() {
    return r.useContext(d) ?? [];
}
