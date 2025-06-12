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
    _ = n(580130),
    f = n(74538),
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
    if (!t) return !1;
    if (null != r && r.status === S.O0b.ENDED) {
        let e = r.endedAt,
            t = r.hasPremiumAtLeast(T.p9.TIER_2);
        if (null != e && t && i()().subtract(A, 'days').isAfter(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(T.p9.TIER_2),
            t = c.default.getCurrentUser(),
            r = !!(null == n ? void 0 : n.hasActiveTrial) && f.ZP.isPremiumExactly(t, T.p9.TIER_0);
        if (e || r) return !1;
    }
    return !(a.tq && _.Z.isFractionalPremiumActive());
}
function C() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { paymentsBlocked: n } = l.Z.useExperiment({ location: '153d31_1' }, { autoTrackExposure: !1 }),
        { promotion: r } = (0, v.mq)(),
        { enabled: i } = (0, g.ZP)(),
        { enabled: s } = (0, m.ZP)(),
        { mostRecentSubscription: c, premiumSubscription: d } = (0, o.cj)([u.ZP], () => ({
            mostRecentSubscription: u.ZP.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: u.ZP.getPremiumTypeSubscription()
        })),
        _ = (0, b.N)(),
        f = (0, E.Ng)(),
        p = new Date(null != (e = null == r ? void 0 : r.endDate) ? e : 0).valueOf(),
        O = Date.now(),
        I = O > p;
    (0, y.Z)({ delay: I ? -1 : p - O });
    let T = !a.tq || s,
        S = N({
            experimentEnabled: i,
            premiumSubscription: d,
            mostRecentSubscription: c
        }),
        A = T && S && null == _ && null != r && !n && null == f,
        { enabled: C } = h.Z.useExperiment(
            { location: '153d31_2' },
            {
                autoTrackExposure: A,
                disable: !A
            }
        );
    return !I && (t ? C : A);
}
async function R() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = c.default.getCurrentUser(),
        r = !(null == n ? void 0 : n.isClaimed()),
        { paymentsBlocked: i } = l.Z.getCurrentConfig({ location: '153d31_3' }, { autoTrackExposure: !1 }),
        { enabled: o } = (0, g.aW)(),
        { enabled: _ } = (0, m.oW)(),
        { enabled: E } = h.Z.getCurrentConfig({ location: '153d31_4' }, { autoTrackExposure: !1 }),
        b = !a.tq || _;
    if (r || i || !o || (t && !E) || !b || (d.Z.shouldFetchOffer() && !(0, f.I5)(n) && (await (0, p.T)('BogoPromotionUtils')), d.Z.hasFetchedOffer() && (d.Z.hasAnyUnexpiredOffer() || d.Z.hasAnyUnexpiredDiscountOffer()))) return !1;
    !u.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null == (e = c.default.getCurrentUser()) ? void 0 : e.hasPurchasedFlag(T.in.PREMIUM_TIER_2)) && (await (0, s.ou)()), u.ZP.hasFetchedSubscriptions() || (await (0, s.jg)());
    let y = u.ZP.getMostRecentPremiumTypeSubscription();
    return N({
        experimentEnabled: o,
        premiumSubscription: u.ZP.getPremiumTypeSubscription(),
        mostRecentSubscription: y
    });
}
async function P() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (!(await R(e))) return;
    let t = I.Z.bogoPromotion;
    (null != t && new Date(t.endDate).valueOf() >= Date.now()) || (await (0, O.L9)());
}
