(n.d(t, { Z: () => V }), n(388685));
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
    R = n(836332),
    D = n(903250),
    Z = n(954003),
    w = n(664134),
    k = n(457227),
    L = n(474936),
    B = n(981631),
    M = n(651117),
    U = n(107283);
let V = () => {
    (0, b.z)(f.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        n = r.useRef(null),
        s = r.useRef(null),
        V = r.useRef(null),
        G = r.useRef(null),
        F = (0, l.e7)([p.Z], () => p.Z.useReducedMotion),
        H = (0, m.ZP)(),
        z = (0, c.wj)(H),
        [W, Y] = r.useState(!1),
        [K, q] = r.useState(!1),
        [X, Q] = r.useState(!1),
        [J, $] = r.useState(!1),
        [ee, et] = r.useState(!1),
        en = (0, l.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        ei = null != en ? (0, j.Af)(en) : null,
        er = null != ei ? j.ZP.getSkuIdForPlan(ei.planId) : null,
        es = null !== er && er !== L.Si.TIER_2 ? L.Si.TIER_2 : null,
        ea = (0, C.n)(),
        el = (0, E.Vi)(),
        eo = null != el && el,
        { analyticsLocations: ec } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
        ed = (0, O.Z)({ location: 'PremiumMarketing' }),
        eu = 'PremiumMarketingHome';
    ((0, u.j)({
        location: eu + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eu + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            et(!0);
        }, []));
    let em = [w.h.HOME, w.h.WHATS_NEW, w.h.BEST_OF_NITRO, w.h.PLANS, w.h.COMPARE],
        { navBarSections: ep, activeSectionId: eg } = (0, Z.O)(em),
        { home: eh, whatsNew: ef, bestOfNitro: eb, plans: ex, compare: e_ } = ep,
        ej = (0, i.jsxs)('div', {
            className: a()(M.container, M.responsiveContainer, { [M.containerBackground]: z }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                ed &&
                    (0, i.jsx)(k.Z, {
                        navBarSections: ep,
                        activeSectionId: eg
                    }),
                (0, i.jsx)('div', { className: M.heroHeaderSideGradient }),
                (0, i.jsx)('img', {
                    src: U,
                    className: M.heroHeaderBackgroundStars,
                    alt: ''
                }),
                (0, i.jsx)('div', {
                    className: M.heroHeadingV2Container,
                    ref: eh.ref,
                    children: (0, i.jsx)(o.$, {
                        innerRef: s,
                        onChange: (e) => Y(e),
                        threshold: 0,
                        active: !0,
                        children: ed
                            ? (0, i.jsx)(P.Z, { ref: s })
                            : (0, i.jsx)(D.Z, {
                                  ref: s,
                                  subscriptionTier: es,
                                  isDarkMode: z,
                                  isEligibleForBogoPromotion: el,
                                  videoRef: t
                              })
                    })
                }),
                (0, i.jsxs)('div', {
                    className: M.promoBannerContainer,
                    children: [(0, i.jsx)(v.Z, { variant: v.C.APPLICATION_NITRO_HOME }), null != ea && (0, i.jsx)(S.Z, { localizedPricingPromo: ea })]
                }),
                (0, i.jsx)('div', {
                    className: M.whatsNewSection,
                    ref: ef.ref,
                    children: (0, i.jsx)(I.g, {
                        shouldLoadVideo: ee,
                        isReducedMotion: F
                    })
                }),
                (0, i.jsx)('div', {
                    className: M.bestOfNitroSection,
                    ref: eb.ref,
                    children: (0, i.jsx)(I.G_, {
                        shouldLoadVideo: ee,
                        isReducedMotion: F
                    })
                }),
                (0, i.jsx)('div', {
                    className: M.premiumTierCardsContainerFullscreen,
                    ref: ex.ref,
                    children: (0, i.jsx)(o.$, {
                        innerRef: n,
                        onChange: (e) => Q(e),
                        threshold: 0.1,
                        active: !0,
                        children: ed
                            ? (0, i.jsx)(T.rz, { innerRef: n })
                            : (0, i.jsx)(N.Ub, {
                                  innerRef: n,
                                  hasActiveTier2PremiumPromotion: eo
                              })
                    })
                }),
                (0, i.jsx)('div', {
                    className: M.planComparisonTableContainer,
                    ref: e_.ref,
                    children: (0, i.jsx)(A.Z, { className: M.planComparisonTableApplicationHome })
                }),
                (0, i.jsx)(y.Z, {
                    isVisible: !W && !X && !K && ee,
                    subscriptionTier: es,
                    isApplicationHome: !0,
                    isEligibleForBogoPromotion: el
                }),
                (0, i.jsx)(o.$, {
                    innerRef: V,
                    onChange: (e) => {
                        e && !J && (_.default.track(B.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: ec }), $(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: V,
                        className: M.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)(o.$, {
                    innerRef: G,
                    onChange: (e) => {
                        q(e);
                    },
                    children: (0, i.jsx)(R.Z, {
                        ref: G,
                        isFooterVisible: K,
                        isDarkMode: z,
                        isReducedMotion: F,
                        subscriptionTier: es
                    })
                })
            ]
        });
    return (0, i.jsx)(d.yWw, {
        className: M.scroller,
        ref: e,
        children: ej
    });
};
