(n.d(t, { Z: () => H }), n(388685));
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
    V = n(594880),
    G = n(651117),
    F = n(107283);
let H = () => {
    (0, b.z)(f.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        n = r.useRef(null),
        s = r.useRef(null),
        H = r.useRef(null),
        z = r.useRef(null),
        W = (0, l.e7)([p.Z], () => p.Z.useReducedMotion),
        Y = (0, m.ZP)(),
        K = (0, c.wj)(Y),
        [q, X] = r.useState(!1),
        [J, Q] = r.useState(!1),
        [$, ee] = r.useState(!1),
        [et, en] = r.useState(!1),
        [ei, er] = r.useState(!1),
        es = (0, l.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        ea = null != es ? (0, j.Af)(es) : null,
        el = null != ea ? j.ZP.getSkuIdForPlan(ea.planId) : null,
        eo = null !== el && el !== M.Si.TIER_2 ? M.Si.TIER_2 : null,
        ec = (0, C.n)(),
        ed = null != ec,
        eu = (0, E.Vi)(),
        em = null != eu && eu,
        { analyticsLocations: ep } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
        eg = (0, O.Z)({ location: 'PremiumMarketing' }),
        eh = 'PremiumMarketingHome';
    ((0, u.j)({
        location: eh + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eh + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            er(!0);
        }, []));
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
                                    ? (0, i.jsx)(R.Z, {
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
                                children: [(0, i.jsx)(v.Z, { variant: v.C.APPLICATION_NITRO_HOME }), ed && (0, i.jsx)(S.Z, { localizedPricingPromo: ec })]
                            }),
                        (0, i.jsx)('div', {
                            className: ev.whatsNewSectionContainer,
                            ref: ej.ref,
                            children: (0, i.jsx)(I.g, {
                                shouldLoadVideo: ei,
                                isReducedMotion: W,
                                enablePremiumBrandRefreshDesign: eg
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: ev.bestOfNitroSectionContainer,
                            ref: eE.ref,
                            children: (0, i.jsx)(I.G_, {
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
                                    ? (0, i.jsx)(T.rz, { innerRef: n })
                                    : (0, i.jsx)(N.Ub, {
                                          innerRef: n,
                                          hasActiveTier2PremiumPromotion: em
                                      })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: ev.planComparisonTableContainer,
                            ref: eC.ref,
                            children: eg ? (0, i.jsx)(D.Z, {}) : (0, i.jsx)(A.Z, {})
                        })
                    ]
                }),
                (0, i.jsx)(y.Z, {
                    isVisible: !q && !$ && !J && ei,
                    subscriptionTier: eo,
                    isApplicationHome: !0,
                    isEligibleForBogoPromotion: eu
                }),
                (0, i.jsx)(o.$, {
                    innerRef: H,
                    onChange: (e) => {
                        e && !et && (_.default.track(U.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: ep }), en(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: H,
                        className: ev.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)(o.$, {
                    innerRef: z,
                    onChange: (e) => {
                        Q(e);
                    },
                    children: eg
                        ? (0, i.jsx)(P.Z, { ref: z })
                        : (0, i.jsx)(Z.Z, {
                              ref: z,
                              isFooterVisible: J,
                              isDarkMode: K,
                              isReducedMotion: W,
                              subscriptionTier: eo
                          })
                })
            ]
        });
    return (0, i.jsx)(d.yWw, {
        className: ev.scroller,
        ref: e,
        children: eS
    });
};
