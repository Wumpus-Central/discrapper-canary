n.d(t, { p: () => d });
var i = n(17928),
    l = n(166403),
    r = n(354670),
    s = n(10392),
    a = n(432779),
    o = n(202541);
function d() {
    let e = (0, i.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
        t = r.A.isFetchingOffer(),
        n = r.A.hasFetchedOffer(),
        d = (0, a.A)(o.q),
        c = (0, a.A)(o.W7),
        u = (0, a.A)(o.Qo),
        A = (0, a.A)(o.EG),
        h = d ?? c ?? u ?? A ?? null;
    return e?.canceledAt == null ? null : null != h ? h : (t || n || (0, s.Vn)(), null);
}
