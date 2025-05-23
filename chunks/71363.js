n.d(t, { Z: () => v }), n(388685);
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
    C = n(981631),
    O = n(388032),
    j = n(614729),
    S = n(865215);
let v = (e) => {
    let t,
        n,
        { isAllPerksVisible: s, setIsAllPerksVisible: v, previousComponent: T, isFullScreen: N } = e,
        I = r.useRef(null),
        y = r.useRef(null),
        A = Object.entries((0, _.Z)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && 'upcomingDropUntimed' !== i.name && (e[n] = i), e;
        }, {}),
        { analyticsLocations: P } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [R, D] = r.useState(!1),
        Z = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        w = (0, E.mN)(),
        { fractionalState: k } = (0, g.Z)(),
        L = (0, h.W)();
    return (
        w ? ((t = O.intl.string(O.t['+vt7w8'])), (n = O.intl.string(O.t.LgHbnJ))) : ((t = O.intl.string(O.t.LgHbnJ)), (n = O.intl.string(O.t['+vt7w8']))),
        (0, i.jsx)(c.yWw, {
            className: l()(j.allPerksScroller, {
                [j.open]: s,
                [j.openCloseReduceMotion]: Z
            }),
            ref: I,
            children: (0, i.jsx)('div', {
                className: j.container,
                children: (0, i.jsxs)(m.Gt, {
                    value: P,
                    children: [
                        (0, i.jsx)(f.Z, {
                            className: j.heroHeading,
                            onBackClick: () => {
                                v(!1),
                                    p.default.track(C.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: x.MQ.SEE_ALL,
                                        next_component: T,
                                        interaction_component: 'Back Button'
                                    });
                            }
                        }),
                        (0, i.jsxs)('div', {
                            className: j.column,
                            children: [
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: j.heading,
                                    children: t
                                }),
                                (0, i.jsx)(b.Z, {
                                    className: j.cardCarousel,
                                    cards: (0, E.ZM)({
                                        perksCards: A,
                                        variant: x.gM.CARD_CAROUSEL_FIRST_ROW,
                                        isPremiumSubscriber: w,
                                        isFullScreen: N,
                                        fractionalState: k,
                                        isInReverseTrial: L
                                    }),
                                    cardType: x.gM.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: j.heading,
                                    children: n
                                }),
                                (0, i.jsx)(b.Z, {
                                    className: j.cardCarousel,
                                    cards: (0, E.ZM)({
                                        perksCards: A,
                                        variant: x.gM.CARD_CAROUSEL_SECOND_ROW,
                                        isPremiumSubscriber: w,
                                        isFullScreen: N,
                                        fractionalState: k,
                                        isInReverseTrial: L
                                    }),
                                    cardType: x.gM.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: j.heading,
                                    children: O.intl.string(O.t.LTaxu7)
                                }),
                                (0, i.jsx)(b.Z, {
                                    className: j.cardCarousel,
                                    cards: (0, E.ZM)({
                                        perksCards: A,
                                        variant: x.gM.CARD_CAROUSEL_THIRD_ROW,
                                        isPremiumSubscriber: w,
                                        isFullScreen: N,
                                        fractionalState: k,
                                        isInReverseTrial: L
                                    }),
                                    cardType: x.gM.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: j.footerSpacing }),
                        (0, i.jsx)(o.$, {
                            innerRef: y,
                            onChange: (e) => {
                                e && !R && (p.default.track(C.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }), D(!0));
                            },
                            children: (0, i.jsx)('div', {
                                ref: y,
                                className: j.bottomOfPageVisibilitySensor
                            })
                        }),
                        (0, i.jsx)('img', {
                            src: S,
                            className: j.bottomIllustration,
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
