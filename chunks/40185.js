"use strict";
n.d(t, { cg: () => O, hb: () => D, nq: () => b });
var r = n(989349),
    i = n.n(r),
    s = n(607399),
    a = n(417597),
    o = n(384904),
    l = n(86379),
    u = n(287809),
    c = n(166403),
    d = n(816733),
    _ = n(469778),
    f = n(723702),
    p = n(927578),
    h = n(478097),
    m = n(238e3),
    E = n(196042),
    g = n(422936),
    A = n(234419),
    I = n(586983),
    T = n(597758),
    S = n(35587),
    y = n(412260),
    v = n(788868),
    N = n(652215);
let C = 10;
function R(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: r, previousPremiumSubscription: a } = e;
    if (!t) return !1;
    if (null != r && r.status === N.Dmq.ENDED) {
        let e = r.endedAt,
            t = r.hasPremiumAtLeast(v.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(C, "days").isBefore(e)) return !1;
    }
    if (null != a && a.status === N.Dmq.ENDED) {
        let e = a.endedAt,
            t = a.hasPremiumAtLeast(v.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(C, "days").isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(v.PremiumTypes.TIER_2),
            t = u.default.getCurrentUser(),
            r = !!n?.hasActiveTrial && p.Ay.isPremiumExactly(t, v.PremiumTypes.TIER_0),
            i = (0, f.isAndroid)() && n.paymentGateway !== N.kM_.GOOGLE;
        if (e || r || i) return !1;
    }
    return !(s.Fr && _.A.isFractionalPremiumActive());
}
function O() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { paymentsBlocked: t } = l.A.useExperiment({ location: "153d31_1" }, { autoTrackExposure: !1 }),
        { promotion: n } = (0, S.Eu)(),
        r = (0, E.si)("bogo eligibility hook"),
        { enabled: i } = (0, m.Ay)(),
        {
            mostRecentSubscription: o,
            premiumSubscription: u,
            previousPremiumSubscription: d,
        } = (0, a.cf)([c.A], () => ({
            mostRecentSubscription: c.A.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: c.A.getPremiumTypeSubscription(),
            previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
        })),
        _ = (0, A.V)(),
        p = (0, g.O)(),
        T = new Date(n?.endDate ?? 0).valueOf(),
        y = Date.now(),
        v = y > T;
    (0, I.A)({ delay: v ? -1 : T - y });
    let N = !s.Fr || ((0, f.isAndroid)() && i),
        C = R({
            experimentEnabled: r,
            premiumSubscription: u,
            mostRecentSubscription: o,
            previousPremiumSubscription: d,
        }),
        O = N && C && null == _ && null != n && !t && null == p,
        b = (0, h.GU)("bogo marketing eligibility hook");
    return !v && (e ? b : O);
}
async function b() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = u.default.getCurrentUser(),
        n = !t?.isClaimed(),
        { paymentsBlocked: r } = l.A.getCurrentConfig({ location: "153d31_3" }, { autoTrackExposure: !1 }),
        i = (0, E.RK)("bogo eligibility async check"),
        { enabled: a } = (0, m.LB)(),
        _ = (0, h.BI)("bogo marketing eligibility async check"),
        f = !s.Fr || a;
    if (
        n ||
        r ||
        !i ||
        (e && !_) ||
        !f ||
        (d.A.hasFetchedOffer() && (d.A.hasAnyUnexpiredOffer() || d.A.hasAnyUnexpiredDiscountOffer()))
    )
        return !1;
    !c.A.hasFetchedMostRecentPremiumTypeSubscription() &&
        u.default.getCurrentUser()?.hasPurchasedFlag(v.lA.PREMIUM_TIER_2) &&
        (await (0, o.I8)()),
        c.A.hasFetchedSubscriptions() || (await (0, o.hP)());
    let p = c.A.getMostRecentPremiumTypeSubscription();
    return R({
        experimentEnabled: i,
        premiumSubscription: c.A.getPremiumTypeSubscription(),
        mostRecentSubscription: p,
        previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
    });
}
async function D() {
    if (!(await b(!1))) return;
    let e = y.A.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, T.hS)());
}
