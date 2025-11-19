t.d(n, { Z: () => a });
var l = t(54381),
    r = t(473749),
    i = t(481060),
    s = t(765305),
    c = t(388032),
    o = t(500537);
function a(e) {
    let { selectedTab: n, onTabSelected: t, userCount: a } = e,
        d = r.useRef(null);
    return (
        r.useEffect(() => {
            var e, n, t;
            return null == (t = d.current) || null == (n = t.ref) || null == (e = n.blur) ? void 0 : e.call(n);
        }, []),
        (0, l.jsx)("div", {
            className: o.container,
            children: (0, l.jsxs)(i.njP, {
                className: o.tabBar,
                "aria-label": c.intl.string(c.t["+1H47t"]),
                selectedItem: n,
                type: "top",
                onItemSelect: t,
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
