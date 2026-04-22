n.d(t, { C: () => _, F: () => h });
var i = n(64700),
    l = n(311907),
    a = n(996759),
    s = n(339048),
    r = n(800342),
    o = n(163437),
    d = n(961350),
    c = n(97352),
    u = n(31455),
    m = n(67480);
function _(e) {
    i.useEffect(() => {
        h(e);
    }, [e]);
    let t = (0, l.yK)([u.A, m.A, c.A], () => {
            let t = u.A.getStoreLayout(e);
            return (0, o.oC)(t.subscriptions, m.A, c.A);
        }, [e]),
        n = (0, l.yK)([u.A], () => u.A.getStoreLayout(e).otps, [e]);
    return i.useMemo(() => ({ subscriptions: t, otps: n }), [t, n]);
}
function h(e) {
    (0, a.V)(e), (0, r.JI)(e), d.default.isAuthenticated() && (0, s.LM)(e, !1);
}
