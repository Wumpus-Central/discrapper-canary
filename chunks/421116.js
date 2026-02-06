n.d(t, { A: () => Z }), n(323874), n(14289), n(35956);
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
    p = n(166403),
    E = n(954571),
    C = n(927578),
    T = n(40185),
    S = n(170887),
    I = n(994763),
    f = n(130946),
    N = n(84483),
    b = n(407775),
    j = n(501007),
    v = n(817267),
    O = n(736455),
    R = n(690737),
    y = n(843685),
    P = n(509388),
    L = n(400292),
    D = n(536195),
    M = n(388116),
    G = n(577174),
    U = n(127493),
    k = n(23003),
    V = n(16019),
    H = n(825075),
    w = n(768229),
    B = n(788868),
    Y = n(652215),
    F = n(818348),
    z = n(511030),
    W = n(157650),
    K = n(122402);
let Z = () => {
    let e = (0, r.zy)();
    (0, x.P)(h.b);
    let t = s.useRef(null),
        n = s.useRef(null),
        a = s.useRef(null),
        Z = s.useRef(null),
        q = s.useRef(null),
        X = s.useRef(null),
        J = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        Q = (0, _.Ay)(),
        $ = (0, d.Mw)(Q),
        [ee, et] = s.useState(!1),
        [en, ei] = s.useState(!1),
        [es, ea] = s.useState(!1),
        [el, er] = s.useState(!1),
        [eo, ec] = s.useState(!1),
        ed = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        eu = null != ed ? (0, C.EL)(ed) : null,
        e_ = null != eu ? C.Ay.getSkuIdForPlan(eu.planId) : null,
        em = null !== e_ && e_ !== B.pe.TIER_2 ? B.pe.TIER_2 : null,
        eA = (0, T.cg)(),
        eg = eA ?? !1,
        { analyticsLocations: eh } = (0, g.Ay)(A.A.PREMIUM_MARKETING),
        ex = (0, S.A)({ location: "PremiumMarketing" }),
        ep = !ee && !es && (ex || !en);
    s.useEffect(() => {
        ec(!0);
    }, []);
    let { isInTreatment: eE } = (0, N.uX)("PremiumMarketingHome"),
        eC = s.useMemo(() => !!eE && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, eE]);
    (0, I.z)(k.NI.ORB_REWARDS, eC);
    let eT = [O.k.HOME, O.k.WHATS_NEW, O.k.BEST_OF_NITRO, O.k.PLANS, O.k.COMPARE],
        { navBarSections: eS, activeSectionId: eI } = (0, w.o)(eT),
        { home: ef, whatsNew: eN, bestOfNitro: eb, plans: ej, compare: ev } = eS,
        eO = ex ? z : W,
        eR = (0, i.jsxs)("div", {
            className: l()(eO.container, eO.responsiveContainer, {
                [eO.containerBackground]: ex || $,
                [z.fadeInFromTop]: !J && ex,
            }),
            "data-cy": "tier-0-marketing-page",
            children: [
                ex &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(v.A, { className: z.topOfPageGradient }),
                            (0, i.jsx)(G.A, { navBarSections: eS, activeSectionId: eI }),
                        ],
                    }),
                !ex &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)("div", { className: W.heroHeaderSideGradient }),
                            (0, i.jsx)("img", { src: K, className: W.heroHeaderBackgroundStars, alt: "" }),
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
                                children: ex
                                    ? (0, i.jsx)(V.A, { ref: Z, subscriptionTier: em, isEligibleForBogoPromotion: eA })
                                    : (0, i.jsx)(H.A, {
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
                            children: (0, i.jsx)(U.Ct, {
                                shouldLoadVideo: eo,
                                isReducedMotion: J,
                                enablePremiumBrandRefreshDesign: ex,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: eO.bestOfNitroSectionContainer,
                            ref: eb.ref,
                            children: (0, i.jsx)(U.oO, {
                                shouldLoadVideo: eo,
                                isReducedMotion: J,
                                enablePremiumBrandRefreshDesign: ex,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: eO.premiumTierCardsContainer,
                            ref: ej.ref,
                            children: (0, i.jsx)(c.L, {
                                innerRef: a,
                                onChange: (e) => ea(e),
                                threshold: 0.1,
                                active: !0,
                                children: ex
                                    ? (0, i.jsx)(b.hy, { innerRef: a })
                                    : (0, i.jsx)(j.jP, { innerRef: a, hasActiveTier2PremiumPromotion: eg }),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: eO.planComparisonTableContainer,
                            ref: ev.ref,
                            children: ex ? (0, i.jsx)(D.A, {}) : (0, i.jsx)(y.A, {}),
                        }),
                    ],
                }),
                !ex &&
                    (0, i.jsx)(R.A, {
                        isVisible: ep && eo,
                        subscriptionTier: em,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: eA,
                    }),
                (0, i.jsx)(c.L, {
                    innerRef: q,
                    onChange: (e) => {
                        e &&
                            !el &&
                            (E.default.track(Y.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eh }),
                            er(!0));
                    },
                    children: (0, i.jsx)("div", { ref: q, className: eO.bottomOfPageVisibilitySensor }),
                }),
                (0, i.jsx)(c.L, {
                    innerRef: X,
                    onChange: (e) => {
                        ei(e);
                    },
                    children: ex
                        ? (0, i.jsx)(P.A, { ref: X })
                        : (0, i.jsx)(M.A, {
                              ref: X,
                              isFooterVisible: en,
                              isDarkMode: $,
                              isReducedMotion: J,
                              subscriptionTier: em,
                          }),
                }),
                ex &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(L.A, {
                                isVisible: ep && eo,
                                subscriptionTier: em,
                                isEligibleForBogoPromotion: eA,
                            }),
                            (0, i.jsx)(v.A, { className: z.bottomOfPageGradient }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)(u.NPJ, {
        theme: ex ? F.NJ.DARKER : Q,
        children: (e) => (0, i.jsx)(u.GtU, { className: l()(eO.scroller, e), ref: t, children: eR }),
    });
};
