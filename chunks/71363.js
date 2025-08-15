n.d(t, { Z: () => I }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(607070),
    u = n(100527),
    m = n(906732),
    p = n(975298),
    g = n(626135),
    h = n(695349),
    f = n(47280),
    b = n(103433),
    x = n(909136),
    _ = n(306066),
    j = n(166021),
    E = n(22189),
    C = n(391110),
    O = n(75077),
    v = n(981631),
    S = n(388032),
    T = n(677599),
    N = n(865215);
let I = (e) => {
    let t,
        n,
        { isAllPerksVisible: s, setIsAllPerksVisible: I, previousComponent: y } = e,
        A = (0, f.ZP)({ location: "SeeAllNitroPerks" }),
        P = r.useRef(null),
        R = r.useRef(null),
        D = Object.entries((0, E.Z)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && "upcomingDropUntimed" !== i.name && (e[n] = i), e;
        }, {}),
        { analyticsLocations: Z } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [w, k] = r.useState(!1),
        L = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        B = (0, O.mN)(),
        { fractionalState: M } = (0, p.Z)(),
        U = (0, h.W)();
    B
        ? ((t = S.intl.string(S.t["+vt7w8"])), (n = S.intl.string(S.t.LgHbnJ)))
        : ((t = S.intl.string(S.t.LgHbnJ)), (n = S.intl.string(S.t["+vt7w8"])));
    let V = () => {
        I(!1),
            g.default.track(v.rMx.NITRO_HOME_NAVIGATION, {
                current_component: C.MQ.SEE_ALL,
                next_component: y,
                interaction_component: "Back Button",
            });
    };
    return (0, i.jsx)(c.yWw, {
        className: a()(T.allPerksScroller, {
            [T.open]: s,
            [T.openCloseReduceMotion]: L,
        }),
        ref: P,
        children: (0, i.jsx)("div", {
            className: T.container,
            children: (0, i.jsxs)(m.Gt, {
                value: Z,
                children: [
                    A
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(_.Z, { className: T.premiumBrandRefreshGradientBackground }),
                                  (0, i.jsx)(x.Z, { onBackClick: V }),
                              ],
                          })
                        : (0, i.jsx)(b.Z, {
                              className: T.heroHeading,
                              onBackClick: V,
                          }),
                    (0, i.jsxs)("div", {
                        className: a()(T.column, { [T.premiumBrandRefresh]: A }),
                        children: [
                            (0, i.jsx)(c.X6q, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: T.heading,
                                children: t,
                            }),
                            (0, i.jsx)(j.Z, {
                                className: T.cardCarousel,
                                cards: (0, O.ZM)({
                                    perksCards: D,
                                    variant: C.gM.CARD_CAROUSEL_FIRST_ROW,
                                    isPremiumSubscriber: B,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: M,
                                    isInReverseTrial: U,
                                }),
                                cardType: C.gM.CARD_CAROUSEL_FIRST_ROW,
                            }),
                            (0, i.jsx)(c.X6q, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: T.heading,
                                children: n,
                            }),
                            (0, i.jsx)(j.Z, {
                                className: T.cardCarousel,
                                cards: (0, O.ZM)({
                                    perksCards: D,
                                    variant: C.gM.CARD_CAROUSEL_SECOND_ROW,
                                    isPremiumSubscriber: B,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: M,
                                    isInReverseTrial: U,
                                }),
                                cardType: C.gM.CARD_CAROUSEL_SECOND_ROW,
                            }),
                            (0, i.jsx)(c.X6q, {
                                variant: "heading-xxl/extrabold",
                                color: "header-primary",
                                className: T.heading,
                                children: S.intl.string(S.t.LTaxu7),
                            }),
                            (0, i.jsx)(j.Z, {
                                className: T.cardCarousel,
                                cards: (0, O.ZM)({
                                    perksCards: D,
                                    variant: C.gM.CARD_CAROUSEL_THIRD_ROW,
                                    isPremiumSubscriber: B,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: M,
                                    isInReverseTrial: U,
                                }),
                                cardType: C.gM.CARD_CAROUSEL_THIRD_ROW,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: T.footerSpacing }),
                    (0, i.jsx)(o.$, {
                        innerRef: R,
                        onChange: (e) => {
                            e &&
                                !w &&
                                (g.default.track(v.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: Z }),
                                k(!0));
                        },
                        children: (0, i.jsx)("div", {
                            ref: R,
                            className: T.bottomOfPageVisibilitySensor,
                        }),
                    }),
                    (0, i.jsx)("img", {
                        src: N,
                        className: T.bottomIllustration,
                        width: 112,
                        height: 85,
                        alt: S.intl.string(S.t.X4IxWF),
                    }),
                ],
            }),
        }),
    });
};
