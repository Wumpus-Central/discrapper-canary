n.d(t, {
    Vi: () => C,
    W1: () => D,
    k: () => w,
    l2: () => P
});
var r = n(913527),
    i = n.n(r),
    a = n(399606),
    o = n(355467),
    s = n(211242),
    l = n(706454),
    c = n(594174),
    u = n(78839),
    d = n(431),
    f = n(74538),
    _ = n(937579),
    p = n(436783),
    h = n(617799),
    m = n(61196),
    g = n(104494),
    E = n(639119),
    b = n(921022),
    y = n(748770),
    v = n(725727),
    O = n(1844),
    I = n(474936),
    S = n(981631),
    T = n(388032);
let A = 10;
function N(e) {
    var t, n;
    let { experimentEnabled: r, premiumSubscription: a, mostRecentSubscription: o } = e,
        s = !1,
        l = !1;
    if (null != o && o.status === S.O0b.ENDED) {
        let e = o.endedAt,
            n = null == (t = (0, f.Af)(o)) ? void 0 : t.planId,
            r = null != n && f.ZP.getPremiumType(n) === I.p9.TIER_2;
        l = null != e && r && i()().subtract(A, 'days').isAfter(e);
    }
    if (null != a) {
        let e = null == (n = (0, f.Af)(a)) ? void 0 : n.planId,
            t = null != e && f.ZP.getPremiumType(e) === I.p9.TIER_2,
            r = c.default.getCurrentUser(),
            i = (null == a ? void 0 : a.trialId) != null && f.ZP.isPremiumExactly(r, I.p9.TIER_0);
        s = t || i;
    }
    return !r || s || l;
}
function C() {
    var e;
    let { paymentsBlocked: t } = s.Z.useExperiment({ location: '153d31_1' }, { autoTrackExposure: !1 }),
        { promotion: n } = (0, v.mq)(),
        { enabled: r } = (0, m.ZP)(),
        { mostRecentSubscription: i, premiumSubscription: o } = (0, a.cj)([u.ZP], () => ({
            mostRecentSubscription: u.ZP.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: u.ZP.getPremiumTypeSubscription()
        })),
        l = (0, E.N)(),
        c = (0, g.Ng)(),
        d = new Date(null != (e = null == n ? void 0 : n.endDate) ? e : 0).valueOf(),
        f = Date.now(),
        _ = f > d,
        { enabled: y } = (0, p.Z)();
    (0, b.Z)({
        delay: _ ? -1 : d - f,
        disable: y
    });
    let O =
            !N({
                experimentEnabled: r,
                premiumSubscription: o,
                mostRecentSubscription: i
            }) &&
            null == l &&
            null != n &&
            !t &&
            null == c,
        { enabled: I } = h.Z.useExperiment(
            { location: '153d31_2' },
            {
                autoTrackExposure: O,
                disable: !O
            }
        );
    return !_ && I;
}
async function R() {
    var e;
    let t = c.default.getCurrentUser(),
        n = !(null == t ? void 0 : t.isClaimed()),
        { paymentsBlocked: r } = s.Z.getCurrentConfig({ location: '153d31_3' }, { autoTrackExposure: !1 }),
        { enabled: i } = (0, m.aW)(),
        { enabled: a } = h.Z.getCurrentConfig({ location: '153d31_4' }, { autoTrackExposure: !1 });
    if (n || r || !i || !a || (d.Z.shouldFetchOffer() && !(0, f.I5)(t) && (await (0, _.T)('BogoPromotionUtils')), d.Z.hasFetchedOffer() && (d.Z.hasAnyUnexpiredOffer() || d.Z.hasAnyUnexpiredDiscountOffer()))) return !1;
    !u.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null == (e = c.default.getCurrentUser()) ? void 0 : e.hasPurchasedFlag(I.in.PREMIUM_TIER_2)) && (await (0, o.ou)()), u.ZP.hasFetchedSubscriptions() || (await (0, o.jg)());
    let l = u.ZP.getMostRecentPremiumTypeSubscription();
    return !N({
        experimentEnabled: i,
        premiumSubscription: u.ZP.getPremiumTypeSubscription(),
        mostRecentSubscription: l
    });
}
async function P() {
    if (!(await R())) return;
    let e = O.Z.bogoPromotion;
    (null != e && new Date(e.endDate).valueOf() >= Date.now()) || (await (0, y.L9)());
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
            return T.intl.string(T.t.OS9KPj);
        default:
            return T.intl.string(T.t.VeCPBQ);
    }
}
