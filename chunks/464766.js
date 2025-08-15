t.d(n, { Z: () => s }), t(539854);
var i = t(255367),
    l = t(73800),
    r = t(481060),
    d = t(765305),
    a = t(388032),
    o = t(500537);
function s(e) {
    let { selectedTab: n, onTabSelected: t, userCount: s, isHub: c = !1 } = e,
        u = l.useRef(null);
    l.useEffect(() => {
        var e, n, t;
        return null == (t = u.current) || null == (n = t.ref) || null == (e = n.blur) ? void 0 : e.call(n);
    }, []);
    let _ = a.intl.formatToPlainString(a.t["ZrTT/P"], { userCount: s }),
        g = [
            (0, i.jsx)(
                r.njP.Item,
                {
                    className: o.tabBarItem,
                    id: d.fL.EVENT_INFO,
                    children: a.intl.string(a.t.iW6Xur),
                },
                "event-details",
            ),
        ];
    return (
        c ||
            g.push(
                (0, i.jsx)(
                    r.njP.Item,
                    {
                        className: o.tabBarItem,
                        id: d.fL.RSVP_LIST,
                        children: _,
                    },
                    "is-hub",
                ),
            ),
        (0, i.jsx)("div", {
            className: o.container,
            children: (0, i.jsx)(r.njP, {
                className: o.tabBar,
                "aria-label": a.intl.string(a.t["+1H47u"]),
                selectedItem: n,
                type: "top",
                onItemSelect: t,
                children: g,
            }),
        })
    );
}
