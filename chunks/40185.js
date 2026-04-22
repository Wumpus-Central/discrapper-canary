"use strict";
n.d(t, { cg: () => R, hb: () => C, nq: () => v });
var r = n(989349),
    i = n.n(r),
    s = n(607399),
    a = n(417597),
    o = n(323082),
    l = n(86379),
    u = n(287809),
    d = n(166403),
    c = n(816733),
    _ = n(469778),
    f = n(723702),
    E = n(927578),
    h = n(478097),
    p = n(196042),
    m = n(422936),
    g = n(234419),
    A = n(586983),
    I = n(597758),
    T = n(35587),
    S = n(412260),
    y = n(788868),
    N = n(652215);
function O(e) {
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
            r = !!n?.hasActiveTrial && E.Ay.isPremiumExactly(t, y.PremiumTypes.TIER_0),
            i = (0, f.isAndroid)() && n.paymentGateway !== N.kM_.GOOGLE;
        if (e || r || i) return !1;
    }
    return !(s.Fr && _.A.isFractionalPremiumActive());
}
function R() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (0, l.dw)(),
        { promotion: n } = (0, T.Eu)(),
        r = (0, p.si)("bogo eligibility hook"),
        {
            mostRecentSubscription: i,
            premiumSubscription: o,
            previousPremiumSubscription: u,
        } = (0, a.cf)([d.A], () => ({
            mostRecentSubscription: d.A.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: d.A.getPremiumTypeSubscription(),
            previousPremiumSubscription: d.A.getPreviousPremiumTypeSubscription(),
        })),
        c = (0, g.V)(),
        _ = (0, m.O)(),
        E = new Date(n?.endDate ?? 0).valueOf(),
        I = Date.now(),
        S = I > E;
    (0, A.A)({ delay: S ? -1 : E - I });
    let y = !s.Fr || (0, f.isAndroid)(),
        N = O({
            experimentEnabled: r,
            premiumSubscription: o,
            mostRecentSubscription: i,
            previousPremiumSubscription: u,
        }),
        R = y && N && null == c && null != n && !t && null == _,
        v = (0, h.GU)("bogo marketing eligibility hook");
    return !S && (e ? v : R);
}
async function v() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = u.default.getCurrentUser(),
        n = !t?.isClaimed(),
        r = (0, l.cx)(),
        i = (0, p.RK)("bogo eligibility async check"),
        a = (0, h.BI)("bogo marketing eligibility async check"),
        _ = !s.Fr || (0, f.isAndroid)();
    if (
        n ||
        r ||
        !i ||
        (e && !a) ||
        !_ ||
        (c.A.hasFetchedOffer() && (c.A.hasAnyUnexpiredOffer() || c.A.hasAnyUnexpiredDiscountOffer()))
    )
        return !1;
    !d.A.hasFetchedMostRecentPremiumTypeSubscription() &&
        u.default.getCurrentUser()?.hasPurchasedFlag(y.lA.PREMIUM_TIER_2) &&
        (await (0, o.I8)()),
        d.A.hasFetchedSubscriptions() || (await (0, o.hP)());
    let E = d.A.getMostRecentPremiumTypeSubscription();
    return O({
        experimentEnabled: i,
        premiumSubscription: d.A.getPremiumTypeSubscription(),
        mostRecentSubscription: E,
        previousPremiumSubscription: d.A.getPreviousPremiumTypeSubscription(),
    });
}
async function C() {
    if (!(await v(!1))) return;
    let e = S.A.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, I.hS)());
}
