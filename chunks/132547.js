n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(622535),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(464824),
    g = n(214852),
    m = n(626135),
    f = n(533525),
    p = n(314684),
    _ = n(794484),
    h = n(536844),
    x = n(342414),
    E = n(938736),
    b = n(391110),
    C = n(71363),
    v = n(781800),
    T = n(981631),
    N = n(388032),
    I = n(368549),
    S = n(865215);
let R = 'SubscriberNitroHome';
t.Z = () => {
    (0, g.z)(u.X);
    let e = r.useRef(null),
        [t, n] = r.useState(!1),
        { analyticsLocations: a } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [j, A] = r.useState(!1);
    (0, p.FM)();
    let P = (0, f.b)(R),
        O = (0, E.TW)(R);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.AdvancedScrollerAuto, {
                className: I.mainPageScroller,
                ref: e,
                children: (0, i.jsx)('div', {
                    className: I.container,
                    children: (0, i.jsxs)(d.Gt, {
                        value: a,
                        children: [
                            (0, i.jsx)(x.Z, {
                                className: I.heroHeading,
                                location: b.MQ.HOME
                            }),
                            (0, i.jsx)(_.Z, {
                                variant: b.R0.WHATS_NEW,
                                className: s()(I.whatsNew, { [I.whatsNewWithOriginalHeroHeading]: !(P || O) }),
                                noBackground: !0,
                                leftAlignHeaders: !0
                            }),
                            (0, i.jsx)(_.Z, {
                                className: I.perksDiscoverability,
                                noBackground: !0,
                                leftAlignHeaders: !0,
                                showAllPerksButton: (0, i.jsx)(v.Z, {
                                    setIsAllPerksVisible: n,
                                    previousComponent: b.MQ.HOME
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
                                    e && !j && (m.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: a }), A(!0));
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
            }),
            (0, i.jsx)(C.Z, {
                isAllPerksVisible: t,
                setIsAllPerksVisible: n,
                previousComponent: b.MQ.HOME
            })
        ]
    });
};
