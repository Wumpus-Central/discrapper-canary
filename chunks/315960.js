n.d(t, { A: () => o });
var l = n(627968),
    i = n(64700),
    r = n(761508),
    s = n(988794),
    a = n(985018),
    c = n(378787);
function o(e) {
    let { selectedTab: t, onTabSelected: n, userCount: o } = e,
        d = i.useRef(null);
    return (
        i.useEffect(() => d.current?.ref?.blur?.(), []),
        (0, l.jsx)("div", {
            className: c.kL,
            children: (0, l.jsxs)(r.V, {
                className: c.$H,
                "aria-label": a.intl.string(a.t["+1H47t"]),
                selectedItem: t,
                type: "top",
                onItemSelect: n,
                children: [
                    (0, l.jsx)(r.V.Item, { className: c.YU, id: s.al.EVENT_INFO, children: a.intl.string(a.t.iW6Xuo) }),
                    (0, l.jsx)(r.V.Item, {
                        className: c.YU,
                        id: s.al.RSVP_LIST,
                        children: a.intl.formatToPlainString(a.t["ZrTT/N"], { userCount: o }),
                    }),
                ],
            }),
        })
    );
}
