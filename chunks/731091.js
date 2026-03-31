n.d(t, { g: () => g });
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    a = n(827734),
    r = n(990078),
    o = n(397927),
    c = n(932883),
    d = n(599486),
    u = n(394953),
    h = n(628325),
    A = n(849077),
    _ = n(985018),
    m = n(203856);
function g(e) {
    let { className: t } = e,
        n = (0, c.op)(),
        l = (0, u.i3)(),
        { selectedFilter: g, setSelectedFilter: p } = (0, d.A)(),
        f = (0, h.S)((e) => e.setInboxReadState);
    if (!l) return null;
    let x = g === A.Io.ALL ? _.intl.string(_.t["2pAkDA"]) : _.intl.string(_.t.HcoRu0);
    return (0, i.jsx)(r.m, {
        position: "bottom",
        text: x,
        children: (0, i.jsx)(o.DUT, {
            className: s()(t, m.a, { [m.S]: g === A.Io.BOOKMARKS }),
            "aria-label": x,
            onClick: () => {
                let e = g === A.Io.ALL ? A.Io.BOOKMARKS : A.Io.ALL;
                p(e), e === A.Io.ALL && f(!1), (0, c.Ut)({ section: e, enabled: !0, viewId: n });
            },
            children:
                g === A.Io.BOOKMARKS
                    ? (0, i.jsx)(o.cFy, { size: "xs", color: a.A.colors.ICON_DEFAULT.css })
                    : (0, i.jsx)(o.c$8, { size: "xs", color: a.A.colors.ICON_MUTED.css }),
        }),
    });
}
