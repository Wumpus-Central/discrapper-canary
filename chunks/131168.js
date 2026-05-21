n.d(t, { p: () => o });
var i = n(17928),
    l = n(166403),
    r = n(354670),
    s = n(694080),
    a = n(432779),
    c = n(788868);
function o() {
    let e = (0, i.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
        t = r.A.isFetchingOffer(),
        n = r.A.hasFetchedOffer(),
        o = (0, a.A)(c.q),
        d = (0, a.A)(c.EG),
        u = o ?? d ?? null;
    return e?.canceledAt == null ? null : null != u ? u : (t || n || (0, s.Vn)(), null);
}
