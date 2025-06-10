n.d(t, { Z: () => C }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282);
var i = n(255367),
    r = n(73800),
    s = n(622535),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(433811),
    d = n(214852),
    u = n(626135),
    m = n(560223),
    g = n(347475),
    p = n(342414),
    h = n(391110),
    f = n(71363),
    b = n(781800),
    _ = n(981631),
    x = n(388032),
    E = n(614729),
    j = n(865215);
let C = () => {
    (0, d.z)(c.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        [n, C] = r.useState(!1),
        { analyticsLocations: O } = (0, o.ZP)(a.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [S, v] = r.useState(!1),
        T = 'true' === new URLSearchParams(window.location.search).get('autoScroll');
    return (
        window.history.replaceState({}, '', window.location.pathname),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.yWw, {
                    className: E.mainPageScroller,
                    ref: e,
                    children: (0, i.jsx)('div', {
                        className: E.container,
                        children: (0, i.jsxs)(o.Gt, {
                            value: O,
                            children: [
                                (0, i.jsx)(p.Z, {
                                    className: E.heroHeading,
                                    location: h.MQ.HOME
                                }),
                                (0, i.jsx)(m.Z, {
                                    variant: h.gM.WHATS_NEW,
                                    className: E.whatsNew,
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    shouldAutoScroll: T
                                }),
                                (0, i.jsx)(m.Z, {
                                    className: E.perksDiscoverability,
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    showAllPerksButton: (0, i.jsx)(b.Z, {
                                        setIsAllPerksVisible: C,
                                        previousComponent: h.MQ.HOME
                                    })
                                }),
                                (0, i.jsx)(g.Z, {
                                    className: E.giftNitro,
                                    location: a.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                    analyticsLocation: {
                                        page: _.ZY5.NITRO_HOME,
                                        section: _.jXE.GIFT_BANNER
                                    }
                                }),
                                (0, i.jsx)('div', { className: E.footerSpacing }),
                                (0, i.jsx)(s.$, {
                                    innerRef: t,
                                    onChange: (e) => {
                                        e && !S && (u.default.track(_.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: O }), v(!0));
                                    },
                                    children: (0, i.jsx)('div', {
                                        ref: t,
                                        className: E.bottomOfPageVisibilitySensor
                                    })
                                }),
                                (0, i.jsx)('img', {
                                    src: j,
                                    className: E.bottomIllustration,
                                    width: 112,
                                    height: 85,
                                    alt: x.intl.string(x.t.X4IxWF)
                                })
                            ]
                        })
                    })
                }),
                (0, i.jsx)(f.Z, {
                    isAllPerksVisible: n,
                    setIsAllPerksVisible: C,
                    previousComponent: h.MQ.HOME
                })
            ]
        })
    );
};
