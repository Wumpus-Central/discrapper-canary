n.d(t, { Z: () => A }), n(47120), n(610138), n(216116), n(78328), n(815648);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(622535),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(433811),
    m = n(214852),
    h = n(626135),
    g = n(533525),
    x = n(314684),
    _ = n(794484),
    p = n(536844),
    E = n(342414),
    C = n(938736),
    f = n(391110),
    T = n(71363),
    N = n(781800),
    S = n(981631),
    I = n(388032),
    b = n(391251),
    v = n(865215);
let j = 'SubscriberNitroHome',
    A = () => {
        (0, m.z)(u.X);
        let e = s.useRef(null),
            [t, n] = s.useState(!1),
            { analyticsLocations: r } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [A, O] = s.useState(!1);
        (0, x.FM)();
        let R = (0, g.b)(j),
            P = (0, C.TW)(j),
            D = 'true' === new URLSearchParams(window.location.search).get('autoScroll');
        return (
            window.history.replaceState({}, '', window.location.pathname),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(o.yWw, {
                        className: b.mainPageScroller,
                        ref: e,
                        children: (0, i.jsx)('div', {
                            className: b.container,
                            children: (0, i.jsxs)(d.Gt, {
                                value: r,
                                children: [
                                    (0, i.jsx)(E.Z, {
                                        className: b.heroHeading,
                                        location: f.MQ.HOME
                                    }),
                                    (0, i.jsx)(_.Z, {
                                        variant: f.R0.WHATS_NEW,
                                        className: l()(b.whatsNew, { [b.whatsNewWithOriginalHeroHeading]: !(R || P) }),
                                        noBackground: !0,
                                        leftAlignHeaders: !0,
                                        shouldAutoScroll: D
                                    }),
                                    (0, i.jsx)(_.Z, {
                                        className: b.perksDiscoverability,
                                        noBackground: !0,
                                        leftAlignHeaders: !0,
                                        showAllPerksButton: (0, i.jsx)(N.Z, {
                                            setIsAllPerksVisible: n,
                                            previousComponent: f.MQ.HOME
                                        })
                                    }),
                                    (0, i.jsx)(p.Z, {
                                        className: b.giftNitro,
                                        location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                        analyticsLocation: {
                                            page: S.ZY5.NITRO_HOME,
                                            section: S.jXE.GIFT_BANNER
                                        }
                                    }),
                                    (0, i.jsx)('div', { className: b.footerSpacing }),
                                    (0, i.jsx)(a.$, {
                                        onChange: (e) => {
                                            e && !A && (h.default.track(S.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: r }), O(!0));
                                        },
                                        children: (0, i.jsx)('div', { className: b.bottomOfPageVisibilitySensor })
                                    }),
                                    (0, i.jsx)('img', {
                                        src: v,
                                        className: b.bottomIllustration,
                                        width: 112,
                                        height: 85,
                                        alt: I.intl.string(I.t.X4IxWF)
                                    })
                                ]
                            })
                        })
                    }),
                    (0, i.jsx)(T.Z, {
                        isAllPerksVisible: t,
                        setIsAllPerksVisible: n,
                        previousComponent: f.MQ.HOME
                    })
                ]
            })
        );
    };
