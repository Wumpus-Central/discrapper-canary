n.d(t, { Z: () => b }), n(724458), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(607070),
    u = n(100527),
    m = n(906732),
    h = n(975298),
    g = n(410154),
    _ = n(626135),
    x = n(103433),
    p = n(166021),
    E = n(32173),
    C = n(391110),
    f = n(75077),
    T = n(981631),
    N = n(388032),
    I = n(368549),
    S = n(865215);
let b = (e) => {
    let t,
        n,
        { isAllPerksVisible: r, setIsAllPerksVisible: b, previousComponent: v, isFullScreen: j } = e,
        A = s.useRef(null),
        O = Object.entries((0, E.Z)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && 'upcomingDropUntimed' !== i.name && (e[n] = i), e;
        }, {}),
        { analyticsLocations: R } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [P, D] = s.useState(!1),
        y = (0, g.ZP)('perks-discoverability'),
        Z = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        L = (0, f.mN)(),
        { fractionalState: k } = (0, h.Z)();
    return (
        L ? ((t = N.intl.string(N.t['+vt7w8'])), (n = N.intl.string(N.t.LgHbnJ))) : ((t = N.intl.string(N.t.LgHbnJ)), (n = N.intl.string(N.t['+vt7w8']))),
        (0, i.jsx)(c.yWw, {
            className: l()(I.allPerksScroller, {
                [I.open]: r,
                [I.openCloseReduceMotion]: Z
            }),
            ref: A,
            children: (0, i.jsx)('div', {
                className: I.container,
                children: (0, i.jsxs)(m.Gt, {
                    value: R,
                    children: [
                        (0, i.jsx)(x.Z, {
                            className: I.heroHeading,
                            onBackClick: () => {
                                b(!1),
                                    _.default.track(T.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: C.MQ.SEE_ALL,
                                        next_component: v,
                                        interaction_component: 'Back Button'
                                    });
                            }
                        }),
                        (0, i.jsxs)('div', {
                            className: I.column,
                            children: [
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: I.heading,
                                    children: t
                                }),
                                (0, i.jsx)(p.Z, {
                                    className: I.cardCarousel,
                                    cards: (0, f.sP)({
                                        perksCards: O,
                                        variant: C.R0.CARD_CAROUSEL_FIRST_ROW,
                                        shopMarketingVariation: y,
                                        isPremiumSubscriber: L,
                                        isFullScreen: j,
                                        fractionalState: k
                                    }),
                                    cardType: C.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: I.heading,
                                    children: n
                                }),
                                (0, i.jsx)(p.Z, {
                                    className: I.cardCarousel,
                                    cards: (0, f.sP)({
                                        perksCards: O,
                                        variant: C.R0.CARD_CAROUSEL_SECOND_ROW,
                                        shopMarketingVariation: y,
                                        isPremiumSubscriber: L,
                                        isFullScreen: j,
                                        fractionalState: k
                                    }),
                                    cardType: C.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: I.heading,
                                    children: N.intl.string(N.t.LTaxu7)
                                }),
                                (0, i.jsx)(p.Z, {
                                    className: I.cardCarousel,
                                    cards: (0, f.sP)({
                                        perksCards: O,
                                        variant: C.R0.CARD_CAROUSEL_THIRD_ROW,
                                        shopMarketingVariation: y,
                                        isPremiumSubscriber: L,
                                        isFullScreen: j,
                                        fractionalState: k
                                    }),
                                    cardType: C.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: I.footerSpacing }),
                        (0, i.jsx)(o.$, {
                            onChange: (e) => {
                                e && !P && (_.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: R }), D(!0));
                            },
                            children: (0, i.jsx)('div', { className: I.bottomOfPageVisibilitySensor })
                        }),
                        (0, i.jsx)('img', {
                            src: S,
                            className: I.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: N.intl.string(N.t.X4IxWF)
                        })
                    ]
                })
            })
        })
    );
};
