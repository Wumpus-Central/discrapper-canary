r.d(t, {
    default: () => p,
});
var n = r(627968);
r(64700);
var i = r(397927),
    l = r(442433),
    c = r(808728),
    a = r(911612),
    o = r(153594),
    s = r(531335),
    u = r(652215),
    d = r(985018);

function p(e) {
    let { guild: t, onSelect: r } = e,
        p = c.Ay.getDefaultChannel(t.id, !0, u.xBc.CREATE_INSTANT_INVITE),
        b = (0, o.A)(t.id),
        y = (0, a.A)(t),
        O = (0, s.A)({
            guild: t,
            source: u.PE1.GUILD_CONTEXT_MENU,
            channel: p,
        });
    return (0, n.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "guild-context",
        "aria-label": d.intl.string(d.t.HpQykc),
        onClose: l.Z_,
        onSelect: r,
        children: [
            (0, n.jsx)(i.rXV, {
                children: b,
            }),
            (0, n.jsxs)(i.rXV, {
                children: [y, O],
            }),
        ],
    });
}
