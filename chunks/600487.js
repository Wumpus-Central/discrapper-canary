n.d(t, { A: () => q }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(230109),
    c = n(582754),
    u = n(397927),
    d = n(736653),
    f = n(775602),
    p = n(793574),
    _ = n(688810),
    h = n(726649),
    m = n(611924),
    g = n(166403),
    E = n(816733),
    b = n(954571),
    y = n(927578),
    O = n(40185),
    A = n(804412),
    v = n(170887),
    S = n(422936),
    I = n(234419),
    T = n(130946),
    C = n(407775),
    N = n(501007),
    R = n(26010),
    w = n(54009),
    P = n(252711),
    D = n(584767),
    x = n(191430),
    L = n(475805),
    j = n(564230),
    M = n(974005),
    k = n(305714),
    U = n(658137),
    G = n(694195),
    V = n(716442),
    F = n(704877),
    B = n(788868),
    H = n(652215),
    Y = n(818348),
    W = n(549447),
    K = n(66283),
    z = n(122402);
let q = () => {
    (0, m.P)(h.b);
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(null),
        a = i.useRef(null),
        q = i.useRef(null),
        X = i.useRef(null),
        Z = (0, o.bG)([f.A], () => f.A.useReducedMotion),
        Q = (0, d.Ay)(),
        $ = (0, c.Mw)(Q),
        [J, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        [er, ei] = i.useState(!1),
        [ea, es] = i.useState(!1),
        [eo, el] = i.useState(!1),
        ec = (0, o.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        eu = null != ec ? (0, y.EL)(ec) : null,
        ed = null != eu ? y.Ay.getSkuIdForPlan(eu.planId) : null,
        ef = null !== ed && ed !== B.pe.TIER_2 ? B.pe.TIER_2 : null,
        ep = (0, O.cg)(),
        e_ = null != ep && ep,
        { analyticsLocations: eh } = (0, _.Ay)(p.A.PREMIUM_MARKETING),
        em = (0, v.A)({ location: "PremiumMarketing" }),
        eg = !J && !er && (em || !et);
    i.useEffect(() => {
        el(!0);
    }, []);
    let eE = [V.k.HOME, V.k.WHATS_NEW, V.k.BEST_OF_NITRO, V.k.PLANS, V.k.COMPARE],
        { navBarSections: eb, activeSectionId: ey } = (0, G.o)(eE),
        { home: eO, whatsNew: eA, bestOfNitro: ev, plans: eS, compare: eI } = eb,
        eT = em ? W : K,
        { variant: eC } = (0, A.Ay)("PremiumBrandRefreshMarketingHeroHeading"),
        eN = (0, I.V)(),
        eR = (0, S.O)(),
        ew =
            E.A.getAlmostExpiringTrialOffers([B.pe.TIER_2]).length > 0 &&
            null != eN &&
            null != eN.expires_at &&
            eN.trial_id !== B.Dw,
        eP = E.A.getAlmostExpiringDiscountOffers([B.pe.TIER_2]).length > 0 && null != eR && null != eR.expires_at,
        eD = ew ? eN.expires_at : eP ? eR.expires_at : null,
        ex = eC === A.CJ.HERO_COUNTDOWN && (ew || eP) && null != eD,
        eL = (0, r.jsxs)("div", {
            className: s()(eT.container, eT.responsiveContainer, {
                [eT.containerBackground]: em || $,
                [W.fadeInFromTop]: !Z && em,
            }),
            "data-cy": "tier-0-marketing-page",
            children: [
                em &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(w.A, {
                                className: s()(W.topOfPageGradient, { [W.topOfPageGradientWithCountdown]: ex }),
                            }),
                            (0, r.jsx)(F.A, {
                                navBarSections: eb,
                                activeSectionId: ey,
                            }),
                        ],
                    }),
                !em &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", { className: K.heroHeaderSideGradient }),
                            (0, r.jsx)("img", {
                                src: z,
                                className: K.heroHeaderBackgroundStars,
                                alt: "",
                            }),
                        ],
                    }),
                (0, r.jsxs)("div", {
                    className: eT.sectionsContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: eT.heroHeadingContainer,
                            ref: eO.ref,
                            children: (0, r.jsx)(l.L, {
                                innerRef: a,
                                onChange: (e) => ee(e),
                                threshold: 0,
                                active: !0,
                                children: em
                                    ? (0, r.jsx)(L.A, {
                                          ref: a,
                                          subscriptionTier: ef,
                                          isEligibleForBogoPromotion: ep,
                                          offerExpiresAt: ex ? eD : null,
                                      })
                                    : (0, r.jsx)(U.A, {
                                          ref: a,
                                          subscriptionTier: ef,
                                          isDarkMode: $,
                                          isEligibleForBogoPromotion: ep,
                                          videoRef: t,
                                      }),
                            }),
                        }),
                        ep &&
                            (0, r.jsx)("div", {
                                className: eT.promoBannerContainer,
                                children: (0, r.jsx)(T.A, { variant: T.c.APPLICATION_NITRO_HOME }),
                            }),
                        (0, r.jsx)("div", {
                            className: eT.whatsNewSectionContainer,
                            ref: eA.ref,
                            children: (0, r.jsx)(R.Ct, {
                                shouldLoadVideo: eo,
                                isReducedMotion: Z,
                                enablePremiumBrandRefreshDesign: em,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eT.bestOfNitroSectionContainer,
                            ref: ev.ref,
                            children: (0, r.jsx)(R.oO, {
                                shouldLoadVideo: eo,
                                isReducedMotion: Z,
                                enablePremiumBrandRefreshDesign: em,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eT.premiumTierCardsContainer,
                            ref: eS.ref,
                            children: (0, r.jsx)(l.L, {
                                innerRef: n,
                                onChange: (e) => ei(e),
                                threshold: 0.1,
                                active: !0,
                                children: em
                                    ? (0, r.jsx)(C.hy, { innerRef: n })
                                    : (0, r.jsx)(N.jP, {
                                          innerRef: n,
                                          hasActiveTier2PremiumPromotion: e_,
                                      }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eT.planComparisonTableContainer,
                            ref: eI.ref,
                            children: em ? (0, r.jsx)(M.A, {}) : (0, r.jsx)(D.A, {}),
                        }),
                    ],
                }),
                !em &&
                    (0, r.jsx)(P.A, {
                        isVisible: eg && eo,
                        subscriptionTier: ef,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: ep,
                    }),
                (0, r.jsx)(l.L, {
                    innerRef: q,
                    onChange: (e) => {
                        e &&
                            !ea &&
                            (b.default.track(H.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eh }),
                            es(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: q,
                        className: eT.bottomOfPageVisibilitySensor,
                    }),
                }),
                (0, r.jsx)(l.L, {
                    innerRef: X,
                    onChange: (e) => {
                        en(e);
                    },
                    children: em
                        ? (0, r.jsx)(x.A, { ref: X })
                        : (0, r.jsx)(k.A, {
                              ref: X,
                              isFooterVisible: et,
                              isDarkMode: $,
                              isReducedMotion: Z,
                              subscriptionTier: ef,
                          }),
                }),
                em &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(j.A, {
                                isVisible: eg && eo,
                                subscriptionTier: ef,
                                isEligibleForBogoPromotion: ep,
                            }),
                            (0, r.jsx)(w.A, { className: W.bottomOfPageGradient }),
                        ],
                    }),
            ],
        });
    return (0, r.jsx)(u.NPJ, {
        theme: em ? Y.NJ.DARKER : Q,
        children: (t) =>
            (0, r.jsx)(u.GtU, {
                className: s()(eT.scroller, t),
                ref: e,
                children: eL,
            }),
    });
};
