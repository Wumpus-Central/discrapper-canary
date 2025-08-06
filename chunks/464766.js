t.d(n, { Z: () => a }), t(539854);
var l = t(255367),
    i = t(73800),
    r = t(481060),
    o = t(765305),
    c = t(388032),
    s = t(645331);
function a(e) {
    let { selectedTab: n, onTabSelected: t, userCount: a, isHub: u = !1 } = e,
        d = i.useRef(null);
    i.useEffect(() => {
        var e, n, t;
        return null == (t = d.current) || null == (n = t.ref) || null == (e = n.blur) ? void 0 : e.call(n);
    }, []);
    let f = c.intl.formatToPlainString(c.t["ZrTT/P"], { userCount: a }),
        g = [
            (0, l.jsx)(
                r.njP.Item,
                {
                    className: s.tabBarItem,
                    id: o.fL.EVENT_INFO,
                    children: c.intl.string(c.t.iW6Xur),
                },
                "event-details",
            ),
        ];
    return (
        u ||
            g.push(
                (0, l.jsx)(
                    r.njP.Item,
                    {
                        className: s.tabBarItem,
                        id: o.fL.RSVP_LIST,
                        children: f,
                    },
                    "is-hub",
                ),
            ),
        (0, l.jsx)("div", {
            className: s.container,
            children: (0, l.jsx)(r.njP, {
                className: s.tabBar,
                "aria-label": c.intl.string(c.t["+1H47u"]),
                selectedItem: n,
                type: "top",
                onItemSelect: t,
                children: g,
            }),
        })
    );
}
