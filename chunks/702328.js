(n.d(t, { Z: () => H }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(607070),
    p = n(100527),
    g = n(906732),
    h = n(433811),
    f = n(214852),
    b = n(78839),
    x = n(626135),
    _ = n(74538),
    j = n(367074),
    E = n(220654),
    O = n(91802),
    C = n(8647),
    v = n(568126),
    S = n(744129),
    T = n(823188),
    N = n(611116),
    I = n(349803),
    y = n(8231),
    A = n(864879),
    P = n(238649),
    R = n(47840),
    D = n(975978),
    Z = n(836332),
    w = n(903250),
    k = n(954003),
    L = n(664134),
    B = n(457227),
    M = n(474936),
    U = n(981631),
    V = n(594880),
    G = n(651117),
    F = n(107283);
let H = () => {
    (0, f.z)(h.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        n = r.useRef(null),
        s = r.useRef(null),
        H = r.useRef(null),
        z = r.useRef(null),
        W = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        Y = (0, u.ZP)(),
        K = (0, c.wj)(Y),
        [q, X] = r.useState(!1),
        [Q, J] = r.useState(!1),
        [$, ee] = r.useState(!1),
        [et, en] = r.useState(!1),
        [ei, er] = r.useState(!1),
        es = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        ea = null != es ? (0, _.Af)(es) : null,
        el = null != ea ? _.ZP.getSkuIdForPlan(ea.planId) : null,
        eo = null !== el && el !== M.Si.TIER_2 ? M.Si.TIER_2 : null,
        ec = (0, O.n)(),
        ed = null != ec,
        eu = (0, j.Vi)(),
        em = null != eu && eu,
        { analyticsLocations: ep } = (0, g.ZP)(p.Z.PREMIUM_MARKETING),
        eg = (0, E.Z)({ location: 'PremiumMarketing' }),
        eh = !q && !$ && (eg || !Q);
    r.useEffect(() => {
        er(!0);
    }, []);
    let ef = [L.h.HOME, L.h.WHATS_NEW, L.h.BEST_OF_NITRO, L.h.PLANS, L.h.COMPARE],
        { navBarSections: eb, activeSectionId: ex } = (0, k.O)(ef),
        { home: e_, whatsNew: ej, bestOfNitro: eE, plans: eO, compare: eC } = eb,
        ev = eg ? V : G,
        eS = (0, i.jsxs)('div', {
            className: a()(ev.container, ev.responsiveContainer, { [ev.containerBackground]: eg || K }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                eg &&
                    (0, i.jsx)(B.Z, {
                        navBarSections: eb,
                        activeSectionId: ex
                    }),
                !eg &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: G.heroHeaderSideGradient }),
                            (0, i.jsx)('img', {
                                src: F,
                                className: G.heroHeaderBackgroundStars,
                                alt: ''
                            })
                        ]
                    }),
                (0, i.jsxs)('div', {
                    className: ev.sectionsContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: ev.heroHeadingContainer,
                            ref: e_.ref,
                            children: (0, i.jsx)(o.$, {
                                innerRef: s,
                                onChange: (e) => X(e),
                                threshold: 0,
                                active: !0,
                                children: eg
                                    ? (0, i.jsx)(P.Z, {
                                          ref: s,
                                          subscriptionTier: eo,
                                          isEligibleForBogoPromotion: eu
                                      })
                                    : (0, i.jsx)(w.Z, {
                                          ref: s,
                                          subscriptionTier: eo,
                                          isDarkMode: K,
                                          isEligibleForBogoPromotion: eu,
                                          videoRef: t
                                      })
                            })
                        }),
                        (eu || ed) &&
                            (0, i.jsxs)('div', {
                                className: ev.promoBannerContainer,
                                children: [(0, i.jsx)(C.Z, { variant: C.C.APPLICATION_NITRO_HOME }), ed && (0, i.jsx)(v.Z, { localizedPricingPromo: ec })]
                            }),
                        (0, i.jsx)('div', {
                            className: ev.whatsNewSectionContainer,
                            ref: ej.ref,
                            children: (0, i.jsx)(N.g, {
                                shouldLoadVideo: ei,
                                isReducedMotion: W,
                                enablePremiumBrandRefreshDesign: eg
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: ev.bestOfNitroSectionContainer,
                            ref: eE.ref,
                            children: (0, i.jsx)(N.G_, {
                                shouldLoadVideo: ei,
                                isReducedMotion: W,
                                enablePremiumBrandRefreshDesign: eg
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: ev.premiumTierCardsContainer,
                            ref: eO.ref,
                            children: (0, i.jsx)(o.$, {
                                innerRef: n,
                                onChange: (e) => ee(e),
                                threshold: 0.1,
                                active: !0,
                                children: eg
                                    ? (0, i.jsx)(S.rz, { innerRef: n })
                                    : (0, i.jsx)(T.Ub, {
                                          innerRef: n,
                                          hasActiveTier2PremiumPromotion: em
                                      })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: ev.planComparisonTableContainer,
                            ref: eC.ref,
                            children: eg ? (0, i.jsx)(D.Z, {}) : (0, i.jsx)(y.Z, {})
                        })
                    ]
                }),
                !eg &&
                    (0, i.jsx)(I.Z, {
                        isVisible: eh && ei,
                        subscriptionTier: eo,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: eu
                    }),
                (0, i.jsx)(o.$, {
                    innerRef: H,
                    onChange: (e) => {
                        e && !et && (x.default.track(U.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: ep }), en(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: H,
                        className: ev.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)(o.$, {
                    innerRef: z,
                    onChange: (e) => {
                        J(e);
                    },
                    children: eg
                        ? (0, i.jsx)(A.Z, { ref: z })
                        : (0, i.jsx)(Z.Z, {
                              ref: z,
                              isFooterVisible: Q,
                              isDarkMode: K,
                              isReducedMotion: W,
                              subscriptionTier: eo
                          })
                }),
                eg &&
                    (0, i.jsx)(R.Z, {
                        isVisible: eh && ei,
                        subscriptionTier: eo,
                        isEligibleForBogoPromotion: eu
                    })
            ]
        });
    return (0, i.jsx)(d.yWw, {
        className: ev.scroller,
        ref: e,
        children: eS
    });
};
