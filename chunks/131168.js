n.d(t, { p: () => d });
var i = n(17928),
    l = n(166403),
    r = n(354670),
    s = n(945960),
    a = n(432779),
    o = n(202541);
function d() {
    let e = (0, i.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
        t = r.A.isFetchingOffer(),
        n = r.A.hasFetchedOffer(),
        d = (0, a.A)(o.q),
        c = (0, a.A)(o.EG),
        u = d ?? c ?? null;
    return e?.canceledAt == null ? null : null != u ? u : (t || n || (0, s.Vn)(), null);
}
