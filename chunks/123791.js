r.d(e, { C: () => E, F: () => _ });
var s = r(64700),
    o = r(17928),
    i = r(996759),
    n = r(339048),
    a = r(800342),
    c = r(163437),
    u = r(495544),
    A = r(97352),
    p = r(652676),
    T = r(67480);
function E(t) {
    s.useEffect(() => {
        _(t);
    }, [t]);
    let e = (0, o.yK)([p.A, T.A, A.A], () => {
            let e = p.A.getStoreLayout(t);
            return (0, c.oC)(e.subscriptions, T.A, A.A);
        }, [t]),
        r = (0, o.yK)([p.A], () => p.A.getStoreLayout(t).otps, [t]);
    return s.useMemo(() => ({ subscriptions: e, otps: r }), [e, r]);
}
function _(t) {
    (0, i.V)(t), (0, a.JI)(t), u.default.isAuthenticated() && (0, n.LM)(t, !1);
}
