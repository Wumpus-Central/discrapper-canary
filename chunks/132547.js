n.d(t, { Z: () => C }), n(47120), n(610138), n(216116), n(78328), n(815648), n(301563);
var r = n(200651),
    i = n(192379),
    s = n(622535),
    a = n(481060),
    l = n(100527),
    o = n(906732),
    c = n(433811),
    d = n(214852),
    u = n(626135),
    m = n(314684),
    g = n(794484),
    p = n(536844),
    h = n(342414),
    f = n(615042),
    b = n(391110),
    N = n(71363),
    x = n(781800),
    _ = n(981631),
    E = n(388032),
    j = n(614729),
    O = n(865215);
let C = () => {
    (0, d.z)(c.X), (0, f.u)();
    let e = i.useRef(null),
        t = i.useRef(null),
        [n, C] = i.useState(!1),
        { analyticsLocations: S } = (0, o.ZP)(l.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [v, T] = i.useState(!1);
    (0, m.FM)();
    let I = 'true' === new URLSearchParams(window.location.search).get('autoScroll');
    return (
        window.history.replaceState({}, '', window.location.pathname),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.yWw, {
                    className: j.mainPageScroller,
                    ref: e,
                    children: (0, r.jsx)('div', {
                        className: j.container,
                        children: (0, r.jsxs)(o.Gt, {
                            value: S,
                            children: [
                                (0, r.jsx)(h.Z, {
                                    className: j.heroHeading,
                                    location: b.MQ.HOME
                                }),
                                (0, r.jsx)(g.Z, {
                                    variant: b.R0.WHATS_NEW,
                                    className: j.whatsNew,
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    shouldAutoScroll: I
                                }),
                                (0, r.jsx)(g.Z, {
                                    className: j.perksDiscoverability,
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    showAllPerksButton: (0, r.jsx)(x.Z, {
                                        setIsAllPerksVisible: C,
                                        previousComponent: b.MQ.HOME
                                    })
                                }),
                                (0, r.jsx)(p.Z, {
                                    className: j.giftNitro,
                                    location: l.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                    analyticsLocation: {
                                        page: _.ZY5.NITRO_HOME,
                                        section: _.jXE.GIFT_BANNER
                                    }
                                }),
                                (0, r.jsx)('div', { className: j.footerSpacing }),
                                (0, r.jsx)(s.$, {
                                    innerRef: t,
                                    onChange: (e) => {
                                        e && !v && (u.default.track(_.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: S }), T(!0));
                                    },
                                    children: (0, r.jsx)('div', {
                                        ref: t,
                                        className: j.bottomOfPageVisibilitySensor
                                    })
                                }),
                                (0, r.jsx)('img', {
                                    src: O,
                                    className: j.bottomIllustration,
                                    width: 112,
                                    height: 85,
                                    alt: E.NW.string(E.t.X4IxWF)
                                })
                            ]
                        })
                    })
                }),
                (0, r.jsx)(N.Z, {
                    isAllPerksVisible: n,
                    setIsAllPerksVisible: C,
                    previousComponent: b.MQ.HOME
                })
            ]
        })
    );
};
