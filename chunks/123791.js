var s = r(582128),
    o = r(855986),
    i = r(996759),
    n = r(339048),
    a = r(800342),
    c = r(163437),
    u = r(46653),
    A = r(97352),
    p = r(791878),
    T = r(67480);
function E(t) {
    ((0, i.V)(t), (0, a.JI)(t), u.default.isAuthenticated() && (0, n.LM)(t, !1));
}
r.d(
    e,
    {},
    {
        C: function (t) {
            s.useEffect(() => {
                E(t);
            }, [t]);
            let e = (0, o.yK)(
                    [p.A, T.A, A.A],
                    () => {
                        let e = p.A.getStoreLayout(t);
                        return (0, c.oC)(e.subscriptions, T.A, A.A);
                    },
                    [t],
                ),
                r = (0, o.yK)([p.A], () => p.A.getStoreLayout(t).otps, [t]);
            return s.useMemo(() => ({ subscriptions: e, otps: r }), [e, r]);
        },
        F: E,
    },
);
