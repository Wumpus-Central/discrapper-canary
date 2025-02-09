n.d(t, { Z: () => S }), n(47120), n(610138), n(216116), n(78328), n(815648);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(622535),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(433811),
    m = n(214852),
    g = n(626135),
    _ = n(533525),
    p = n(314684),
    f = n(794484),
    h = n(536844),
    x = n(342414),
    E = n(938736),
    C = n(391110),
    b = n(71363),
    v = n(781800),
    T = n(981631),
    N = n(388032),
    I = n(244383),
    R = n(865215);
let j = 'SubscriberNitroHome',
    S = () => {
        (0, m.z)(u.X);
        let e = r.useRef(null),
            [t, n] = r.useState(!1),
            { analyticsLocations: a } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [S, A] = r.useState(!1);
        (0, p.FM)();
        let P = (0, _.b)(j),
            Z = (0, E.TW)(j),
            w = 'true' === new URLSearchParams(window.location.search).get('autoScroll');
        return (
            window.history.replaceState({}, '', window.location.pathname),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(o.yWw, {
                        className: I.mainPageScroller,
                        ref: e,
                        children: (0, i.jsx)('div', {
                            className: I.container,
                            children: (0, i.jsxs)(d.Gt, {
                                value: a,
                                children: [
                                    (0, i.jsx)(x.Z, {
                                        className: I.heroHeading,
                                        location: C.MQ.HOME
                                    }),
                                    (0, i.jsx)(f.Z, {
                                        variant: C.R0.WHATS_NEW,
                                        className: s()(I.whatsNew, { [I.whatsNewWithOriginalHeroHeading]: !(P || Z) }),
                                        noBackground: !0,
                                        leftAlignHeaders: !0,
                                        shouldAutoScroll: w
                                    }),
                                    (0, i.jsx)(f.Z, {
                                        className: I.perksDiscoverability,
                                        noBackground: !0,
                                        leftAlignHeaders: !0,
                                        showAllPerksButton: (0, i.jsx)(v.Z, {
                                            setIsAllPerksVisible: n,
                                            previousComponent: C.MQ.HOME
                                        })
                                    }),
                                    (0, i.jsx)(h.Z, {
                                        className: I.giftNitro,
                                        location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                        analyticsLocation: {
                                            page: T.ZY5.NITRO_HOME,
                                            section: T.jXE.GIFT_BANNER
                                        }
                                    }),
                                    (0, i.jsx)('div', { className: I.footerSpacing }),
                                    (0, i.jsx)(l.$, {
                                        onChange: (e) => {
                                            e && !S && (g.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: a }), A(!0));
                                        },
                                        children: (0, i.jsx)('div', { className: I.bottomOfPageVisibilitySensor })
                                    }),
                                    (0, i.jsx)('img', {
                                        src: R,
                                        className: I.bottomIllustration,
                                        width: 112,
                                        height: 85,
                                        alt: N.intl.string(N.t.X4IxWF)
                                    })
                                ]
                            })
                        })
                    }),
                    (0, i.jsx)(b.Z, {
                        isAllPerksVisible: t,
                        setIsAllPerksVisible: n,
                        previousComponent: C.MQ.HOME
                    })
                ]
            })
        );
    };
