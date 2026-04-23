n.d(t, { C: () => E, F: () => p });
var s = n(64700),
    i = n(17928),
    l = n(996759),
    r = n(339048),
    a = n(800342),
    o = n(163437),
    d = n(495544),
    u = n(97352),
    c = n(31455),
    h = n(67480);
function E(e) {
    s.useEffect(() => {
        p(e);
    }, [e]);
    let t = (0, i.yK)([c.A, h.A, u.A], () => {
            let t = c.A.getStoreLayout(e);
            return (0, o.oC)(t.subscriptions, h.A, u.A);
        }, [e]),
        n = (0, i.yK)([c.A], () => c.A.getStoreLayout(e).otps, [e]);
    return s.useMemo(() => ({ subscriptions: t, otps: n }), [t, n]);
}
function p(e) {
    (0, l.V)(e), (0, a.JI)(e), d.default.isAuthenticated() && (0, r.LM)(e, !1);
}
