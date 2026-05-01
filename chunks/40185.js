n.d(t, { cg: () => g, hb: () => D, nq: () => L });
var i = n(989349),
    a = n.n(i),
    r = n(607399),
    s = n(702841),
    l = n(323082),
    o = n(86379),
    d = n(287809),
    c = n(166403),
    _ = n(354670),
    E = n(469778),
    u = n(723702),
    A = n(927578),
    I = n(478097),
    T = n(196042),
    h = n(422936),
    S = n(234419),
    N = n(586983),
    f = n(597758),
    p = n(35587),
    m = n(374200),
    O = n(788868),
    C = n(652215);
function R(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: i, previousPremiumSubscription: s } = e;
    if (!t) return !1;
    if (null != i && i.status === C.Dmq.ENDED) {
        let e = i.endedAt,
            t = i.hasPremiumAtLeast(O.PremiumTypes.TIER_2);
        if (null != e && t && a()().subtract(10, "days").isBefore(e)) return !1;
    }
    if (null != s && s.status === C.Dmq.ENDED) {
        let e = s.endedAt,
            t = s.hasPremiumAtLeast(O.PremiumTypes.TIER_2);
        if (null != e && t && a()().subtract(10, "days").isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(O.PremiumTypes.TIER_2),
            t = d.default.getCurrentUser(),
            i = !!n?.hasActiveTrial && A.Ay.isPremiumExactly(t, O.PremiumTypes.TIER_0),
            a = (0, u.isAndroid)() && n.paymentGateway !== C.kM_.GOOGLE;
        if (e || i || a) return !1;
    }
    return !(r.Fr && E.A.isFractionalPremiumActive());
}
function g() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (0, o.dw)(),
        { promotion: n } = (0, p.Eu)(),
        i = (0, T.si)("bogo eligibility hook"),
        {
            mostRecentSubscription: a,
            premiumSubscription: l,
            previousPremiumSubscription: d,
        } = (0, s.cf)([c.A], () => ({
            mostRecentSubscription: c.A.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: c.A.getPremiumTypeSubscription(),
            previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
        })),
        _ = (0, S.V)(),
        E = (0, h.O)(),
        A = new Date(n?.endDate ?? 0).valueOf(),
        f = Date.now(),
        m = f > A;
    (0, N.A)({ delay: m ? -1 : A - f });
    let O = !r.Fr || (0, u.isAndroid)(),
        C = R({
            experimentEnabled: i,
            premiumSubscription: l,
            mostRecentSubscription: a,
            previousPremiumSubscription: d,
        }),
        g = O && C && null == _ && null != n && !t && null == E,
        L = (0, I.GU)("bogo marketing eligibility hook");
    return !m && (e ? L : g);
}
async function L() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = d.default.getCurrentUser(),
        n = !t?.isClaimed(),
        i = (0, o.cx)(),
        a = (0, T.RK)("bogo eligibility async check"),
        s = (0, I.BI)("bogo marketing eligibility async check"),
        E = !r.Fr || (0, u.isAndroid)();
    if (
        n ||
        i ||
        !a ||
        (e && !s) ||
        !E ||
        (_.A.hasFetchedOffer() && (_.A.hasAnyUnexpiredOffer() || _.A.hasAnyUnexpiredDiscountOffer()))
    )
        return !1;
    !c.A.hasFetchedMostRecentPremiumTypeSubscription() &&
        d.default.getCurrentUser()?.hasPurchasedFlag(O.lA.PREMIUM_TIER_2) &&
        (await (0, l.I8)()),
        c.A.hasFetchedSubscriptions() || (await (0, l.hP)());
    let A = c.A.getMostRecentPremiumTypeSubscription();
    return R({
        experimentEnabled: a,
        premiumSubscription: c.A.getPremiumTypeSubscription(),
        mostRecentSubscription: A,
        previousPremiumSubscription: c.A.getPreviousPremiumTypeSubscription(),
    });
}
async function D() {
    if (!(await L(!1))) return;
    let e = m.A.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, f.hS)());
}
