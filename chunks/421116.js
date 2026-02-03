n.d(t, {
    A: () => Z,
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
    x = n(170887),
    C = n(994763),
    S = n(130946),
    T = n(84483),
    I = n(407775),
    N = n(501007),
    j = n(26010),
    y = n(54009),
    v = n(252711),
    P = n(584767),
    R = n(191430),
    D = n(475805),
    L = n(564230),
    w = n(974005),
    M = n(305714),
    G = n(658137),
    U = n(927258),
    k = n(57978),
    B = n(694195),
    H = n(716442),
    V = n(788868),
    F = n(652215),
    Y = n(818348),
    W = n(549447),
    K = n(157650),
    z = n(122402);
let Z = () => {
    let e = (0, a.zy)();
    (0, f.P)(A.b);
    let t = i.useRef(null),
        n = i.useRef(null),
        l = i.useRef(null),
        Z = i.useRef(null),
        X = i.useRef(null),
        q = i.useRef(null),
        J = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        Q = (0, _.Ay)(),
        $ = (0, d.Mw)(Q),
        [ee, et] = i.useState(!1),
        [en, er] = i.useState(!1),
        [ei, el] = i.useState(!1),
        [es, ea] = i.useState(!1),
        [eo, ec] = i.useState(!1),
        ed = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
        eu = null != ed ? (0, E.EL)(ed) : null,
        e_ = null != eu ? E.Ay.getSkuIdForPlan(eu.planId) : null,
        ep = null !== e_ && e_ !== V.pe.TIER_2 ? V.pe.TIER_2 : null,
        em = (0, O.cg)(),
        eg = null != em && em,
        { analyticsLocations: eA } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
        ef = (0, x.A)({
            location: "PremiumMarketing",
        }),
        eb = !ee && !ei && (ef || !en);
    i.useEffect(() => {
        ec(!0);
    }, []);
    let { isInTreatment: eh } = (0, T.uX)("PremiumMarketingHome"),
        eE = i.useMemo(() => !!eh && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, eh]);
    (0, C.z)(k.NI.ORB_REWARDS, eE);
    let eO = [H.k.HOME, H.k.WHATS_NEW, H.k.BEST_OF_NITRO, H.k.PLANS, H.k.COMPARE],
        { navBarSections: ex, activeSectionId: eC } = (0, B.o)(eO),
        { home: eS, whatsNew: eT, bestOfNitro: eI, plans: eN, compare: ej } = ex,
        ey = ef ? W : K,
        ev = (0, r.jsxs)("div", {
            className: s()(ey.container, ey.responsiveContainer, {
                [ey.containerBackground]: ef || $,
                [W.fadeInFromTop]: !J && ef,
            }),
            "data-cy": "tier-0-marketing-page",
            children: [
                ef &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(y.A, {
                                className: W.topOfPageGradient,
                            }),
                            (0, r.jsx)(U.A, {
                                navBarSections: ex,
                                activeSectionId: eC,
                            }),
                        ],
                    }),
                !ef &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", {
                                className: K.heroHeaderSideGradient,
                            }),
                            (0, r.jsx)("img", {
                                src: z,
                                className: K.heroHeaderBackgroundStars,
                                alt: "",
                            }),
                        ],
                    }),
                (0, r.jsxs)("div", {
                    className: ey.sectionsContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: ey.heroHeadingContainer,
                            ref: eS.ref,
                            children: (0, r.jsx)(c.L, {
                                innerRef: Z,
                                onChange: (e) => et(e),
                                threshold: 0,
                                active: !0,
                                children: ef
                                    ? (0, r.jsx)(D.A, {
                                          ref: Z,
                                          subscriptionTier: ep,
                                          isEligibleForBogoPromotion: em,
                                      })
                                    : (0, r.jsx)(G.A, {
                                          ref: Z,
                                          subscriptionTier: ep,
                                          isDarkMode: $,
                                          isEligibleForBogoPromotion: em,
                                          videoRef: n,
                                      }),
                            }),
                        }),
                        em &&
                            (0, r.jsx)("div", {
                                className: ey.promoBannerContainer,
                                children: (0, r.jsx)(S.A, {
                                    variant: S.c.APPLICATION_NITRO_HOME,
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: ey.whatsNewSectionContainer,
                            ref: eT.ref,
                            children: (0, r.jsx)(j.Ct, {
                                shouldLoadVideo: eo,
                                isReducedMotion: J,
                                enablePremiumBrandRefreshDesign: ef,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: ey.bestOfNitroSectionContainer,
                            ref: eI.ref,
                            children: (0, r.jsx)(j.oO, {
                                shouldLoadVideo: eo,
                                isReducedMotion: J,
                                enablePremiumBrandRefreshDesign: ef,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: ey.premiumTierCardsContainer,
                            ref: eN.ref,
                            children: (0, r.jsx)(c.L, {
                                innerRef: l,
                                onChange: (e) => el(e),
                                threshold: 0.1,
                                active: !0,
                                children: ef
                                    ? (0, r.jsx)(I.hy, {
                                          innerRef: l,
                                      })
                                    : (0, r.jsx)(N.jP, {
                                          innerRef: l,
                                          hasActiveTier2PremiumPromotion: eg,
                                      }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: ey.planComparisonTableContainer,
                            ref: ej.ref,
                            children: ef ? (0, r.jsx)(w.A, {}) : (0, r.jsx)(P.A, {}),
                        }),
                    ],
                }),
                !ef &&
                    (0, r.jsx)(v.A, {
                        isVisible: eb && eo,
                        subscriptionTier: ep,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: em,
                    }),
                (0, r.jsx)(c.L, {
                    innerRef: X,
                    onChange: (e) => {
                        e &&
                            !es &&
                            (h.default.track(F.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: eA,
                            }),
                            ea(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: X,
                        className: ey.bottomOfPageVisibilitySensor,
                    }),
                }),
                (0, r.jsx)(c.L, {
                    innerRef: q,
                    onChange: (e) => {
                        er(e);
                    },
                    children: ef
                        ? (0, r.jsx)(R.A, {
                              ref: q,
                          })
                        : (0, r.jsx)(M.A, {
                              ref: q,
                              isFooterVisible: en,
                              isDarkMode: $,
                              isReducedMotion: J,
                              subscriptionTier: ep,
                          }),
                }),
                ef &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(L.A, {
                                isVisible: eb && eo,
                                subscriptionTier: ep,
                                isEligibleForBogoPromotion: em,
                            }),
                            (0, r.jsx)(y.A, {
                                className: W.bottomOfPageGradient,
                            }),
                        ],
                    }),
            ],
        });
    return (0, r.jsx)(u.NPJ, {
        theme: ef ? Y.NJ.DARKER : Q,
        children: (e) =>
            (0, r.jsx)(u.GtU, {
                className: s()(ey.scroller, e),
                ref: t,
                children: ev,
            }),
    });
};
