r.d(t, {
    default: () => d,
});
var n = r(627968);
r(64700);
var l = r(397927),
    i = r(442433),
    c = r(808728),
    a = r(911612),
    o = r(153594),
    s = r(531335),
    u = r(652215),
    p = r(985018);

function d(e) {
    let { guild: t, onSelect: r } = e,
        d = c.Ay.getDefaultChannel(t.id, !0, u.xBc.CREATE_INSTANT_INVITE),
        b = (0, o.A)(t.id),
        O = (0, a.A)(t),
        y = (0, s.A)({
            guild: t,
            source: u.PE1.GUILD_CONTEXT_MENU,
            channel: d,
        });
    return (0, n.jsxs)(l.W1t, {
        navId: "guild-context",
        "aria-label": p.intl.string(p.t.HpQykc),
        onClose: i.Z_,
        onSelect: r,
        children: [
            (0, n.jsx)(l.rXV, {
                children: b,
            }),
            (0, n.jsxs)(l.rXV, {
                children: [O, y],
            }),
        ],
    });
}
