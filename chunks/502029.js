n.d(t, { default: () => h });
var i = n(627968);
n(64700);
var r = n(861672),
    d = n(477782),
    s = n(442433),
    a = n(820284),
    c = n(250729),
    l = n(568873),
    u = n(652215),
    o = n(985018);
function h(e) {
    let { guildId: t, analyticsContext: n, onSelect: h } = e,
        v = (0, c.A)(t),
        _ = (0, l.A)(t);
    return (0, i.jsx)(a.A, {
        context: n,
        object: u.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(r.W, {
            "data-menu-migrated": !0,
            navId: "user-context",
            onClose: s.Z_,
            "aria-label": o.intl.string(o.t.liqwPJ),
            onSelect: h,
            children: [(0, i.jsx)(d.rX, { children: v }), (0, i.jsx)(d.rX, { children: _ })],
        }),
    });
}
