(n.d(t, { Z: () => S }), n(388685));
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
    f = n(103433),
    b = n(166021),
    x = n(22189),
    _ = n(391110),
    j = n(75077),
    C = n(981631),
    O = n(388032),
    E = n(614729),
    v = n(865215);
let S = (e) => {
    let t,
        n,
        { isAllPerksVisible: s, setIsAllPerksVisible: S, previousComponent: T } = e,
        N = r.useRef(null),
        I = r.useRef(null),
        y = Object.entries((0, x.Z)()).reduce((e, t) => {
            let [n, i] = t;
            return (!1 !== i.canReveal && 'upcomingDropUntimed' !== i.name && (e[n] = i), e);
        }, {}),
        { analyticsLocations: A } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [P, R] = r.useState(!1),
        D = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        Z = (0, j.mN)(),
        { fractionalState: w } = (0, p.Z)(),
        k = (0, h.W)();
    return (
        Z ? ((t = O.intl.string(O.t['+vt7w8'])), (n = O.intl.string(O.t.LgHbnJ))) : ((t = O.intl.string(O.t.LgHbnJ)), (n = O.intl.string(O.t['+vt7w8']))),
        (0, i.jsx)(c.yWw, {
            className: a()(E.allPerksScroller, {
                [E.open]: s,
                [E.openCloseReduceMotion]: D
            }),
            ref: N,
            children: (0, i.jsx)('div', {
                className: E.container,
                children: (0, i.jsxs)(m.Gt, {
                    value: A,
                    children: [
                        (0, i.jsx)(f.Z, {
                            className: E.heroHeading,
                            onBackClick: () => {
                                (S(!1),
                                    g.default.track(C.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: _.MQ.SEE_ALL,
                                        next_component: T,
                                        interaction_component: 'Back Button'
                                    }));
                            }
                        }),
                        (0, i.jsxs)('div', {
                            className: E.column,
                            children: [
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: E.heading,
                                    children: t
                                }),
                                (0, i.jsx)(b.Z, {
                                    className: E.cardCarousel,
                                    cards: (0, j.ZM)({
                                        perksCards: y,
                                        variant: _.gM.CARD_CAROUSEL_FIRST_ROW,
                                        isPremiumSubscriber: Z,
                                        hideCardsOnNarrowScreen: !0,
                                        fractionalState: w,
                                        isInReverseTrial: k
                                    }),
                                    cardType: _.gM.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: E.heading,
                                    children: n
                                }),
                                (0, i.jsx)(b.Z, {
                                    className: E.cardCarousel,
                                    cards: (0, j.ZM)({
                                        perksCards: y,
                                        variant: _.gM.CARD_CAROUSEL_SECOND_ROW,
                                        isPremiumSubscriber: Z,
                                        hideCardsOnNarrowScreen: !0,
                                        fractionalState: w,
                                        isInReverseTrial: k
                                    }),
                                    cardType: _.gM.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: E.heading,
                                    children: O.intl.string(O.t.LTaxu7)
                                }),
                                (0, i.jsx)(b.Z, {
                                    className: E.cardCarousel,
                                    cards: (0, j.ZM)({
                                        perksCards: y,
                                        variant: _.gM.CARD_CAROUSEL_THIRD_ROW,
                                        isPremiumSubscriber: Z,
                                        hideCardsOnNarrowScreen: !0,
                                        fractionalState: w,
                                        isInReverseTrial: k
                                    }),
                                    cardType: _.gM.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: E.footerSpacing }),
                        (0, i.jsx)(o.$, {
                            innerRef: I,
                            onChange: (e) => {
                                e && !P && (g.default.track(C.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: A }), R(!0));
                            },
                            children: (0, i.jsx)('div', {
                                ref: I,
                                className: E.bottomOfPageVisibilitySensor
                            })
                        }),
                        (0, i.jsx)('img', {
                            src: v,
                            className: E.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: O.intl.string(O.t.X4IxWF)
                        })
                    ]
                })
            })
        })
    );
};
