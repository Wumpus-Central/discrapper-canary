n.d(t, { Z: () => a });
var l = n(54381),
    r = n(473749),
    i = n(481060),
    s = n(765305),
    c = n(388032),
    o = n(500537);
function a(e) {
    let { selectedTab: t, onTabSelected: n, userCount: a } = e,
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            var e, t, n;
            return null == (n = u.current) || null == (t = n.ref) || null == (e = t.blur) ? void 0 : e.call(t);
        }, []),
        (0, l.jsx)("div", {
            className: o.container,
            children: (0, l.jsxs)(i.njP, {
                className: o.tabBar,
                "aria-label": c.intl.string(c.t["+1H47t"]),
                selectedItem: t,
                type: "top",
                onItemSelect: n,
                children: [
                    (0, l.jsx)(i.njP.Item, {
                        className: o.tabBarItem,
                        id: s.fL.EVENT_INFO,
                        children: c.intl.string(c.t.iW6Xuo),
                    }),
                    (0, l.jsx)(i.njP.Item, {
                        className: o.tabBarItem,
                        id: s.fL.RSVP_LIST,
                        children: c.intl.formatToPlainString(c.t["ZrTT/N"], { userCount: a }),
                    }),
                ],
            }),
        })
    );
}
