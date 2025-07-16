(n.d(t, { Z: () => z }), n(388685));
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
    D = n(47840),
    Z = n(975978),
    w = n(836332),
    k = n(903250),
    L = n(954003),
    B = n(664134),
    M = n(457227),
    U = n(474936),
    V = n(981631),
    G = n(594880),
    F = n(651117),
    H = n(107283);
let z = () => {
    (0, b.z)(f.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        n = r.useRef(null),
        s = r.useRef(null),
        z = r.useRef(null),
        W = r.useRef(null),
        Y = (0, l.e7)([p.Z], () => p.Z.useReducedMotion),
        K = (0, m.ZP)(),
        q = (0, c.wj)(K),
        [X, J] = r.useState(!1),
        [Q, $] = r.useState(!1),
        [ee, et] = r.useState(!1),
        [en, ei] = r.useState(!1),
        [er, es] = r.useState(!1),
        ea = (0, l.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
        el = null != ea ? (0, j.Af)(ea) : null,
        eo = null != el ? j.ZP.getSkuIdForPlan(el.planId) : null,
        ec = null !== eo && eo !== U.Si.TIER_2 ? U.Si.TIER_2 : null,
        ed = (0, C.n)(),
        eu = null != ed,
        em = (0, E.Vi)(),
        ep = null != em && em,
        { analyticsLocations: eg } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
        eh = (0, O.Z)({ location: 'PremiumMarketing' }),
        ef = !X && !ee && (eh || !Q),
        eb = 'PremiumMarketingHome';
    ((0, u.j)({
        location: eb + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eb + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            es(!0);
        }, []));
    let ex = [B.h.HOME, B.h.WHATS_NEW, B.h.BEST_OF_NITRO, B.h.PLANS, B.h.COMPARE],
        { navBarSections: e_, activeSectionId: ej } = (0, L.O)(ex),
        { home: eE, whatsNew: eO, bestOfNitro: eC, plans: ev, compare: eS } = e_,
        eT = eh ? G : F,
        eN = (0, i.jsxs)('div', {
            className: a()(eT.container, eT.responsiveContainer, { [eT.containerBackground]: eh || q }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                eh &&
                    (0, i.jsx)(M.Z, {
                        navBarSections: e_,
                        activeSectionId: ej
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
                    className: eT.sectionsContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: eT.heroHeadingContainer,
                            ref: eE.ref,
                            children: (0, i.jsx)(o.$, {
                                innerRef: s,
                                onChange: (e) => J(e),
                                threshold: 0,
                                active: !0,
                                children: eh
                                    ? (0, i.jsx)(R.Z, {
                                          ref: s,
                                          subscriptionTier: ec,
                                          isEligibleForBogoPromotion: em
                                      })
                                    : (0, i.jsx)(k.Z, {
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
                                className: eT.promoBannerContainer,
                                children: [(0, i.jsx)(v.Z, { variant: v.C.APPLICATION_NITRO_HOME }), eu && (0, i.jsx)(S.Z, { localizedPricingPromo: ed })]
                            }),
                        (0, i.jsx)('div', {
                            className: eT.whatsNewSectionContainer,
                            ref: eO.ref,
                            children: (0, i.jsx)(I.g, {
                                shouldLoadVideo: er,
                                isReducedMotion: Y,
                                enablePremiumBrandRefreshDesign: eh
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: eT.bestOfNitroSectionContainer,
                            ref: eC.ref,
                            children: (0, i.jsx)(I.G_, {
                                shouldLoadVideo: er,
                                isReducedMotion: Y,
                                enablePremiumBrandRefreshDesign: eh
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: eT.premiumTierCardsContainer,
                            ref: ev.ref,
                            children: (0, i.jsx)(o.$, {
                                innerRef: n,
                                onChange: (e) => et(e),
                                threshold: 0.1,
                                active: !0,
                                children: eh
                                    ? (0, i.jsx)(T.rz, { innerRef: n })
                                    : (0, i.jsx)(N.Ub, {
                                          innerRef: n,
                                          hasActiveTier2PremiumPromotion: ep
                                      })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: eT.planComparisonTableContainer,
                            ref: eS.ref,
                            children: eh ? (0, i.jsx)(Z.Z, {}) : (0, i.jsx)(A.Z, {})
                        })
                    ]
                }),
                !eh &&
                    (0, i.jsx)(y.Z, {
                        isVisible: ef && er,
                        subscriptionTier: ec,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: em
                    }),
                (0, i.jsx)(o.$, {
                    innerRef: z,
                    onChange: (e) => {
                        e && !en && (_.default.track(V.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eg }), ei(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: z,
                        className: eT.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)(o.$, {
                    innerRef: W,
                    onChange: (e) => {
                        $(e);
                    },
                    children: eh
                        ? (0, i.jsx)(P.Z, { ref: W })
                        : (0, i.jsx)(w.Z, {
                              ref: W,
                              isFooterVisible: Q,
                              isDarkMode: q,
                              isReducedMotion: Y,
                              subscriptionTier: ec
                          })
                }),
                eh &&
                    (0, i.jsx)(D.Z, {
                        isVisible: ef && er,
                        subscriptionTier: ec,
                        isEligibleForBogoPromotion: em
                    })
            ]
        });
    return (0, i.jsx)(d.yWw, {
        className: eT.scroller,
        ref: e,
        children: eN
    });
};
