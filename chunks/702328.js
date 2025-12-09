n.d(t, { Z: () => z }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(622535),
    c = n(780384),
    u = n(481060),
    d = n(410030),
    f = n(607070),
    p = n(100527),
    _ = n(906732),
    m = n(433811),
    h = n(214852),
    g = n(78839),
    E = n(431),
    b = n(626135),
    y = n(74538),
    O = n(367074),
    v = n(931118),
    S = n(283066),
    I = n(622909),
    T = n(639119),
    A = n(8647),
    C = n(744129),
    N = n(823188),
    P = n(611116),
    R = n(306066),
    D = n(349803),
    w = n(8231),
    x = n(864879),
    L = n(238649),
    j = n(47840),
    M = n(975978),
    k = n(836332),
    U = n(903250),
    G = n(954003),
    Z = n(664134),
    B = n(457227),
    F = n(474936),
    V = n(981631),
    H = n(231338),
    Y = n(379039),
    W = n(810392),
    K = n(107283);
let z = () => {
    (0, h.z)(m.X);
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(null),
        a = i.useRef(null),
        z = i.useRef(null),
        q = i.useRef(null),
        Q = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        X = (0, d.ZP)(),
        J = (0, c.wj)(X),
        [$, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        [er, ei] = i.useState(!1),
        [ea, eo] = i.useState(!1),
        [es, el] = i.useState(!1),
        ec = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        eu = null != ec ? (0, y.Af)(ec) : null,
        ed = null != eu ? y.ZP.getSkuIdForPlan(eu.planId) : null,
        ef = null !== ed && ed !== F.Si.TIER_2 ? F.Si.TIER_2 : null,
        ep = (0, O.Vi)(),
        e_ = null != ep && ep,
        { analyticsLocations: em } = (0, _.ZP)(p.Z.PREMIUM_MARKETING),
        eh = (0, S.Z)({ location: "PremiumMarketing" }),
        eg = !$ && !er && (eh || !et);
    i.useEffect(() => {
        el(!0);
    }, []);
    let eE = [Z.h.HOME, Z.h.WHATS_NEW, Z.h.BEST_OF_NITRO, Z.h.PLANS, Z.h.COMPARE],
        { navBarSections: eb, activeSectionId: ey } = (0, G.O)(eE),
        { home: eO, whatsNew: ev, bestOfNitro: eS, plans: eI, compare: eT } = eb,
        eA = eh ? Y : W,
        { variant: eC } = (0, v.ZP)("PremiumBrandRefreshMarketingHeroHeading"),
        eN = (0, T.N)(),
        eP = (0, I.N)(),
        eR =
            E.Z.getAlmostExpiringTrialOffers([F.Si.TIER_2]).length > 0 &&
            null != eN &&
            null != eN.expires_at &&
            eN.trial_id !== F.a7,
        eD = E.Z.getAlmostExpiringDiscountOffers([F.Si.TIER_2]).length > 0 && null != eP && null != eP.expires_at,
        ew = eR ? eN.expires_at : eD ? eP.expires_at : null,
        ex = eC === v.tE.HERO_COUNTDOWN && (eR || eD) && null != ew,
        eL = (0, r.jsxs)("div", {
            className: o()(eA.container, eA.responsiveContainer, {
                [eA.containerBackground]: eh || J,
                [Y.fadeInFromTop]: !Q && eh,
            }),
            "data-cy": "tier-0-marketing-page",
            children: [
                eh &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(R.Z, {
                                className: o()(Y.topOfPageGradient, { [Y.topOfPageGradientWithCountdown]: ex }),
                            }),
                            (0, r.jsx)(B.Z, {
                                navBarSections: eb,
                                activeSectionId: ey,
                            }),
                        ],
                    }),
                !eh &&
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
                                children: eh
                                    ? (0, r.jsx)(L.Z, {
                                          ref: a,
                                          subscriptionTier: ef,
                                          isEligibleForBogoPromotion: ep,
                                          offerExpiresAt: ex ? ew : null,
                                      })
                                    : (0, r.jsx)(U.Z, {
                                          ref: a,
                                          subscriptionTier: ef,
                                          isDarkMode: J,
                                          isEligibleForBogoPromotion: ep,
                                          videoRef: t,
                                      }),
                            }),
                        }),
                        ep &&
                            (0, r.jsx)("div", {
                                className: eA.promoBannerContainer,
                                children: (0, r.jsx)(A.Z, { variant: A.C.APPLICATION_NITRO_HOME }),
                            }),
                        (0, r.jsx)("div", {
                            className: eA.whatsNewSectionContainer,
                            ref: ev.ref,
                            children: (0, r.jsx)(P.g, {
                                shouldLoadVideo: es,
                                isReducedMotion: Q,
                                enablePremiumBrandRefreshDesign: eh,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eA.bestOfNitroSectionContainer,
                            ref: eS.ref,
                            children: (0, r.jsx)(P.G_, {
                                shouldLoadVideo: es,
                                isReducedMotion: Q,
                                enablePremiumBrandRefreshDesign: eh,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eA.premiumTierCardsContainer,
                            ref: eI.ref,
                            children: (0, r.jsx)(l.$, {
                                innerRef: n,
                                onChange: (e) => ei(e),
                                threshold: 0.1,
                                active: !0,
                                children: eh
                                    ? (0, r.jsx)(C.rz, { innerRef: n })
                                    : (0, r.jsx)(N.Ub, {
                                          innerRef: n,
                                          hasActiveTier2PremiumPromotion: e_,
                                      }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eA.planComparisonTableContainer,
                            ref: eT.ref,
                            children: eh ? (0, r.jsx)(M.Z, {}) : (0, r.jsx)(w.Z, {}),
                        }),
                    ],
                }),
                !eh &&
                    (0, r.jsx)(D.Z, {
                        isVisible: eg && es,
                        subscriptionTier: ef,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: ep,
                    }),
                (0, r.jsx)(l.$, {
                    innerRef: z,
                    onChange: (e) => {
                        e &&
                            !ea &&
                            (b.default.track(V.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: em }),
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
                    children: eh
                        ? (0, r.jsx)(x.Z, { ref: q })
                        : (0, r.jsx)(k.Z, {
                              ref: q,
                              isFooterVisible: et,
                              isDarkMode: J,
                              isReducedMotion: Q,
                              subscriptionTier: ef,
                          }),
                }),
                eh &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(j.Z, {
                                isVisible: eg && es,
                                subscriptionTier: ef,
                                isEligibleForBogoPromotion: ep,
                            }),
                            (0, r.jsx)(R.Z, { className: Y.bottomOfPageGradient }),
                        ],
                    }),
            ],
        });
    return (0, r.jsx)(u.f6W, {
        theme: eh ? H.BR.DARKER : X,
        children: (t) =>
            (0, r.jsx)(u.yWw, {
                className: o()(eA.scroller, t),
                ref: e,
                children: eL,
            }),
    });
};
