t.d(n, { Z: () => u }), t(539854);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    d = t(481060),
    o = t(765305),
    s = t(388032),
    c = t(645331);
function u(e) {
    let { onClose: n, selectedTab: t, onTabSelected: r, userCount: u, hasBanner: _, isHub: g = !1 } = e,
        p = l.useRef(null);
    l.useEffect(() => {
        var e, n, t;
        return null == (t = p.current) || null == (n = t.ref) || null == (e = n.blur) ? void 0 : e.call(n);
    }, []);
    let m = s.intl.formatToPlainString(s.t['ZrTT/P'], { userCount: u }),
        I = [
            (0, i.jsx)(
                d.njP.Item,
                {
                    className: c.tabBarItem,
                    id: o.fL.EVENT_INFO,
                    children: s.intl.string(s.t.iW6Xur)
                },
                'event-details'
            )
        ];
    return (
        g ||
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
                    ref: p,
                    onClick: n,
                    className: c.closeButton,
                    'aria-label': s.intl.string(s.t.cpT0Cg),
                    children: (0, i.jsx)(d.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(c.closeIcon, _ && c.closeIconBanner)
                    })
                }),
                (0, i.jsx)(d.njP, {
                    className: c.tabBar,
                    'aria-label': s.intl.string(s.t['+1H47u']),
                    selectedItem: t,
                    type: 'top',
                    onItemSelect: r,
                    children: I
                })
            ]
        })
    );
}
