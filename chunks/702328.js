n.d(t, { Z: () => H }), n(388685);
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
    E = n(626135),
    b = n(74538),
    y = n(367074),
    O = n(47280),
    v = n(8647),
    I = n(744129),
    T = n(823188),
    S = n(611116),
    A = n(306066),
    C = n(349803),
    N = n(8231),
    R = n(864879),
    P = n(238649),
    w = n(47840),
    D = n(975978),
    x = n(836332),
    L = n(903250),
    j = n(954003),
    M = n(664134),
    k = n(457227),
    U = n(474936),
    G = n(981631),
    B = n(231338),
    Z = n(379039),
    V = n(810392),
    F = n(107283);
let H = () => {
    (0, m.z)(h.X);
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(null),
        a = i.useRef(null),
        H = i.useRef(null),
        Y = i.useRef(null),
        W = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        K = (0, d.ZP)(),
        z = (0, c.wj)(K),
        [q, X] = i.useState(!1),
        [Q, J] = i.useState(!1),
        [$, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        [er, ei] = i.useState(!1),
        ea = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        eo = null != ea ? (0, b.Af)(ea) : null,
        es = null != eo ? b.ZP.getSkuIdForPlan(eo.planId) : null,
        el = null !== es && es !== U.Si.TIER_2 ? U.Si.TIER_2 : null,
        ec = (0, y.Vi)(),
        eu = null != ec && ec,
        { analyticsLocations: ed } = (0, p.ZP)(_.Z.PREMIUM_MARKETING),
        ef = (0, O.ZP)({ location: "PremiumMarketing" }),
        e_ = !q && !$ && (ef || !Q);
    i.useEffect(() => {
        ei(!0);
    }, []);
    let ep = [M.h.HOME, M.h.WHATS_NEW, M.h.BEST_OF_NITRO, M.h.PLANS, M.h.COMPARE],
        { navBarSections: eh, activeSectionId: em } = (0, j.O)(ep),
        { home: eg, whatsNew: eE, bestOfNitro: eb, plans: ey, compare: eO } = eh,
        ev = ef ? Z : V,
        eI = (0, r.jsxs)("div", {
            className: o()(ev.container, ev.responsiveContainer, {
                [ev.containerBackground]: ef || z,
                [Z.fadeInFromTop]: !W && ef,
            }),
            "data-cy": "tier-0-marketing-page",
            children: [
                ef &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(A.Z, { className: Z.topOfPageGradient }),
                            (0, r.jsx)(k.Z, {
                                navBarSections: eh,
                                activeSectionId: em,
                            }),
                        ],
                    }),
                !ef &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", { className: V.heroHeaderSideGradient }),
                            (0, r.jsx)("img", {
                                src: F,
                                className: V.heroHeaderBackgroundStars,
                                alt: "",
                            }),
                        ],
                    }),
                (0, r.jsxs)("div", {
                    className: ev.sectionsContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: ev.heroHeadingContainer,
                            ref: eg.ref,
                            children: (0, r.jsx)(l.$, {
                                innerRef: a,
                                onChange: (e) => X(e),
                                threshold: 0,
                                active: !0,
                                children: ef
                                    ? (0, r.jsx)(P.Z, {
                                          ref: a,
                                          subscriptionTier: el,
                                          isEligibleForBogoPromotion: ec,
                                      })
                                    : (0, r.jsx)(L.Z, {
                                          ref: a,
                                          subscriptionTier: el,
                                          isDarkMode: z,
                                          isEligibleForBogoPromotion: ec,
                                          videoRef: t,
                                      }),
                            }),
                        }),
                        ec &&
                            (0, r.jsx)("div", {
                                className: ev.promoBannerContainer,
                                children: (0, r.jsx)(v.Z, { variant: v.C.APPLICATION_NITRO_HOME }),
                            }),
                        (0, r.jsx)("div", {
                            className: ev.whatsNewSectionContainer,
                            ref: eE.ref,
                            children: (0, r.jsx)(S.g, {
                                shouldLoadVideo: er,
                                isReducedMotion: W,
                                enablePremiumBrandRefreshDesign: ef,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: ev.bestOfNitroSectionContainer,
                            ref: eb.ref,
                            children: (0, r.jsx)(S.G_, {
                                shouldLoadVideo: er,
                                isReducedMotion: W,
                                enablePremiumBrandRefreshDesign: ef,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: ev.premiumTierCardsContainer,
                            ref: ey.ref,
                            children: (0, r.jsx)(l.$, {
                                innerRef: n,
                                onChange: (e) => ee(e),
                                threshold: 0.1,
                                active: !0,
                                children: ef
                                    ? (0, r.jsx)(I.rz, { innerRef: n })
                                    : (0, r.jsx)(T.Ub, {
                                          innerRef: n,
                                          hasActiveTier2PremiumPromotion: eu,
                                      }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: ev.planComparisonTableContainer,
                            ref: eO.ref,
                            children: ef ? (0, r.jsx)(D.Z, {}) : (0, r.jsx)(N.Z, {}),
                        }),
                    ],
                }),
                !ef &&
                    (0, r.jsx)(C.Z, {
                        isVisible: e_ && er,
                        subscriptionTier: el,
                        isApplicationHome: !0,
                        isEligibleForBogoPromotion: ec,
                    }),
                (0, r.jsx)(l.$, {
                    innerRef: H,
                    onChange: (e) => {
                        e &&
                            !et &&
                            (E.default.track(G.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: ed }),
                            en(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: H,
                        className: ev.bottomOfPageVisibilitySensor,
                    }),
                }),
                (0, r.jsx)(l.$, {
                    innerRef: Y,
                    onChange: (e) => {
                        J(e);
                    },
                    children: ef
                        ? (0, r.jsx)(R.Z, { ref: Y })
                        : (0, r.jsx)(x.Z, {
                              ref: Y,
                              isFooterVisible: Q,
                              isDarkMode: z,
                              isReducedMotion: W,
                              subscriptionTier: el,
                          }),
                }),
                ef &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(w.Z, {
                                isVisible: e_ && er,
                                subscriptionTier: el,
                                isEligibleForBogoPromotion: ec,
                            }),
                            (0, r.jsx)(A.Z, { className: Z.bottomOfPageGradient }),
                        ],
                    }),
            ],
        });
    return (0, r.jsx)(u.f6W, {
        theme: ef ? B.BR.DARKER : K,
        children: (t) =>
            (0, r.jsx)(u.yWw, {
                className: o()(ev.scroller, t),
                ref: e,
                children: eI,
            }),
    });
};
