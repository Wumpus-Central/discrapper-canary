n.d(t, { p: () => o });
var a = n(17928),
    i = n(166403),
    r = n(354670),
    s = n(694080),
    l = n(313246),
    c = n(788868);
function o() {
    let e = (0, a.bG)([i.A], () => i.A.getPremiumTypeSubscription()),
        t = r.A.isFetchingOffer(),
        n = r.A.hasFetchedOffer(),
        o = (0, l.A)(c.q),
        d = (0, l.A)(c.EG),
        u = o ?? d ?? null;
    return e?.canceledAt == null ? null : null != u ? u : (t || n || (0, s.Vn)(), null);
}
