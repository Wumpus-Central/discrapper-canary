i.d(t, { p: () => d });
var s = i(17928),
    a = i(166403),
    n = i(354670),
    r = i(694080),
    l = i(313246),
    c = i(788868);
function d() {
    let e = (0, s.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
        t = n.A.isFetchingOffer(),
        i = n.A.hasFetchedOffer(),
        d = (0, l.A)(c.q),
        o = (0, l.A)(c.EG),
        u = d ?? o ?? null;
    return e?.canceledAt == null ? null : null != u ? u : (t || i || (0, r.Vn)(), null);
}
