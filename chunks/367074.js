n.d(t, {
    Qw: () => R,
    Vi: () => N,
    l2: () => P,
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
    _ = n(358085),
    p = n(74538),
    h = n(617799),
    m = n(84053),
    g = n(61196),
    E = n(622909),
    b = n(639119),
    y = n(921022),
    O = n(748770),
    v = n(725727),
    I = n(1844),
    T = n(474936),
    S = n(981631);
let A = 10;
function C(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: r, previousPremiumSubscription: o } = e;
    if (!t) return !1;
    if (null != r && r.status === S.O0b.ENDED) {
        let e = r.endedAt,
            t = r.hasPremiumAtLeast(T.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(A, "days").isBefore(e)) return !1;
    }
    if (null != o && o.status === S.O0b.ENDED) {
        let e = o.endedAt,
            t = o.hasPremiumAtLeast(T.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(A, "days").isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(T.PremiumTypes.TIER_2),
            t = c.default.getCurrentUser(),
            r = !!(null == n ? void 0 : n.hasActiveTrial) && p.ZP.isPremiumExactly(t, T.PremiumTypes.TIER_0),
            i = (0, _.isAndroid)() && n.paymentGateway !== S.gg$.GOOGLE;
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
        { enabled: s } = (0, m.ZP)(),
        {
            mostRecentSubscription: c,
            premiumSubscription: d,
            previousPremiumSubscription: f,
        } = (0, o.cj)([u.Z], () => ({
            mostRecentSubscription: u.Z.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: u.Z.getPremiumTypeSubscription(),
            previousPremiumSubscription: u.Z.getPreviousPremiumTypeSubscription(),
        })),
        p = (0, b.N)(),
        O = (0, E.N)(),
        I = new Date(null != (e = null == r ? void 0 : r.endDate) ? e : 0).valueOf(),
        T = Date.now(),
        S = T > I;
    (0, y.Z)({ delay: S ? -1 : I - T });
    let A = !a.tq || ((0, _.isAndroid)() && s),
        N = C({
            experimentEnabled: i,
            premiumSubscription: d,
            mostRecentSubscription: c,
            previousPremiumSubscription: f,
        }),
        R = A && N && null == p && null != r && !n && null == O,
        { enabled: P } = h.Z.useExperiment(
            { location: "153d31_2" },
            {
                autoTrackExposure: R,
                disable: !R,
            },
        );
    return !S && (t ? P : R);
}
async function R() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = c.default.getCurrentUser(),
        r = !(null == n ? void 0 : n.isClaimed()),
        { paymentsBlocked: i } = l.Z.getCurrentConfig({ location: "153d31_3" }, { autoTrackExposure: !1 }),
        { enabled: o } = (0, g.aW)(),
        { enabled: f } = (0, m.oW)(),
        { enabled: _ } = h.Z.getCurrentConfig({ location: "153d31_4" }, { autoTrackExposure: !1 }),
        p = !a.tq || f;
    if (
        r ||
        i ||
        !o ||
        (t && !_) ||
        !p ||
        (d.Z.hasFetchedOffer() && (d.Z.hasAnyUnexpiredOffer() || d.Z.hasAnyUnexpiredDiscountOffer()))
    )
        return !1;
    !u.Z.hasFetchedMostRecentPremiumTypeSubscription() &&
        (null == (e = c.default.getCurrentUser()) ? void 0 : e.hasPurchasedFlag(T.in.PREMIUM_TIER_2)) &&
        (await (0, s.ou)()),
        u.Z.hasFetchedSubscriptions() || (await (0, s.jg)());
    let E = u.Z.getMostRecentPremiumTypeSubscription();
    return C({
        experimentEnabled: o,
        premiumSubscription: u.Z.getPremiumTypeSubscription(),
        mostRecentSubscription: E,
        previousPremiumSubscription: u.Z.getPreviousPremiumTypeSubscription(),
    });
}
async function P() {
    if (!(await R(!1))) return;
    let e = I.Z.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, O.L9)());
}
