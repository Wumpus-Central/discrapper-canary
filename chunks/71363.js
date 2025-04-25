n.d(t, { Z: () => v }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
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
    _ = n(32173),
    x = n(391110),
    E = n(75077),
    j = n(981631),
    C = n(388032),
    O = n(614729),
    S = n(865215);
let v = (e) => {
    let t,
        n,
        { isAllPerksVisible: s, setIsAllPerksVisible: v, previousComponent: T, isFullScreen: I } = e,
        N = r.useRef(null),
        y = r.useRef(null),
        A = Object.entries((0, _.Z)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && 'upcomingDropUntimed' !== i.name && (e[n] = i), e;
        }, {}),
        { analyticsLocations: P } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [R, D] = r.useState(!1),
        Z = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        w = (0, E.mN)(),
        { fractionalState: k } = (0, p.Z)(),
        L = (0, h.W)();
    return (
        w ? ((t = C.intl.string(C.t['+vt7w8'])), (n = C.intl.string(C.t.LgHbnJ))) : ((t = C.intl.string(C.t.LgHbnJ)), (n = C.intl.string(C.t['+vt7w8']))),
        (0, i.jsx)(c.yWw, {
            className: l()(O.allPerksScroller, {
                [O.open]: s,
                [O.openCloseReduceMotion]: Z
            }),
            ref: N,
            children: (0, i.jsx)('div', {
                className: O.container,
                children: (0, i.jsxs)(m.Gt, {
                    value: P,
                    children: [
                        (0, i.jsx)(f.Z, {
                            className: O.heroHeading,
                            onBackClick: () => {
                                v(!1),
                                    g.default.track(j.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: x.MQ.SEE_ALL,
                                        next_component: T,
                                        interaction_component: 'Back Button'
                                    });
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
                                    cards: (0, E.sP)({
                                        perksCards: A,
                                        variant: x.R0.CARD_CAROUSEL_FIRST_ROW,
                                        isPremiumSubscriber: w,
                                        isFullScreen: I,
                                        fractionalState: k,
                                        isInReverseTrial: L
                                    }),
                                    cardType: x.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: O.heading,
                                    children: n
                                }),
                                (0, i.jsx)(b.Z, {
                                    className: O.cardCarousel,
                                    cards: (0, E.sP)({
                                        perksCards: A,
                                        variant: x.R0.CARD_CAROUSEL_SECOND_ROW,
                                        isPremiumSubscriber: w,
                                        isFullScreen: I,
                                        fractionalState: k,
                                        isInReverseTrial: L
                                    }),
                                    cardType: x.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: O.heading,
                                    children: C.intl.string(C.t.LTaxu7)
                                }),
                                (0, i.jsx)(b.Z, {
                                    className: O.cardCarousel,
                                    cards: (0, E.sP)({
                                        perksCards: A,
                                        variant: x.R0.CARD_CAROUSEL_THIRD_ROW,
                                        isPremiumSubscriber: w,
                                        isFullScreen: I,
                                        fractionalState: k,
                                        isInReverseTrial: L
                                    }),
                                    cardType: x.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: O.footerSpacing }),
                        (0, i.jsx)(o.$, {
                            innerRef: y,
                            onChange: (e) => {
                                e && !R && (g.default.track(j.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }), D(!0));
                            },
                            children: (0, i.jsx)('div', {
                                ref: y,
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
