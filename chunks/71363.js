n(724458), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(607070),
    u = n(100527),
    m = n(906732),
    g = n(975298),
    h = n(410154),
    p = n(626135),
    x = n(103433),
    f = n(166021),
    _ = n(32173),
    E = n(391110),
    C = n(75077),
    T = n(981631),
    S = n(388032),
    b = n(368549),
    I = n(865215);
t.Z = (e) => {
    let t,
        n,
        { isAllPerksVisible: s, setIsAllPerksVisible: N, previousComponent: v, isFullScreen: A } = e,
        j = r.useRef(null),
        O = Object.entries((0, _.Z)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && 'upcomingDropUntimed' !== i.name && (e[n] = i), e;
        }, {}),
        { analyticsLocations: R } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [P, y] = r.useState(!1),
        B = (0, h.ZP)('perks-discoverability'),
        D = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        Z = (0, C.mN)(),
        { fractionalState: L } = (0, g.Z)();
    return (
        Z ? ((t = S.intl.string(S.t['+vt7w8'])), (n = S.intl.string(S.t.LgHbnJ))) : ((t = S.intl.string(S.t.LgHbnJ)), (n = S.intl.string(S.t['+vt7w8']))),
        (0, i.jsx)(c.AdvancedScrollerAuto, {
            className: a()(b.allPerksScroller, {
                [b.open]: s,
                [b.openCloseReduceMotion]: D
            }),
            ref: j,
            children: (0, i.jsx)('div', {
                className: b.container,
                children: (0, i.jsxs)(m.Gt, {
                    value: R,
                    children: [
                        (0, i.jsx)(x.Z, {
                            className: b.heroHeading,
                            onBackClick: () => {
                                N(!1),
                                    p.default.track(T.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: E.MQ.SEE_ALL,
                                        next_component: v,
                                        interaction_component: 'Back Button'
                                    });
                            }
                        }),
                        (0, i.jsxs)('div', {
                            className: b.column,
                            children: [
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: b.heading,
                                    children: t
                                }),
                                (0, i.jsx)(f.Z, {
                                    className: b.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: O,
                                        variant: E.R0.CARD_CAROUSEL_FIRST_ROW,
                                        shopMarketingVariation: B,
                                        isPremiumSubscriber: Z,
                                        isFullScreen: A,
                                        fractionalState: L
                                    }),
                                    cardType: E.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: b.heading,
                                    children: n
                                }),
                                (0, i.jsx)(f.Z, {
                                    className: b.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: O,
                                        variant: E.R0.CARD_CAROUSEL_SECOND_ROW,
                                        shopMarketingVariation: B,
                                        isPremiumSubscriber: Z,
                                        isFullScreen: A,
                                        fractionalState: L
                                    }),
                                    cardType: E.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: b.heading,
                                    children: S.intl.string(S.t.LTaxu7)
                                }),
                                (0, i.jsx)(f.Z, {
                                    className: b.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: O,
                                        variant: E.R0.CARD_CAROUSEL_THIRD_ROW,
                                        shopMarketingVariation: B,
                                        isPremiumSubscriber: Z,
                                        isFullScreen: A,
                                        fractionalState: L
                                    }),
                                    cardType: E.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: b.footerSpacing }),
                        (0, i.jsx)(o.$, {
                            onChange: (e) => {
                                e && !P && (p.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: R }), y(!0));
                            },
                            children: (0, i.jsx)('div', { className: b.bottomOfPageVisibilitySensor })
                        }),
                        (0, i.jsx)('img', {
                            src: I,
                            className: b.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: S.intl.string(S.t.X4IxWF)
                        })
                    ]
                })
            })
        })
    );
};
