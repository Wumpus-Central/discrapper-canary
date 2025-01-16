t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(653041);
var i = t(200651),
    a = t(192379),
    l = t(120356),
    r = t.n(l),
    d = t(481060),
    o = t(765305),
    c = t(388032),
    s = t(571933);
function u(e) {
    let { onClose: n, selectedTab: t, onTabSelected: l, userCount: u, hasBanner: _, isHub: g = !1 } = e,
        p = a.useRef(null);
    a.useEffect(() => {
        var e, n, t;
        return null === (t = p.current) || void 0 === t ? void 0 : null === (n = t.ref) || void 0 === n ? void 0 : null === (e = n.blur) || void 0 === e ? void 0 : e.call(n);
    }, []);
    let m = c.intl.formatToPlainString(c.t['ZrTT/P'], { userCount: u }),
        I = [
            (0, i.jsx)(
                d.TabBar.Item,
                {
                    className: s.tabBarItem,
                    id: o.fL.EVENT_INFO,
                    children: c.intl.string(c.t.iW6Xur)
                },
                'event-details'
            )
        ];
    return (
        !g &&
            I.push(
                (0, i.jsx)(
                    d.TabBar.Item,
                    {
                        className: s.tabBarItem,
                        id: o.fL.RSVP_LIST,
                        children: m
                    },
                    'is-hub'
                )
            ),
        (0, i.jsxs)('div', {
            className: s.container,
            children: [
                (0, i.jsx)(d.Clickable, {
                    ref: p,
                    onClick: n,
                    className: s.closeButton,
                    'aria-label': c.intl.string(c.t.cpT0Cg),
                    children: (0, i.jsx)(d.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: r()(s.closeIcon, _ && s.closeIconBanner)
                    })
                }),
                (0, i.jsx)(d.TabBar, {
                    className: s.tabBar,
                    'aria-label': c.intl.string(c.t['+1H47u']),
                    selectedItem: t,
                    type: 'top',
                    onItemSelect: l,
                    children: I
                })
            ]
        })
    );
}
