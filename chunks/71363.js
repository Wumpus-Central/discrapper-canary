n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(622535),
    c = n(304789),
    u = n(481060),
    d = n(607070),
    f = n(100527),
    _ = n(906732),
    p = n(975298),
    h = n(626135),
    m = n(695349),
    g = n(103433),
    E = n(982370),
    b = n(166021),
    y = n(22189),
    O = n(391110),
    v = n(75077),
    I = n(981631),
    T = n(388032),
    S = n(677599),
    A = n(865215);
let C = (e) => {
    let t,
        n,
        { isAllPerksVisible: a, setIsAllPerksVisible: C, previousComponent: N, enablePremiumBrandRefresh: R } = e,
        P = i.useRef(null),
        w = i.useRef(null),
        D = Object.entries((0, y.Z)()).reduce((e, t) => {
            let [n, r] = t;
            return !1 !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e;
        }, {}),
        { analyticsLocations: x } = (0, _.ZP)(f.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [L, j] = i.useState(!1),
        M = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        k = (0, v.mN)(),
        { fractionalState: U } = (0, p.Z)(),
        G = (0, m.W)();
    k
        ? ((t = T.intl.string(T.t["+vt7w8"])), (n = T.intl.string(T.t.LgHbnJ)))
        : ((t = T.intl.string(T.t.LgHbnJ)), (n = T.intl.string(T.t["+vt7w8"])));
    let B = () => {
        C(!1),
            h.default.track(I.rMx.NITRO_HOME_NAVIGATION, {
                current_component: O.MQ.SEE_ALL,
                next_component: N,
                interaction_component: "Back Button",
            });
    };
    return (0, r.jsx)(u.yWw, {
        className: o()(S.allPerksScroller, {
            [S.open]: a,
            [S.openCloseReduceMotion]: M,
        }),
        ref: P,
        children: (0, r.jsx)(c.$, {
            color: "nitro-pink",
            className: o()(S.container, S.responsiveContainer, { [S.hiddenGradient]: !R }),
            children: (0, r.jsxs)(_.Gt, {
                value: x,
                children: [
                    R
                        ? (0, r.jsx)(E.Z, { onBackClick: B })
                        : (0, r.jsx)(g.Z, {
                              className: S.heroHeading,
                              onBackClick: B,
                          }),
                    (0, r.jsxs)("div", {
                        className: o()(S.column, { [S.premiumBrandRefresh]: R }),
                        children: [
                            (0, r.jsx)(u.X6q, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: S.heading,
                                children: t,
                            }),
                            (0, r.jsx)(b.Z, {
                                className: S.cardCarousel,
                                cards: (0, v.ZM)({
                                    perksCards: D,
                                    variant: O.gM.CARD_CAROUSEL_FIRST_ROW,
                                    isPremiumSubscriber: k,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: U,
                                    isInReverseTrial: G,
                                }),
                                cardType: O.gM.CARD_CAROUSEL_FIRST_ROW,
                            }),
                            (0, r.jsx)(u.X6q, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: S.heading,
                                children: n,
                            }),
                            (0, r.jsx)(b.Z, {
                                className: S.cardCarousel,
                                cards: (0, v.ZM)({
                                    perksCards: D,
                                    variant: O.gM.CARD_CAROUSEL_SECOND_ROW,
                                    isPremiumSubscriber: k,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: U,
                                    isInReverseTrial: G,
                                }),
                                cardType: O.gM.CARD_CAROUSEL_SECOND_ROW,
                            }),
                            (0, r.jsx)(u.X6q, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: S.heading,
                                children: T.intl.string(T.t.LTaxu7),
                            }),
                            (0, r.jsx)(b.Z, {
                                className: S.cardCarousel,
                                cards: (0, v.ZM)({
                                    perksCards: D,
                                    variant: O.gM.CARD_CAROUSEL_THIRD_ROW,
                                    isPremiumSubscriber: k,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: U,
                                    isInReverseTrial: G,
                                }),
                                cardType: O.gM.CARD_CAROUSEL_THIRD_ROW,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: S.footerSpacing }),
                    (0, r.jsx)(l.$, {
                        innerRef: w,
                        onChange: (e) => {
                            e &&
                                !L &&
                                (h.default.track(I.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: x }),
                                j(!0));
                        },
                        children: (0, r.jsx)("div", {
                            ref: w,
                            className: S.bottomOfPageVisibilitySensor,
                        }),
                    }),
                    (0, r.jsx)("img", {
                        src: A,
                        className: S.bottomIllustration,
                        width: 112,
                        height: 85,
                        alt: T.intl.string(T.t.X4IxWF),
                    }),
                ],
            }),
        }),
    });
};
