n.d(t, { Z: () => v }), n(47120);
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
    x = n(166021),
    N = n(32173),
    b = n(391110),
    _ = n(75077),
    E = n(981631),
    j = n(388032),
    C = n(951084),
    O = n(865215);
let v = (e) => {
    let t,
        n,
        { isAllPerksVisible: s, setIsAllPerksVisible: v, previousComponent: S, isFullScreen: T } = e,
        I = i.useRef(null),
        y = i.useRef(null),
        A = Object.entries((0, N.Z)()).reduce((e, t) => {
            let [n, r] = t;
            return !1 !== r.canReveal && 'upcomingDropUntimed' !== r.name && (e[n] = r), e;
        }, {}),
        { analyticsLocations: P } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [R, D] = i.useState(!1),
        Z = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        w = (0, _.mN)(),
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
                                v(!1),
                                    p.default.track(E.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: b.MQ.SEE_ALL,
                                        next_component: S,
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
                                (0, r.jsx)(x.Z, {
                                    className: C.cardCarousel,
                                    cards: (0, _.sP)({
                                        perksCards: A,
                                        variant: b.R0.CARD_CAROUSEL_FIRST_ROW,
                                        isPremiumSubscriber: w,
                                        isFullScreen: T,
                                        fractionalState: k,
                                        isInReverseTrial: W
                                    }),
                                    cardType: b.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: C.heading,
                                    children: n
                                }),
                                (0, r.jsx)(x.Z, {
                                    className: C.cardCarousel,
                                    cards: (0, _.sP)({
                                        perksCards: A,
                                        variant: b.R0.CARD_CAROUSEL_SECOND_ROW,
                                        isPremiumSubscriber: w,
                                        isFullScreen: T,
                                        fractionalState: k,
                                        isInReverseTrial: W
                                    }),
                                    cardType: b.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: C.heading,
                                    children: j.NW.string(j.t.LTaxu7)
                                }),
                                (0, r.jsx)(x.Z, {
                                    className: C.cardCarousel,
                                    cards: (0, _.sP)({
                                        perksCards: A,
                                        variant: b.R0.CARD_CAROUSEL_THIRD_ROW,
                                        isPremiumSubscriber: w,
                                        isFullScreen: T,
                                        fractionalState: k,
                                        isInReverseTrial: W
                                    }),
                                    cardType: b.R0.CARD_CAROUSEL_THIRD_ROW
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
