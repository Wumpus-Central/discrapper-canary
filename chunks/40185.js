"use strict";
n.d(t, { cg: () => C, hb: () => R, nq: () => O });
var r = n(989349),
    i = n.n(r),
    s = n(607399),
    a = n(417597),
    o = n(323082),
    l = n(86379),
    u = n(287809),
    c = n(166403),
    d = n(816733),
    _ = n(469778),
    f = n(723702),
    p = n(927578),
    h = n(478097),
    E = n(196042),
    m = n(422936),
    g = n(234419),
    A = n(586983),
    I = n(597758),
    T = n(35587),
    S = n(412260),
    y = n(788868),
    N = n(652215);
function v(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: r, previousPremiumSubscription: a } = e;
    if (!t) return !1;
    if (null != r && r.status === N.Dmq.ENDED) {
        let e = r.endedAt,
            t = r.hasPremiumAtLeast(y.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(10, "days").isBefore(e)) return !1;
    }
    if (null != a && a.status === N.Dmq.ENDED) {
        let e = a.endedAt,
            t = a.hasPremiumAtLeast(y.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(10, "days").isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(y.PremiumTypes.TIER_2),
            t = u.default.getCurrentUser(),
            r = !!n?.hasActiveTrial && p.Ay.isPremiumExactly(t, y.PremiumTypes.TIER_0),
            i = (0, f.isAndroid)() && n.paymentGateway !== N.kM_.GOOGLE;
        if (e || r || i) return !1;
    }
    return !(s.Fr && _.A.isFractionalPremiumActive());
}
function C() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (0, l.dw)(),
        { promotion: n } = (0, T.Eu)(),
        r = (0, E.si)("bogo eligibility hook"),
        {
            mostRecentSubscription: i,
            premiumSubscription: o,
            previousPremiumSubscription: u,
        } = (0, a.cf)([c.A], () => ({
            mostRecentSubscription: c.A.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: c.A.getPremiumTypeSubscription(),
            previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
        })),
        d = (0, g.V)(),
        _ = (0, m.O)(),
        p = new Date(n?.endDate ?? 0).valueOf(),
        I = Date.now(),
        S = I > p;
    (0, A.A)({ delay: S ? -1 : p - I });
    let y = !s.Fr || (0, f.isAndroid)(),
        N = v({
            experimentEnabled: r,
            premiumSubscription: o,
            mostRecentSubscription: i,
            previousPremiumSubscription: u,
        }),
        C = y && N && null == d && null != n && !t && null == _,
        O = (0, h.GU)("bogo marketing eligibility hook");
    return !S && (e ? O : C);
}
async function O() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = u.default.getCurrentUser(),
        n = !t?.isClaimed(),
        r = (0, l.cx)(),
        i = (0, E.RK)("bogo eligibility async check"),
        a = (0, h.BI)("bogo marketing eligibility async check"),
        _ = !s.Fr || (0, f.isAndroid)();
    if (
        n ||
        r ||
        !i ||
        (e && !a) ||
        !_ ||
        (d.A.hasFetchedOffer() && (d.A.hasAnyUnexpiredOffer() || d.A.hasAnyUnexpiredDiscountOffer()))
    )
        return !1;
    !c.A.hasFetchedMostRecentPremiumTypeSubscription() &&
        u.default.getCurrentUser()?.hasPurchasedFlag(y.lA.PREMIUM_TIER_2) &&
        (await (0, o.I8)()),
        c.A.hasFetchedSubscriptions() || (await (0, o.hP)());
    let p = c.A.getMostRecentPremiumTypeSubscription();
    return v({
        experimentEnabled: i,
        premiumSubscription: c.A.getPremiumTypeSubscription(),
        mostRecentSubscription: p,
        previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
    });
}
async function R() {
    if (!(await O(!1))) return;
    let e = S.A.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, I.hS)());
}
