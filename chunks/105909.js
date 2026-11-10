n.d(u, { Wo: () => p, Xb: () => h, rG: () => S, Lh: () => g, $F: () => G, p3: () => U, bu: () => A });
var t,
    r = n(582128),
    l = n(855986),
    i = n(439174),
    a = n(851767),
    f = n(287809),
    s = n(166403),
    c = n(474090),
    d = n(678022);
function m(e) {
    return (0, l.bG)([a.A, f.default], () => {
        let u,
            n = null != e ? a.A.getUserProfile(e) : null,
            t = n?.premiumSince;
        if (null == n || null == t) return null;
        if (
            (n?.badges?.forEach((e) => {
                let n = (0, i.cZ)(e.id);
                null != n && (u = n);
            }),
            null != u)
        )
            return u;
        let r = f.default.getCurrentUser();
        return e === r?.id && (0, d.Sn)(r) ? (0, i.UO)(t) : null;
    });
}
var o = n(682901),
    p = (((t = {}).UPCOMING = "upcoming"), (t.WITHHELD = "withheld"), (t.EARNED = "earned"), t);
function b(e) {
    if (null == e) return e;
    let u = e instanceof Date ? e : new Date(e);
    return Number.isNaN(u.getTime()) ? null : u;
}
function g() {
    let e = (0, l.bG)([f.default], () => f.default.getCurrentUser());
    return m(e?.id) ?? null;
}
function S(e) {
    let u = (0, l.bG)([a.A], () => {
        if (null == e) return null;
        let u = a.A.getUserProfile(e);
        return u?.premiumSince;
    });
    return (0, r.useMemo)(() => b(u), [u]);
}
function h() {
    let e = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        u = (0, c.YE)(e, o.PremiumTypes.TIER_2),
        n = (0, l.bG)(
            [s.A],
            () => {
                let e = s.A.getPremiumSubscription();
                return null != e && u ? e.premiumSince : null;
            },
            [u],
        ),
        t = S(e?.id),
        i = n ?? t;
    return (0, r.useMemo)(() => b(i), [i]);
}
function A() {
    let e = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        u = (0, l.bG)([s.A], () => s.A.getPremiumTypeSubscription());
    return (0, d.Sn)(e) ? (0, i.UO)(u?.premiumSince) : null;
}
function G() {
    let e,
        u,
        n = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        t = U(n?.id),
        r =
            ((e = g()),
            (u = (0, l.bG)([s.A], () => s.A.getPremiumTypeSubscription())),
            null == e || null == u || null == u.premiumSince ? null : (0, i.Xr)(e, u.premiumSince)),
        a = h();
    if (null != t) return { ...t, earnedOnDate: r, status: "earned" };
    if (null == a) return null;
    if (!(0, d.Sn)(n)) {
        let e = (0, i.UO)(a);
        if (null != e) return { ...o.VD[e], earnedOnDate: (0, i.Xr)(e, a), status: "withheld" };
    }
    return { ...Object.values(o.VD)[0], status: "upcoming" };
}
function U(e) {
    let u = m(e);
    return null == u ? null : o.VD[u];
}
