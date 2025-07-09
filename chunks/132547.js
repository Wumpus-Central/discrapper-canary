(n.d(t, { Z: () => O }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282));
var i = n(255367),
    r = n(73800),
    s = n(622535),
    a = n(481060),
    l = n(100527),
    o = n(906732),
    c = n(433811),
    d = n(214852),
    u = n(626135),
    m = n(560223),
    p = n(347475),
    g = n(342414),
    h = n(391110),
    f = n(71363),
    b = n(781800),
    x = n(981631),
    _ = n(388032),
    j = n(614729),
    E = n(865215);
let O = () => {
    (0, d.z)(c.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        [n, O] = r.useState(!1),
        { analyticsLocations: C } = (0, o.ZP)(l.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [v, S] = r.useState(!1),
        T = 'true' === new URLSearchParams(window.location.search).get('autoScroll');
    return (
        window.history.replaceState({}, '', window.location.pathname),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.yWw, {
                    className: j.mainPageScroller,
                    ref: e,
                    children: (0, i.jsx)('div', {
                        className: j.container,
                        children: (0, i.jsxs)(o.Gt, {
                            value: C,
                            children: [
                                (0, i.jsx)(g.Z, {
                                    className: j.heroHeading,
                                    location: h.MQ.HOME
                                }),
                                (0, i.jsx)(m.Z, {
                                    variant: h.gM.WHATS_NEW,
                                    className: j.whatsNew,
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    shouldAutoScroll: T
                                }),
                                (0, i.jsx)(m.Z, {
                                    className: j.perksDiscoverability,
                                    variant: h.gM.PERKS_DISCOVERABILITY,
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    showAllPerksButton: (0, i.jsx)(b.Z, {
                                        setIsAllPerksVisible: O,
                                        previousComponent: h.MQ.HOME
                                    })
                                }),
                                (0, i.jsx)(p.Z, {
                                    className: j.giftNitro,
                                    location: l.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                    analyticsLocation: {
                                        page: x.ZY5.NITRO_HOME,
                                        section: x.jXE.GIFT_BANNER
                                    }
                                }),
                                (0, i.jsx)('div', { className: j.footerSpacing }),
                                (0, i.jsx)(s.$, {
                                    innerRef: t,
                                    onChange: (e) => {
                                        e && !v && (u.default.track(x.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: C }), S(!0));
                                    },
                                    children: (0, i.jsx)('div', {
                                        ref: t,
                                        className: j.bottomOfPageVisibilitySensor
                                    })
                                }),
                                (0, i.jsx)('img', {
                                    src: E,
                                    className: j.bottomIllustration,
                                    width: 112,
                                    height: 85,
                                    alt: _.intl.string(_.t.X4IxWF)
                                })
                            ]
                        })
                    })
                }),
                (0, i.jsx)(f.Z, {
                    isAllPerksVisible: n,
                    setIsAllPerksVisible: O,
                    previousComponent: h.MQ.HOME
                })
            ]
        })
    );
};
