t.d(n, { default: () => p });
var a = t(627968);
t(64700);
var i = t(980707),
    r = t(477782),
    c = t(442433),
    d = t(808728),
    s = t(911612),
    l = t(153594),
    u = t(531335),
    h = t(652215),
    o = t(375708);
function p(e) {
    let { guild: n, onSelect: t } = e,
        p = d.Ay.getDefaultChannel(n.id, !0, h.xBc.CREATE_INSTANT_INVITE),
        _ = (0, l.A)(n.id),
        A = (0, s.A)(n),
        C = (0, u.A)({ guild: n, source: h.PE1.GUILD_CONTEXT_MENU, channel: p });
    return (0, a.jsxs)(i.W, {
        "data-menu-migrated": !0,
        navId: "guild-context",
        "aria-label": o.intl.string(o.t.HpQykc),
        onClose: c.Z_,
        onSelect: t,
        children: [(0, a.jsx)(r.rX, { children: _ }), (0, a.jsxs)(r.rX, { children: [A, C] })],
    });
}
