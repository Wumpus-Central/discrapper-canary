n.d(t, { Z: () => z }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(622535),
    c = n(780384),
    u = n(481060),
    d = n(410030),
    f = n(607070),
    _ = n(100527),
    p = n(906732),
    h = n(433811),
    m = n(214852),
    g = n(78839),
    E = n(431),
    b = n(626135),
    y = n(74538),
    O = n(367074),
    v = n(931118),
    I = n(283066),
    S = n(622909),
    T = n(639119),
    A = n(8647),
    C = n(744129),
    N = n(823188),
    R = n(611116),
    P = n(306066),
    w = n(349803),
    D = n(8231),
    x = n(864879),
    L = n(238649),
    M = n(47840),
    j = n(975978),
    k = n(836332),
    U = n(903250),
    G = n(954003),
    B = n(664134),
    Z = n(457227),
    F = n(474936),
    V = n(981631),
    H = n(231338),
    Y = n(379039),
    W = n(810392),
    K = n(107283);
let z = () => {
    (0, m.z)(h.X);
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(null),
        a = i.useRef(null),
        z = i.useRef(null),
        q = i.useRef(null),
        X = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        Q = (0, d.ZP)(),
        J = (0, c.wj)(Q),
        [$, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        [er, ei] = i.useState(!1),
        [ea, eo] = i.useState(!1),
        [es, el] = i.useState(!1),
        ec = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        eu = null != ec ? (0, y.Af)(ec) : null,
        ed = null != eu ? y.ZP.getSkuIdForPlan(eu.planId) : null,
        ef = null !== ed && ed !== F.Si.TIER_2 ? F.Si.TIER_2 : null,
        e_ = (0, O.Vi)(),
        ep = null != e_ && e_,
        { analyticsLocations: eh } = (0, p.ZP)(_.Z.PREMIUM_MARKETING),
        em = (0, I.Z)({ location: "PremiumMarketing" }),
        eg = !$ && !er && (em || !et);
    i.useEffect(() => {
        el(!0);
    }, []);
    let eE = [B.h.HOME, B.h.WHATS_NEW, B.h.BEST_OF_NITRO, B.h.PLANS, B.h.COMPARE],
        { navBarSections: eb, activeSectionId: ey } = (0, G.O)(eE),
        { home: eO, whatsNew: ev, bestOfNitro: eI, plans: eS, compare: eT } = eb,
        eA = em ? Y : W,
        { variant: eC } = (0, v.ZP)("PremiumBrandRefreshMarketingHeroHeading"),
        eN = (0, T.N)(),
        eR = (0, S.N)(),
        eP =
            E.Z.getAlmostExpiringTrialOffers([F.Si.TIER_2]).length > 0 &&
            null != eN &&
            null != eN.expires_at &&
            eN.trial_id !== F.a7,
        ew = E.Z.getAlmostExpiringDiscountOffers([F.Si.TIER_2]).length > 0 && null != eR && null != eR.expires_at,
        eD = eP ? eN.expires_at : ew ? eR.expires_at : null,
        ex = eC === v.tE.HERO_COUNTDOWN && (eP || ew) && null != eD,
        eL = (0, r.jsxs)("div", {
            className: o()(eA.container, eA.responsiveContainer, {
                [eA.containerBackground]: em || J,
                [Y.fadeInFromTop]: !X && em,
            }),
            "data-cy": "tier-0-marketing-page",
            children: [
                em &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(P.Z, {
                                className: o()(Y.topOfPageGradient, { [Y.topOfPageGradientWithCountdown]: ex }),
                            }),
                            (0, r.jsx)(Z.Z, {
                                navBarSections: eb,
                                activeSectionId: ey,
                            }),
                        ],
                    }),
                !em &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", { className: W.heroHeaderSideGradient }),
                            (0, r.jsx)("img", {
                                src: K,
                                className: W.heroHeaderBackgroundStars,
                                alt: "",
                            }),
                        ],
                    }),
                (0, r.jsxs)("div", {
                    className: eA.sectionsContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: eA.heroHeadingContainer,
                            ref: eO.ref,
                            children: (0, r.jsx)(l.$, {
                                innerRef: a,
                                onChange: (e) => ee(e),
                                threshold: 0,
                                active: !0,
                                children: em
                                    ? (0, r.jsx)(L.Z, {
                                          ref: a,
                                          subscriptionTier: ef,
                                          isEligibleForBogoPromotion: e_,
                                          offerExpiresAt: ex ? eD : null,
                                      })
                                    : (0, r.jsx)(U.Z, {
                                          ref: a,
                                          subscriptionTier: ef,
                                          isDarkMode: J,
                                          isEligibleForBogoPromotion: e_,
                                          videoRef: t,
                                      }),
                            }),
                        }),
                        e_ &&
                            (0, r.jsx)("div", {
                                className: eA.promoBannerContainer,
                                children: (0, r.jsx)(A.Z, { variant: A.C.APPLICATION_NITRO_HOME }),
                            }),
                        (0, r.jsx)("div", {
                            className: eA.whatsNewSectionContainer,
                            ref: ev.ref,
                            children: (0, r.jsx)(R.g, {
                                shouldLoadVideo: es,
                                isReducedMotion: X,
                                enablePremiumBrandRefreshDesign: em,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eA.bestOfNitroSectionContainer,
                            ref: eI.ref,
                            children: (0, r.jsx)(R.G_, {
                                shouldLoadVideo: es,
                                isReducedMotion: X,
                                enablePremiumBrandRefreshDesign: em,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eA.premiumTierCardsContainer,
                            ref: eS.ref,
                            children: (0, r.jsx)(l.$, {
                                innerRef: n,
                                onChange: (e) => ei(e),
                                threshold: 0.1,
                                active: !0,
                                children: em
                                    ? (0, r.jsx)(C.rz, { innerRef: n })
                                    : (0, r.jsx)(N.Ub, {
                                          innerRef: n,
                                          hasActiveTier2PremiumPromotion: ep,
                                      }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eA.planComparisonTableContainer,
                            ref: eT.ref,
                            children: em ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(D.Z, {}),
                        }),
                    ],
                }),
                !em &&
                    (0, r.jsx)(w.Z, {
                        isVisible: eg && es,
                        subscriptionTier: ef,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: e_,
                    }),
                (0, r.jsx)(l.$, {
                    innerRef: z,
                    onChange: (e) => {
                        e &&
                            !ea &&
                            (b.default.track(V.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eh }),
                            eo(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: z,
                        className: eA.bottomOfPageVisibilitySensor,
                    }),
                }),
                (0, r.jsx)(l.$, {
                    innerRef: q,
                    onChange: (e) => {
                        en(e);
                    },
                    children: em
                        ? (0, r.jsx)(x.Z, { ref: q })
                        : (0, r.jsx)(k.Z, {
                              ref: q,
                              isFooterVisible: et,
                              isDarkMode: J,
                              isReducedMotion: X,
                              subscriptionTier: ef,
                          }),
                }),
                em &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(M.Z, {
                                isVisible: eg && es,
                                subscriptionTier: ef,
                                isEligibleForBogoPromotion: e_,
                            }),
                            (0, r.jsx)(P.Z, { className: Y.bottomOfPageGradient }),
                        ],
                    }),
            ],
        });
    return (0, r.jsx)(u.f6W, {
        theme: em ? H.BR.DARKER : Q,
        children: (t) =>
            (0, r.jsx)(u.yWw, {
                className: o()(eA.scroller, t),
                ref: e,
                children: eL,
            }),
    });
};
