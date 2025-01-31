t.d(n, { Z: () => u }), t(653041);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    r = t.n(a),
    d = t(481060),
    s = t(765305),
    o = t(388032),
    c = t(571933);
function u(e) {
    let { onClose: n, selectedTab: t, onTabSelected: a, userCount: u, hasBanner: _, isHub: m = !1 } = e,
        g = l.useRef(null);
    l.useEffect(() => {
        var e, n, t;
        return null === (t = g.current) || void 0 === t ? void 0 : null === (n = t.ref) || void 0 === n ? void 0 : null === (e = n.blur) || void 0 === e ? void 0 : e.call(n);
    }, []);
    let p = o.intl.formatToPlainString(o.t['ZrTT/P'], { userCount: u }),
        v = [
            (0, i.jsx)(
                d.njP.Item,
                {
                    className: c.tabBarItem,
                    id: s.fL.EVENT_INFO,
                    children: o.intl.string(o.t.iW6Xur)
                },
                'event-details'
            )
        ];
    return (
        m ||
            v.push(
                (0, i.jsx)(
                    d.njP.Item,
                    {
                        className: c.tabBarItem,
                        id: s.fL.RSVP_LIST,
                        children: p
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
                    'aria-label': o.intl.string(o.t.cpT0Cg),
                    children: (0, i.jsx)(d.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: r()(c.closeIcon, _ && c.closeIconBanner)
                    })
                }),
                (0, i.jsx)(d.njP, {
                    className: c.tabBar,
                    'aria-label': o.intl.string(o.t['+1H47u']),
                    selectedItem: t,
                    type: 'top',
                    onItemSelect: a,
                    children: v
                })
            ]
        })
    );
}
