(n.d(t, { Z: () => F }), n(388685));
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
    C = n(74538),
    O = n(367074),
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
    w = n(474936),
    k = n(981631),
    L = n(869783),
    B = n(651117),
    M = n(107283),
    U = n(181960),
    V = n(313199),
    G = n(821969);
let F = () => {
    (0, x.z)(b.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        n = r.useRef(null),
        s = r.useRef(null),
        F = r.useRef(null),
        H = r.useRef(null),
        z = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
        Y = (0, m.ZP)(),
        W = (0, c.wj)(Y),
        [K, q] = r.useState(!1),
        [X, Q] = r.useState(!1),
        [J, $] = r.useState(!1),
        [ee, et] = r.useState(!1),
        en = (0, j.rO)(),
        [ei, er] = r.useState(!1),
        es = (0, a.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
        el = null != es ? (0, C.Af)(es) : null,
        ea = null != el ? C.ZP.getSkuIdForPlan(el.planId) : null,
        eo = null !== ea && ea !== w.Si.TIER_2 ? w.Si.TIER_2 : null,
        ec = (0, v.n)(),
        ed = (0, O.Vi)(),
        eu = null != ed && ed,
        { analyticsLocations: em } = (0, h.ZP)(g.Z.PREMIUM_MARKETING),
        ep = (0, S.Z)({ location: 'PremiumMarketing' }),
        eg = 'PremiumMarketingHome';
    ((0, u.j)({
        location: eg + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: eg + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            er(!0);
        }, []));
    let eh = (0, i.jsxs)('div', {
        className: l()(B.container, B.responsiveContainer, { [B.containerBackground]: W }),
        'data-cy': 'tier-0-marketing-page',
        children: [
            (0, i.jsx)('div', { className: B.heroHeaderSideGradient }),
            (0, i.jsx)('img', {
                src: M,
                className: B.heroHeaderBackgroundStars,
                alt: ''
            }),
            (0, i.jsxs)('div', {
                className: B.heroHeadingV2Container,
                children: [
                    (0, i.jsx)(o.$, {
                        innerRef: s,
                        onChange: (e) => q(e),
                        threshold: 0,
                        active: !0,
                        children: (0, i.jsx)(Z.Z, {
                            ref: s,
                            subscriptionTier: eo,
                            isDarkMode: W,
                            isEligibleForBogoPromotion: ed
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: B.heroHeadingV2ArtContainer,
                        children: (0, i.jsx)(f.Z, {
                            autoPlay: !z,
                            playsInline: !0,
                            preload: z ? 'none' : 'auto',
                            poster: V.Z,
                            loop: !0,
                            className: B.heroHeadingV2Art,
                            ref: t,
                            children: (0, i.jsx)('source', {
                                src: en ? U.Z : G.Z,
                                type: en ? L.m.MP4 : L.m.WEBM
                            })
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: B.promoBannerContainer,
                children: [(0, i.jsx)(T.Z, { variant: T.C.APPLICATION_NITRO_HOME }), null != ec && (0, i.jsx)(N.Z, { localizedPricingPromo: ec })]
            }),
            (0, i.jsx)('div', {
                className: l()(B.whatsNewSectionBackground, B.whatsNewSectionBackgroundV2),
                children: (0, i.jsx)(A.Z, {
                    shouldLoadVideo: ei,
                    isReducedMotion: z
                })
            }),
            (0, i.jsx)('div', {
                className: B.premiumTierCardsContainerFullscreen,
                children: (0, i.jsx)(o.$, {
                    innerRef: n,
                    onChange: (e) => $(e),
                    threshold: 0.1,
                    active: !0,
                    children: ep
                        ? (0, i.jsx)(I.rz, { innerRef: n })
                        : (0, i.jsx)(y.Ub, {
                              innerRef: n,
                              hasActiveTier2PremiumPromotion: eu
                          })
                })
            }),
            (0, i.jsx)('div', {
                className: B.planComparisonTableContainer,
                children: (0, i.jsx)(R.Z, { className: B.planComparisonTableApplicationHome })
            }),
            (0, i.jsx)(P.Z, {
                isVisible: !K && !J && !X && ei,
                subscriptionTier: eo,
                isApplicationHome: !0,
                isEligibleForBogoPromotion: ed
            }),
            (0, i.jsx)(o.$, {
                innerRef: F,
                onChange: (e) => {
                    e && !ee && (E.default.track(k.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: em }), et(!0));
                },
                children: (0, i.jsx)('div', {
                    ref: F,
                    className: B.bottomOfPageVisibilitySensor
                })
            }),
            (0, i.jsx)(o.$, {
                innerRef: H,
                onChange: (e) => {
                    Q(e);
                },
                children: (0, i.jsx)(D.Z, {
                    ref: H,
                    isFooterVisible: X,
                    isDarkMode: W,
                    isReducedMotion: z,
                    subscriptionTier: eo
                })
            })
        ]
    });
    return (0, i.jsx)(d.yWw, {
        className: B.scroller,
        ref: e,
        children: eh
    });
};
