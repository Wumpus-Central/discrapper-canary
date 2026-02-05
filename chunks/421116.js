n.d(t, { A: () => Z }), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(960488),
    o = n(311907),
    c = n(230109),
    d = n(582754),
    u = n(397927),
    _ = n(736653),
    m = n(775602),
    A = n(793574),
    g = n(688810),
    E = n(726649),
    h = n(611924),
    p = n(166403),
    C = n(954571),
    x = n(927578),
    T = n(40185),
    I = n(170887),
    S = n(994763),
    f = n(130946),
    N = n(84483),
    b = n(407775),
    R = n(501007),
    v = n(26010),
    O = n(54009),
    j = n(252711),
    P = n(584767),
    y = n(191430),
    L = n(475805),
    D = n(564230),
    M = n(974005),
    G = n(305714),
    U = n(658137),
    k = n(927258),
    B = n(57978),
    w = n(694195),
    H = n(716442),
    V = n(788868),
    F = n(652215),
    Y = n(818348),
    W = n(549447),
    z = n(157650),
    K = n(122402);
let Z = () => {
    let e = (0, l.zy)();
    (0, h.P)(E.b);
    let t = s.useRef(null),
        n = s.useRef(null),
        r = s.useRef(null),
        Z = s.useRef(null),
        X = s.useRef(null),
        q = s.useRef(null),
        J = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        Q = (0, _.Ay)(),
        $ = (0, d.Mw)(Q),
        [ee, et] = s.useState(!1),
        [en, ei] = s.useState(!1),
        [es, er] = s.useState(!1),
        [ea, el] = s.useState(!1),
        [eo, ec] = s.useState(!1),
        ed = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        eu = null != ed ? (0, x.EL)(ed) : null,
        e_ = null != eu ? x.Ay.getSkuIdForPlan(eu.planId) : null,
        em = null !== e_ && e_ !== V.pe.TIER_2 ? V.pe.TIER_2 : null,
        eA = (0, T.cg)(),
        eg = eA ?? !1,
        { analyticsLocations: eE } = (0, g.Ay)(A.A.PREMIUM_MARKETING),
        eh = (0, I.A)({ location: "PremiumMarketing" }),
        ep = !ee && !es && (eh || !en);
    s.useEffect(() => {
        ec(!0);
    }, []);
    let { isInTreatment: eC } = (0, N.uX)("PremiumMarketingHome"),
        ex = s.useMemo(() => !!eC && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, eC]);
    (0, S.z)(B.NI.ORB_REWARDS, ex);
    let eT = [H.k.HOME, H.k.WHATS_NEW, H.k.BEST_OF_NITRO, H.k.PLANS, H.k.COMPARE],
        { navBarSections: eI, activeSectionId: eS } = (0, w.o)(eT),
        { home: ef, whatsNew: eN, bestOfNitro: eb, plans: eR, compare: ev } = eI,
        eO = eh ? W : z,
        ej = (0, i.jsxs)("div", {
            className: a()(eO.container, eO.responsiveContainer, {
                [eO.containerBackground]: eh || $,
                [W.fadeInFromTop]: !J && eh,
            }),
            "data-cy": "tier-0-marketing-page",
            children: [
                eh &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(O.A, { className: W.topOfPageGradient }),
                            (0, i.jsx)(k.A, { navBarSections: eI, activeSectionId: eS }),
                        ],
                    }),
                !eh &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: z.heroHeaderSideGradient }),
                            (0, i.jsx)("img", { src: K, className: z.heroHeaderBackgroundStars, alt: "" }),
                        ],
                    }),
                (0, i.jsxs)("div", {
                    className: eO.sectionsContainer,
                    children: [
                        (0, i.jsx)("div", {
                            className: eO.heroHeadingContainer,
                            ref: ef.ref,
                            children: (0, i.jsx)(c.L, {
                                innerRef: Z,
                                onChange: (e) => et(e),
                                threshold: 0,
                                active: !0,
                                children: eh
                                    ? (0, i.jsx)(L.A, { ref: Z, subscriptionTier: em, isEligibleForBogoPromotion: eA })
                                    : (0, i.jsx)(U.A, {
                                          ref: Z,
                                          subscriptionTier: em,
                                          isDarkMode: $,
                                          isEligibleForBogoPromotion: eA,
                                          videoRef: n,
                                      }),
                            }),
                        }),
                        eA &&
                            (0, i.jsx)("div", {
                                className: eO.promoBannerContainer,
                                children: (0, i.jsx)(f.A, { variant: f.c.APPLICATION_NITRO_HOME }),
                            }),
                        (0, i.jsx)("div", {
                            className: eO.whatsNewSectionContainer,
                            ref: eN.ref,
                            children: (0, i.jsx)(v.Ct, {
                                shouldLoadVideo: eo,
                                isReducedMotion: J,
                                enablePremiumBrandRefreshDesign: eh,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: eO.bestOfNitroSectionContainer,
                            ref: eb.ref,
                            children: (0, i.jsx)(v.oO, {
                                shouldLoadVideo: eo,
                                isReducedMotion: J,
                                enablePremiumBrandRefreshDesign: eh,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: eO.premiumTierCardsContainer,
                            ref: eR.ref,
                            children: (0, i.jsx)(c.L, {
                                innerRef: r,
                                onChange: (e) => er(e),
                                threshold: 0.1,
                                active: !0,
                                children: eh
                                    ? (0, i.jsx)(b.hy, { innerRef: r })
                                    : (0, i.jsx)(R.jP, { innerRef: r, hasActiveTier2PremiumPromotion: eg }),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: eO.planComparisonTableContainer,
                            ref: ev.ref,
                            children: eh ? (0, i.jsx)(M.A, {}) : (0, i.jsx)(P.A, {}),
                        }),
                    ],
                }),
                !eh &&
                    (0, i.jsx)(j.A, {
                        isVisible: ep && eo,
                        subscriptionTier: em,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: eA,
                    }),
                (0, i.jsx)(c.L, {
                    innerRef: X,
                    onChange: (e) => {
                        e &&
                            !ea &&
                            (C.default.track(F.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eE }),
                            el(!0));
                    },
                    children: (0, i.jsx)("div", { ref: X, className: eO.bottomOfPageVisibilitySensor }),
                }),
                (0, i.jsx)(c.L, {
                    innerRef: q,
                    onChange: (e) => {
                        ei(e);
                    },
                    children: eh
                        ? (0, i.jsx)(y.A, { ref: q })
                        : (0, i.jsx)(G.A, {
                              ref: q,
                              isFooterVisible: en,
                              isDarkMode: $,
                              isReducedMotion: J,
                              subscriptionTier: em,
                          }),
                }),
                eh &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(D.A, {
                                isVisible: ep && eo,
                                subscriptionTier: em,
                                isEligibleForBogoPromotion: eA,
                            }),
                            (0, i.jsx)(O.A, { className: W.bottomOfPageGradient }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)(u.NPJ, {
        theme: eh ? Y.NJ.DARKER : Q,
        children: (e) => (0, i.jsx)(u.GtU, { className: a()(eO.scroller, e), ref: t, children: ej }),
    });
};
