(n.d(t, { Z: () => G }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(780384),
    d = n(481060),
    u = n(634894),
    m = n(410030),
    p = n(607070),
    g = n(100527),
    h = n(906732),
    f = n(433811),
    b = n(214852),
    x = n(78839),
    _ = n(626135),
    j = n(74538),
    E = n(367074),
    O = n(220654),
    C = n(91802),
    v = n(8647),
    S = n(568126),
    T = n(744129),
    N = n(823188),
    I = n(611116),
    y = n(349803),
    A = n(8231),
    P = n(238649),
    R = n(975978),
    D = n(836332),
    Z = n(903250),
    w = n(954003),
    k = n(664134),
    L = n(457227),
    B = n(474936),
    M = n(981631),
    U = n(651117),
    V = n(107283);
let G = () => {
    (0, b.z)(f.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        n = r.useRef(null),
        s = r.useRef(null),
        G = r.useRef(null),
        F = r.useRef(null),
        H = (0, l.e7)([p.Z], () => p.Z.useReducedMotion),
        z = (0, m.ZP)(),
        W = (0, c.wj)(z),
        [Y, K] = r.useState(!1),
        [q, X] = r.useState(!1),
        [J, Q] = r.useState(!1),
        [$, ee] = r.useState(!1),
        [et, en] = r.useState(!1),
        ei = (0, l.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        er = null != ei ? (0, j.Af)(ei) : null,
        es = null != er ? j.ZP.getSkuIdForPlan(er.planId) : null,
        ea = null !== es && es !== B.Si.TIER_2 ? B.Si.TIER_2 : null,
        el = (0, C.n)(),
        eo = (0, E.Vi)(),
        ec = null != eo && eo,
        { analyticsLocations: ed } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
        eu = (0, O.Z)({ location: 'PremiumMarketing' }),
        em = 'PremiumMarketingHome';
    ((0, u.j)({
        location: em + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: em + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            en(!0);
        }, []));
    let ep = [k.h.HOME, k.h.WHATS_NEW, k.h.BEST_OF_NITRO, k.h.PLANS, k.h.COMPARE],
        { navBarSections: eg, activeSectionId: eh } = (0, w.O)(ep),
        { home: ef, whatsNew: eb, bestOfNitro: ex, plans: e_, compare: ej } = eg,
        eE = (0, i.jsxs)('div', {
            className: a()(U.container, U.responsiveContainer, { [U.containerBackground]: W }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                eu &&
                    (0, i.jsx)(L.Z, {
                        navBarSections: eg,
                        activeSectionId: eh
                    }),
                (0, i.jsx)('div', { className: U.heroHeaderSideGradient }),
                (0, i.jsx)('img', {
                    src: V,
                    className: U.heroHeaderBackgroundStars,
                    alt: ''
                }),
                (0, i.jsx)('div', {
                    className: U.heroHeadingV2Container,
                    ref: ef.ref,
                    children: (0, i.jsx)(o.$, {
                        innerRef: s,
                        onChange: (e) => K(e),
                        threshold: 0,
                        active: !0,
                        children: eu
                            ? (0, i.jsx)(P.Z, { ref: s })
                            : (0, i.jsx)(Z.Z, {
                                  ref: s,
                                  subscriptionTier: ea,
                                  isDarkMode: W,
                                  isEligibleForBogoPromotion: eo,
                                  videoRef: t
                              })
                    })
                }),
                (0, i.jsxs)('div', {
                    className: U.promoBannerContainer,
                    children: [(0, i.jsx)(v.Z, { variant: v.C.APPLICATION_NITRO_HOME }), null != el && (0, i.jsx)(S.Z, { localizedPricingPromo: el })]
                }),
                (0, i.jsx)('div', {
                    className: U.whatsNewSection,
                    ref: eb.ref,
                    children: (0, i.jsx)(I.g, {
                        shouldLoadVideo: et,
                        isReducedMotion: H,
                        enablePremiumBrandRefreshDesign: eu
                    })
                }),
                (0, i.jsx)('div', {
                    className: U.bestOfNitroSection,
                    ref: ex.ref,
                    children: (0, i.jsx)(I.G_, {
                        shouldLoadVideo: et,
                        isReducedMotion: H,
                        enablePremiumBrandRefreshDesign: eu
                    })
                }),
                (0, i.jsx)('div', {
                    className: U.premiumTierCardsContainerFullscreen,
                    ref: e_.ref,
                    children: (0, i.jsx)(o.$, {
                        innerRef: n,
                        onChange: (e) => Q(e),
                        threshold: 0.1,
                        active: !0,
                        children: eu
                            ? (0, i.jsx)(T.rz, { innerRef: n })
                            : (0, i.jsx)(N.Ub, {
                                  innerRef: n,
                                  hasActiveTier2PremiumPromotion: ec
                              })
                    })
                }),
                (0, i.jsx)('div', {
                    className: U.planComparisonTableContainer,
                    ref: ej.ref,
                    children: eu ? (0, i.jsx)(R.Z, {}) : (0, i.jsx)(A.Z, { className: U.planComparisonTableApplicationHome })
                }),
                (0, i.jsx)(y.Z, {
                    isVisible: !Y && !J && !q && et,
                    subscriptionTier: ea,
                    isApplicationHome: !0,
                    isEligibleForBogoPromotion: eo
                }),
                (0, i.jsx)(o.$, {
                    innerRef: G,
                    onChange: (e) => {
                        e && !$ && (_.default.track(M.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: ed }), ee(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: G,
                        className: U.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)(o.$, {
                    innerRef: F,
                    onChange: (e) => {
                        X(e);
                    },
                    children: (0, i.jsx)(D.Z, {
                        ref: F,
                        isFooterVisible: q,
                        isDarkMode: W,
                        isReducedMotion: H,
                        subscriptionTier: ea
                    })
                })
            ]
        });
    return (0, i.jsx)(d.yWw, {
        className: U.scroller,
        ref: e,
        children: eE
    });
};
