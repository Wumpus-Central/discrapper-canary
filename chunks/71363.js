n.d(t, { Z: () => I }), n(724458), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(607070),
    u = n(100527),
    m = n(906732),
    g = n(975298),
    _ = n(410154),
    p = n(626135),
    f = n(103433),
    h = n(166021),
    x = n(32173),
    E = n(391110),
    C = n(75077),
    b = n(981631),
    v = n(388032),
    T = n(244383),
    N = n(865215);
let I = (e) => {
    let t,
        n,
        { isAllPerksVisible: a, setIsAllPerksVisible: I, previousComponent: R, isFullScreen: j } = e,
        S = r.useRef(null),
        A = Object.entries((0, x.Z)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && 'upcomingDropUntimed' !== i.name && (e[n] = i), e;
        }, {}),
        { analyticsLocations: P } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [Z, w] = r.useState(!1),
        M = (0, _.ZP)('perks-discoverability'),
        B = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        y = (0, C.mN)(),
        { fractionalState: k } = (0, g.Z)();
    return (
        y ? ((t = v.intl.string(v.t['+vt7w8'])), (n = v.intl.string(v.t.LgHbnJ))) : ((t = v.intl.string(v.t.LgHbnJ)), (n = v.intl.string(v.t['+vt7w8']))),
        (0, i.jsx)(c.yWw, {
            className: s()(T.allPerksScroller, {
                [T.open]: a,
                [T.openCloseReduceMotion]: B
            }),
            ref: S,
            children: (0, i.jsx)('div', {
                className: T.container,
                children: (0, i.jsxs)(m.Gt, {
                    value: P,
                    children: [
                        (0, i.jsx)(f.Z, {
                            className: T.heroHeading,
                            onBackClick: () => {
                                I(!1),
                                    p.default.track(b.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: E.MQ.SEE_ALL,
                                        next_component: R,
                                        interaction_component: 'Back Button'
                                    });
                            }
                        }),
                        (0, i.jsxs)('div', {
                            className: T.column,
                            children: [
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: T.heading,
                                    children: t
                                }),
                                (0, i.jsx)(h.Z, {
                                    className: T.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: A,
                                        variant: E.R0.CARD_CAROUSEL_FIRST_ROW,
                                        shopMarketingVariation: M,
                                        isPremiumSubscriber: y,
                                        isFullScreen: j,
                                        fractionalState: k
                                    }),
                                    cardType: E.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: T.heading,
                                    children: n
                                }),
                                (0, i.jsx)(h.Z, {
                                    className: T.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: A,
                                        variant: E.R0.CARD_CAROUSEL_SECOND_ROW,
                                        shopMarketingVariation: M,
                                        isPremiumSubscriber: y,
                                        isFullScreen: j,
                                        fractionalState: k
                                    }),
                                    cardType: E.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: T.heading,
                                    children: v.intl.string(v.t.LTaxu7)
                                }),
                                (0, i.jsx)(h.Z, {
                                    className: T.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: A,
                                        variant: E.R0.CARD_CAROUSEL_THIRD_ROW,
                                        shopMarketingVariation: M,
                                        isPremiumSubscriber: y,
                                        isFullScreen: j,
                                        fractionalState: k
                                    }),
                                    cardType: E.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: T.footerSpacing }),
                        (0, i.jsx)(o.$, {
                            onChange: (e) => {
                                e && !Z && (p.default.track(b.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }), w(!0));
                            },
                            children: (0, i.jsx)('div', { className: T.bottomOfPageVisibilitySensor })
                        }),
                        (0, i.jsx)('img', {
                            src: N,
                            className: T.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: v.intl.string(v.t.X4IxWF)
                        })
                    ]
                })
            })
        })
    );
};
