n.d(t, { Z: () => N }), n(388685);
var r = n(951288),
    i = n(647438),
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
    m = n(47280),
    g = n(103433),
    E = n(909136),
    b = n(306066),
    y = n(166021),
    O = n(22189),
    v = n(391110),
    I = n(75077),
    T = n(981631),
    S = n(388032),
    A = n(677599),
    C = n(865215);
let N = (e) => {
    let t,
        n,
        { isAllPerksVisible: a, setIsAllPerksVisible: N, previousComponent: R } = e,
        P = (0, m.ZP)({ location: "SeeAllNitroPerks" }),
        w = i.useRef(null),
        D = i.useRef(null),
        x = Object.entries((0, O.Z)()).reduce((e, t) => {
            let [n, r] = t;
            return !1 !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e;
        }, {}),
        { analyticsLocations: L } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [j, M] = i.useState(!1),
        k = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        U = (0, I.mN)(),
        { fractionalState: G } = (0, _.Z)(),
        B = (0, h.W)();
    U
        ? ((t = S.intl.string(S.t["+vt7w8"])), (n = S.intl.string(S.t.LgHbnJ)))
        : ((t = S.intl.string(S.t.LgHbnJ)), (n = S.intl.string(S.t["+vt7w8"])));
    let Z = () => {
        N(!1),
            p.default.track(T.rMx.NITRO_HOME_NAVIGATION, {
                current_component: v.MQ.SEE_ALL,
                next_component: R,
                interaction_component: "Back Button",
            });
    };
    return (0, r.jsx)(c.yWw, {
        className: o()(A.allPerksScroller, {
            [A.open]: a,
            [A.openCloseReduceMotion]: k,
        }),
        ref: w,
        children: (0, r.jsx)("div", {
            className: A.container,
            children: (0, r.jsxs)(f.Gt, {
                value: L,
                children: [
                    P
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(b.Z, { className: A.premiumBrandRefreshGradientBackground }),
                                  (0, r.jsx)(E.Z, { onBackClick: Z }),
                              ],
                          })
                        : (0, r.jsx)(g.Z, {
                              className: A.heroHeading,
                              onBackClick: Z,
                          }),
                    (0, r.jsxs)("div", {
                        className: o()(A.column, { [A.premiumBrandRefresh]: P }),
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: A.heading,
                                children: t,
                            }),
                            (0, r.jsx)(y.Z, {
                                className: A.cardCarousel,
                                cards: (0, I.ZM)({
                                    perksCards: x,
                                    variant: v.gM.CARD_CAROUSEL_FIRST_ROW,
                                    isPremiumSubscriber: U,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: G,
                                    isInReverseTrial: B,
                                }),
                                cardType: v.gM.CARD_CAROUSEL_FIRST_ROW,
                            }),
                            (0, r.jsx)(c.X6q, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: A.heading,
                                children: n,
                            }),
                            (0, r.jsx)(y.Z, {
                                className: A.cardCarousel,
                                cards: (0, I.ZM)({
                                    perksCards: x,
                                    variant: v.gM.CARD_CAROUSEL_SECOND_ROW,
                                    isPremiumSubscriber: U,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: G,
                                    isInReverseTrial: B,
                                }),
                                cardType: v.gM.CARD_CAROUSEL_SECOND_ROW,
                            }),
                            (0, r.jsx)(c.X6q, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: A.heading,
                                children: S.intl.string(S.t.LTaxu7),
                            }),
                            (0, r.jsx)(y.Z, {
                                className: A.cardCarousel,
                                cards: (0, I.ZM)({
                                    perksCards: x,
                                    variant: v.gM.CARD_CAROUSEL_THIRD_ROW,
                                    isPremiumSubscriber: U,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: G,
                                    isInReverseTrial: B,
                                }),
                                cardType: v.gM.CARD_CAROUSEL_THIRD_ROW,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: A.footerSpacing }),
                    (0, r.jsx)(l.$, {
                        innerRef: D,
                        onChange: (e) => {
                            e &&
                                !j &&
                                (p.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: L }),
                                M(!0));
                        },
                        children: (0, r.jsx)("div", {
                            ref: D,
                            className: A.bottomOfPageVisibilitySensor,
                        }),
                    }),
                    (0, r.jsx)("img", {
                        src: C,
                        className: A.bottomIllustration,
                        width: 112,
                        height: 85,
                        alt: S.intl.string(S.t.X4IxWF),
                    }),
                ],
            }),
        }),
    });
};
