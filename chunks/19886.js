t.d(u, { rG: () => p, Lh: () => m, Wo: () => h, p3: () => G, bu: () => b, $F: () => A, Xb: () => g });
var n,
    r = t(17928),
    l = t(439174),
    i = t(321191),
    a = t(287809),
    d = t(166403),
    s = t(474090);
let f = (0, t(945810).mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-withheld-state",
    defaultConfig: { showWithheldBadge: !1 },
    variations: { 0: { showWithheldBadge: !1 }, 1: { showWithheldBadge: !0 } },
});
function o(e) {
    return (0, r.bG)([i.A, a.default], () => {
        let u,
            t = null != e ? i.A.getUserProfile(e) : null,
            n = t?.premiumSince;
        if (null == t || null == n) return null;
        if (
            (t?.badges?.forEach((e) => {
                let t = (0, l.cZ)(e.id);
                null != t && (u = t);
            }),
            null != u)
        )
            return u;
        let r = a.default.getCurrentUser();
        return e === r?.id && r?.hasPaidTier2Subscription() ? (0, l.UO)(n) : null;
    });
}
var c = t(202541),
    h = (((n = {}).UPCOMING = "upcoming"), (n.WITHHELD = "withheld"), (n.EARNED = "earned"), n);
function m() {
    let e = (0, r.bG)([a.default], () => a.default.getCurrentUser());
    return o(e?.id) ?? null;
}
function p(e) {
    return (0, r.bG)([i.A], () => {
        if (null == e) return null;
        let u = i.A.getUserProfile(e);
        return u?.premiumSince;
    });
}
function g() {
    let e = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        u = (0, s.YE)(e, c.PremiumTypes.TIER_2),
        t = (0, r.bG)(
            [d.A],
            () => {
                let e = d.A.getPremiumSubscription();
                return null != e && u ? e.premiumSince : null;
            },
            [u],
        ),
        n = p(e?.id);
    return t ?? n;
}
function b() {
    let e = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        u = (0, r.bG)([d.A], () => d.A.getPremiumTypeSubscription());
    return (0, s.YE)(e, c.PremiumTypes.TIER_2) ? (0, l.UO)(u?.premiumSince) : null;
}
function A() {
    let e,
        u,
        t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        n = G(t?.id),
        i =
            ((e = m()),
            (u = (0, r.bG)([d.A], () => d.A.getPremiumTypeSubscription())),
            null == e || null == u || null == u.premiumSince ? null : (0, l.Xr)(e, u.premiumSince)),
        s = g();
    if (null != n) return { ...n, earnedOnDate: i, status: "earned" };
    if (null == s) return null;
    if (!t?.hasPaidTier2Subscription()) {
        let e = (0, l.UO)(s);
        if (null != e && f.getConfig({ location: "useTieredTenureBadgeData" }).showWithheldBadge)
            return { ...c.VD[e], earnedOnDate: (0, l.Xr)(e, s), status: "withheld" };
    }
    return { ...Object.values(c.VD)[0], status: "upcoming" };
}
function G(e) {
    let u = o(e);
    return null == u ? null : c.VD[u];
}
