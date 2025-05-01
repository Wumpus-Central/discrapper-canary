n.d(t, { Z: () => O }), n(388685), n(65234), n(111804), n(490233), n(97749), n(35282);
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
    p = n(794484),
    g = n(347475),
    h = n(342414),
    f = n(391110),
    b = n(71363),
    _ = n(781800),
    x = n(981631),
    E = n(388032),
    j = n(614729),
    C = n(865215);
let O = () => {
    (0, d.z)(c.X);
    let e = r.useRef(null),
        t = r.useRef(null),
        [n, O] = r.useState(!1),
        { analyticsLocations: S } = (0, o.ZP)(a.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [v, T] = r.useState(!1);
    (0, m.FM)();
    let I = 'true' === new URLSearchParams(window.location.search).get('autoScroll');
    return (
        window.history.replaceState({}, '', window.location.pathname),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.yWw, {
                    className: j.mainPageScroller,
                    ref: e,
                    children: (0, i.jsx)('div', {
                        className: j.container,
                        children: (0, i.jsxs)(o.Gt, {
                            value: S,
                            children: [
                                (0, i.jsx)(h.Z, {
                                    className: j.heroHeading,
                                    location: f.MQ.HOME
                                }),
                                (0, i.jsx)(p.Z, {
                                    variant: f.R0.WHATS_NEW,
                                    className: j.whatsNew,
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    shouldAutoScroll: I
                                }),
                                (0, i.jsx)(p.Z, {
                                    className: j.perksDiscoverability,
                                    noBackground: !0,
                                    leftAlignHeaders: !0,
                                    showAllPerksButton: (0, i.jsx)(_.Z, {
                                        setIsAllPerksVisible: O,
                                        previousComponent: f.MQ.HOME
                                    })
                                }),
                                (0, i.jsx)(g.Z, {
                                    className: j.giftNitro,
                                    location: a.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                    analyticsLocation: {
                                        page: x.ZY5.NITRO_HOME,
                                        section: x.jXE.GIFT_BANNER
                                    }
                                }),
                                (0, i.jsx)('div', { className: j.footerSpacing }),
                                (0, i.jsx)(s.$, {
                                    innerRef: t,
                                    onChange: (e) => {
                                        e && !v && (u.default.track(x.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: S }), T(!0));
                                    },
                                    children: (0, i.jsx)('div', {
                                        ref: t,
                                        className: j.bottomOfPageVisibilitySensor
                                    })
                                }),
                                (0, i.jsx)('img', {
                                    src: C,
                                    className: j.bottomIllustration,
                                    width: 112,
                                    height: 85,
                                    alt: E.intl.string(E.t.X4IxWF)
                                })
                            ]
                        })
                    })
                }),
                (0, i.jsx)(b.Z, {
                    isAllPerksVisible: n,
                    setIsAllPerksVisible: O,
                    previousComponent: f.MQ.HOME
                })
            ]
        })
    );
};
