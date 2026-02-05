n.d(t, { default: () => o });
var i = n(627968);
n(64700);
var r = n(397927),
    d = n(442433),
    s = n(820284),
    a = n(250729),
    c = n(568873),
    l = n(652215),
    u = n(985018);
function o(e) {
    let { guildId: t, analyticsContext: n, onSelect: o } = e,
        h = (0, a.A)(t),
        v = (0, c.A)(t);
    return (0, i.jsx)(s.A, {
        context: n,
        object: l.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(r.W1t, {
            "data-menu-migrated": !0,
            navId: "user-context",
            onClose: d.Z_,
            "aria-label": u.intl.string(u.t.liqwPJ),
            onSelect: o,
            children: [(0, i.jsx)(r.rXV, { children: h }), (0, i.jsx)(r.rXV, { children: v })],
        }),
    });
}
