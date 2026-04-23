n.d(t, { p: () => o });
var r = n(311907),
    a = n(166403),
    i = n(816733),
    s = n(694080),
    l = n(432779),
    c = n(788868);
function o() {
    let e = (0, r.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
        t = i.A.isFetchingOffer(),
        n = i.A.hasFetchedOffer(),
        o = (0, l.A)(c.q),
        d = (0, l.A)(c.EG),
        u = o ?? d ?? null;
    return e?.canceledAt == null ? null : null != u ? u : (t || n || (0, s.Vn)(), null);
}
