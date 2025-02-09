n.d(t, {
    Vi: () => R,
    W1: () => x,
    k: () => L,
    l2: () => D
});
var i = n(913527),
    r = n.n(i),
    a = n(399606),
    s = n(355467),
    o = n(211242),
    l = n(706454),
    u = n(594174),
    c = n(78839),
    d = n(431),
    f = n(74538),
    _ = n(937579),
    p = n(436783),
    h = n(617799),
    m = n(61196),
    g = n(104494),
    E = n(639119),
    v = n(921022),
    y = n(748770),
    I = n(725727),
    T = n(1844),
    b = n(474936),
    S = n(981631),
    A = n(388032);
let N = 10;
function C(e) {
    var t, n, i;
    let { experimentEnabled: a, premiumSubscription: s, mostRecentSubscription: o } = e,
        l = !1,
        c = !1;
    if (null != o && o.status === S.O0b.ENDED) {
        let e = (null === (t = o.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? r()(o.metadata.ended_at) : null,
            i = null === (n = (0, f.Af)(o)) || void 0 === n ? void 0 : n.planId,
            a = null != i && f.ZP.getPremiumType(i) === b.p9.TIER_2;
        c = null != e && a && e.add(N, 'days').isAfter(r()());
    }
    if (null != s) {
        let e = null === (i = (0, f.Af)(s)) || void 0 === i ? void 0 : i.planId,
            t = null != e && f.ZP.getPremiumType(e) === b.p9.TIER_2,
            n = u.default.getCurrentUser(),
            r = (null == s ? void 0 : s.trialId) != null && f.ZP.isPremiumExactly(n, b.p9.TIER_0);
        l = t || r;
    }
    return !a || l || c;
}
function R() {
    var e;
    let { paymentsBlocked: t } = o.Z.useExperiment({ location: '153d31_1' }, { autoTrackExposure: !1 }),
        { promotion: n } = (0, I.mq)(),
        { enabled: i } = (0, m.ZP)(),
        { mostRecentSubscription: r, premiumSubscription: s } = (0, a.cj)([c.ZP], () => ({
            mostRecentSubscription: c.ZP.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: c.ZP.getPremiumTypeSubscription()
        })),
        l = (0, E.N)(),
        u = (0, g.Ng)(),
        d = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf(),
        f = Date.now(),
        _ = f > d,
        { enabled: y } = (0, p.Z)();
    (0, v.Z)({
        delay: _ ? -1 : d - f,
        disable: y
    });
    let T =
            !C({
                experimentEnabled: i,
                premiumSubscription: s,
                mostRecentSubscription: r
            }) &&
            null == l &&
            null != n &&
            !t &&
            null == u,
        { enabled: b } = h.Z.useExperiment(
            { location: '153d31_2' },
            {
                autoTrackExposure: T,
                disable: !T
            }
        );
    return !_ && b;
}
async function O() {
    var e;
    let t = u.default.getCurrentUser(),
        n = !(null == t ? void 0 : t.isClaimed()),
        { paymentsBlocked: i } = o.Z.getCurrentConfig({ location: '153d31_3' }, { autoTrackExposure: !1 }),
        { enabled: r } = (0, m.aW)(),
        { enabled: a } = h.Z.getCurrentConfig({ location: '153d31_4' }, { autoTrackExposure: !1 });
    if (n || i || !r || !a || (d.Z.shouldFetchOffer() && !(0, f.I5)(t) && (await (0, _.T)('BogoPromotionUtils')), d.Z.hasFetchedOffer() && (d.Z.hasAnyUnexpiredOffer() || d.Z.hasAnyUnexpiredDiscountOffer()))) return !1;
    !c.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(b.Si.TIER_2)) && (await (0, s.ou)()), c.ZP.hasFetchedSubscriptions() || (await (0, s.jg)());
    let l = c.ZP.getMostRecentPremiumTypeSubscription();
    return !C({
        experimentEnabled: r,
        premiumSubscription: c.ZP.getPremiumTypeSubscription(),
        mostRecentSubscription: l
    });
}
async function D() {
    if (!(await O())) return;
    let e = T.Z.bogoPromotion;
    !(null != e && new Date(e.endDate).valueOf() >= Date.now()) && (await (0, y.L9)());
}
async function L() {
    let e = T.Z.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await O(),
        { enabled: i } = m.Am.getCurrentConfig({ location: '153d31_6' }, { autoTrackExposure: !1 }),
        { enabled: r } = h.Z.getCurrentConfig({ location: '153d31_7' }, { autoTrackExposure: t && i && n });
    return t && r && i && n;
}
function x() {
    switch (l.default.locale) {
        case 'de':
        case 'es-ES':
        case 'fr':
        case 'hr':
        case 'it':
        case 'lt':
        case 'nl':
        case 'pl':
        case 'pt-BR':
        case 'ro':
        case 'fi':
        case 'sv-SE':
        case 'tr':
        case 'cs':
        case 'el':
        case 'bg':
        case 'ru':
        case 'uk':
        case 'ja':
        case 'ko':
            return A.intl.string(A.t.OS9KPj);
        default:
            return A.intl.string(A.t.VeCPBQ);
    }
}
