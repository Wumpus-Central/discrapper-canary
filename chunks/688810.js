var i = n(477900),
    r = n(582128),
    a = n(812729),
    s = n.n(a),
    l = n(435558),
    o = n.n(l);
let d = r.createContext([]);
function c(e, t) {
    if (0 === t.length) return e;
    let n = o().flatten(t);
    return [...e, ...n];
}
n.d(
    t,
    {},
    {
        Ay: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            let [i, a] = r.useState(t),
                l = r.useContext(d),
                o = r.useMemo(() => c(l, i), [i, l]),
                u = r.useMemo(() => c(l, i.slice(0, i.length - 1)), [i, l]);
            return (
                r.useEffect(() => {
                    s()(t, i) || a(t);
                }, [t, i]),
                {
                    analyticsLocations: o,
                    sourceAnalyticsLocations: u,
                    parentAnalyticsLocation: u[u.length - 1],
                    newestAnalyticsLocation: o[o.length - 1],
                }
            );
        },
        Db: function () {
            return r.useContext(d) ?? [];
        },
        di: d,
        f5: function (e) {
            let { children: t, value: n } = e;
            return (0, i.jsx)(d.Provider, { value: n, children: t });
        },
    },
);
