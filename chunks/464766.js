n.d(t, { Z: () => o });
var l = n(54381),
    r = n(473749),
    i = n(481060),
    a = n(765305),
    s = n(388032),
    c = n(115875);
function o(e) {
    let { selectedTab: t, onTabSelected: n, userCount: o } = e,
        d = r.useRef(null);
    return (
        r.useEffect(() => {
            var e, t, n;
            return null == (n = d.current) || null == (t = n.ref) || null == (e = t.blur) ? void 0 : e.call(t);
        }, []),
        (0, l.jsx)("div", {
            className: c.container,
            children: (0, l.jsxs)(i.njP, {
                className: c.tabBar,
                "aria-label": s.intl.string(s.t["+1H47t"]),
                selectedItem: t,
                type: "top",
                onItemSelect: n,
                children: [
                    (0, l.jsx)(i.njP.Item, {
                        className: c.tabBarItem,
                        id: a.fL.EVENT_INFO,
                        children: s.intl.string(s.t.iW6Xuo),
                    }),
                    (0, l.jsx)(i.njP.Item, {
                        className: c.tabBarItem,
                        id: a.fL.RSVP_LIST,
                        children: s.intl.formatToPlainString(s.t["ZrTT/N"], { userCount: o }),
                    }),
                ],
            }),
        })
    );
}
