n.d(t, {
    A: () => q,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(960488),
    o = n(311907),
    c = n(230109),
    d = n(582754),
    u = n(397927),
    _ = n(736653),
    p = n(775602),
    m = n(793574),
    g = n(688810),
    A = n(726649),
    f = n(611924),
    h = n(166403),
    b = n(816733),
    E = n(954571),
    x = n(927578),
    O = n(40185),
    C = n(804412),
    I = n(170887),
    T = n(422936),
    S = n(234419),
    j = n(130946),
    v = n(407775),
    N = n(501007),
    y = n(26010),
    P = n(54009),
    R = n(252711),
    D = n(584767),
    w = n(191430),
    L = n(475805),
    M = n(564230),
    U = n(974005),
    G = n(305714),
    k = n(658137),
    V = n(57978),
    H = n(694195),
    B = n(716442),
    F = n(927258),
    Y = n(788868),
    W = n(652215),
    z = n(818348),
    K = n(549447),
    Z = n(66283),
    X = n(122402);
let q = () => {
    let e = (0, a.zy)();
    (0, f.P)(A.b);
    let t = i.useRef(null),
        n = i.useRef(null),
        l = i.useRef(null),
        q = i.useRef(null),
        J = i.useRef(null),
        Q = i.useRef(null),
        $ = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        ee = (0, _.Ay)(),
        et = (0, d.Mw)(ee),
        [en, er] = i.useState(!1),
        [ei, el] = i.useState(!1),
        [es, ea] = i.useState(!1),
        [eo, ec] = i.useState(!1),
        [ed, eu] = i.useState(!1),
        e_ = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        ep = null != e_ ? (0, x.EL)(e_) : null,
        em = null != ep ? x.Ay.getSkuIdForPlan(ep.planId) : null,
        eg = null !== em && em !== Y.pe.TIER_2 ? Y.pe.TIER_2 : null,
        eA = (0, O.cg)(),
        ef = null != eA && eA,
        { analyticsLocations: eh } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
        eb = (0, I.A)({
            location: "PremiumMarketing",
        }),
        eE = !en && !es && (eb || !ei);
    i.useEffect(() => {
        eu(!0);
    }, []),
        i.useEffect(() => {
            if (!ed || "orbs" !== new URLSearchParams(e.search).get("section")) return;
            let t = requestAnimationFrame(() => {
                let e = document.getElementById(V.NI.ORB_REWARDS);
                null != e &&
                    e.scrollIntoView({
                        behavior: $ ? "auto" : "smooth",
                        block: "start",
                    });
            });
            return () => cancelAnimationFrame(t);
        }, [e.search, ed, $]);
    let ex = [B.k.HOME, B.k.WHATS_NEW, B.k.BEST_OF_NITRO, B.k.PLANS, B.k.COMPARE],
        { navBarSections: eO, activeSectionId: eC } = (0, H.o)(ex),
        { home: eI, whatsNew: eT, bestOfNitro: eS, plans: ej, compare: ev } = eO,
        eN = eb ? K : Z,
        { variant: ey } = (0, C.Ay)("PremiumBrandRefreshMarketingHeroHeading"),
        eP = (0, S.V)(),
        eR = (0, T.O)(),
        eD =
            b.A.getAlmostExpiringTrialOffers([Y.pe.TIER_2]).length > 0 &&
            null != eP &&
            null != eP.expires_at &&
            eP.trial_id !== Y.Dw,
        ew = b.A.getAlmostExpiringDiscountOffers([Y.pe.TIER_2]).length > 0 && null != eR && null != eR.expires_at,
        eL = eD ? eP.expires_at : ew ? eR.expires_at : null,
        eM = ey === C.CJ.HERO_COUNTDOWN && (eD || ew) && null != eL,
        eU = (0, r.jsxs)("div", {
            className: s()(eN.container, eN.responsiveContainer, {
                [eN.containerBackground]: eb || et,
                [K.fadeInFromTop]: !$ && eb,
            }),
            "data-cy": "tier-0-marketing-page",
            children: [
                eb &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(P.A, {
                                className: s()(K.topOfPageGradient, {
                                    [K.topOfPageGradientWithCountdown]: eM,
                                }),
                            }),
                            (0, r.jsx)(F.A, {
                                navBarSections: eO,
                                activeSectionId: eC,
                            }),
                        ],
                    }),
                !eb &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", {
                                className: Z.heroHeaderSideGradient,
                            }),
                            (0, r.jsx)("img", {
                                src: X,
                                className: Z.heroHeaderBackgroundStars,
                                alt: "",
                            }),
                        ],
                    }),
                (0, r.jsxs)("div", {
                    className: eN.sectionsContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: eN.heroHeadingContainer,
                            ref: eI.ref,
                            children: (0, r.jsx)(c.L, {
                                innerRef: q,
                                onChange: (e) => er(e),
                                threshold: 0,
                                active: !0,
                                children: eb
                                    ? (0, r.jsx)(L.A, {
                                          ref: q,
                                          subscriptionTier: eg,
                                          isEligibleForBogoPromotion: eA,
                                          offerExpiresAt: eM ? eL : null,
                                      })
                                    : (0, r.jsx)(k.A, {
                                          ref: q,
                                          subscriptionTier: eg,
                                          isDarkMode: et,
                                          isEligibleForBogoPromotion: eA,
                                          videoRef: n,
                                      }),
                            }),
                        }),
                        eA &&
                            (0, r.jsx)("div", {
                                className: eN.promoBannerContainer,
                                children: (0, r.jsx)(j.A, {
                                    variant: j.c.APPLICATION_NITRO_HOME,
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: eN.whatsNewSectionContainer,
                            ref: eT.ref,
                            children: (0, r.jsx)(y.Ct, {
                                shouldLoadVideo: ed,
                                isReducedMotion: $,
                                enablePremiumBrandRefreshDesign: eb,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eN.bestOfNitroSectionContainer,
                            ref: eS.ref,
                            children: (0, r.jsx)(y.oO, {
                                shouldLoadVideo: ed,
                                isReducedMotion: $,
                                enablePremiumBrandRefreshDesign: eb,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eN.premiumTierCardsContainer,
                            ref: ej.ref,
                            children: (0, r.jsx)(c.L, {
                                innerRef: l,
                                onChange: (e) => ea(e),
                                threshold: 0.1,
                                active: !0,
                                children: eb
                                    ? (0, r.jsx)(v.hy, {
                                          innerRef: l,
                                      })
                                    : (0, r.jsx)(N.jP, {
                                          innerRef: l,
                                          hasActiveTier2PremiumPromotion: ef,
                                      }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eN.planComparisonTableContainer,
                            ref: ev.ref,
                            children: eb ? (0, r.jsx)(U.A, {}) : (0, r.jsx)(D.A, {}),
                        }),
                    ],
                }),
                !eb &&
                    (0, r.jsx)(R.A, {
                        isVisible: eE && ed,
                        subscriptionTier: eg,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: eA,
                    }),
                (0, r.jsx)(c.L, {
                    innerRef: J,
                    onChange: (e) => {
                        e &&
                            !eo &&
                            (E.default.track(W.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: eh,
                            }),
                            ec(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: J,
                        className: eN.bottomOfPageVisibilitySensor,
                    }),
                }),
                (0, r.jsx)(c.L, {
                    innerRef: Q,
                    onChange: (e) => {
                        el(e);
                    },
                    children: eb
                        ? (0, r.jsx)(w.A, {
                              ref: Q,
                          })
                        : (0, r.jsx)(G.A, {
                              ref: Q,
                              isFooterVisible: ei,
                              isDarkMode: et,
                              isReducedMotion: $,
                              subscriptionTier: eg,
                          }),
                }),
                eb &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(M.A, {
                                isVisible: eE && ed,
                                subscriptionTier: eg,
                                isEligibleForBogoPromotion: eA,
                            }),
                            (0, r.jsx)(P.A, {
                                className: K.bottomOfPageGradient,
                            }),
                        ],
                    }),
            ],
        });
    return (0, r.jsx)(u.NPJ, {
        theme: eb ? z.NJ.DARKER : ee,
        children: (e) =>
            (0, r.jsx)(u.GtU, {
                className: s()(eN.scroller, e),
                ref: t,
                children: eU,
            }),
    });
};
