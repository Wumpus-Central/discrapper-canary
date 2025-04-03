t.d(n, { Z: () => u }), t(653041);
var i = t(200651),
    r = t(192379),
    l = t(120356),
    a = t.n(l),
    d = t(481060),
    o = t(765305),
    s = t(388032),
    c = t(645331);
function u(e) {
    let { onClose: n, selectedTab: t, onTabSelected: l, userCount: u, hasBanner: _, isHub: p = !1 } = e,
        g = r.useRef(null);
    r.useEffect(() => {
        var e, n, t;
        return null == (t = g.current) || null == (n = t.ref) || null == (e = n.blur) ? void 0 : e.call(n);
    }, []);
    let m = s.NW.formatToPlainString(s.t['ZrTT/P'], { userCount: u }),
        I = [
            (0, i.jsx)(
                d.njP.Item,
                {
                    className: c.tabBarItem,
                    id: o.fL.EVENT_INFO,
                    children: s.NW.string(s.t.iW6Xur)
                },
                'event-details'
            )
        ];
    return (
        p ||
            I.push(
                (0, i.jsx)(
                    d.njP.Item,
                    {
                        className: c.tabBarItem,
                        id: o.fL.RSVP_LIST,
                        children: m
                    },
                    'is-hub'
                )
            ),
        (0, i.jsxs)('div', {
            className: c.container,
            children: [
                (0, i.jsx)(d.P3F, {
                    ref: g,
                    onClick: n,
                    className: c.closeButton,
                    'aria-label': s.NW.string(s.t.cpT0Cg),
                    children: (0, i.jsx)(d.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(c.closeIcon, _ && c.closeIconBanner)
                    })
                }),
                (0, i.jsx)(d.njP, {
                    className: c.tabBar,
                    'aria-label': s.NW.string(s.t['+1H47u']),
                    selectedItem: t,
                    type: 'top',
                    onItemSelect: l,
                    children: I
                })
            ]
        })
    );
}
