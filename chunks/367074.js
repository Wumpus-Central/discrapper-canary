n.d(t, {
    Qw: () => P,
    Vi: () => N,
    l2: () => R,
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
    p = n(358085),
    _ = n(74538),
    m = n(617799),
    h = n(84053),
    g = n(61196),
    E = n(622909),
    b = n(639119),
    y = n(921022),
    O = n(748770),
    v = n(725727),
    S = n(1844),
    I = n(474936),
    T = n(981631);
let C = 10;
function A(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: r, previousPremiumSubscription: o } = e;
    if (!t) return !1;
    if (null != r && r.status === T.O0b.ENDED) {
        let e = r.endedAt,
            t = r.hasPremiumAtLeast(I.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(C, "days").isBefore(e)) return !1;
    }
    if (null != o && o.status === T.O0b.ENDED) {
        let e = o.endedAt,
            t = o.hasPremiumAtLeast(I.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(C, "days").isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(I.PremiumTypes.TIER_2),
            t = c.default.getCurrentUser(),
            r = !!(null == n ? void 0 : n.hasActiveTrial) && _.ZP.isPremiumExactly(t, I.PremiumTypes.TIER_0),
            i = (0, p.isAndroid)() && n.paymentGateway !== T.gg$.GOOGLE;
        if (e || r || i) return !1;
    }
    return !(a.tq && f.Z.isFractionalPremiumActive());
}
function N() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { paymentsBlocked: n } = l.Z.useExperiment({ location: "153d31_1" }, { autoTrackExposure: !1 }),
        { promotion: r } = (0, v.mq)(),
        { enabled: i } = (0, g.ZP)(),
        { enabled: s } = (0, h.ZP)(),
        {
            mostRecentSubscription: c,
            premiumSubscription: d,
            previousPremiumSubscription: f,
        } = (0, o.cj)([u.Z], () => ({
            mostRecentSubscription: u.Z.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: u.Z.getPremiumTypeSubscription(),
            previousPremiumSubscription: u.Z.getPreviousPremiumTypeSubscription(),
        })),
        _ = (0, b.N)(),
        O = (0, E.N)(),
        S = new Date(null != (e = null == r ? void 0 : r.endDate) ? e : 0).valueOf(),
        I = Date.now(),
        T = I > S;
    (0, y.Z)({ delay: T ? -1 : S - I });
    let C = !a.tq || ((0, p.isAndroid)() && s),
        N = A({
            experimentEnabled: i,
            premiumSubscription: d,
            mostRecentSubscription: c,
            previousPremiumSubscription: f,
        }),
        P = C && N && null == _ && null != r && !n && null == O,
        { enabled: R } = m.Z.useExperiment(
            { location: "153d31_2" },
            {
                autoTrackExposure: P,
                disable: !P,
            },
        );
    return !T && (t ? R : P);
}
async function P() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = c.default.getCurrentUser(),
        r = !(null == n ? void 0 : n.isClaimed()),
        { paymentsBlocked: i } = l.Z.getCurrentConfig({ location: "153d31_3" }, { autoTrackExposure: !1 }),
        { enabled: o } = (0, g.aW)(),
        { enabled: f } = (0, h.oW)(),
        { enabled: p } = m.Z.getCurrentConfig({ location: "153d31_4" }, { autoTrackExposure: !1 }),
        _ = !a.tq || f;
    if (
        r ||
        i ||
        !o ||
        (t && !p) ||
        !_ ||
        (d.Z.hasFetchedOffer() && (d.Z.hasAnyUnexpiredOffer() || d.Z.hasAnyUnexpiredDiscountOffer()))
    )
        return !1;
    !u.Z.hasFetchedMostRecentPremiumTypeSubscription() &&
        (null == (e = c.default.getCurrentUser()) ? void 0 : e.hasPurchasedFlag(I.in.PREMIUM_TIER_2)) &&
        (await (0, s.ou)()),
        u.Z.hasFetchedSubscriptions() || (await (0, s.jg)());
    let E = u.Z.getMostRecentPremiumTypeSubscription();
    return A({
        experimentEnabled: o,
        premiumSubscription: u.Z.getPremiumTypeSubscription(),
        mostRecentSubscription: E,
        previousPremiumSubscription: u.Z.getPreviousPremiumTypeSubscription(),
    });
}
async function R() {
    if (!(await P(!1))) return;
    let e = S.Z.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, O.L9)());
}
