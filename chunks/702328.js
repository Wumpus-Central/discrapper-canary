(n.d(t, { Z: () => z }), n(388685));
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
    V = n(231338),
    G = n(594880),
    F = n(651117),
    H = n(107283);
let z = () => {
    (0, f.z)(h.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        n = r.useRef(null),
        s = r.useRef(null),
        z = r.useRef(null),
        W = r.useRef(null),
        Y = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        K = (0, u.ZP)(),
        q = (0, c.wj)(K),
        [X, Q] = r.useState(!1),
        [J, $] = r.useState(!1),
        [ee, et] = r.useState(!1),
        [en, ei] = r.useState(!1),
        [er, es] = r.useState(!1),
        ea = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        el = null != ea ? (0, _.Af)(ea) : null,
        eo = null != el ? _.ZP.getSkuIdForPlan(el.planId) : null,
        ec = null !== eo && eo !== M.Si.TIER_2 ? M.Si.TIER_2 : null,
        ed = (0, O.n)(),
        eu = null != ed,
        em = (0, j.Vi)(),
        ep = null != em && em,
        { analyticsLocations: eg } = (0, g.ZP)(p.Z.PREMIUM_MARKETING),
        eh = (0, E.Z)({ location: 'PremiumMarketing' }),
        ef = !X && !ee && (eh || !J);
    r.useEffect(() => {
        es(!0);
    }, []);
    let eb = [L.h.HOME, L.h.WHATS_NEW, L.h.BEST_OF_NITRO, L.h.PLANS, L.h.COMPARE],
        { navBarSections: ex, activeSectionId: e_ } = (0, k.O)(eb),
        { home: ej, whatsNew: eE, bestOfNitro: eO, plans: eC, compare: ev } = ex,
        eS = eh ? G : F,
        eT = (0, i.jsxs)('div', {
            className: a()(eS.container, eS.responsiveContainer, { [eS.containerBackground]: eh || q }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                eh &&
                    (0, i.jsx)(B.Z, {
                        navBarSections: ex,
                        activeSectionId: e_
                    }),
                !eh &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: F.heroHeaderSideGradient }),
                            (0, i.jsx)('img', {
                                src: H,
                                className: F.heroHeaderBackgroundStars,
                                alt: ''
                            })
                        ]
                    }),
                (0, i.jsxs)('div', {
                    className: eS.sectionsContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: eS.heroHeadingContainer,
                            ref: ej.ref,
                            children: (0, i.jsx)(o.$, {
                                innerRef: s,
                                onChange: (e) => Q(e),
                                threshold: 0,
                                active: !0,
                                children: eh
                                    ? (0, i.jsx)(P.Z, {
                                          ref: s,
                                          subscriptionTier: ec,
                                          isEligibleForBogoPromotion: em
                                      })
                                    : (0, i.jsx)(w.Z, {
                                          ref: s,
                                          subscriptionTier: ec,
                                          isDarkMode: q,
                                          isEligibleForBogoPromotion: em,
                                          videoRef: t
                                      })
                            })
                        }),
                        (em || eu) &&
                            (0, i.jsxs)('div', {
                                className: eS.promoBannerContainer,
                                children: [(0, i.jsx)(C.Z, { variant: C.C.APPLICATION_NITRO_HOME }), eu && (0, i.jsx)(v.Z, { localizedPricingPromo: ed })]
                            }),
                        (0, i.jsx)('div', {
                            className: eS.whatsNewSectionContainer,
                            ref: eE.ref,
                            children: (0, i.jsx)(N.g, {
                                shouldLoadVideo: er,
                                isReducedMotion: Y,
                                enablePremiumBrandRefreshDesign: eh
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: eS.bestOfNitroSectionContainer,
                            ref: eO.ref,
                            children: (0, i.jsx)(N.G_, {
                                shouldLoadVideo: er,
                                isReducedMotion: Y,
                                enablePremiumBrandRefreshDesign: eh
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: eS.premiumTierCardsContainer,
                            ref: eC.ref,
                            children: (0, i.jsx)(o.$, {
                                innerRef: n,
                                onChange: (e) => et(e),
                                threshold: 0.1,
                                active: !0,
                                children: eh
                                    ? (0, i.jsx)(S.rz, { innerRef: n })
                                    : (0, i.jsx)(T.Ub, {
                                          innerRef: n,
                                          hasActiveTier2PremiumPromotion: ep
                                      })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: eS.planComparisonTableContainer,
                            ref: ev.ref,
                            children: eh ? (0, i.jsx)(D.Z, {}) : (0, i.jsx)(y.Z, {})
                        })
                    ]
                }),
                !eh &&
                    (0, i.jsx)(I.Z, {
                        isVisible: ef && er,
                        subscriptionTier: ec,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: em
                    }),
                (0, i.jsx)(o.$, {
                    innerRef: z,
                    onChange: (e) => {
                        e && !en && (x.default.track(U.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eg }), ei(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: z,
                        className: eS.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)(o.$, {
                    innerRef: W,
                    onChange: (e) => {
                        $(e);
                    },
                    children: eh
                        ? (0, i.jsx)(A.Z, { ref: W })
                        : (0, i.jsx)(Z.Z, {
                              ref: W,
                              isFooterVisible: J,
                              isDarkMode: q,
                              isReducedMotion: Y,
                              subscriptionTier: ec
                          })
                }),
                eh &&
                    (0, i.jsx)(R.Z, {
                        isVisible: ef && er,
                        subscriptionTier: ec,
                        isEligibleForBogoPromotion: em
                    })
            ]
        });
    return (0, i.jsx)(d.f6W, {
        theme: eh ? V.BR.DARK : K,
        children: (t) =>
            (0, i.jsx)(d.yWw, {
                className: a()(eS.scroller, t),
                ref: e,
                children: eT
            })
    });
};
