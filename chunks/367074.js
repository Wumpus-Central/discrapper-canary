n.d(t, {
    Qw: () => L,
    Vi: () => D,
    l2: () => x
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
    g = n(617799),
    E = n(258555),
    b = n(84053),
    y = n(61196),
    O = n(104494),
    v = n(639119),
    I = n(921022),
    T = n(748770),
    S = n(725727),
    A = n(1844),
    N = n(474936),
    C = n(981631);
let R = 10;
function P(e) {
    let { experimentEnabled: t, premiumSubscription: n, mostRecentSubscription: r, previousPremiumSubscription: o } = e;
    if (!t) return !1;
    if (null != r && r.status === C.O0b.ENDED) {
        let e = r.endedAt,
            t = r.hasPremiumAtLeast(N.p9.TIER_2);
        if (null != e && t && i()().subtract(R, 'days').isBefore(e)) return !1;
    }
    if (null != o && o.status === C.O0b.ENDED) {
        let e = o.endedAt,
            t = o.hasPremiumAtLeast(N.p9.TIER_2);
        if (null != e && t && i()().subtract(R, 'days').isBefore(e)) return !1;
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(N.p9.TIER_2),
            t = u.default.getCurrentUser(),
            r = !!(null == n ? void 0 : n.hasActiveTrial) && h.ZP.isPremiumExactly(t, N.p9.TIER_0);
        if (e || r) return !1;
    }
    return !(a.tq && _.Z.isFractionalPremiumActive());
}
let w = (e) => {
    let { result: t, origin: n } = e,
        r = u.default.getCurrentUser(),
        i = c.default.getSessionId();
    p.default.track(C.rMx.BOGO_ELIGIBILITY_RESULT, {
        user_id: null == r ? void 0 : r.id,
        result: t,
        session_id: i,
        result_origin: n
    });
};
function D() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { paymentsBlocked: n } = l.Z.useExperiment({ location: '153d31_1' }, { autoTrackExposure: !1 }),
        { promotion: r } = (0, S.mq)(),
        { enabled: i } = (0, y.ZP)(),
        { enabled: s } = (0, b.ZP)(),
        {
            mostRecentSubscription: c,
            premiumSubscription: u,
            previousPremiumSubscription: f
        } = (0, o.cj)([d.Z], () => ({
            mostRecentSubscription: d.Z.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: d.Z.getPremiumTypeSubscription(),
            previousPremiumSubscription: d.Z.getPreviousPremiumTypeSubscription()
        })),
        _ = (0, v.N)(),
        p = (0, O.Ng)(),
        h = new Date(null != (e = null == r ? void 0 : r.endDate) ? e : 0).valueOf(),
        T = Date.now(),
        A = T > h;
    (0, I.Z)({ delay: A ? -1 : h - T });
    let N = !a.tq || s,
        C = P({
            experimentEnabled: i,
            premiumSubscription: u,
            mostRecentSubscription: c,
            previousPremiumSubscription: f
        }),
        R = N && C && null == _ && null != r && !n && null == p,
        { enabled: D } = g.Z.useExperiment(
            { location: '153d31_2' },
            {
                autoTrackExposure: R,
                disable: !R
            }
        ),
        { getServerResult: L } = E.Z.useExperiment({ location: 'useIsEligibleForBogoPromotion' });
    return (
        !1 === A &&
            !1 === D &&
            !0 === L &&
            (0, m.f)({ campaignId: 'BOGO' }).then((e) => {
                void 0 !== e &&
                    w({
                        result: e,
                        origin: 'server'
                    });
            }),
        !A &&
            (w({
                result: R,
                origin: 'client'
            }),
            t ? D : R)
    );
}
async function L() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = u.default.getCurrentUser(),
        r = !(null == n ? void 0 : n.isClaimed()),
        { paymentsBlocked: i } = l.Z.getCurrentConfig({ location: '153d31_3' }, { autoTrackExposure: !1 }),
        { enabled: o } = (0, y.aW)(),
        { enabled: c } = (0, b.oW)(),
        { enabled: _ } = g.Z.getCurrentConfig({ location: '153d31_4' }, { autoTrackExposure: !1 }),
        p = !a.tq || c;
    if (r || i || !o || (t && !_) || !p || (f.Z.hasFetchedOffer() && (f.Z.hasAnyUnexpiredOffer() || f.Z.hasAnyUnexpiredDiscountOffer()))) return !1;
    (!d.Z.hasFetchedMostRecentPremiumTypeSubscription() && (null == (e = u.default.getCurrentUser()) ? void 0 : e.hasPurchasedFlag(N.in.PREMIUM_TIER_2)) && (await (0, s.ou)()), d.Z.hasFetchedSubscriptions() || (await (0, s.jg)()));
    let h = d.Z.getMostRecentPremiumTypeSubscription();
    return P({
        experimentEnabled: o,
        premiumSubscription: d.Z.getPremiumTypeSubscription(),
        mostRecentSubscription: h,
        previousPremiumSubscription: d.Z.getPreviousPremiumTypeSubscription()
    });
}
async function x() {
    if (!(await L(!1))) return;
    let e = A.Z.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, T.L9)());
}
