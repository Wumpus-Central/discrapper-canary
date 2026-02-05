n.d(t, { default: () => E });
var l = n(627968);
n(64700);
var i = n(397927),
    a = n(442433),
    r = n(808728),
    d = n(911612),
    c = n(153594),
    s = n(531335),
    o = n(652215),
    u = n(985018);
function E(e) {
    let { guild: t, onSelect: n } = e,
        E = r.Ay.getDefaultChannel(t.id, !0, o.xBc.CREATE_INSTANT_INVITE),
        p = (0, c.A)(t.id),
        A = (0, d.A)(t),
        h = (0, s.A)({ guild: t, source: o.PE1.GUILD_CONTEXT_MENU, channel: E });
    return (0, l.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "guild-context",
        "aria-label": u.intl.string(u.t.HpQykc),
        onClose: a.Z_,
        onSelect: n,
        children: [(0, l.jsx)(i.rXV, { children: p }), (0, l.jsxs)(i.rXV, { children: [A, h] })],
    });
}
