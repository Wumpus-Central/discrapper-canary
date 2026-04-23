n.d(t, { cg: () => D, hb: () => g, nq: () => h });
var i = n(989349),
    r = n.n(i),
    a = n(607399),
    s = n(702841),
    _ = n(323082),
    l = n(86379),
    o = n(287809),
    E = n(166403),
    d = n(354670),
    c = n(469778),
    u = n(723702),
    I = n(927578),
    A = n(478097),
    T = n(196042),
    S = n(422936),
    N = n(234419),
    O = n(586983),
    R = n(597758),
    f = n(35587),
    C = n(374200),
    p = n(788868),
    m = n(652215);
function L(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: i, previousPremiumSubscription: s } = e;
    if (!t) return !1;
    if (null != i && i.status === m.Dmq.ENDED) {
        let e = i.endedAt,
            t = i.hasPremiumAtLeast(p.PremiumTypes.TIER_2);
        if (null != e && t && r()().subtract(10, "days").isBefore(e)) return !1;
    }
    if (null != s && s.status === m.Dmq.ENDED) {
        let e = s.endedAt,
            t = s.hasPremiumAtLeast(p.PremiumTypes.TIER_2);
        if (null != e && t && r()().subtract(10, "days").isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(p.PremiumTypes.TIER_2),
            t = o.default.getCurrentUser(),
            i = !!n?.hasActiveTrial && I.Ay.isPremiumExactly(t, p.PremiumTypes.TIER_0),
            r = (0, u.isAndroid)() && n.paymentGateway !== m.kM_.GOOGLE;
        if (e || i || r) return !1;
    }
    return !(a.Fr && c.A.isFractionalPremiumActive());
}
function D() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (0, l.dw)(),
        { promotion: n } = (0, f.Eu)(),
        i = (0, T.si)("bogo eligibility hook"),
        {
            mostRecentSubscription: r,
            premiumSubscription: _,
            previousPremiumSubscription: o,
        } = (0, s.cf)([E.A], () => ({
            mostRecentSubscription: E.A.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: E.A.getPremiumTypeSubscription(),
            previousPremiumSubscription: E.A.getPreviousPremiumTypeSubscription(),
        })),
        d = (0, N.V)(),
        c = (0, S.O)(),
        I = new Date(n?.endDate ?? 0).valueOf(),
        R = Date.now(),
        C = R > I;
    (0, O.A)({ delay: C ? -1 : I - R });
    let p = !a.Fr || (0, u.isAndroid)(),
        m = L({
            experimentEnabled: i,
            premiumSubscription: _,
            mostRecentSubscription: r,
            previousPremiumSubscription: o,
        }),
        D = p && m && null == d && null != n && !t && null == c,
        h = (0, A.GU)("bogo marketing eligibility hook");
    return !C && (e ? h : D);
}
async function h() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = o.default.getCurrentUser(),
        n = !t?.isClaimed(),
        i = (0, l.cx)(),
        r = (0, T.RK)("bogo eligibility async check"),
        s = (0, A.BI)("bogo marketing eligibility async check"),
        c = !a.Fr || (0, u.isAndroid)();
    if (
        n ||
        i ||
        !r ||
        (e && !s) ||
        !c ||
        (d.A.hasFetchedOffer() && (d.A.hasAnyUnexpiredOffer() || d.A.hasAnyUnexpiredDiscountOffer()))
    )
        return !1;
    !E.A.hasFetchedMostRecentPremiumTypeSubscription() &&
        o.default.getCurrentUser()?.hasPurchasedFlag(p.lA.PREMIUM_TIER_2) &&
        (await (0, _.I8)()),
        E.A.hasFetchedSubscriptions() || (await (0, _.hP)());
    let I = E.A.getMostRecentPremiumTypeSubscription();
    return L({
        experimentEnabled: r,
        premiumSubscription: E.A.getPremiumTypeSubscription(),
        mostRecentSubscription: I,
        previousPremiumSubscription: E.A.getPreviousPremiumTypeSubscription(),
    });
}
async function g() {
    if (!(await h(!1))) return;
    let e = C.A.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, R.hS)());
}
