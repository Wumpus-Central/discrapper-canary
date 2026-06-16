a.d(t, { p: () => o });
var s = a(17928),
    i = a(166403),
    n = a(354670),
    r = a(945960),
    l = a(432779),
    c = a(788868);
function o() {
    let e = (0, s.bG)([i.A], () => i.A.getPremiumTypeSubscription()),
        t = n.A.isFetchingOffer(),
        a = n.A.hasFetchedOffer(),
        o = (0, l.A)(c.q),
        d = (0, l.A)(c.EG),
        u = o ?? d ?? null;
    return e?.canceledAt == null ? null : null != u ? u : (t || a || (0, r.Vn)(), null);
}
