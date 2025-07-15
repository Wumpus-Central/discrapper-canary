(n.d(t, { Z: () => F }), n(388685));
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
    P = n(864879),
    R = n(238649),
    D = n(975978),
    Z = n(836332),
    w = n(903250),
    k = n(954003),
    L = n(664134),
    B = n(457227),
    M = n(474936),
    U = n(981631),
    V = n(651117),
    G = n(107283);
let F = () => {
    (0, b.z)(f.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        n = r.useRef(null),
        s = r.useRef(null),
        F = r.useRef(null),
        H = r.useRef(null),
        z = (0, l.e7)([p.Z], () => p.Z.useReducedMotion),
        W = (0, m.ZP)(),
        Y = (0, c.wj)(W),
        [K, q] = r.useState(!1),
        [X, J] = r.useState(!1),
        [Q, $] = r.useState(!1),
        [ee, et] = r.useState(!1),
        [en, ei] = r.useState(!1),
        er = (0, l.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        es = null != er ? (0, j.Af)(er) : null,
        ea = null != es ? j.ZP.getSkuIdForPlan(es.planId) : null,
        el = null !== ea && ea !== M.Si.TIER_2 ? M.Si.TIER_2 : null,
        eo = (0, C.n)(),
        ec = (0, E.Vi)(),
        ed = null != ec && ec,
        { analyticsLocations: eu } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
        em = (0, O.Z)({ location: 'PremiumMarketing' }),
        ep = 'PremiumMarketingHome';
    ((0, u.j)({
        location: ep + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: ep + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            ei(!0);
        }, []));
    let eg = [L.h.HOME, L.h.WHATS_NEW, L.h.BEST_OF_NITRO, L.h.PLANS, L.h.COMPARE],
        { navBarSections: eh, activeSectionId: ef } = (0, k.O)(eg),
        { home: eb, whatsNew: ex, bestOfNitro: e_, plans: ej, compare: eE } = eh,
        eO = (0, i.jsxs)('div', {
            className: a()(V.container, V.responsiveContainer, { [V.containerBackground]: Y }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                em &&
                    (0, i.jsx)(B.Z, {
                        navBarSections: eh,
                        activeSectionId: ef
                    }),
                (0, i.jsx)('div', { className: V.heroHeaderSideGradient }),
                (0, i.jsx)('img', {
                    src: G,
                    className: V.heroHeaderBackgroundStars,
                    alt: ''
                }),
                (0, i.jsx)('div', {
                    className: V.heroHeadingV2Container,
                    ref: eb.ref,
                    children: (0, i.jsx)(o.$, {
                        innerRef: s,
                        onChange: (e) => q(e),
                        threshold: 0,
                        active: !0,
                        children: em
                            ? (0, i.jsx)(R.Z, { ref: s })
                            : (0, i.jsx)(w.Z, {
                                  ref: s,
                                  subscriptionTier: el,
                                  isDarkMode: Y,
                                  isEligibleForBogoPromotion: ec,
                                  videoRef: t
                              })
                    })
                }),
                (0, i.jsxs)('div', {
                    className: V.promoBannerContainer,
                    children: [(0, i.jsx)(v.Z, { variant: v.C.APPLICATION_NITRO_HOME }), null != eo && (0, i.jsx)(S.Z, { localizedPricingPromo: eo })]
                }),
                (0, i.jsx)('div', {
                    className: V.whatsNewSection,
                    ref: ex.ref,
                    children: (0, i.jsx)(I.g, {
                        shouldLoadVideo: en,
                        isReducedMotion: z,
                        enablePremiumBrandRefreshDesign: em
                    })
                }),
                (0, i.jsx)('div', {
                    className: V.bestOfNitroSection,
                    ref: e_.ref,
                    children: (0, i.jsx)(I.G_, {
                        shouldLoadVideo: en,
                        isReducedMotion: z,
                        enablePremiumBrandRefreshDesign: em
                    })
                }),
                (0, i.jsx)('div', {
                    className: V.premiumTierCardsContainerFullscreen,
                    ref: ej.ref,
                    children: (0, i.jsx)(o.$, {
                        innerRef: n,
                        onChange: (e) => $(e),
                        threshold: 0.1,
                        active: !0,
                        children: em
                            ? (0, i.jsx)(T.rz, { innerRef: n })
                            : (0, i.jsx)(N.Ub, {
                                  innerRef: n,
                                  hasActiveTier2PremiumPromotion: ed
                              })
                    })
                }),
                (0, i.jsx)('div', {
                    className: V.planComparisonTableContainer,
                    ref: eE.ref,
                    children: em ? (0, i.jsx)(D.Z, {}) : (0, i.jsx)(A.Z, { className: V.planComparisonTableApplicationHome })
                }),
                (0, i.jsx)(y.Z, {
                    isVisible: !K && !Q && !X && en,
                    subscriptionTier: el,
                    isApplicationHome: !0,
                    isEligibleForBogoPromotion: ec
                }),
                (0, i.jsx)(o.$, {
                    innerRef: F,
                    onChange: (e) => {
                        e && !ee && (_.default.track(U.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eu }), et(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: F,
                        className: V.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)(o.$, {
                    innerRef: H,
                    onChange: (e) => {
                        J(e);
                    },
                    children: em
                        ? (0, i.jsx)(P.Z, { ref: H })
                        : (0, i.jsx)(Z.Z, {
                              ref: H,
                              isFooterVisible: X,
                              isDarkMode: Y,
                              isReducedMotion: z,
                              subscriptionTier: el
                          })
                })
            ]
        });
    return (0, i.jsx)(d.yWw, {
        className: V.scroller,
        ref: e,
        children: eO
    });
};
