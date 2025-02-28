n.d(t, { Z: () => y }), n(47120), n(610138), n(216116), n(78328), n(815648), n(301563);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(622535),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(464824),
    m = n(214852),
    g = n(626135),
    p = n(533525),
    h = n(314684),
    f = n(794484),
    b = n(536844),
    N = n(342414),
    x = n(938736),
    _ = n(615042),
    E = n(391110),
    j = n(71363),
    C = n(781800),
    O = n(981631),
    v = n(388032),
    S = n(951084),
    T = n(865215);
let I = 'SubscriberNitroHome',
    y = () => {
        (0, m.z)(u.X), (0, _.u)();
        let e = i.useRef(null),
            [t, n] = i.useState(!1),
            { analyticsLocations: s } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [y, A] = i.useState(!1);
        (0, h.FM)();
        let P = (0, p.b)(I),
            R = (0, x.TW)(I),
            D = 'true' === new URLSearchParams(window.location.search).get('autoScroll');
        return (
            window.history.replaceState({}, '', window.location.pathname),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.yWw, {
                        className: S.mainPageScroller,
                        ref: e,
                        children: (0, r.jsx)('div', {
                            className: S.container,
                            children: (0, r.jsxs)(d.Gt, {
                                value: s,
                                children: [
                                    (0, r.jsx)(N.Z, {
                                        className: S.heroHeading,
                                        location: E.MQ.HOME
                                    }),
                                    (0, r.jsx)(f.Z, {
                                        variant: E.R0.WHATS_NEW,
                                        className: a()(S.whatsNew, { [S.whatsNewWithOriginalHeroHeading]: !(P || R) }),
                                        noBackground: !0,
                                        leftAlignHeaders: !0,
                                        shouldAutoScroll: D
                                    }),
                                    (0, r.jsx)(f.Z, {
                                        className: S.perksDiscoverability,
                                        noBackground: !0,
                                        leftAlignHeaders: !0,
                                        showAllPerksButton: (0, r.jsx)(C.Z, {
                                            setIsAllPerksVisible: n,
                                            previousComponent: E.MQ.HOME
                                        })
                                    }),
                                    (0, r.jsx)(b.Z, {
                                        className: S.giftNitro,
                                        location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                        analyticsLocation: {
                                            page: O.ZY5.NITRO_HOME,
                                            section: O.jXE.GIFT_BANNER
                                        }
                                    }),
                                    (0, r.jsx)('div', { className: S.footerSpacing }),
                                    (0, r.jsx)(l.$, {
                                        onChange: (e) => {
                                            e && !y && (g.default.track(O.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: s }), A(!0));
                                        },
                                        children: (0, r.jsx)('div', { className: S.bottomOfPageVisibilitySensor })
                                    }),
                                    (0, r.jsx)('img', {
                                        src: T,
                                        className: S.bottomIllustration,
                                        width: 112,
                                        height: 85,
                                        alt: v.NW.string(v.t.X4IxWF)
                                    })
                                ]
                            })
                        })
                    }),
                    (0, r.jsx)(j.Z, {
                        isAllPerksVisible: t,
                        setIsAllPerksVisible: n,
                        previousComponent: E.MQ.HOME
                    })
                ]
            })
        );
    };
