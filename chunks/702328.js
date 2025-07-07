(n.d(t, { Z: () => Y }), n(388685));
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
    f = n(70097),
    b = n(433811),
    x = n(214852),
    _ = n(78839),
    E = n(626135),
    j = n(526167),
    O = n(74538),
    C = n(367074),
    S = n(220654),
    v = n(91802),
    T = n(8647),
    N = n(568126),
    I = n(744129),
    y = n(823188),
    A = n(611116),
    P = n(349803),
    R = n(8231),
    D = n(836332),
    Z = n(903250),
    w = n(954003),
    k = n(664134),
    L = n(457227),
    B = n(474936),
    M = n(981631),
    U = n(869783),
    V = n(651117),
    G = n(107283),
    F = n(181960),
    H = n(313199),
    z = n(821969);
let Y = () => {
    (0, x.z)(b.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        n = r.useRef(null),
        s = r.useRef(null),
        Y = r.useRef(null),
        W = r.useRef(null),
        K = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
        q = (0, m.ZP)(),
        X = (0, c.wj)(q),
        [Q, J] = r.useState(!1),
        [$, ee] = r.useState(!1),
        [et, en] = r.useState(!1),
        [ei, er] = r.useState(!1),
        es = (0, j.rO)(),
        [el, ea] = r.useState(!1),
        eo = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
        ec = null != eo ? (0, O.Af)(eo) : null,
        ed = null != ec ? O.ZP.getSkuIdForPlan(ec.planId) : null,
        eu = null !== ed && ed !== B.Si.TIER_2 ? B.Si.TIER_2 : null,
        em = (0, v.n)(),
        ep = (0, C.Vi)(),
        eg = null != ep && ep,
        { analyticsLocations: eh } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
        ef = (0, S.Z)({ location: 'PremiumMarketing' }),
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
            ea(!0);
        }, []));
    let ex = [k.h.HOME, k.h.WHATS_NEW, k.h.BEST_OF_NITRO, k.h.PLANS, k.h.COMPARE],
        { navBarSections: e_, activeSectionId: eE } = (0, w.O)(ex),
        { home: ej, whatsNew: eO, bestOfNitro: eC, plans: eS, compare: ev } = e_,
        eT = (0, i.jsxs)('div', {
            className: l()(V.container, V.responsiveContainer, { [V.containerBackground]: X }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                ef &&
                    (0, i.jsx)(L.Z, {
                        navBarSections: e_,
                        activeSectionId: eE
                    }),
                (0, i.jsx)('div', { className: V.heroHeaderSideGradient }),
                (0, i.jsx)('img', {
                    src: G,
                    className: V.heroHeaderBackgroundStars,
                    alt: ''
                }),
                (0, i.jsxs)('div', {
                    className: V.heroHeadingV2Container,
                    ref: ej.ref,
                    children: [
                        (0, i.jsx)(o.$, {
                            innerRef: s,
                            onChange: (e) => J(e),
                            threshold: 0,
                            active: !0,
                            children: (0, i.jsx)(Z.Z, {
                                ref: s,
                                subscriptionTier: eu,
                                isDarkMode: X,
                                isEligibleForBogoPromotion: ep
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: V.heroHeadingV2ArtContainer,
                            children: (0, i.jsx)(f.Z, {
                                autoPlay: !K,
                                playsInline: !0,
                                preload: K ? 'none' : 'auto',
                                poster: H.Z,
                                loop: !0,
                                className: V.heroHeadingV2Art,
                                ref: t,
                                children: (0, i.jsx)('source', {
                                    src: es ? F.Z : z.Z,
                                    type: es ? U.m.MP4 : U.m.WEBM
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: V.promoBannerContainer,
                    children: [(0, i.jsx)(T.Z, { variant: T.C.APPLICATION_NITRO_HOME }), null != em && (0, i.jsx)(N.Z, { localizedPricingPromo: em })]
                }),
                (0, i.jsx)('div', {
                    className: V.whatsNewSection,
                    ref: eO.ref,
                    children: (0, i.jsx)(A.g, {
                        shouldLoadVideo: el,
                        isReducedMotion: K
                    })
                }),
                (0, i.jsx)('div', {
                    className: V.bestOfNitroSection,
                    ref: eC.ref,
                    children: (0, i.jsx)(A.G_, {
                        shouldLoadVideo: el,
                        isReducedMotion: K
                    })
                }),
                (0, i.jsx)('div', {
                    className: V.premiumTierCardsContainerFullscreen,
                    ref: eS.ref,
                    children: (0, i.jsx)(o.$, {
                        innerRef: n,
                        onChange: (e) => en(e),
                        threshold: 0.1,
                        active: !0,
                        children: ef
                            ? (0, i.jsx)(I.rz, { innerRef: n })
                            : (0, i.jsx)(y.Ub, {
                                  innerRef: n,
                                  hasActiveTier2PremiumPromotion: eg
                              })
                    })
                }),
                (0, i.jsx)('div', {
                    className: V.planComparisonTableContainer,
                    ref: ev.ref,
                    children: (0, i.jsx)(R.Z, { className: V.planComparisonTableApplicationHome })
                }),
                (0, i.jsx)(P.Z, {
                    isVisible: !Q && !et && !$ && el,
                    subscriptionTier: eu,
                    isApplicationHome: !0,
                    isEligibleForBogoPromotion: ep
                }),
                (0, i.jsx)(o.$, {
                    innerRef: Y,
                    onChange: (e) => {
                        e && !ei && (E.default.track(M.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eh }), er(!0));
                    },
                    children: (0, i.jsx)('div', {
                        ref: Y,
                        className: V.bottomOfPageVisibilitySensor
                    })
                }),
                (0, i.jsx)(o.$, {
                    innerRef: W,
                    onChange: (e) => {
                        ee(e);
                    },
                    children: (0, i.jsx)(D.Z, {
                        ref: W,
                        isFooterVisible: $,
                        isDarkMode: X,
                        isReducedMotion: K,
                        subscriptionTier: eu
                    })
                })
            ]
        });
    return (0, i.jsx)(d.yWw, {
        className: V.scroller,
        ref: e,
        children: eT
    });
};
