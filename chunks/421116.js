n.d(t, { A: () => q }), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(960488),
    o = n(311907),
    c = n(230109),
    d = n(582754),
    u = n(397927),
    _ = n(736653),
    m = n(775602),
    A = n(793574),
    g = n(688810),
    h = n(726649),
    x = n(611924),
    p = n(649032),
    E = n(26508),
    C = n(166403),
    T = n(954571),
    S = n(927578),
    I = n(40185),
    f = n(170887),
    N = n(994763),
    b = n(130946),
    j = n(407775),
    v = n(501007),
    O = n(817267),
    R = n(736455),
    y = n(690737),
    P = n(843685),
    L = n(509388),
    D = n(400292),
    M = n(536195),
    G = n(388116),
    U = n(577174),
    k = n(127493),
    V = n(23003),
    H = n(16019),
    w = n(825075),
    B = n(768229),
    Y = n(788868),
    F = n(652215),
    z = n(818348),
    W = n(511030),
    K = n(157650),
    Z = n(122402);
let q = () => {
    let e = (0, r.zy)();
    (0, x.P)(h.b);
    let t = s.useRef(null),
        n = s.useRef(null),
        a = s.useRef(null),
        q = s.useRef(null),
        X = s.useRef(null),
        J = s.useRef(null),
        Q = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        $ = (0, _.Ay)(),
        ee = (0, d.Mw)($),
        [et, en] = s.useState(!1),
        [ei, es] = s.useState(!1),
        [ea, el] = s.useState(!1),
        [er, eo] = s.useState(!1),
        [ec, ed] = s.useState(!1),
        eu = (0, o.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        e_ = null != eu ? (0, S.EL)(eu) : null,
        em = null != e_ ? S.Ay.getSkuIdForPlan(e_.planId) : null,
        eA = null !== em && em !== Y.pe.TIER_2 ? Y.pe.TIER_2 : null,
        eg = (0, I.cg)(),
        eh = eg ?? !1,
        { analyticsLocations: ex } = (0, g.Ay)(A.A.PREMIUM_MARKETING),
        ep = (0, f.A)({ location: "PremiumMarketing" }),
        eE = !et && !ea && (ep || !ei);
    s.useEffect(() => {
        ed(!0);
    }, []);
    let eC = (0, E.DK)(p.W.NITRO, "PremiumMarketingHome"),
        eT = s.useMemo(() => !!eC && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, eC]);
    (0, N.z)(V.NI.ORB_REWARDS, eT);
    let eS = [R.k.HOME, R.k.WHATS_NEW, R.k.BEST_OF_NITRO, R.k.PLANS, R.k.COMPARE],
        { navBarSections: eI, activeSectionId: ef } = (0, B.o)(eS),
        { home: eN, whatsNew: eb, bestOfNitro: ej, plans: ev, compare: eO } = eI,
        eR = ep ? W : K,
        ey = (0, i.jsxs)("div", {
            className: l()(eR.container, eR.responsiveContainer, {
                [eR.containerBackground]: ep || ee,
                [W.fadeInFromTop]: !Q && ep,
            }),
            "data-cy": "tier-0-marketing-page",
            children: [
                ep &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(O.A, { className: W.topOfPageGradient }),
                            (0, i.jsx)(U.A, { navBarSections: eI, activeSectionId: ef }),
                        ],
                    }),
                !ep &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: K.heroHeaderSideGradient }),
                            (0, i.jsx)("img", { src: Z, className: K.heroHeaderBackgroundStars, alt: "" }),
                        ],
                    }),
                (0, i.jsxs)("div", {
                    className: eR.sectionsContainer,
                    children: [
                        (0, i.jsx)("div", {
                            className: eR.heroHeadingContainer,
                            ref: eN.ref,
                            children: (0, i.jsx)(c.L, {
                                innerRef: q,
                                onChange: (e) => en(e),
                                threshold: 0,
                                active: !0,
                                children: ep
                                    ? (0, i.jsx)(H.A, { ref: q, subscriptionTier: eA, isEligibleForBogoPromotion: eg })
                                    : (0, i.jsx)(w.A, {
                                          ref: q,
                                          subscriptionTier: eA,
                                          isDarkMode: ee,
                                          isEligibleForBogoPromotion: eg,
                                          videoRef: n,
                                      }),
                            }),
                        }),
                        eg &&
                            (0, i.jsx)("div", {
                                className: eR.promoBannerContainer,
                                children: (0, i.jsx)(b.A, { variant: b.c.APPLICATION_NITRO_HOME }),
                            }),
                        (0, i.jsx)("div", {
                            className: eR.whatsNewSectionContainer,
                            ref: eb.ref,
                            children: (0, i.jsx)(k.Ct, {
                                shouldLoadVideo: ec,
                                isReducedMotion: Q,
                                enablePremiumBrandRefreshDesign: ep,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: eR.bestOfNitroSectionContainer,
                            ref: ej.ref,
                            children: (0, i.jsx)(k.oO, {
                                shouldLoadVideo: ec,
                                isReducedMotion: Q,
                                enablePremiumBrandRefreshDesign: ep,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: eR.premiumTierCardsContainer,
                            ref: ev.ref,
                            children: (0, i.jsx)(c.L, {
                                innerRef: a,
                                onChange: (e) => el(e),
                                threshold: 0.1,
                                active: !0,
                                children: ep
                                    ? (0, i.jsx)(j.hy, { innerRef: a })
                                    : (0, i.jsx)(v.jP, { innerRef: a, hasActiveTier2PremiumPromotion: eh }),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: eR.planComparisonTableContainer,
                            ref: eO.ref,
                            children: ep ? (0, i.jsx)(M.A, {}) : (0, i.jsx)(P.A, {}),
                        }),
                    ],
                }),
                !ep &&
                    (0, i.jsx)(y.A, {
                        isVisible: eE && ec,
                        subscriptionTier: eA,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: eg,
                    }),
                (0, i.jsx)(c.L, {
                    innerRef: X,
                    onChange: (e) => {
                        e &&
                            !er &&
                            (T.default.track(F.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: ex }),
                            eo(!0));
                    },
                    children: (0, i.jsx)("div", { ref: X, className: eR.bottomOfPageVisibilitySensor }),
                }),
                (0, i.jsx)(c.L, {
                    innerRef: J,
                    onChange: (e) => {
                        es(e);
                    },
                    children: ep
                        ? (0, i.jsx)(L.A, { ref: J })
                        : (0, i.jsx)(G.A, {
                              ref: J,
                              isFooterVisible: ei,
                              isDarkMode: ee,
                              isReducedMotion: Q,
                              subscriptionTier: eA,
                          }),
                }),
                ep &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(D.A, {
                                isVisible: eE && ec,
                                subscriptionTier: eA,
                                isEligibleForBogoPromotion: eg,
                            }),
                            (0, i.jsx)(O.A, { className: W.bottomOfPageGradient }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)(u.NPJ, {
        theme: ep ? z.NJ.DARKER : $,
        children: (e) => (0, i.jsx)(u.GtU, { className: l()(eR.scroller, e), ref: t, children: ey }),
    });
};
