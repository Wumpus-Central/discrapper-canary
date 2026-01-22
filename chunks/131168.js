n.d(t, { p: () => c });
var r = n(311907),
    i = n(166403),
    a = n(816733),
    s = n(694080),
    o = n(432779),
    l = n(788868);
function c() {
    var e;
    let t = (0, r.bG)([i.A], () => i.A.getPremiumTypeSubscription()),
        n = a.A.isFetchingOffer(),
        c = a.A.hasFetchedOffer(),
        u = (0, o.A)(l.q),
        d = (0, o.A)(l.EG),
        f = null != (e = null != u ? u : d) ? e : null;
    return (null == t ? void 0 : t.canceledAt) == null ? null : null != f ? f : (n || c || (0, s.Vn)(), null);
}
