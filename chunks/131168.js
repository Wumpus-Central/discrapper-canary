n.d(t, { p: () => o });
var i = n(17928),
    a = n(166403),
    s = n(354670),
    r = n(945960),
    l = n(432779),
    c = n(202541);
function o() {
    let e = (0, i.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
        t = s.A.isFetchingOffer(),
        n = s.A.hasFetchedOffer(),
        o = (0, l.A)(c.q),
        d = (0, l.A)(c.EG),
        u = o ?? d ?? null;
    return e?.canceledAt == null ? null : null != u ? u : (t || n || (0, r.Vn)(), null);
}
