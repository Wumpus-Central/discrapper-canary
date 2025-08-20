n.d(t, { Z: () => o }), n(539854);
var i = n(951288),
    l = n(647438),
    r = n(481060),
    a = n(765305),
    d = n(388032),
    s = n(500537);
function o(e) {
    let { selectedTab: t, onTabSelected: n, userCount: o, isHub: c = !1 } = e,
        u = l.useRef(null);
    l.useEffect(() => {
        var e, t, n;
        return null == (n = u.current) || null == (t = n.ref) || null == (e = t.blur) ? void 0 : e.call(t);
    }, []);
    let _ = d.intl.formatToPlainString(d.t["ZrTT/P"], { userCount: o }),
        g = [
            (0, i.jsx)(
                r.njP.Item,
                {
                    className: s.tabBarItem,
                    id: a.fL.EVENT_INFO,
                    children: d.intl.string(d.t.iW6Xur),
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
                        className: s.tabBarItem,
                        id: a.fL.RSVP_LIST,
                        children: _,
                    },
                    "is-hub",
                ),
            ),
        (0, i.jsx)("div", {
            className: s.container,
            children: (0, i.jsx)(r.njP, {
                className: s.tabBar,
                "aria-label": d.intl.string(d.t["+1H47u"]),
                selectedItem: t,
                type: "top",
                onItemSelect: n,
                children: g,
            }),
        })
    );
}
