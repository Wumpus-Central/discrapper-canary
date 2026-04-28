r.d(e, { C: () => T, F: () => p });
var s = r(64700),
    n = r(17928),
    o = r(996759),
    A = r(339048),
    i = r(800342),
    a = r(163437),
    u = r(495544),
    E = r(97352),
    c = r(31455),
    C = r(67480);
function T(t) {
    s.useEffect(() => {
        p(t);
    }, [t]);
    let e = (0, n.yK)([c.A, C.A, E.A], () => {
            let e = c.A.getStoreLayout(t);
            return (0, a.oC)(e.subscriptions, C.A, E.A);
        }, [t]),
        r = (0, n.yK)([c.A], () => c.A.getStoreLayout(t).otps, [t]);
    return s.useMemo(() => ({ subscriptions: e, otps: r }), [e, r]);
}
function p(t) {
    (0, o.V)(t), (0, i.JI)(t), u.default.isAuthenticated() && (0, A.LM)(t, !1);
}
