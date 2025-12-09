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
    p = n(975298),
    _ = n(626135),
    m = n(695349),
    h = n(103433),
    g = n(982370),
    E = n(166021),
    b = n(22189),
    y = n(391110),
    O = n(75077),
    v = n(981631),
    S = n(388032),
    I = n(677599),
    T = n(865215);
let A = (e) => {
    let t,
        n,
        { isAllPerksVisible: a, setIsAllPerksVisible: A, previousComponent: C, enablePremiumBrandRefresh: N } = e,
        P = i.useRef(null),
        R = i.useRef(null),
        D = Object.entries((0, b.Z)()).reduce((e, t) => {
            let [n, r] = t;
            return !1 !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e;
        }, {}),
        { analyticsLocations: w } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [x, L] = i.useState(!1),
        j = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        M = (0, O.mN)(),
        { fractionalState: k } = (0, p.Z)(),
        U = (0, m.W)();
    M
        ? ((t = S.intl.string(S.t["+vt7w9"])), (n = S.intl.string(S.t.LgHbnL)))
        : ((t = S.intl.string(S.t.LgHbnL)), (n = S.intl.string(S.t["+vt7w9"])));
    let G = () => {
        A(!1),
            _.default.track(v.rMx.NITRO_HOME_NAVIGATION, {
                current_component: y.MQ.SEE_ALL,
                next_component: C,
                interaction_component: "Back Button",
            });
    };
    return (0, r.jsx)(c.yWw, {
        className: o()(I.allPerksScroller, {
            [I.open]: a,
            [I.openCloseReduceMotion]: j,
        }),
        ref: P,
        children: (0, r.jsx)(c.$1m, {
            color: "nitro-pink",
            className: o()(I.container, I.responsiveContainer, { [I.hiddenGradient]: !N }),
            children: (0, r.jsxs)(f.Gt, {
                value: w,
                children: [
                    N
                        ? (0, r.jsx)(g.Z, { onBackClick: G })
                        : (0, r.jsx)(h.Z, {
                              className: I.heroHeading,
                              onBackClick: G,
                          }),
                    (0, r.jsxs)("div", {
                        className: o()(I.column, { [I.premiumBrandRefresh]: N }),
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: I.heading,
                                children: t,
                            }),
                            (0, r.jsx)(E.Z, {
                                className: I.cardCarousel,
                                cards: (0, O.ZM)({
                                    perksCards: D,
                                    variant: y.gM.CARD_CAROUSEL_FIRST_ROW,
                                    isPremiumSubscriber: M,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: k,
                                    isInReverseTrial: U,
                                }),
                                cardType: y.gM.CARD_CAROUSEL_FIRST_ROW,
                            }),
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: I.heading,
                                children: n,
                            }),
                            (0, r.jsx)(E.Z, {
                                className: I.cardCarousel,
                                cards: (0, O.ZM)({
                                    perksCards: D,
                                    variant: y.gM.CARD_CAROUSEL_SECOND_ROW,
                                    isPremiumSubscriber: M,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: k,
                                    isInReverseTrial: U,
                                }),
                                cardType: y.gM.CARD_CAROUSEL_SECOND_ROW,
                            }),
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: I.heading,
                                children: S.intl.string(S.t.LTaxu9),
                            }),
                            (0, r.jsx)(E.Z, {
                                className: I.cardCarousel,
                                cards: (0, O.ZM)({
                                    perksCards: D,
                                    variant: y.gM.CARD_CAROUSEL_THIRD_ROW,
                                    isPremiumSubscriber: M,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: k,
                                    isInReverseTrial: U,
                                }),
                                cardType: y.gM.CARD_CAROUSEL_THIRD_ROW,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: I.footerSpacing }),
                    (0, r.jsx)(l.$, {
                        innerRef: R,
                        onChange: (e) => {
                            e &&
                                !x &&
                                (_.default.track(v.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: w }),
                                L(!0));
                        },
                        children: (0, r.jsx)("div", {
                            ref: R,
                            className: I.bottomOfPageVisibilitySensor,
                        }),
                    }),
                    (0, r.jsx)("img", {
                        src: T,
                        className: I.bottomIllustration,
                        width: 112,
                        height: 85,
                        alt: S.intl.string(S.t.X4IxWL),
                    }),
                ],
            }),
        }),
    });
};
