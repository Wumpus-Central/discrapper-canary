n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(622535),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(433811),
    m = n(214852),
    g = n(626135),
    h = n(533525),
    p = n(314684),
    x = n(794484),
    f = n(536844),
    _ = n(342414),
    E = n(938736),
    C = n(391110),
    T = n(71363),
    S = n(781800),
    b = n(981631),
    I = n(388032),
    N = n(368549),
    v = n(865215);
let A = 'SubscriberNitroHome';
t.Z = () => {
    (0, m.z)(u.X);
    let e = s.useRef(null),
        [t, n] = s.useState(!1),
        { analyticsLocations: r } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [j, R] = s.useState(!1);
    (0, p.FM)();
    let O = (0, h.b)(A),
        P = (0, E.TW)(A);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.AdvancedScrollerAuto, {
                className: N.mainPageScroller,
                ref: e,
                children: (0, i.jsx)('div', {
                    className: N.container,
                    children: (0, i.jsxs)(d.Gt, {
                        value: r,
                        children: [
                            (0, i.jsx)(_.Z, {
                                className: N.heroHeading,
                                location: C.MQ.HOME
                            }),
                            (0, i.jsx)(x.Z, {
                                variant: C.R0.WHATS_NEW,
                                className: a()(N.whatsNew, { [N.whatsNewWithOriginalHeroHeading]: !(O || P) }),
                                noBackground: !0,
                                leftAlignHeaders: !0
                            }),
                            (0, i.jsx)(x.Z, {
                                className: N.perksDiscoverability,
                                noBackground: !0,
                                leftAlignHeaders: !0,
                                showAllPerksButton: (0, i.jsx)(S.Z, {
                                    setIsAllPerksVisible: n,
                                    previousComponent: C.MQ.HOME
                                })
                            }),
                            (0, i.jsx)(f.Z, {
                                className: N.giftNitro,
                                location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                analyticsLocation: {
                                    page: b.ZY5.NITRO_HOME,
                                    section: b.jXE.GIFT_BANNER
                                }
                            }),
                            (0, i.jsx)('div', { className: N.footerSpacing }),
                            (0, i.jsx)(l.$, {
                                onChange: (e) => {
                                    e && !j && (g.default.track(b.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: r }), R(!0));
                                },
                                children: (0, i.jsx)('div', { className: N.bottomOfPageVisibilitySensor })
                            }),
                            (0, i.jsx)('img', {
                                src: v,
                                className: N.bottomIllustration,
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
                previousComponent: C.MQ.HOME
            })
        ]
    });
};
