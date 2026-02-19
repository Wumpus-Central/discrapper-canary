"use strict";
n.d(t, { g: () => m });
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    r = n(827734),
    a = n(990078),
    o = n(397927),
    c = n(932883),
    d = n(599486),
    u = n(394953),
    h = n(628325),
    A = n(849077),
    p = n(985018),
    g = n(576539);
function m(e) {
    let { className: t } = e,
        n = (0, c.op)(),
        s = (0, u.i3)(),
        { selectedFilter: m, setSelectedFilter: _ } = (0, d.A)(),
        f = (0, h.S)((e) => e.setInboxReadState);
    if (!s) return null;
    let x = m === A.Io.ALL ? p.intl.string(p.t["2pAkDA"]) : p.intl.string(p.t.HcoRu0);
    return (0, i.jsx)(a.m, {
        position: "bottom",
        text: x,
        children: (0, i.jsx)(o.DUT, {
            className: l()(t, g.a, { [g.S]: m === A.Io.BOOKMARKS }),
            "aria-label": x,
            onClick: () => {
                let e = m === A.Io.ALL ? A.Io.BOOKMARKS : A.Io.ALL;
                _(e), e === A.Io.ALL && f(!1), (0, c.Ut)({ section: e, enabled: !0, viewId: n });
            },
            children:
                m === A.Io.BOOKMARKS
                    ? (0, i.jsx)(o.cFy, { size: "xs", color: r.A.colors.ICON_DEFAULT.css })
                    : (0, i.jsx)(o.c$8, { size: "xs", color: r.A.colors.ICON_MUTED.css }),
        }),
    });
}
