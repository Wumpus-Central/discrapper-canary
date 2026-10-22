u.d(t, { rG: () => b, Lh: () => g, Wo: () => h, p3: () => S, bu: () => A, $F: () => G, Xb: () => T });
var n,
    r = u(582128),
    l = u(17928),
    i = u(439174),
    a = u(321191),
    s = u(287809),
    d = u(166403),
    o = u(474090);
let f = (0, u(945810).mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-withheld-state",
    defaultConfig: { showWithheldBadge: !1 },
    variations: { 0: { showWithheldBadge: !1 }, 1: { showWithheldBadge: !0 } },
});
function c(e) {
    return (0, l.bG)([a.A, s.default], () => {
        let t,
            u = null != e ? a.A.getUserProfile(e) : null,
            n = u?.premiumSince;
        if (null == u || null == n) return null;
        if (
            (u?.badges?.forEach((e) => {
                let u = (0, i.cZ)(e.id);
                null != u && (t = u);
            }),
            null != t)
        )
            return t;
        let r = s.default.getCurrentUser();
        return e === r?.id && r?.hasPaidTier2Subscription() ? (0, i.UO)(n) : null;
    });
}
var m = u(202541),
    h = (((n = {}).UPCOMING = "upcoming"), (n.WITHHELD = "withheld"), (n.EARNED = "earned"), n);
function p(e) {
    if (null == e) return e;
    let t = e instanceof Date ? e : new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function g() {
    let e = (0, l.bG)([s.default], () => s.default.getCurrentUser());
    return c(e?.id) ?? null;
}
function b(e) {
    let t = (0, l.bG)([a.A], () => {
        if (null == e) return null;
        let t = a.A.getUserProfile(e);
        return t?.premiumSince;
    });
    return (0, r.useMemo)(() => p(t), [t]);
}
function T() {
    let e = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        t = (0, o.YE)(e, m.PremiumTypes.TIER_2),
        u = (0, l.bG)(
            [d.A],
            () => {
                let e = d.A.getPremiumSubscription();
                return null != e && t ? e.premiumSince : null;
            },
            [t],
        ),
        n = b(e?.id),
        i = u ?? n;
    return (0, r.useMemo)(() => p(i), [i]);
}
function A() {
    let e = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        t = (0, l.bG)([d.A], () => d.A.getPremiumTypeSubscription());
    return (0, o.YE)(e, m.PremiumTypes.TIER_2) ? (0, i.UO)(t?.premiumSince) : null;
}
function G() {
    let e,
        t,
        u = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        n = S(u?.id),
        r =
            ((e = g()),
            (t = (0, l.bG)([d.A], () => d.A.getPremiumTypeSubscription())),
            null == e || null == t || null == t.premiumSince ? null : (0, i.Xr)(e, t.premiumSince)),
        a = T();
    if (null != n) return { ...n, earnedOnDate: r, status: "earned" };
    if (null == a) return null;
    if (!u?.hasPaidTier2Subscription()) {
        let e = (0, i.UO)(a);
        if (null != e && f.getConfig({ location: "useTieredTenureBadgeData" }).showWithheldBadge)
            return { ...m.VD[e], earnedOnDate: (0, i.Xr)(e, a), status: "withheld" };
    }
    return { ...Object.values(m.VD)[0], status: "upcoming" };
}
function S(e) {
    let t = c(e);
    return null == t ? null : m.VD[t];
}
