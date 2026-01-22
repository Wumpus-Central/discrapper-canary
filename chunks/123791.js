n.d(t, {
    C: () => p,
    F: () => _,
});
var r = n(64700),
    i = n(311907),
    a = n(996759),
    s = n(339048),
    o = n(800342),
    l = n(163437),
    c = n(961350),
    u = n(97352),
    d = n(31455),
    f = n(67480);

function p(e) {
    r.useEffect(() => {
        _(e);
    }, [e]);
    let t = (0, i.yK)([d.A, f.A, u.A], () => {
            let t = d.A.getStoreLayout(e);
            return (0, l.oC)(t.subscriptions, f.A, u.A);
        }, [e]),
        n = (0, i.yK)([d.A], () => d.A.getStoreLayout(e).otps, [e]);
    return r.useMemo(
        () => ({
            subscriptions: t,
            otps: n,
        }),
        [t, n],
    );
}

function _(e) {
    (0, a.V)(e), (0, o.JI)(e), c.default.isAuthenticated() && (0, s.LM)(e, !1);
}
