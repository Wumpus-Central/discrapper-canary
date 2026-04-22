n.d(t, { g: () => f });
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    a = n(827734),
    r = n(990078),
    o = n(939249),
    d = n(606096),
    c = n(997146),
    u = n(932883),
    h = n(599486),
    A = n(394953),
    _ = n(628325),
    m = n(849077),
    g = n(985018),
    p = n(337376);
function f(e) {
    let { className: t } = e,
        n = (0, u.op)(),
        l = (0, A.i3)(),
        { selectedFilter: f, setSelectedFilter: E } = (0, h.A)(),
        x = (0, _.S)((e) => e.setInboxReadState);
    if (!l) return null;
    let I = f === m.Io.ALL ? g.intl.string(g.t["2pAkDA"]) : g.intl.string(g.t.HcoRu0);
    return (0, i.jsx)(r.m, {
        position: "bottom",
        text: I,
        children: (0, i.jsx)(o.D, {
            className: s()(t, p.a, { [p.S]: f === m.Io.BOOKMARKS }),
            "aria-label": I,
            onClick: () => {
                let e = f === m.Io.ALL ? m.Io.BOOKMARKS : m.Io.ALL;
                E(e), e === m.Io.ALL && x(!1), (0, u.Ut)({ section: e, enabled: !0, viewId: n });
            },
            children:
                f === m.Io.BOOKMARKS
                    ? (0, i.jsx)(d.c, { size: "xs", color: a.A.colors.ICON_DEFAULT.css })
                    : (0, i.jsx)(c.c, { size: "xs", color: a.A.colors.ICON_MUTED.css }),
        }),
    });
}
