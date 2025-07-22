(n.d(t, { Z: () => W }), n(388685));
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
    I = n(306066),
    y = n(349803),
    A = n(8231),
    P = n(864879),
    R = n(238649),
    D = n(47840),
    Z = n(975978),
    w = n(836332),
    k = n(903250),
    L = n(954003),
    B = n(664134),
    M = n(457227),
    U = n(474936),
    V = n(981631),
    G = n(231338),
    F = n(594880),
    H = n(651117),
    z = n(107283);
let W = () => {
    (0, f.z)(h.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        n = r.useRef(null),
        s = r.useRef(null),
        W = r.useRef(null),
        Y = r.useRef(null),
        K = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        q = (0, u.ZP)(),
        X = (0, c.wj)(q),
        [J, Q] = r.useState(!1),
        [$, ee] = r.useState(!1),
        [et, en] = r.useState(!1),
        [ei, er] = r.useState(!1),
        [es, ea] = r.useState(!1),
        el = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        eo = null != el ? (0, _.Af)(el) : null,
        ec = null != eo ? _.ZP.getSkuIdForPlan(eo.planId) : null,
        ed = null !== ec && ec !== U.Si.TIER_2 ? U.Si.TIER_2 : null,
        eu = (0, O.n)(),
        em = null != eu,
        ep = (0, j.Vi)(),
        eg = null != ep && ep,
        { analyticsLocations: eh } = (0, g.ZP)(p.Z.PREMIUM_MARKETING),
        ef = (0, E.Z)({ location: 'PremiumMarketing' }),
        eb = !J && !et && (ef || !$);
    r.useEffect(() => {
        ea(!0);
    }, []);
    let ex = [B.h.HOME, B.h.WHATS_NEW, B.h.BEST_OF_NITRO, B.h.PLANS, B.h.COMPARE],
        { navBarSections: e_, activeSectionId: ej } = (0, L.O)(ex),
        { home: eE, whatsNew: eO, bestOfNitro: eC, plans: ev, compare: eS } = e_,
        eT = ef ? F : H,
        eN = (0, i.jsxs)('div', {
            className: a()(eT.container, eT.responsiveContainer, { [eT.containerBackground]: ef || X }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                ef &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(I.Z, { className: F.topOfPageGradient }),
                            (0, i.jsx)(M.Z, {
                                navBarSections: e_,
                                activeSectionId: ej
                            })
                        ]
                    }),
                !ef &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: H.heroHeaderSideGradient }),
                            (0, i.jsx)('img', {
                                src: z,
                                className: H.heroHeaderBackgroundStars,
                                alt: ''
                            })
                        ]
                    }),
                (0, i.jsxs)('div', {
                    className: eT.sectionsContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: eT.heroHeadingContainer,
                            ref: eE.ref,
                            children: (0, i.jsx)(o.$, {
                                innerRef: s,
                                onChange: (e) => Q(e),
                                threshold: 0,
                                active: !0,
                                children: ef
                                    ? (0, i.jsx)(R.Z, {
                                          ref: s,
                                          subscriptionTier: ed,
                                          isEligibleForBogoPromotion: ep
                                      })
                                    : (0, i.jsx)(k.Z, {
                                          ref: s,
                                          subscriptionTier: ed,
                                          isDarkMode: X,
                                          isEligibleForBogoPromotion: ep,
                                          videoRef: t
                                      })
                            })
                        }),
                        (ep || em) &&
                            (0, i.jsxs)('div', {
                                className: eT.promoBannerContainer,
                                children: [(0, i.jsx)(C.Z, { variant: C.C.APPLICATION_NITRO_HOME }), em && (0, i.jsx)(v.Z, { localizedPricingPromo: eu })]
                            }),
                        (0, i.jsx)('div', {
                            className: eT.whatsNewSectionContainer,
                            ref: eO.ref,
                            children: (0, i.jsx)(N.g, {
                                shouldLoadVideo: es,
                                isReducedMotion: K,
                                enablePremiumBrandRefreshDesign: ef
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: eT.bestOfNitroSectionContainer,
                            ref: eC.ref,
                            children: (0, i.jsx)(N.G_, {
                                shouldLoadVideo: es,
                                isReducedMotion: K,
                                enablePremiumBrandRefreshDesign: ef
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: eT.premiumTierCardsContainer,
                            ref: ev.ref,
                            children: (0, i.jsx)(o.$, {
                                innerRef: n,
                                onChange: (e) => en(e),
                                threshold: 0.1,
                                active: !0,
                                children: ef
                                    ? (0, i.jsx)(S.rz, { innerRef: n })
                                    : (0, i.jsx)(T.Ub, {
                                          innerRef: n,
                                          hasActiveTier2PremiumPromotion: eg
                                      })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: eT.planComparisonTableContainer,
                            ref: eS.ref,
                            children: ef ? (0, i.jsx)(Z.Z, {}) : (0, i.jsx)(A.Z, {})
                        })
                    ]
                }),
                !ef &&
                    (0, i.jsx)(y.Z, {
                        isVisible: eb && es,
                        subscriptionTier: ed,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: ep
                    }),
                (0, i.jsx)(o.$, {
                    innerRef: W,
                    onChange: (e) => {
                        e && !ei && (x.default.track(V.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eh }), er(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: W,
                        className: eT.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)(o.$, {
                    innerRef: Y,
                    onChange: (e) => {
                        ee(e);
                    },
                    children: ef
                        ? (0, i.jsx)(P.Z, { ref: Y })
                        : (0, i.jsx)(w.Z, {
                              ref: Y,
                              isFooterVisible: $,
                              isDarkMode: X,
                              isReducedMotion: K,
                              subscriptionTier: ed
                          })
                }),
                ef &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(D.Z, {
                                isVisible: eb && es,
                                subscriptionTier: ed,
                                isEligibleForBogoPromotion: ep
                            }),
                            (0, i.jsx)(I.Z, { className: F.bottomOfPageGradient })
                        ]
                    })
            ]
        });
    return (0, i.jsx)(d.f6W, {
        theme: ef ? G.BR.DARKER : q,
        children: (t) =>
            (0, i.jsx)(d.yWw, {
                className: a()(eT.scroller, t),
                ref: e,
                children: eN
            })
    });
};
