n.d(t, { Z: () => v }), n(724458), n(47120);
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
    g = n(975298),
    h = n(410154),
    x = n(626135),
    _ = n(695349),
    p = n(103433),
    E = n(166021),
    C = n(32173),
    f = n(391110),
    T = n(75077),
    N = n(981631),
    S = n(388032),
    I = n(391251),
    b = n(865215);
let v = (e) => {
    let t,
        n,
        { isAllPerksVisible: r, setIsAllPerksVisible: v, previousComponent: j, isFullScreen: A } = e,
        O = s.useRef(null),
        R = Object.entries((0, C.Z)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && 'upcomingDropUntimed' !== i.name && (e[n] = i), e;
        }, {}),
        { analyticsLocations: P } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [D, y] = s.useState(!1),
        Z = (0, h.ZP)('perks-discoverability'),
        k = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        L = (0, T.mN)(),
        { fractionalState: B } = (0, g.Z)(),
        M = (0, _.W)();
    return (
        L ? ((t = S.intl.string(S.t['+vt7w8'])), (n = S.intl.string(S.t.LgHbnJ))) : ((t = S.intl.string(S.t.LgHbnJ)), (n = S.intl.string(S.t['+vt7w8']))),
        (0, i.jsx)(c.yWw, {
            className: l()(I.allPerksScroller, {
                [I.open]: r,
                [I.openCloseReduceMotion]: k
            }),
            ref: O,
            children: (0, i.jsx)('div', {
                className: I.container,
                children: (0, i.jsxs)(m.Gt, {
                    value: P,
                    children: [
                        (0, i.jsx)(p.Z, {
                            className: I.heroHeading,
                            onBackClick: () => {
                                v(!1),
                                    x.default.track(N.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: f.MQ.SEE_ALL,
                                        next_component: j,
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
                                (0, i.jsx)(E.Z, {
                                    className: I.cardCarousel,
                                    cards: (0, T.sP)({
                                        perksCards: R,
                                        variant: f.R0.CARD_CAROUSEL_FIRST_ROW,
                                        shopMarketingVariation: Z,
                                        isPremiumSubscriber: L,
                                        isFullScreen: A,
                                        fractionalState: B,
                                        isInReverseTrial: M
                                    }),
                                    cardType: f.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: I.heading,
                                    children: n
                                }),
                                (0, i.jsx)(E.Z, {
                                    className: I.cardCarousel,
                                    cards: (0, T.sP)({
                                        perksCards: R,
                                        variant: f.R0.CARD_CAROUSEL_SECOND_ROW,
                                        shopMarketingVariation: Z,
                                        isPremiumSubscriber: L,
                                        isFullScreen: A,
                                        fractionalState: B,
                                        isInReverseTrial: M
                                    }),
                                    cardType: f.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: I.heading,
                                    children: S.intl.string(S.t.LTaxu7)
                                }),
                                (0, i.jsx)(E.Z, {
                                    className: I.cardCarousel,
                                    cards: (0, T.sP)({
                                        perksCards: R,
                                        variant: f.R0.CARD_CAROUSEL_THIRD_ROW,
                                        shopMarketingVariation: Z,
                                        isPremiumSubscriber: L,
                                        isFullScreen: A,
                                        fractionalState: B,
                                        isInReverseTrial: M
                                    }),
                                    cardType: f.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: I.footerSpacing }),
                        (0, i.jsx)(o.$, {
                            onChange: (e) => {
                                e && !D && (x.default.track(N.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }), y(!0));
                            },
                            children: (0, i.jsx)('div', { className: I.bottomOfPageVisibilitySensor })
                        }),
                        (0, i.jsx)('img', {
                            src: b,
                            className: I.bottomIllustration,
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
