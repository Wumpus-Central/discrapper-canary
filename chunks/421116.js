n.d(t, {
    A: () => K,
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
    b = n(166403),
    h = n(954571),
    E = n(927578),
    O = n(40185),
    C = n(170887),
    x = n(130946),
    S = n(407775),
    T = n(501007),
    I = n(26010),
    y = n(54009),
    N = n(252711),
    j = n(584767),
    v = n(191430),
    P = n(475805),
    R = n(564230),
    D = n(974005),
    L = n(305714),
    w = n(658137),
    M = n(927258),
    G = n(57978),
    U = n(694195),
    k = n(716442),
    B = n(788868),
    H = n(652215),
    V = n(818348),
    F = n(549447),
    Y = n(157650),
    W = n(122402);
let K = () => {
    let e = (0, a.zy)();
    (0, f.P)(A.b);
    let t = i.useRef(null),
        n = i.useRef(null),
        l = i.useRef(null),
        K = i.useRef(null),
        z = i.useRef(null),
        Z = i.useRef(null),
        X = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        q = (0, _.Ay)(),
        J = (0, d.Mw)(q),
        [Q, $] = i.useState(!1),
        [ee, et] = i.useState(!1),
        [en, er] = i.useState(!1),
        [ei, el] = i.useState(!1),
        [es, ea] = i.useState(!1),
        eo = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
        ec = null != eo ? (0, E.EL)(eo) : null,
        ed = null != ec ? E.Ay.getSkuIdForPlan(ec.planId) : null,
        eu = null !== ed && ed !== B.pe.TIER_2 ? B.pe.TIER_2 : null,
        e_ = (0, O.cg)(),
        ep = null != e_ && e_,
        { analyticsLocations: em } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
        eg = (0, C.A)({
            location: "PremiumMarketing",
        }),
        eA = !Q && !en && (eg || !ee);
    i.useEffect(() => {
        ea(!0);
    }, []),
        i.useEffect(() => {
            if (!es || "orbs" !== new URLSearchParams(e.search).get("section")) return;
            let t = requestAnimationFrame(() => {
                let e = document.getElementById(G.NI.ORB_REWARDS);
                null != e &&
                    e.scrollIntoView({
                        behavior: X ? "auto" : "smooth",
                        block: "start",
                    });
            });
            return () => cancelAnimationFrame(t);
        }, [e.search, es, X]);
    let ef = [k.k.HOME, k.k.WHATS_NEW, k.k.BEST_OF_NITRO, k.k.PLANS, k.k.COMPARE],
        { navBarSections: eb, activeSectionId: eh } = (0, U.o)(ef),
        { home: eE, whatsNew: eO, bestOfNitro: eC, plans: ex, compare: eS } = eb,
        eT = eg ? F : Y,
        eI = (0, r.jsxs)("div", {
            className: s()(eT.container, eT.responsiveContainer, {
                [eT.containerBackground]: eg || J,
                [F.fadeInFromTop]: !X && eg,
            }),
            "data-cy": "tier-0-marketing-page",
            children: [
                eg &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(y.A, {
                                className: F.topOfPageGradient,
                            }),
                            (0, r.jsx)(M.A, {
                                navBarSections: eb,
                                activeSectionId: eh,
                            }),
                        ],
                    }),
                !eg &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", {
                                className: Y.heroHeaderSideGradient,
                            }),
                            (0, r.jsx)("img", {
                                src: W,
                                className: Y.heroHeaderBackgroundStars,
                                alt: "",
                            }),
                        ],
                    }),
                (0, r.jsxs)("div", {
                    className: eT.sectionsContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: eT.heroHeadingContainer,
                            ref: eE.ref,
                            children: (0, r.jsx)(c.L, {
                                innerRef: K,
                                onChange: (e) => $(e),
                                threshold: 0,
                                active: !0,
                                children: eg
                                    ? (0, r.jsx)(P.A, {
                                          ref: K,
                                          subscriptionTier: eu,
                                          isEligibleForBogoPromotion: e_,
                                      })
                                    : (0, r.jsx)(w.A, {
                                          ref: K,
                                          subscriptionTier: eu,
                                          isDarkMode: J,
                                          isEligibleForBogoPromotion: e_,
                                          videoRef: n,
                                      }),
                            }),
                        }),
                        e_ &&
                            (0, r.jsx)("div", {
                                className: eT.promoBannerContainer,
                                children: (0, r.jsx)(x.A, {
                                    variant: x.c.APPLICATION_NITRO_HOME,
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: eT.whatsNewSectionContainer,
                            ref: eO.ref,
                            children: (0, r.jsx)(I.Ct, {
                                shouldLoadVideo: es,
                                isReducedMotion: X,
                                enablePremiumBrandRefreshDesign: eg,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eT.bestOfNitroSectionContainer,
                            ref: eC.ref,
                            children: (0, r.jsx)(I.oO, {
                                shouldLoadVideo: es,
                                isReducedMotion: X,
                                enablePremiumBrandRefreshDesign: eg,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eT.premiumTierCardsContainer,
                            ref: ex.ref,
                            children: (0, r.jsx)(c.L, {
                                innerRef: l,
                                onChange: (e) => er(e),
                                threshold: 0.1,
                                active: !0,
                                children: eg
                                    ? (0, r.jsx)(S.hy, {
                                          innerRef: l,
                                      })
                                    : (0, r.jsx)(T.jP, {
                                          innerRef: l,
                                          hasActiveTier2PremiumPromotion: ep,
                                      }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: eT.planComparisonTableContainer,
                            ref: eS.ref,
                            children: eg ? (0, r.jsx)(D.A, {}) : (0, r.jsx)(j.A, {}),
                        }),
                    ],
                }),
                !eg &&
                    (0, r.jsx)(N.A, {
                        isVisible: eA && es,
                        subscriptionTier: eu,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: e_,
                    }),
                (0, r.jsx)(c.L, {
                    innerRef: z,
                    onChange: (e) => {
                        e &&
                            !ei &&
                            (h.default.track(H.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: em,
                            }),
                            el(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: z,
                        className: eT.bottomOfPageVisibilitySensor,
                    }),
                }),
                (0, r.jsx)(c.L, {
                    innerRef: Z,
                    onChange: (e) => {
                        et(e);
                    },
                    children: eg
                        ? (0, r.jsx)(v.A, {
                              ref: Z,
                          })
                        : (0, r.jsx)(L.A, {
                              ref: Z,
                              isFooterVisible: ee,
                              isDarkMode: J,
                              isReducedMotion: X,
                              subscriptionTier: eu,
                          }),
                }),
                eg &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(R.A, {
                                isVisible: eA && es,
                                subscriptionTier: eu,
                                isEligibleForBogoPromotion: e_,
                            }),
                            (0, r.jsx)(y.A, {
                                className: F.bottomOfPageGradient,
                            }),
                        ],
                    }),
            ],
        });
    return (0, r.jsx)(u.NPJ, {
        theme: eg ? V.NJ.DARKER : q,
        children: (e) =>
            (0, r.jsx)(u.GtU, {
                className: s()(eT.scroller, e),
                ref: t,
                children: eI,
            }),
    });
};
