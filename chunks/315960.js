n.d(t, { A: () => d });
var l = n(627968),
    r = n(64700),
    s = n(397927),
    i = n(988794),
    a = n(985018),
    c = n(45750);
function d(e) {
    let { selectedTab: t, onTabSelected: n, userCount: d } = e,
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            var e, t, n;
            return null == (n = u.current) || null == (t = n.ref) || null == (e = t.blur) ? void 0 : e.call(t);
        }, []),
        (0, l.jsx)("div", {
            className: c.kL,
            children: (0, l.jsxs)(s.VQ0, {
                className: c.$H,
                "aria-label": a.intl.string(a.t["+1H47t"]),
                selectedItem: t,
                type: "top",
                onItemSelect: n,
                children: [
                    (0, l.jsx)(s.VQ0.Item, {
                        className: c.YU,
                        id: i.al.EVENT_INFO,
                        children: a.intl.string(a.t.iW6Xuo),
                    }),
                    (0, l.jsx)(s.VQ0.Item, {
                        className: c.YU,
                        id: i.al.RSVP_LIST,
                        children: a.intl.formatToPlainString(a.t["ZrTT/N"], { userCount: d }),
                    }),
                ],
            }),
        })
    );
}
