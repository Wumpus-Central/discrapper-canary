(n.d(t, { Z: () => v }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(607070),
    u = n(100527),
    m = n(906732),
    g = n(975298),
    p = n(626135),
    h = n(695349),
    f = n(103433),
    b = n(166021),
    _ = n(22189),
    x = n(391110),
    E = n(75077),
    j = n(981631),
    C = n(388032),
    O = n(614729),
    S = n(865215);
let v = (e) => {
    let t,
        n,
        { isAllPerksVisible: s, setIsAllPerksVisible: v, previousComponent: T } = e,
        I = r.useRef(null),
        N = r.useRef(null),
        y = Object.entries((0, _.Z)()).reduce((e, t) => {
            let [n, i] = t;
            return (!1 !== i.canReveal && 'upcomingDropUntimed' !== i.name && (e[n] = i), e);
        }, {}),
        { analyticsLocations: A } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [P, R] = r.useState(!1),
        D = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        Z = (0, E.mN)(),
        { fractionalState: w } = (0, g.Z)(),
        k = (0, h.W)();
    return (
        Z ? ((t = C.intl.string(C.t['+vt7w8'])), (n = C.intl.string(C.t.LgHbnJ))) : ((t = C.intl.string(C.t.LgHbnJ)), (n = C.intl.string(C.t['+vt7w8']))),
        (0, i.jsx)(c.yWw, {
            className: l()(O.allPerksScroller, {
                [O.open]: s,
                [O.openCloseReduceMotion]: D
            }),
            ref: I,
            children: (0, i.jsx)('div', {
                className: O.container,
                children: (0, i.jsxs)(m.Gt, {
                    value: A,
                    children: [
                        (0, i.jsx)(f.Z, {
                            className: O.heroHeading,
                            onBackClick: () => {
                                (v(!1),
                                    p.default.track(j.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: x.MQ.SEE_ALL,
                                        next_component: T,
                                        interaction_component: 'Back Button'
                                    }));
                            }
                        }),
                        (0, i.jsxs)('div', {
                            className: O.column,
                            children: [
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: O.heading,
                                    children: t
                                }),
                                (0, i.jsx)(b.Z, {
                                    className: O.cardCarousel,
                                    cards: (0, E.ZM)({
                                        perksCards: y,
                                        variant: x.gM.CARD_CAROUSEL_FIRST_ROW,
                                        isPremiumSubscriber: Z,
                                        hideCardsOnNarrowScreen: !0,
                                        fractionalState: w,
                                        isInReverseTrial: k
                                    }),
                                    cardType: x.gM.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: O.heading,
                                    children: n
                                }),
                                (0, i.jsx)(b.Z, {
                                    className: O.cardCarousel,
                                    cards: (0, E.ZM)({
                                        perksCards: y,
                                        variant: x.gM.CARD_CAROUSEL_SECOND_ROW,
                                        isPremiumSubscriber: Z,
                                        hideCardsOnNarrowScreen: !0,
                                        fractionalState: w,
                                        isInReverseTrial: k
                                    }),
                                    cardType: x.gM.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: O.heading,
                                    children: C.intl.string(C.t.LTaxu7)
                                }),
                                (0, i.jsx)(b.Z, {
                                    className: O.cardCarousel,
                                    cards: (0, E.ZM)({
                                        perksCards: y,
                                        variant: x.gM.CARD_CAROUSEL_THIRD_ROW,
                                        isPremiumSubscriber: Z,
                                        hideCardsOnNarrowScreen: !0,
                                        fractionalState: w,
                                        isInReverseTrial: k
                                    }),
                                    cardType: x.gM.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: O.footerSpacing }),
                        (0, i.jsx)(o.$, {
                            innerRef: N,
                            onChange: (e) => {
                                e && !P && (p.default.track(j.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: A }), R(!0));
                            },
                            children: (0, i.jsx)('div', {
                                ref: N,
                                className: O.bottomOfPageVisibilitySensor
                            })
                        }),
                        (0, i.jsx)('img', {
                            src: S,
                            className: O.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: C.intl.string(C.t.X4IxWF)
                        })
                    ]
                })
            })
        })
    );
};
