r.d(n, {
    Vi: function () {
        return O;
    },
    W1: function () {
        return w;
    },
    k: function () {
        return x;
    },
    l2: function () {
        return L;
    }
});
var i = r(913527),
    a = r.n(i),
    o = r(399606),
    s = r(355467),
    l = r(211242),
    u = r(706454),
    c = r(594174),
    d = r(78839),
    f = r(431),
    p = r(74538),
    h = r(937579),
    _ = r(436783),
    m = r(617799),
    g = r(61196),
    E = r(104494),
    v = r(639119),
    y = r(921022),
    b = r(748770),
    I = r(725727),
    T = r(1844),
    S = r(474936),
    A = r(981631),
    C = r(388032);
let N = 10;
function R(e) {
    var n, r, i;
    let { experimentEnabled: o, premiumSubscription: s, mostRecentSubscription: l } = e,
        u = !1,
        d = !1;
    if (null != l && l.status === A.O0b.ENDED) {
        let e = (null === (n = l.metadata) || void 0 === n ? void 0 : n.ended_at) != null ? a()(l.metadata.ended_at) : null,
            i = null === (r = (0, p.Af)(l)) || void 0 === r ? void 0 : r.planId,
            o = null != i && p.ZP.getPremiumType(i) === S.p9.TIER_2;
        d = null != e && o && e.add(N, 'days').isAfter(a()());
    }
    if (null != s) {
        let e = null === (i = (0, p.Af)(s)) || void 0 === i ? void 0 : i.planId,
            n = null != e && p.ZP.getPremiumType(e) === S.p9.TIER_2,
            r = c.default.getCurrentUser(),
            a = (null == s ? void 0 : s.trialId) != null && p.ZP.isPremiumExactly(r, S.p9.TIER_0);
        u = n || a;
    }
    return !o || u || d;
}
function O() {
    var e;
    let { paymentsBlocked: n } = l.Z.useExperiment({ location: '153d31_1' }, { autoTrackExposure: !1 }),
        { promotion: r } = (0, I.mq)(),
        { enabled: i } = (0, g.ZP)(),
        { mostRecentSubscription: a, premiumSubscription: s } = (0, o.cj)([d.ZP], () => ({
            mostRecentSubscription: d.ZP.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: d.ZP.getPremiumTypeSubscription()
        })),
        u = (0, v.N)(),
        c = (0, E.Ng)(),
        f = new Date(null !== (e = null == r ? void 0 : r.endDate) && void 0 !== e ? e : 0).valueOf(),
        p = Date.now(),
        h = p > f,
        { enabled: b } = (0, _.Z)();
    (0, y.Z)({
        delay: h ? -1 : f - p,
        disable: b
    });
    let T =
            !R({
                experimentEnabled: i,
                premiumSubscription: s,
                mostRecentSubscription: a
            }) &&
            null == u &&
            null != r &&
            !n &&
            null == c,
        { enabled: S } = m.Z.useExperiment(
            { location: '153d31_2' },
            {
                autoTrackExposure: T,
                disable: !T
            }
        );
    return !h && S;
}
async function D() {
    var e;
    let n = c.default.getCurrentUser(),
        r = !(null == n ? void 0 : n.isClaimed()),
        { paymentsBlocked: i } = l.Z.getCurrentConfig({ location: '153d31_3' }, { autoTrackExposure: !1 }),
        { enabled: a } = (0, g.aW)(),
        { enabled: o } = m.Z.getCurrentConfig({ location: '153d31_4' }, { autoTrackExposure: !1 });
    if (r || i || !a || !o) return !1;
    if ((f.Z.shouldFetchOffer() && !(0, p.I5)(n) && (await (0, h.T)('BogoPromotionUtils')), f.Z.hasFetchedOffer() && (f.Z.hasAnyUnexpiredOffer() || f.Z.hasAnyUnexpiredDiscountOffer()))) return !1;
    !d.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(S.Si.TIER_2)) && (await (0, s.ou)()), !d.ZP.hasFetchedSubscriptions() && (await (0, s.jg)());
    let u = d.ZP.getMostRecentPremiumTypeSubscription();
    return !R({
        experimentEnabled: a,
        premiumSubscription: d.ZP.getPremiumTypeSubscription(),
        mostRecentSubscription: u
    });
}
async function L() {
    if (!(await D())) return;
    let e = T.Z.bogoPromotion;
    if (!(null != e && new Date(e.endDate).valueOf() >= Date.now())) await (0, b.L9)();
}
async function x() {
    let e = T.Z.bogoPromotion,
        n = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        r = await D(),
        { enabled: i } = g.Am.getCurrentConfig({ location: '153d31_6' }, { autoTrackExposure: !1 }),
        { enabled: a } = m.Z.getCurrentConfig({ location: '153d31_7' }, { autoTrackExposure: n && i && r });
    return n && a && i && r;
}
function w() {
    switch (u.default.locale) {
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
            return C.intl.string(C.t.OS9KPj);
        default:
            return C.intl.string(C.t.VeCPBQ);
    }
}
