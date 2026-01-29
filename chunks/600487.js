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
    p = n(736653),
    _ = n(775602),
    m = n(793574),
    g = n(688810),
    f = n(726649),
    b = n(611924),
    h = n(166403),
    A = n(954571),
    E = n(927578),
    x = n(40185),
    O = n(170887),
    C = n(130946),
    y = n(407775),
    j = n(501007),
    T = n(26010),
    v = n(54009),
    S = n(252711),
    I = n(584767),
    N = n(191430),
    P = n(475805),
    R = n(564230),
    D = n(974005),
    w = n(305714),
    L = n(658137),
    M = n(57978),
    G = n(694195),
    U = n(716442),
    k = n(927258),
    H = n(788868),
    B = n(652215),
    V = n(818348),
    F = n(549447),
    Y = n(66283),
    W = n(122402);
let K = () => {
    let e = (0, a.zy)();
    (0, b.P)(f.b);
    let t = i.useRef(null),
        n = i.useRef(null),
        l = i.useRef(null),
        K = i.useRef(null),
        z = i.useRef(null),
        Z = i.useRef(null),
        q = (0, o.bG)([_.A], () => _.A.useReducedMotion),
        X = (0, p.Ay)(),
        J = (0, d.Mw)(X),
        [Q, $] = i.useState(!1),
        [ee, et] = i.useState(!1),
        [en, er] = i.useState(!1),
        [ei, el] = i.useState(!1),
        [es, ea] = i.useState(!1),
        eo = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        ec = null != eo ? (0, E.EL)(eo) : null,
        ed = null != ec ? E.Ay.getSkuIdForPlan(ec.planId) : null,
        eu = null !== ed && ed !== H.pe.TIER_2 ? H.pe.TIER_2 : null,
        ep = (0, x.cg)(),
        e_ = null != ep && ep,
        { analyticsLocations: em } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
        eg = (0, O.A)({
            location: "PremiumMarketing",
        }),
        ef = !Q && !en && (eg || !ee);
    i.useEffect(() => {
        ea(!0);
    }, []),
        i.useEffect(() => {
            if (!es || "orbs" !== new URLSearchParams(e.search).get("section")) return;
            let t = requestAnimationFrame(() => {
                let e = document.getElementById(M.NI.ORB_REWARDS);
                null != e &&
                    e.scrollIntoView({
                        behavior: q ? "auto" : "smooth",
                        block: "start",
                    });
            });
            return () => cancelAnimationFrame(t);
        }, [e.search, es, q]);
    let eb = [U.k.HOME, U.k.WHATS_NEW, U.k.BEST_OF_NITRO, U.k.PLANS, U.k.COMPARE],
        { navBarSections: eh, activeSectionId: eA } = (0, G.o)(eb),
        { home: eE, whatsNew: ex, bestOfNitro: eO, plans: eC, compare: ey } = eh,
        ej = eg ? F : Y,
        eT = (0, r.jsxs)("div", {
            className: s()(ej.container, ej.responsiveContainer, {
                [ej.containerBackground]: eg || J,
                [F.fadeInFromTop]: !q && eg,
            }),
            "data-cy": "tier-0-marketing-page",
            children: [
                eg &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(v.A, {
                                className: F.topOfPageGradient,
                            }),
                            (0, r.jsx)(k.A, {
                                navBarSections: eh,
                                activeSectionId: eA,
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
                    className: ej.sectionsContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: ej.heroHeadingContainer,
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
                                          isEligibleForBogoPromotion: ep,
                                      })
                                    : (0, r.jsx)(L.A, {
                                          ref: K,
                                          subscriptionTier: eu,
                                          isDarkMode: J,
                                          isEligibleForBogoPromotion: ep,
                                          videoRef: n,
                                      }),
                            }),
                        }),
                        ep &&
                            (0, r.jsx)("div", {
                                className: ej.promoBannerContainer,
                                children: (0, r.jsx)(C.A, {
                                    variant: C.c.APPLICATION_NITRO_HOME,
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: ej.whatsNewSectionContainer,
                            ref: ex.ref,
                            children: (0, r.jsx)(T.Ct, {
                                shouldLoadVideo: es,
                                isReducedMotion: q,
                                enablePremiumBrandRefreshDesign: eg,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: ej.bestOfNitroSectionContainer,
                            ref: eO.ref,
                            children: (0, r.jsx)(T.oO, {
                                shouldLoadVideo: es,
                                isReducedMotion: q,
                                enablePremiumBrandRefreshDesign: eg,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: ej.premiumTierCardsContainer,
                            ref: eC.ref,
                            children: (0, r.jsx)(c.L, {
                                innerRef: l,
                                onChange: (e) => er(e),
                                threshold: 0.1,
                                active: !0,
                                children: eg
                                    ? (0, r.jsx)(y.hy, {
                                          innerRef: l,
                                      })
                                    : (0, r.jsx)(j.jP, {
                                          innerRef: l,
                                          hasActiveTier2PremiumPromotion: e_,
                                      }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: ej.planComparisonTableContainer,
                            ref: ey.ref,
                            children: eg ? (0, r.jsx)(D.A, {}) : (0, r.jsx)(I.A, {}),
                        }),
                    ],
                }),
                !eg &&
                    (0, r.jsx)(S.A, {
                        isVisible: ef && es,
                        subscriptionTier: eu,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: ep,
                    }),
                (0, r.jsx)(c.L, {
                    innerRef: z,
                    onChange: (e) => {
                        e &&
                            !ei &&
                            (A.default.track(B.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: em,
                            }),
                            el(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: z,
                        className: ej.bottomOfPageVisibilitySensor,
                    }),
                }),
                (0, r.jsx)(c.L, {
                    innerRef: Z,
                    onChange: (e) => {
                        et(e);
                    },
                    children: eg
                        ? (0, r.jsx)(N.A, {
                              ref: Z,
                          })
                        : (0, r.jsx)(w.A, {
                              ref: Z,
                              isFooterVisible: ee,
                              isDarkMode: J,
                              isReducedMotion: q,
                              subscriptionTier: eu,
                          }),
                }),
                eg &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(R.A, {
                                isVisible: ef && es,
                                subscriptionTier: eu,
                                isEligibleForBogoPromotion: ep,
                            }),
                            (0, r.jsx)(v.A, {
                                className: F.bottomOfPageGradient,
                            }),
                        ],
                    }),
            ],
        });
    return (0, r.jsx)(u.NPJ, {
        theme: eg ? V.NJ.DARKER : X,
        children: (e) =>
            (0, r.jsx)(u.GtU, {
                className: s()(ej.scroller, e),
                ref: t,
                children: eT,
            }),
    });
};
