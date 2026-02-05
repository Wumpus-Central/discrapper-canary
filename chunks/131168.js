n.d(t, { p: () => c });
var i = n(311907),
    s = n(166403),
    r = n(816733),
    a = n(694080),
    l = n(432779),
    o = n(788868);
function c() {
    let e = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        t = r.A.isFetchingOffer(),
        n = r.A.hasFetchedOffer(),
        c = (0, l.A)(o.q),
        d = (0, l.A)(o.EG),
        u = c ?? d ?? null;
    return e?.canceledAt == null ? null : null != u ? u : (t || n || (0, a.Vn)(), null);
}
