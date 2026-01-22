n.d(t, {
    g: () => g,
});
var r = n(627968),
    l = n(503698),
    i = n.n(l),
    a = n(827734),
    s = n(990078),
    o = n(397927),
    c = n(932883),
    u = n(599486),
    d = n(394953),
    f = n(628325),
    p = n(849077),
    h = n(985018),
    b = n(576539);

function g(e) {
    let { className: t } = e,
        n = (0, c.op)(),
        l = (0, d.i3)(),
        { selectedFilter: g, setSelectedFilter: m } = (0, u.A)(),
        A = (0, f.S)((e) => e.setInboxReadState);
    if (!l) return null;
    let y = g === p.Io.ALL ? h.intl.string(h.t["2pAkDA"]) : h.intl.string(h.t.HcoRu0);
    return (0, r.jsx)(s.m, {
        position: "bottom",
        text: y,
        children: (0, r.jsx)(o.DUT, {
            className: i()(t, b.a, {
                [b.S]: g === p.Io.BOOKMARKS,
            }),
            "aria-label": y,
            onClick: () => {
                let e = g === p.Io.ALL ? p.Io.BOOKMARKS : p.Io.ALL;
                m(e),
                    e === p.Io.ALL && A(!1),
                    (0, c.Ut)({
                        section: e,
                        enabled: !0,
                        viewId: n,
                    });
            },
            children:
                g === p.Io.BOOKMARKS
                    ? (0, r.jsx)(o.cFy, {
                          size: "xs",
                          color: a.A.colors.ICON_DEFAULT.css,
                      })
                    : (0, r.jsx)(o.c$8, {
                          size: "xs",
                          color: a.A.colors.ICON_MUTED.css,
                      }),
        }),
    });
}
