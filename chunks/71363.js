n.d(t, { Z: () => A }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(622535),
    c = n(481060),
    u = n(607070),
    d = n(100527),
    f = n(906732),
    _ = n(975298),
    p = n(626135),
    h = n(695349),
    m = n(103433),
    g = n(982370),
    E = n(166021),
    b = n(22189),
    y = n(391110),
    O = n(75077),
    v = n(981631),
    I = n(388032),
    T = n(677599),
    S = n(865215);
let A = (e) => {
    let t,
        n,
        { isAllPerksVisible: a, setIsAllPerksVisible: A, previousComponent: C, enablePremiumBrandRefresh: N } = e,
        R = i.useRef(null),
        P = i.useRef(null),
        D = Object.entries((0, b.Z)()).reduce((e, t) => {
            let [n, r] = t;
            return !1 !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e;
        }, {}),
        { analyticsLocations: w } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [L, x] = i.useState(!1),
        M = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        k = (0, O.mN)(),
        { fractionalState: j } = (0, _.Z)(),
        U = (0, h.W)();
    k
        ? ((t = I.intl.string(I.t["+vt7w9"])), (n = I.intl.string(I.t.LgHbnL)))
        : ((t = I.intl.string(I.t.LgHbnL)), (n = I.intl.string(I.t["+vt7w9"])));
    let G = () => {
        A(!1),
            p.default.track(v.rMx.NITRO_HOME_NAVIGATION, {
                current_component: y.MQ.SEE_ALL,
                next_component: C,
                interaction_component: "Back Button",
            });
    };
    return (0, r.jsx)(c.yWw, {
        className: o()(T.allPerksScroller, {
            [T.open]: a,
            [T.openCloseReduceMotion]: M,
        }),
        ref: R,
        children: (0, r.jsx)(c.$1m, {
            color: "nitro-pink",
            className: o()(T.container, T.responsiveContainer, { [T.hiddenGradient]: !N }),
            children: (0, r.jsxs)(f.Gt, {
                value: w,
                children: [
                    N
                        ? (0, r.jsx)(g.Z, { onBackClick: G })
                        : (0, r.jsx)(m.Z, {
                              className: T.heroHeading,
                              onBackClick: G,
                          }),
                    (0, r.jsxs)("div", {
                        className: o()(T.column, { [T.premiumBrandRefresh]: N }),
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: T.heading,
                                children: t,
                            }),
                            (0, r.jsx)(E.Z, {
                                className: T.cardCarousel,
                                cards: (0, O.ZM)({
                                    perksCards: D,
                                    variant: y.gM.CARD_CAROUSEL_FIRST_ROW,
                                    isPremiumSubscriber: k,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: j,
                                    isInReverseTrial: U,
                                }),
                                cardType: y.gM.CARD_CAROUSEL_FIRST_ROW,
                            }),
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: T.heading,
                                children: n,
                            }),
                            (0, r.jsx)(E.Z, {
                                className: T.cardCarousel,
                                cards: (0, O.ZM)({
                                    perksCards: D,
                                    variant: y.gM.CARD_CAROUSEL_SECOND_ROW,
                                    isPremiumSubscriber: k,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: j,
                                    isInReverseTrial: U,
                                }),
                                cardType: y.gM.CARD_CAROUSEL_SECOND_ROW,
                            }),
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: T.heading,
                                children: I.intl.string(I.t.LTaxu9),
                            }),
                            (0, r.jsx)(E.Z, {
                                className: T.cardCarousel,
                                cards: (0, O.ZM)({
                                    perksCards: D,
                                    variant: y.gM.CARD_CAROUSEL_THIRD_ROW,
                                    isPremiumSubscriber: k,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: j,
                                    isInReverseTrial: U,
                                }),
                                cardType: y.gM.CARD_CAROUSEL_THIRD_ROW,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: T.footerSpacing }),
                    (0, r.jsx)(l.$, {
                        innerRef: P,
                        onChange: (e) => {
                            e &&
                                !L &&
                                (p.default.track(v.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: w }),
                                x(!0));
                        },
                        children: (0, r.jsx)("div", {
                            ref: P,
                            className: T.bottomOfPageVisibilitySensor,
                        }),
                    }),
                    (0, r.jsx)("img", {
                        src: S,
                        className: T.bottomIllustration,
                        width: 112,
                        height: 85,
                        alt: I.intl.string(I.t.X4IxWL),
                    }),
                ],
            }),
        }),
    });
};
