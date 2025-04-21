n.d(t, { Z: () => S }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282);
var i = n(200651),
    r = n(192379),
    s = n(622535),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(433811),
    d = n(214852),
    u = n(626135),
    m = n(314684),
    g = n(794484),
    p = n(347475),
    h = n(342414),
    f = n(615042),
    b = n(391110),
    _ = n(71363),
    x = n(781800),
    E = n(981631),
    j = n(388032),
    C = n(614729),
    O = n(865215);
let S = () => {
    (0, d.z)(c.X), (0, f.u)();
    let e = r.useRef(null),
        t = r.useRef(null),
        [n, S] = r.useState(!1),
        { analyticsLocations: v } = (0, o.ZP)(a.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [T, I] = r.useState(!1);
    (0, m.FM)();
    let N = 'true' === new URLSearchParams(window.location.search).get('autoScroll');
    return (
        window.history.replaceState({}, '', window.location.pathname),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.yWw, {
                    className: C.mainPageScroller,
                    ref: e,
                    children: (0, i.jsx)('div', {
                        className: C.container,
                        children: (0, i.jsxs)(o.Gt, {
                            value: v,
                            children: [
                                (0, i.jsx)(h.Z, {
                                    className: C.heroHeading,
                                    location: b.MQ.HOME
                                }),
                                (0, i.jsx)(g.Z, {
                                    variant: b.R0.WHATS_NEW,
                                    className: C.whatsNew,
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    shouldAutoScroll: N
                                }),
                                (0, i.jsx)(g.Z, {
                                    className: C.perksDiscoverability,
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    showAllPerksButton: (0, i.jsx)(x.Z, {
                                        setIsAllPerksVisible: S,
                                        previousComponent: b.MQ.HOME
                                    })
                                }),
                                (0, i.jsx)(p.Z, {
                                    className: C.giftNitro,
                                    location: a.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                    analyticsLocation: {
                                        page: E.ZY5.NITRO_HOME,
                                        section: E.jXE.GIFT_BANNER
                                    }
                                }),
                                (0, i.jsx)('div', { className: C.footerSpacing }),
                                (0, i.jsx)(s.$, {
                                    innerRef: t,
                                    onChange: (e) => {
                                        e && !T && (u.default.track(E.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: v }), I(!0));
                                    },
                                    children: (0, i.jsx)('div', {
                                        ref: t,
                                        className: C.bottomOfPageVisibilitySensor
                                    })
                                }),
                                (0, i.jsx)('img', {
                                    src: O,
                                    className: C.bottomIllustration,
                                    width: 112,
                                    height: 85,
                                    alt: j.intl.string(j.t.X4IxWF)
                                })
                            ]
                        })
                    })
                }),
                (0, i.jsx)(_.Z, {
                    isAllPerksVisible: n,
                    setIsAllPerksVisible: S,
                    previousComponent: b.MQ.HOME
                })
            ]
        })
    );
};
