n.d(t, { p: () => c });
var i = n(17928),
    s = n(166403),
    r = n(354670),
    l = n(10392),
    a = n(432779),
    o = n(202541);
function c() {
    let e = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        t = r.A.isFetchingOffer(),
        n = r.A.hasFetchedOffer(),
        c = (0, a.A)(o.q),
        d = (0, a.A)(o.W7),
        u = (0, a.A)(o.Qo),
        h = (0, a.A)(o.EG),
        C = (0, a.A)(o.Ki),
        A = c ?? d ?? u ?? h ?? C ?? null;
    return e?.canceledAt == null ? null : null != A ? A : (t || n || (0, l.Vn)(), null);
}
