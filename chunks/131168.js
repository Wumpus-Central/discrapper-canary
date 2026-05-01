u.d(n, { p: () => s });
var l = u(17928),
    t = u(166403),
    c = u(354670),
    i = u(694080),
    p = u(313246),
    r = u(788868);
function s() {
    let e = (0, l.bG)([t.A], () => t.A.getPremiumTypeSubscription()),
        n = c.A.isFetchingOffer(),
        u = c.A.hasFetchedOffer(),
        s = (0, p.A)(r.q),
        h = (0, p.A)(r.EG),
        a = s ?? h ?? null;
    return e?.canceledAt == null ? null : null != a ? a : (n || u || (0, i.Vn)(), null);
}
