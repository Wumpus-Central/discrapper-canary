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
    O = n(8647),
    C = n(744129),
    v = n(823188),
    S = n(611116),
    T = n(306066),
    N = n(349803),
    I = n(8231),
    y = n(864879),
    A = n(238649),
    P = n(47840),
    R = n(975978),
    D = n(836332),
    Z = n(903250),
    w = n(954003),
    k = n(664134),
    L = n(457227),
    B = n(474936),
    M = n(981631),
    U = n(231338),
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
        W = r.useRef(null),
        z = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        Y = (0, u.ZP)(),
        K = (0, c.wj)(Y),
        [q, X] = r.useState(!1),
        [J, Q] = r.useState(!1),
        [$, ee] = r.useState(!1),
        [et, en] = r.useState(!1),
        [ei, er] = r.useState(!1),
        es = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        ea = null != es ? (0, _.Af)(es) : null,
        el = null != ea ? _.ZP.getSkuIdForPlan(ea.planId) : null,
        eo = null !== el && el !== B.Si.TIER_2 ? B.Si.TIER_2 : null,
        ec = (0, j.Vi)(),
        ed = null != ec && ec,
        { analyticsLocations: eu } = (0, g.ZP)(p.Z.PREMIUM_MARKETING),
        em = (0, E.Z)({ location: 'PremiumMarketing' }),
        ep = !q && !$ && (em || !J);
    r.useEffect(() => {
        er(!0);
    }, []);
    let eg = [k.h.HOME, k.h.WHATS_NEW, k.h.BEST_OF_NITRO, k.h.PLANS, k.h.COMPARE],
        { navBarSections: eh, activeSectionId: ef } = (0, w.O)(eg),
        { home: eb, whatsNew: ex, bestOfNitro: e_, plans: ej, compare: eE } = eh,
        eO = em ? V : G,
        eC = (0, i.jsxs)('div', {
            className: a()(eO.container, eO.responsiveContainer, {
                [eO.containerBackground]: em || K,
                [V.fadeInFromTop]: !z && em
            }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                em &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(T.Z, { className: V.topOfPageGradient }),
                            (0, i.jsx)(L.Z, {
                                navBarSections: eh,
                                activeSectionId: ef
                            })
                        ]
                    }),
                !em &&
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
                    className: eO.sectionsContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: eO.heroHeadingContainer,
                            ref: eb.ref,
                            children: (0, i.jsx)(o.$, {
                                innerRef: s,
                                onChange: (e) => X(e),
                                threshold: 0,
                                active: !0,
                                children: em
                                    ? (0, i.jsx)(A.Z, {
                                          ref: s,
                                          subscriptionTier: eo,
                                          isEligibleForBogoPromotion: ec
                                      })
                                    : (0, i.jsx)(Z.Z, {
                                          ref: s,
                                          subscriptionTier: eo,
                                          isDarkMode: K,
                                          isEligibleForBogoPromotion: ec,
                                          videoRef: t
                                      })
                            })
                        }),
                        ec &&
                            (0, i.jsx)('div', {
                                className: eO.promoBannerContainer,
                                children: (0, i.jsx)(O.Z, { variant: O.C.APPLICATION_NITRO_HOME })
                            }),
                        (0, i.jsx)('div', {
                            className: eO.whatsNewSectionContainer,
                            ref: ex.ref,
                            children: (0, i.jsx)(S.g, {
                                shouldLoadVideo: ei,
                                isReducedMotion: z,
                                enablePremiumBrandRefreshDesign: em
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: eO.bestOfNitroSectionContainer,
                            ref: e_.ref,
                            children: (0, i.jsx)(S.G_, {
                                shouldLoadVideo: ei,
                                isReducedMotion: z,
                                enablePremiumBrandRefreshDesign: em
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: eO.premiumTierCardsContainer,
                            ref: ej.ref,
                            children: (0, i.jsx)(o.$, {
                                innerRef: n,
                                onChange: (e) => ee(e),
                                threshold: 0.1,
                                active: !0,
                                children: em
                                    ? (0, i.jsx)(C.rz, { innerRef: n })
                                    : (0, i.jsx)(v.Ub, {
                                          innerRef: n,
                                          hasActiveTier2PremiumPromotion: ed
                                      })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: eO.planComparisonTableContainer,
                            ref: eE.ref,
                            children: em ? (0, i.jsx)(R.Z, {}) : (0, i.jsx)(I.Z, {})
                        })
                    ]
                }),
                !em &&
                    (0, i.jsx)(N.Z, {
                        isVisible: ep && ei,
                        subscriptionTier: eo,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: ec
                    }),
                (0, i.jsx)(o.$, {
                    innerRef: H,
                    onChange: (e) => {
                        e && !et && (x.default.track(M.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eu }), en(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: H,
                        className: eO.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)(o.$, {
                    innerRef: W,
                    onChange: (e) => {
                        Q(e);
                    },
                    children: em
                        ? (0, i.jsx)(y.Z, { ref: W })
                        : (0, i.jsx)(D.Z, {
                              ref: W,
                              isFooterVisible: J,
                              isDarkMode: K,
                              isReducedMotion: z,
                              subscriptionTier: eo
                          })
                }),
                em &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(P.Z, {
                                isVisible: ep && ei,
                                subscriptionTier: eo,
                                isEligibleForBogoPromotion: ec
                            }),
                            (0, i.jsx)(T.Z, { className: V.bottomOfPageGradient })
                        ]
                    })
            ]
        });
    return (0, i.jsx)(d.f6W, {
        theme: em ? U.BR.DARKER : Y,
        children: (t) =>
            (0, i.jsx)(d.yWw, {
                className: a()(eO.scroller, t),
                ref: e,
                children: eC
            })
    });
};
