t.d(n, { A: () => c });
var i = t(627968),
    l = t(64700),
    d = t(397927),
    r = t(988794),
    s = t(985018),
    a = t(301491);
function c(e) {
    let { selectedTab: n, onTabSelected: t, userCount: c } = e,
        o = l.useRef(null);
    return (
        l.useEffect(() => o.current?.ref?.blur?.(), []),
        (0, i.jsx)("div", {
            className: a.kL,
            children: (0, i.jsxs)(d.VQ0, {
                className: a.$H,
                "aria-label": s.intl.string(s.t["+1H47t"]),
                selectedItem: n,
                type: "top",
                onItemSelect: t,
                children: [
                    (0, i.jsx)(d.VQ0.Item, {
                        className: a.YU,
                        id: r.al.EVENT_INFO,
                        children: s.intl.string(s.t.iW6Xuo),
                    }),
                    (0, i.jsx)(d.VQ0.Item, {
                        className: a.YU,
                        id: r.al.RSVP_LIST,
                        children: s.intl.formatToPlainString(s.t["ZrTT/N"], { userCount: c }),
                    }),
                ],
            }),
        })
    );
}
