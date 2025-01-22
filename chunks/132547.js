n(47120), n(610138), n(216116), n(78328), n(815648);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
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
    E = n(342414),
    _ = n(938736),
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
    let e = r.useRef(null),
        [t, n] = r.useState(!1),
        { analyticsLocations: s } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [j, O] = r.useState(!1);
    (0, p.FM)();
    let R = (0, h.b)(A),
        P = (0, _.TW)(A),
        D = 'true' === new URLSearchParams(window.location.search).get('autoScroll');
    return (
        window.history.replaceState({}, '', window.location.pathname),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.AdvancedScrollerAuto, {
                    className: N.mainPageScroller,
                    ref: e,
                    children: (0, i.jsx)('div', {
                        className: N.container,
                        children: (0, i.jsxs)(d.Gt, {
                            value: s,
                            children: [
                                (0, i.jsx)(E.Z, {
                                    className: N.heroHeading,
                                    location: C.MQ.HOME
                                }),
                                (0, i.jsx)(x.Z, {
                                    variant: C.R0.WHATS_NEW,
                                    className: a()(N.whatsNew, { [N.whatsNewWithOriginalHeroHeading]: !(R || P) }),
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    shouldAutoScroll: D
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
                                        e && !j && (g.default.track(b.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: s }), O(!0));
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
        })
    );
};
