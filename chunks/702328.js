n.d(t, { Z: () => z }), n(388685);
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
    I = n(568126),
    N = n(823188),
    y = n(611116),
    A = n(349803),
    P = n(8231),
    R = n(836332),
    D = n(903250),
    Z = n(391110),
    w = n(71363),
    k = n(474936),
    L = n(981631),
    B = n(869783),
    M = n(651117),
    U = n(107283),
    V = n(181960),
    G = n(313199),
    F = n(821969);
let H = (e) => {
        let { hasRenderedOnce: t, isReducedMotion: n } = e;
        return (0, i.jsx)('div', {
            className: l()(M.whatsNewSectionBackground, M.whatsNewSectionBackgroundV2),
            children: (0, i.jsx)(y.Z, {
                shouldLoadVideo: t,
                isReducedMotion: n
            })
        });
    },
    z = (e) => {
        let { entrypoint: t } = e;
        (0, _.z)(b.X);
        let n = r.useRef(null),
            s = r.useRef(null),
            y = r.useRef(null),
            z = r.useRef(null),
            Y = r.useRef(null),
            W = r.useRef(null),
            K = (0, a.e7)([g.Z], () => g.Z.useReducedMotion),
            q = (0, m.ZP)(),
            X = (0, c.wj)(q),
            [J, Q] = r.useState(!1),
            [$, ee] = r.useState(!1),
            [et, en] = r.useState(!1),
            [ei, er] = r.useState(!1),
            es = (0, j.rO)(),
            [el, ea] = r.useState(!1),
            eo = (0, a.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
            ec = null != eo ? (0, C.Af)(eo) : null,
            ed = null != ec ? C.ZP.getSkuIdForPlan(ec.planId) : null,
            eu = null !== ed && ed !== k.Si.TIER_2 ? k.Si.TIER_2 : null,
            em = (0, S.n)(),
            [eg, ep] = r.useState(!1),
            eh = (0, O.Vi)(),
            ef = null != eh && eh,
            { analyticsLocations: eb } = (0, h.ZP)(p.Z.PREMIUM_MARKETING),
            e_ = 'PremiumMarketingHome';
        (0, u.j)({
            location: e_ + ' auto on',
            autoTrackExposure: !0
        }),
            (0, u.j)({
                location: e_ + ' auto off',
                autoTrackExposure: !1
            }),
            r.useEffect(() => {
                ea(!0);
            }, []);
        let ex = (0, i.jsx)('div', {
                className: M.premiumTierCardsContainerFullscreen,
                children: (0, i.jsx)(o.$, {
                    innerRef: y,
                    onChange: (e) => en(e),
                    threshold: 0.1,
                    active: !0,
                    children: (0, i.jsx)(N.ZP, {
                        innerRef: y,
                        isApplicationHome: !0,
                        showWumpus: !1,
                        tier0CTAButton: (0, i.jsx)(T.Z, {
                            color: void 0,
                            showIcon: !1,
                            subscriptionTier: k.Si.TIER_0,
                            className: M.marginTopForButtons,
                            textOptions: { textClassName: M.v2SubButtonText },
                            buttonShineClassName: M.buttonShine
                        }),
                        tier2CTAButton: (0, i.jsx)(T.Z, {
                            color: void 0,
                            showIcon: !1,
                            subscriptionTier: k.Si.TIER_2,
                            className: M.marginTopForButtons,
                            hasActivePromotion: ef,
                            textOptions: { textClassName: M.v2SubButtonText },
                            buttonShineClassName: M.buttonShine
                        })
                    })
                })
            }),
            eE = (0, i.jsxs)('div', {
                className: l()(M.container, M.responsiveContainer, { [M.containerBackground]: X }),
                'data-cy': 'tier-0-marketing-page',
                children: [
                    (0, i.jsx)('div', { className: M.heroHeaderSideGradient }),
                    (0, i.jsx)('img', {
                        src: U,
                        className: M.heroHeaderBackgroundStars,
                        alt: ''
                    }),
                    (0, i.jsxs)('div', {
                        className: M.heroHeadingV2Container,
                        children: [
                            (0, i.jsx)(o.$, {
                                innerRef: z,
                                onChange: (e) => Q(e),
                                threshold: 0,
                                active: !0,
                                children: (0, i.jsx)(D.Z, {
                                    ref: z,
                                    subscriptionTier: eu,
                                    isFullscreen: !0,
                                    entrypoint: t,
                                    isDarkMode: X,
                                    isEligibleForBogoPromotion: eh
                                })
                            }),
                            (0, i.jsx)('div', {
                                className: M.heroHeadingV2ArtContainer,
                                children: (0, i.jsx)(f.Z, {
                                    autoPlay: !K,
                                    playsInline: !0,
                                    preload: K ? 'none' : 'auto',
                                    poster: G.Z,
                                    loop: !0,
                                    className: M.heroHeadingV2Art,
                                    ref: s,
                                    children: (0, i.jsx)('source', {
                                        src: es ? V.Z : F.Z,
                                        type: es ? B.m.MP4 : B.m.WEBM
                                    })
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: M.promoBannerContainer,
                        children: [(0, i.jsx)(v.Z, { variant: v.C.APPLICATION_NITRO_HOME }), null != em && (0, i.jsx)(I.Z, { localizedPricingPromo: em })]
                    }),
                    (0, i.jsx)(H, {
                        hasRenderedOnce: el,
                        isReducedMotion: K
                    }),
                    ex,
                    (0, i.jsx)('div', {
                        className: M.planComparisonTableContainer,
                        children: (0, i.jsx)(P.Z, { className: M.planComparisonTableApplicationHome })
                    }),
                    (0, i.jsx)(A.Z, {
                        isVisible: !J && !et && !$ && el,
                        isFullscreen: !0,
                        subscriptionTier: eu,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: eh
                    }),
                    (0, i.jsx)(o.$, {
                        innerRef: Y,
                        onChange: (e) => {
                            e && !ei && (E.default.track(L.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eb }), er(!0));
                        },
                        children: (0, i.jsx)('div', {
                            ref: Y,
                            className: M.bottomOfPageVisibilitySensor
                        })
                    }),
                    (0, i.jsx)(o.$, {
                        innerRef: W,
                        onChange: (e) => {
                            ee(e);
                        },
                        children: (0, i.jsx)(R.Z, {
                            ref: W,
                            isFooterVisible: $,
                            isDarkMode: X,
                            isReducedMotion: K,
                            subscriptionTier: eu
                        })
                    })
                ]
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.yWw, {
                    className: M.scroller,
                    ref: n,
                    children: eE
                }),
                (0, i.jsx)(w.Z, {
                    previousComponent: Z.MQ.MARKETING,
                    isAllPerksVisible: eg,
                    setIsAllPerksVisible: ep,
                    isFullScreen: !0
                })
            ]
        });
    };
