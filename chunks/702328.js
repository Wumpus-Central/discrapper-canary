n.d(t, { Z: () => G }), n(388685);
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
    g = n(607070),
    p = n(100527),
    h = n(906732),
    f = n(70097),
    b = n(433811),
    _ = n(214852),
    x = n(78839),
    E = n(626135),
    j = n(526167),
    C = n(74538),
    O = n(367074),
    S = n(91802),
    v = n(8647),
    T = n(784238),
    N = n(568126),
    I = n(823188),
    y = n(611116),
    A = n(349803),
    P = n(8231),
    R = n(836332),
    D = n(903250),
    Z = n(474936),
    w = n(981631),
    k = n(869783),
    L = n(651117),
    B = n(107283),
    M = n(181960),
    U = n(313199),
    V = n(821969);
let G = () => {
    (0, _.z)(b.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        n = r.useRef(null),
        s = r.useRef(null),
        G = r.useRef(null),
        F = r.useRef(null),
        H = (0, a.e7)([g.Z], () => g.Z.useReducedMotion),
        z = (0, m.ZP)(),
        Y = (0, c.wj)(z),
        [W, K] = r.useState(!1),
        [q, X] = r.useState(!1),
        [J, Q] = r.useState(!1),
        [$, ee] = r.useState(!1),
        et = (0, j.rO)(),
        [en, ei] = r.useState(!1),
        er = (0, a.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        es = null != er ? (0, C.Af)(er) : null,
        el = null != es ? C.ZP.getSkuIdForPlan(es.planId) : null,
        ea = null !== el && el !== Z.Si.TIER_2 ? Z.Si.TIER_2 : null,
        eo = (0, S.n)(),
        ec = (0, O.Vi)(),
        ed = null != ec && ec,
        { analyticsLocations: eu } = (0, h.ZP)(p.Z.PREMIUM_MARKETING),
        em = 'PremiumMarketingHome';
    (0, u.j)({
        location: em + ' auto on',
        autoTrackExposure: !0
    }),
        (0, u.j)({
            location: em + ' auto off',
            autoTrackExposure: !1
        }),
        r.useEffect(() => {
            ei(!0);
        }, []);
    let eg = (0, i.jsxs)('div', {
        className: l()(L.container, L.responsiveContainer, { [L.containerBackground]: Y }),
        'data-cy': 'tier-0-marketing-page',
        children: [
            (0, i.jsx)('div', { className: L.heroHeaderSideGradient }),
            (0, i.jsx)('img', {
                src: B,
                className: L.heroHeaderBackgroundStars,
                alt: ''
            }),
            (0, i.jsxs)('div', {
                className: L.heroHeadingV2Container,
                children: [
                    (0, i.jsx)(o.$, {
                        innerRef: s,
                        onChange: (e) => K(e),
                        threshold: 0,
                        active: !0,
                        children: (0, i.jsx)(D.Z, {
                            ref: s,
                            subscriptionTier: ea,
                            isDarkMode: Y,
                            isEligibleForBogoPromotion: ec
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: L.heroHeadingV2ArtContainer,
                        children: (0, i.jsx)(f.Z, {
                            autoPlay: !H,
                            playsInline: !0,
                            preload: H ? 'none' : 'auto',
                            poster: U.Z,
                            loop: !0,
                            className: L.heroHeadingV2Art,
                            ref: t,
                            children: (0, i.jsx)('source', {
                                src: et ? M.Z : V.Z,
                                type: et ? k.m.MP4 : k.m.WEBM
                            })
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: L.promoBannerContainer,
                children: [(0, i.jsx)(v.Z, { variant: v.C.APPLICATION_NITRO_HOME }), null != eo && (0, i.jsx)(N.Z, { localizedPricingPromo: eo })]
            }),
            (0, i.jsx)('div', {
                className: l()(L.whatsNewSectionBackground, L.whatsNewSectionBackgroundV2),
                children: (0, i.jsx)(y.Z, {
                    shouldLoadVideo: en,
                    isReducedMotion: H
                })
            }),
            (0, i.jsx)('div', {
                className: L.premiumTierCardsContainerFullscreen,
                children: (0, i.jsx)(o.$, {
                    innerRef: n,
                    onChange: (e) => Q(e),
                    threshold: 0.1,
                    active: !0,
                    children: (0, i.jsx)(I.Ub, {
                        innerRef: n,
                        tier0CTAButton: (0, i.jsx)(T.Z, {
                            color: void 0,
                            showIcon: !1,
                            subscriptionTier: Z.Si.TIER_0,
                            className: L.marginTopForButtons,
                            textOptions: { textClassName: L.v2SubButtonText },
                            buttonShineClassName: L.buttonShine
                        }),
                        tier2CTAButton: (0, i.jsx)(T.Z, {
                            color: void 0,
                            showIcon: !1,
                            subscriptionTier: Z.Si.TIER_2,
                            className: L.marginTopForButtons,
                            hasActivePromotion: ed,
                            textOptions: { textClassName: L.v2SubButtonText },
                            buttonShineClassName: L.buttonShine
                        })
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: L.planComparisonTableContainer,
                children: (0, i.jsx)(P.Z, { className: L.planComparisonTableApplicationHome })
            }),
            (0, i.jsx)(A.Z, {
                isVisible: !W && !J && !q && en,
                subscriptionTier: ea,
                isApplicationHome: !0,
                isEligibleForBogoPromotion: ec
            }),
            (0, i.jsx)(o.$, {
                innerRef: G,
                onChange: (e) => {
                    e && !$ && (E.default.track(w.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eu }), ee(!0));
                },
                children: (0, i.jsx)('div', {
                    ref: G,
                    className: L.bottomOfPageVisibilitySensor
                })
            }),
            (0, i.jsx)(o.$, {
                innerRef: F,
                onChange: (e) => {
                    X(e);
                },
                children: (0, i.jsx)(R.Z, {
                    ref: F,
                    isFooterVisible: q,
                    isDarkMode: Y,
                    isReducedMotion: H,
                    subscriptionTier: ea
                })
            })
        ]
    });
    return (0, i.jsx)(d.yWw, {
        className: L.scroller,
        ref: e,
        children: eg
    });
};
