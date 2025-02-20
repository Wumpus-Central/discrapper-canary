n.d(t, {
    Vi: () => C,
    W1: () => D,
    k: () => w,
    l2: () => P
});
var r = n(913527),
    i = n.n(r),
    o = n(399606),
    a = n(355467),
    s = n(211242),
    l = n(706454),
    c = n(594174),
    u = n(78839),
    d = n(431),
    f = n(74538),
    p = n(937579),
    _ = n(436783),
    h = n(617799),
    m = n(61196),
    g = n(104494),
    E = n(639119),
    v = n(921022),
    b = n(748770),
    y = n(725727),
    O = n(1844),
    S = n(474936),
    I = n(981631),
    T = n(388032);
let N = 10;
function A(e) {
    var t, n, r;
    let { experimentEnabled: o, premiumSubscription: a, mostRecentSubscription: s } = e,
        l = !1,
        u = !1;
    if (null != s && s.status === I.O0b.ENDED) {
        let e = (null === (t = s.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i()(s.metadata.ended_at) : null,
            r = null === (n = (0, f.Af)(s)) || void 0 === n ? void 0 : n.planId,
            o = null != r && f.ZP.getPremiumType(r) === S.p9.TIER_2;
        u = null != e && o && e.add(N, 'days').isAfter(i()());
    }
    if (null != a) {
        let e = null === (r = (0, f.Af)(a)) || void 0 === r ? void 0 : r.planId,
            t = null != e && f.ZP.getPremiumType(e) === S.p9.TIER_2,
            n = c.default.getCurrentUser(),
            i = (null == a ? void 0 : a.trialId) != null && f.ZP.isPremiumExactly(n, S.p9.TIER_0);
        l = t || i;
    }
    return !o || l || u;
}
function C() {
    var e;
    let { paymentsBlocked: t } = s.Z.useExperiment({ location: '153d31_1' }, { autoTrackExposure: !1 }),
        { promotion: n } = (0, y.mq)(),
        { enabled: r } = (0, m.ZP)(),
        { mostRecentSubscription: i, premiumSubscription: a } = (0, o.cj)([u.ZP], () => ({
            mostRecentSubscription: u.ZP.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: u.ZP.getPremiumTypeSubscription()
        })),
        l = (0, E.N)(),
        c = (0, g.Ng)(),
        d = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf(),
        f = Date.now(),
        p = f > d,
        { enabled: b } = (0, _.Z)();
    (0, v.Z)({
        delay: p ? -1 : d - f,
        disable: b
    });
    let O =
            !A({
                experimentEnabled: r,
                premiumSubscription: a,
                mostRecentSubscription: i
            }) &&
            null == l &&
            null != n &&
            !t &&
            null == c,
        { enabled: S } = h.Z.useExperiment(
            { location: '153d31_2' },
            {
                autoTrackExposure: O,
                disable: !O
            }
        );
    return !p && S;
}
async function R() {
    var e;
    let t = c.default.getCurrentUser(),
        n = !(null == t ? void 0 : t.isClaimed()),
        { paymentsBlocked: r } = s.Z.getCurrentConfig({ location: '153d31_3' }, { autoTrackExposure: !1 }),
        { enabled: i } = (0, m.aW)(),
        { enabled: o } = h.Z.getCurrentConfig({ location: '153d31_4' }, { autoTrackExposure: !1 });
    if (n || r || !i || !o || (d.Z.shouldFetchOffer() && !(0, f.I5)(t) && (await (0, p.T)('BogoPromotionUtils')), d.Z.hasFetchedOffer() && (d.Z.hasAnyUnexpiredOffer() || d.Z.hasAnyUnexpiredDiscountOffer()))) return !1;
    !u.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(S.Si.TIER_2)) && (await (0, a.ou)()), u.ZP.hasFetchedSubscriptions() || (await (0, a.jg)());
    let l = u.ZP.getMostRecentPremiumTypeSubscription();
    return !A({
        experimentEnabled: i,
        premiumSubscription: u.ZP.getPremiumTypeSubscription(),
        mostRecentSubscription: l
    });
}
async function P() {
    if (!(await R())) return;
    let e = O.Z.bogoPromotion;
    !(null != e && new Date(e.endDate).valueOf() >= Date.now()) && (await (0, b.L9)());
}
async function w() {
    let e = O.Z.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await R(),
        { enabled: r } = m.Am.getCurrentConfig({ location: '153d31_6' }, { autoTrackExposure: !1 }),
        { enabled: i } = h.Z.getCurrentConfig({ location: '153d31_7' }, { autoTrackExposure: t && r && n });
    return t && i && r && n;
}
function D() {
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
            return T.NW.string(T.t.OS9KPj);
        default:
            return T.NW.string(T.t.VeCPBQ);
    }
}
