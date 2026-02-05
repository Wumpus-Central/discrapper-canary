"use strict";
n.d(t, { cg: () => R, hb: () => D, nq: () => O });
var r = n(989349),
    i = n.n(r),
    a = n(607399),
    s = n(417597),
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
    g = n(196042),
    E = n(422936),
    A = n(234419),
    I = n(586983),
    T = n(597758),
    y = n(35587),
    S = n(412260),
    v = n(788868),
    C = n(652215);
let b = 10;
function N(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: r, previousPremiumSubscription: s } = e;
    if (!t) return !1;
    if (null != r && r.status === C.Dmq.ENDED) {
        let e = r.endedAt,
            t = r.hasPremiumAtLeast(v.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(b, "days").isBefore(e)) return !1;
    }
    if (null != s && s.status === C.Dmq.ENDED) {
        let e = s.endedAt,
            t = s.hasPremiumAtLeast(v.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(b, "days").isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(v.PremiumTypes.TIER_2),
            t = u.default.getCurrentUser(),
            r = !!n?.hasActiveTrial && p.Ay.isPremiumExactly(t, v.PremiumTypes.TIER_0),
            i = (0, f.isAndroid)() && n.paymentGateway !== C.kM_.GOOGLE;
        if (e || r || i) return !1;
    }
    return !(a.Fr && _.A.isFractionalPremiumActive());
}
function R() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { paymentsBlocked: t } = l.A.useExperiment({ location: "153d31_1" }, { autoTrackExposure: !1 }),
        { promotion: n } = (0, y.Eu)(),
        { enabled: r } = (0, g.Ay)(),
        { enabled: i } = (0, m.Ay)(),
        {
            mostRecentSubscription: o,
            premiumSubscription: u,
            previousPremiumSubscription: d,
        } = (0, s.cf)([c.A], () => ({
            mostRecentSubscription: c.A.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: c.A.getPremiumTypeSubscription(),
            previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
        })),
        _ = (0, A.V)(),
        p = (0, E.O)(),
        T = new Date(n?.endDate ?? 0).valueOf(),
        S = Date.now(),
        v = S > T;
    (0, I.A)({ delay: v ? -1 : T - S });
    let C = !a.Fr || ((0, f.isAndroid)() && i),
        b = N({
            experimentEnabled: r,
            premiumSubscription: u,
            mostRecentSubscription: o,
            previousPremiumSubscription: d,
        }),
        R = C && b && null == _ && null != n && !t && null == p,
        { enabled: O } = h.A.useExperiment({ location: "153d31_2" }, { autoTrackExposure: R, disable: !R });
    return !v && (e ? O : R);
}
async function O() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = u.default.getCurrentUser(),
        n = !t?.isClaimed(),
        { paymentsBlocked: r } = l.A.getCurrentConfig({ location: "153d31_3" }, { autoTrackExposure: !1 }),
        { enabled: i } = (0, g.fy)(),
        { enabled: s } = (0, m.LB)(),
        { enabled: _ } = h.A.getCurrentConfig({ location: "153d31_4" }, { autoTrackExposure: !1 }),
        f = !a.Fr || s;
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
    return N({
        experimentEnabled: i,
        premiumSubscription: c.A.getPremiumTypeSubscription(),
        mostRecentSubscription: p,
        previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
    });
}
async function D() {
    if (!(await O(!1))) return;
    let e = S.A.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, T.hS)());
}
