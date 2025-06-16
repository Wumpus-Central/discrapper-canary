n.d(t, {
    Qw: () => x,
    Vi: () => L,
    l2: () => k
});
var r = n(913527),
    i = n.n(r),
    a = n(873546),
    o = n(399606),
    s = n(355467),
    l = n(211242),
    c = n(314897),
    u = n(594174),
    d = n(78839),
    f = n(431),
    _ = n(580130),
    p = n(626135),
    h = n(74538),
    m = n(538981),
    g = n(937579),
    E = n(617799),
    b = n(258555),
    y = n(84053),
    O = n(61196),
    v = n(104494),
    I = n(639119),
    T = n(921022),
    S = n(748770),
    A = n(725727),
    N = n(1844),
    C = n(474936),
    R = n(981631);
let P = 10;
function w(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: r } = e;
    if (!t) return !1;
    if (null != r && r.status === R.O0b.ENDED) {
        let e = r.endedAt,
            t = r.hasPremiumAtLeast(C.p9.TIER_2);
        if (null != e && t && i()().subtract(P, 'days').isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(C.p9.TIER_2),
            t = u.default.getCurrentUser(),
            r = !!(null == n ? void 0 : n.hasActiveTrial) && h.ZP.isPremiumExactly(t, C.p9.TIER_0);
        if (e || r) return !1;
    }
    return !(a.tq && _.Z.isFractionalPremiumActive());
}
let D = (e) => {
    let { result: t, origin: n } = e,
        r = u.default.getCurrentUser(),
        i = c.default.getSessionId();
    p.default.track(R.rMx.BOGO_ELIGIBILITY_RESULT, {
        user_id: null == r ? void 0 : r.id,
        result: t,
        session_id: i,
        result_origin: n
    });
};
function L() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { paymentsBlocked: n } = l.Z.useExperiment({ location: '153d31_1' }, { autoTrackExposure: !1 }),
        { promotion: r } = (0, A.mq)(),
        { enabled: i } = (0, O.ZP)(),
        { enabled: s } = (0, y.ZP)(),
        { mostRecentSubscription: c, premiumSubscription: u } = (0, o.cj)([d.ZP], () => ({
            mostRecentSubscription: d.ZP.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: d.ZP.getPremiumTypeSubscription()
        })),
        f = (0, I.N)(),
        _ = (0, v.Ng)(),
        p = new Date(null != (e = null == r ? void 0 : r.endDate) ? e : 0).valueOf(),
        h = Date.now(),
        g = h > p;
    (0, T.Z)({ delay: g ? -1 : p - h });
    let S = !a.tq || s,
        N = w({
            experimentEnabled: i,
            premiumSubscription: u,
            mostRecentSubscription: c
        }),
        C = S && N && null == f && null != r && !n && null == _,
        { enabled: R } = E.Z.useExperiment(
            { location: '153d31_2' },
            {
                autoTrackExposure: C,
                disable: !C
            }
        ),
        { getServerResult: P } = b.Z.useExperiment({ location: 'useIsEligibleForBogoPromotion' });
    return (
        !1 === g &&
            !1 === R &&
            !0 === P &&
            (0, m.f)({ campaignId: 'BOGO' }).then((e) => {
                void 0 !== e &&
                    D({
                        result: e,
                        origin: 'server'
                    });
            }),
        !g &&
            (D({
                result: C,
                origin: 'client'
            }),
            t ? R : C)
    );
}
async function x() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = u.default.getCurrentUser(),
        r = !(null == n ? void 0 : n.isClaimed()),
        { paymentsBlocked: i } = l.Z.getCurrentConfig({ location: '153d31_3' }, { autoTrackExposure: !1 }),
        { enabled: o } = (0, O.aW)(),
        { enabled: c } = (0, y.oW)(),
        { enabled: _ } = E.Z.getCurrentConfig({ location: '153d31_4' }, { autoTrackExposure: !1 }),
        p = !a.tq || c;
    if (r || i || !o || (t && !_) || !p || (f.Z.shouldFetchOffer() && !(0, h.I5)(n) && (await (0, g.T)('BogoPromotionUtils')), f.Z.hasFetchedOffer() && (f.Z.hasAnyUnexpiredOffer() || f.Z.hasAnyUnexpiredDiscountOffer()))) return !1;
    !d.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null == (e = u.default.getCurrentUser()) ? void 0 : e.hasPurchasedFlag(C.in.PREMIUM_TIER_2)) && (await (0, s.ou)()), d.ZP.hasFetchedSubscriptions() || (await (0, s.jg)());
    let m = d.ZP.getMostRecentPremiumTypeSubscription();
    return w({
        experimentEnabled: o,
        premiumSubscription: d.ZP.getPremiumTypeSubscription(),
        mostRecentSubscription: m
    });
}
async function k() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (!(await x(e))) return;
    let t = N.Z.bogoPromotion;
    (null != t && new Date(t.endDate).valueOf() >= Date.now()) || (await (0, S.L9)());
}
