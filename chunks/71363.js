n.d(t, { Z: () => S }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(607070),
    u = n(100527),
    m = n(906732),
    g = n(975298),
    p = n(626135),
    h = n(695349),
    f = n(103433),
    _ = n(166021),
    b = n(32173),
    N = n(391110),
    x = n(75077),
    E = n(981631),
    j = n(388032),
    C = n(614729),
    O = n(865215);
let S = (e) => {
    let t,
        n,
        { isAllPerksVisible: s, setIsAllPerksVisible: S, previousComponent: v, isFullScreen: T } = e,
        I = i.useRef(null),
        y = i.useRef(null),
        A = Object.entries((0, b.Z)()).reduce((e, t) => {
            let [n, r] = t;
            return !1 !== r.canReveal && 'upcomingDropUntimed' !== r.name && (e[n] = r), e;
        }, {}),
        { analyticsLocations: P } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [R, D] = i.useState(!1),
        Z = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        w = (0, x.mN)(),
        { fractionalState: k } = (0, g.Z)(),
        W = (0, h.W)();
    return (
        w ? ((t = j.NW.string(j.t['+vt7w8'])), (n = j.NW.string(j.t.LgHbnJ))) : ((t = j.NW.string(j.t.LgHbnJ)), (n = j.NW.string(j.t['+vt7w8']))),
        (0, r.jsx)(c.yWw, {
            className: a()(C.allPerksScroller, {
                [C.open]: s,
                [C.openCloseReduceMotion]: Z
            }),
            ref: I,
            children: (0, r.jsx)('div', {
                className: C.container,
                children: (0, r.jsxs)(m.Gt, {
                    value: P,
                    children: [
                        (0, r.jsx)(f.Z, {
                            className: C.heroHeading,
                            onBackClick: () => {
                                S(!1),
                                    p.default.track(E.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: N.MQ.SEE_ALL,
                                        next_component: v,
                                        interaction_component: 'Back Button'
                                    });
                            }
                        }),
                        (0, r.jsxs)('div', {
                            className: C.column,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: C.heading,
                                    children: t
                                }),
                                (0, r.jsx)(_.Z, {
                                    className: C.cardCarousel,
                                    cards: (0, x.sP)({
                                        perksCards: A,
                                        variant: N.R0.CARD_CAROUSEL_FIRST_ROW,
                                        isPremiumSubscriber: w,
                                        isFullScreen: T,
                                        fractionalState: k,
                                        isInReverseTrial: W
                                    }),
                                    cardType: N.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: C.heading,
                                    children: n
                                }),
                                (0, r.jsx)(_.Z, {
                                    className: C.cardCarousel,
                                    cards: (0, x.sP)({
                                        perksCards: A,
                                        variant: N.R0.CARD_CAROUSEL_SECOND_ROW,
                                        isPremiumSubscriber: w,
                                        isFullScreen: T,
                                        fractionalState: k,
                                        isInReverseTrial: W
                                    }),
                                    cardType: N.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: C.heading,
                                    children: j.NW.string(j.t.LTaxu7)
                                }),
                                (0, r.jsx)(_.Z, {
                                    className: C.cardCarousel,
                                    cards: (0, x.sP)({
                                        perksCards: A,
                                        variant: N.R0.CARD_CAROUSEL_THIRD_ROW,
                                        isPremiumSubscriber: w,
                                        isFullScreen: T,
                                        fractionalState: k,
                                        isInReverseTrial: W
                                    }),
                                    cardType: N.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, r.jsx)('div', { className: C.footerSpacing }),
                        (0, r.jsx)(o.$, {
                            innerRef: y,
                            onChange: (e) => {
                                e && !R && (p.default.track(E.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }), D(!0));
                            },
                            children: (0, r.jsx)('div', {
                                ref: y,
                                className: C.bottomOfPageVisibilitySensor
                            })
                        }),
                        (0, r.jsx)('img', {
                            src: O,
                            className: C.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: j.NW.string(j.t.X4IxWF)
                        })
                    ]
                })
            })
        })
    );
};
