n.d(t, { Z: () => R }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282);
var i = n(255367),
    r = n(73800),
    s = n(622535),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(433811),
    d = n(214852),
    u = n(626135),
    m = n(63063),
    g = n(464670),
    p = n(796634),
    h = n(767714),
    f = n(314684),
    b = n(560223),
    _ = n(347475),
    x = n(342414),
    E = n(386733),
    C = n(391110),
    j = n(71363),
    O = n(781800),
    S = n(981631),
    v = n(388032),
    T = n(752872),
    I = n(865215),
    N = n(901644),
    y = n(172811);
let A = (e) => {
        let { headerText: t, bodyText: n, buttonElement: r, imageSrc: s } = e;
        return (0, i.jsxs)('div', {
            className: T.giftingVariant2Card,
            children: [
                (0, i.jsxs)('div', {
                    className: T.giftingVariant2CardContent,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            variant: 'heading-lg/extrabold',
                            color: 'header-primary',
                            children: t
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: n
                        }),
                        (0, i.jsx)('div', { children: r })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: T.giftingVariant2CardImageContainer,
                    children: (0, i.jsx)('img', {
                        src: s,
                        alt: '',
                        className: T.giftingVariant2CardImage
                    })
                })
            ]
        });
    },
    P = (e) => {
        let { analyticsLocations: t } = e,
            n = m.Z.getArticleURL(S.BhN.REFERRAL_PROGRAM);
        return (0, i.jsxs)('div', {
            className: T.giftingVariant2Container,
            children: [
                (0, i.jsx)('div', {
                    className: T.giftingVariant2CardHeader,
                    children: (0, i.jsx)(b.N, { title: v.intl.string(v.t['OxZs+/']) })
                }),
                (0, i.jsxs)('div', {
                    className: T.giftingVariant2CardContainer,
                    children: [
                        (0, i.jsx)(A, {
                            headerText: v.intl.string(v.t.tPY4o6),
                            bodyText: v.intl.format(v.t.FjrXCg, {
                                numFriends: p.Q,
                                helpdeskArticle: n
                            }),
                            buttonElement: (0, i.jsx)(l.zxk, {
                                className: T.giftingVariant2CardContentButton,
                                color: l.Ttl.PRIMARY,
                                onClick: () => (0, E.c)({ analyticsLocations: t }),
                                children: v.intl.string(v.t.Lm2nFR)
                            }),
                            imageSrc: N.Z
                        }),
                        (0, i.jsx)(A, {
                            headerText: v.intl.string(v.t.GyAbk5),
                            bodyText: v.intl.string(v.t.DNXdBA),
                            buttonElement: (0, i.jsx)(h.Z, {
                                showIcon: !1,
                                isGift: !0,
                                className: T.giftingVariant2CardContentPremiumSubscribeButton,
                                look: l.zxk.Looks.BLANK,
                                textOptions: {
                                    textOverride: v.intl.string(v.t.Ve9Ge3),
                                    textClassName: T.giftingVariant2CardContentPremiumSubscribeButtonText
                                },
                                color: l.zxk.Colors.CUSTOM
                            }),
                            imageSrc: y.Z
                        })
                    ]
                })
            ]
        });
    },
    R = () => {
        (0, d.z)(c.X);
        let e = r.useRef(null),
            t = r.useRef(null),
            [n, m] = r.useState(!1),
            { analyticsLocations: p } = (0, o.ZP)(a.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [h, E] = r.useState(!1);
        (0, f.FM)();
        let N = 'true' === new URLSearchParams(window.location.search).get('autoScroll');
        window.history.replaceState({}, '', window.location.pathname);
        let y = g.PU.useExperiment({ location: 'HeroHeading' });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.yWw, {
                    className: T.mainPageScroller,
                    ref: e,
                    children: (0, i.jsx)('div', {
                        className: T.container,
                        children: (0, i.jsxs)(o.Gt, {
                            value: p,
                            children: [
                                (0, i.jsx)(x.Z, {
                                    className: T.heroHeading,
                                    location: C.MQ.HOME
                                }),
                                y.cohort === g.XS.Variant2 && (0, i.jsx)(P, { analyticsLocations: p }),
                                (0, i.jsx)(b.Z, {
                                    variant: C.gM.WHATS_NEW,
                                    className: T.whatsNew,
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    shouldAutoScroll: N
                                }),
                                (0, i.jsx)(b.Z, {
                                    className: T.perksDiscoverability,
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    showAllPerksButton: (0, i.jsx)(O.Z, {
                                        setIsAllPerksVisible: m,
                                        previousComponent: C.MQ.HOME
                                    })
                                }),
                                (0, i.jsx)(_.Z, {
                                    className: T.giftNitro,
                                    location: a.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                    analyticsLocation: {
                                        page: S.ZY5.NITRO_HOME,
                                        section: S.jXE.GIFT_BANNER
                                    }
                                }),
                                (0, i.jsx)('div', { className: T.footerSpacing }),
                                (0, i.jsx)(s.$, {
                                    innerRef: t,
                                    onChange: (e) => {
                                        e && !h && (u.default.track(S.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: p }), E(!0));
                                    },
                                    children: (0, i.jsx)('div', {
                                        ref: t,
                                        className: T.bottomOfPageVisibilitySensor
                                    })
                                }),
                                (0, i.jsx)('img', {
                                    src: I,
                                    className: T.bottomIllustration,
                                    width: 112,
                                    height: 85,
                                    alt: v.intl.string(v.t.X4IxWF)
                                })
                            ]
                        })
                    })
                }),
                (0, i.jsx)(j.Z, {
                    isAllPerksVisible: n,
                    setIsAllPerksVisible: m,
                    previousComponent: C.MQ.HOME
                })
            ]
        });
    };
