t.d(n, { default: () => A });
var l = t(627968);
t(64700);
var i = t(861672),
    a = t(477782),
    r = t(442433),
    d = t(808728),
    c = t(911612),
    o = t(153594),
    s = t(531335),
    u = t(652215),
    E = t(985018);
function A(e) {
    let { guild: n, onSelect: t } = e,
        A = d.Ay.getDefaultChannel(n.id, !0, u.xBc.CREATE_INSTANT_INVITE),
        p = (0, o.A)(n.id),
        h = (0, c.A)(n),
        y = (0, s.A)({ guild: n, source: u.PE1.GUILD_CONTEXT_MENU, channel: A });
    return (0, l.jsxs)(i.W, {
        "data-menu-migrated": !0,
        navId: "guild-context",
        "aria-label": E.intl.string(E.t.HpQykc),
        onClose: r.Z_,
        onSelect: t,
        children: [(0, l.jsx)(a.rX, { children: p }), (0, l.jsxs)(a.rX, { children: [h, y] })],
    });
}
