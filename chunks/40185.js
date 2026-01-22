n.d(t, {
    cg: () => N,
    hb: () => w,
    nq: () => R,
});
var r = n(989349),
    i = n.n(r),
    a = n(607399),
    s = n(417597),
    o = n(384904),
    l = n(86379),
    c = n(287809),
    u = n(166403),
    d = n(816733),
    f = n(469778),
    p = n(723702),
    _ = n(927578),
    h = n(478097),
    m = n(238e3),
    g = n(196042),
    E = n(422936),
    b = n(234419),
    y = n(586983),
    O = n(597758),
    A = n(35587),
    v = n(412260),
    S = n(788868),
    I = n(652215);
let T = 10;

function C(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: r, previousPremiumSubscription: s } = e;
    if (!t) return !1;
    if (null != r && r.status === I.Dmq.ENDED) {
        let e = r.endedAt,
            t = r.hasPremiumAtLeast(S.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(T, "days").isBefore(e)) return !1;
    }
    if (null != s && s.status === I.Dmq.ENDED) {
        let e = s.endedAt,
            t = s.hasPremiumAtLeast(S.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(T, "days").isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(S.PremiumTypes.TIER_2),
            t = c.default.getCurrentUser(),
            r = !!(null == n ? void 0 : n.hasActiveTrial) && _.Ay.isPremiumExactly(t, S.PremiumTypes.TIER_0),
            i = (0, p.isAndroid)() && n.paymentGateway !== I.kM_.GOOGLE;
        if (e || r || i) return !1;
    }
    return !(a.Fr && f.A.isFractionalPremiumActive());
}

function N() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { paymentsBlocked: n } = l.A.useExperiment(
            {
                location: "153d31_1",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        { promotion: r } = (0, A.Eu)(),
        { enabled: i } = (0, g.Ay)(),
        { enabled: o } = (0, m.Ay)(),
        {
            mostRecentSubscription: c,
            premiumSubscription: d,
            previousPremiumSubscription: f,
        } = (0, s.cf)([u.A], () => ({
            mostRecentSubscription: u.A.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: u.A.getPremiumTypeSubscription(),
            previousPremiumSubscription: u.A.getPreviousPremiumTypeSubscription(),
        })),
        _ = (0, b.V)(),
        O = (0, E.O)(),
        v = new Date(null != (e = null == r ? void 0 : r.endDate) ? e : 0).valueOf(),
        S = Date.now(),
        I = S > v;
    (0, y.A)({
        delay: I ? -1 : v - S,
    });
    let T = !a.Fr || ((0, p.isAndroid)() && o),
        N = C({
            experimentEnabled: i,
            premiumSubscription: d,
            mostRecentSubscription: c,
            previousPremiumSubscription: f,
        }),
        R = T && N && null == _ && null != r && !n && null == O,
        { enabled: w } = h.A.useExperiment(
            {
                location: "153d31_2",
            },
            {
                autoTrackExposure: R,
                disable: !R,
            },
        );
    return !I && (t ? w : R);
}
async function R() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = c.default.getCurrentUser(),
        r = !(null == n ? void 0 : n.isClaimed()),
        { paymentsBlocked: i } = l.A.getCurrentConfig(
            {
                location: "153d31_3",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        { enabled: s } = (0, g.fy)(),
        { enabled: f } = (0, m.LB)(),
        { enabled: p } = h.A.getCurrentConfig(
            {
                location: "153d31_4",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        _ = !a.Fr || f;
    if (
        r ||
        i ||
        !s ||
        (t && !p) ||
        !_ ||
        (d.A.hasFetchedOffer() && (d.A.hasAnyUnexpiredOffer() || d.A.hasAnyUnexpiredDiscountOffer()))
    )
        return !1;
    !u.A.hasFetchedMostRecentPremiumTypeSubscription() &&
        (null == (e = c.default.getCurrentUser()) ? void 0 : e.hasPurchasedFlag(S.lA.PREMIUM_TIER_2)) &&
        (await (0, o.I8)()),
        u.A.hasFetchedSubscriptions() || (await (0, o.hP)());
    let E = u.A.getMostRecentPremiumTypeSubscription();
    return C({
        experimentEnabled: s,
        premiumSubscription: u.A.getPremiumTypeSubscription(),
        mostRecentSubscription: E,
        previousPremiumSubscription: u.A.getPreviousPremiumTypeSubscription(),
    });
}
async function w() {
    if (!(await R(!1))) return;
    let e = v.A.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, O.hS)());
}
