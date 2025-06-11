n.d(t, {
    Qw: () => R,
    Vi: () => C,
    l2: () => P
});
var r = n(913527),
    i = n.n(r),
    a = n(873546),
    o = n(399606),
    s = n(355467),
    l = n(211242),
    c = n(594174),
    u = n(78839),
    d = n(431),
    f = n(580130),
    _ = n(74538),
    p = n(937579),
    h = n(617799),
    m = n(84053),
    g = n(61196),
    E = n(104494),
    b = n(639119),
    y = n(921022),
    O = n(748770),
    v = n(725727),
    I = n(1844),
    T = n(474936),
    S = n(981631);
let A = 10;
function N(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: r } = e;
    if (!t) return !0;
    if (null != r && r.status === S.O0b.ENDED) {
        var o;
        let e = r.endedAt,
            t = null == (o = (0, _.Af)(r)) ? void 0 : o.planId,
            n = null != t && _.ZP.getPremiumType(t) === T.p9.TIER_2;
        if (null != e && n && i()().subtract(A, 'days').isAfter(e)) return !0;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(T.p9.TIER_2),
            t = c.default.getCurrentUser(),
            r = !!(null == n ? void 0 : n.hasActiveTrial) && _.ZP.isPremiumExactly(t, T.p9.TIER_0);
        if (e || r) return !0;
    }
    return !!(a.tq && f.Z.isFractionalPremiumActive());
}
function C() {
    var e;
    let { paymentsBlocked: t } = l.Z.useExperiment({ location: '153d31_1' }, { autoTrackExposure: !1 }),
        { promotion: n } = (0, v.mq)(),
        { enabled: r } = (0, g.ZP)(),
        { enabled: i } = (0, m.ZP)(),
        { mostRecentSubscription: s, premiumSubscription: c } = (0, o.cj)([u.ZP], () => ({
            mostRecentSubscription: u.ZP.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: u.ZP.getPremiumTypeSubscription()
        })),
        d = (0, b.N)(),
        f = (0, E.Ng)(),
        _ = new Date(null != (e = null == n ? void 0 : n.endDate) ? e : 0).valueOf(),
        p = Date.now(),
        O = p > _;
    (0, y.Z)({ delay: O ? -1 : _ - p });
    let I = !a.tq || i,
        T = !N({
            experimentEnabled: r,
            premiumSubscription: c,
            mostRecentSubscription: s
        }),
        S = I && T && null == d && null != n && !t && null == f,
        { enabled: A } = h.Z.useExperiment(
            { location: '153d31_2' },
            {
                autoTrackExposure: S,
                disable: !S
            }
        );
    return !O && A;
}
async function R() {
    var e;
    let t = c.default.getCurrentUser(),
        n = !(null == t ? void 0 : t.isClaimed()),
        { paymentsBlocked: r } = l.Z.getCurrentConfig({ location: '153d31_3' }, { autoTrackExposure: !1 }),
        { enabled: i } = (0, g.aW)(),
        { enabled: o } = (0, m.oW)(),
        { enabled: f } = h.Z.getCurrentConfig({ location: '153d31_4' }, { autoTrackExposure: !1 }),
        E = !a.tq || o;
    if (n || r || !i || !f || !E || (d.Z.shouldFetchOffer() && !(0, _.I5)(t) && (await (0, p.T)('BogoPromotionUtils')), d.Z.hasFetchedOffer() && (d.Z.hasAnyUnexpiredOffer() || d.Z.hasAnyUnexpiredDiscountOffer()))) return !1;
    !u.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null == (e = c.default.getCurrentUser()) ? void 0 : e.hasPurchasedFlag(T.in.PREMIUM_TIER_2)) && (await (0, s.ou)()), u.ZP.hasFetchedSubscriptions() || (await (0, s.jg)());
    let b = u.ZP.getMostRecentPremiumTypeSubscription();
    return !N({
        experimentEnabled: i,
        premiumSubscription: u.ZP.getPremiumTypeSubscription(),
        mostRecentSubscription: b
    });
}
async function P() {
    if (!(await R())) return;
    let e = I.Z.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, O.L9)());
}
