(n.d(t, { Z: () => U }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
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
    E = n(74538),
    j = n(367074),
    O = n(220654),
    C = n(91802),
    S = n(8647),
    v = n(568126),
    T = n(744129),
    N = n(823188),
    I = n(611116),
    y = n(349803),
    A = n(8231),
    P = n(836332),
    R = n(903250),
    D = n(954003),
    Z = n(664134),
    w = n(457227),
    k = n(474936),
    L = n(981631),
    B = n(651117),
    M = n(107283);
let U = () => {
    (0, b.z)(f.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        n = r.useRef(null),
        s = r.useRef(null),
        U = r.useRef(null),
        V = r.useRef(null),
        G = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
        F = (0, m.ZP)(),
        H = (0, c.wj)(F),
        [z, Y] = r.useState(!1),
        [W, K] = r.useState(!1),
        [q, X] = r.useState(!1),
        [Q, J] = r.useState(!1),
        [$, ee] = r.useState(!1),
        et = (0, a.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        en = null != et ? (0, E.Af)(et) : null,
        ei = null != en ? E.ZP.getSkuIdForPlan(en.planId) : null,
        er = null !== ei && ei !== k.Si.TIER_2 ? k.Si.TIER_2 : null,
        es = (0, C.n)(),
        el = (0, j.Vi)(),
        ea = null != el && el,
        { analyticsLocations: eo } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
        ec = (0, O.Z)({ location: 'PremiumMarketing' }),
        ed = 'PremiumMarketingHome';
    ((0, u.j)({
        location: ed + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: ed + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            ee(!0);
        }, []));
    let eu = [Z.h.HOME, Z.h.WHATS_NEW, Z.h.BEST_OF_NITRO, Z.h.PLANS, Z.h.COMPARE],
        { navBarSections: em, activeSectionId: ep } = (0, D.O)(eu),
        { home: eg, whatsNew: eh, bestOfNitro: ef, plans: eb, compare: ex } = em,
        e_ = (0, i.jsxs)('div', {
            className: l()(B.container, B.responsiveContainer, { [B.containerBackground]: H }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                ec &&
                    (0, i.jsx)(w.Z, {
                        navBarSections: em,
                        activeSectionId: ep
                    }),
                (0, i.jsx)('div', { className: B.heroHeaderSideGradient }),
                (0, i.jsx)('img', {
                    src: M,
                    className: B.heroHeaderBackgroundStars,
                    alt: ''
                }),
                (0, i.jsx)('div', {
                    className: B.heroHeadingV2Container,
                    ref: eg.ref,
                    children: (0, i.jsx)(o.$, {
                        innerRef: s,
                        onChange: (e) => Y(e),
                        threshold: 0,
                        active: !0,
                        children: (0, i.jsx)(R.Z, {
                            ref: s,
                            subscriptionTier: er,
                            isDarkMode: H,
                            isEligibleForBogoPromotion: el,
                            videoRef: t
                        })
                    })
                }),
                (0, i.jsxs)('div', {
                    className: B.promoBannerContainer,
                    children: [(0, i.jsx)(S.Z, { variant: S.C.APPLICATION_NITRO_HOME }), null != es && (0, i.jsx)(v.Z, { localizedPricingPromo: es })]
                }),
                (0, i.jsx)('div', {
                    className: B.whatsNewSection,
                    ref: eh.ref,
                    children: (0, i.jsx)(I.g, {
                        shouldLoadVideo: $,
                        isReducedMotion: G
                    })
                }),
                (0, i.jsx)('div', {
                    className: B.bestOfNitroSection,
                    ref: ef.ref,
                    children: (0, i.jsx)(I.G_, {
                        shouldLoadVideo: $,
                        isReducedMotion: G
                    })
                }),
                (0, i.jsx)('div', {
                    className: B.premiumTierCardsContainerFullscreen,
                    ref: eb.ref,
                    children: (0, i.jsx)(o.$, {
                        innerRef: n,
                        onChange: (e) => X(e),
                        threshold: 0.1,
                        active: !0,
                        children: ec
                            ? (0, i.jsx)(T.rz, { innerRef: n })
                            : (0, i.jsx)(N.Ub, {
                                  innerRef: n,
                                  hasActiveTier2PremiumPromotion: ea
                              })
                    })
                }),
                (0, i.jsx)('div', {
                    className: B.planComparisonTableContainer,
                    ref: ex.ref,
                    children: (0, i.jsx)(A.Z, { className: B.planComparisonTableApplicationHome })
                }),
                (0, i.jsx)(y.Z, {
                    isVisible: !z && !q && !W && $,
                    subscriptionTier: er,
                    isApplicationHome: !0,
                    isEligibleForBogoPromotion: el
                }),
                (0, i.jsx)(o.$, {
                    innerRef: U,
                    onChange: (e) => {
                        e && !Q && (_.default.track(L.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eo }), J(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: U,
                        className: B.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)(o.$, {
                    innerRef: V,
                    onChange: (e) => {
                        K(e);
                    },
                    children: (0, i.jsx)(P.Z, {
                        ref: V,
                        isFooterVisible: W,
                        isDarkMode: H,
                        isReducedMotion: G,
                        subscriptionTier: er
                    })
                })
            ]
        });
    return (0, i.jsx)(d.yWw, {
        className: B.scroller,
        ref: e,
        children: e_
    });
};
