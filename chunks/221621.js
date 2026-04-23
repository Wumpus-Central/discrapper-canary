n.d(t, { default: () => b });
var i = n(627968);
n(64700);
var s = n(550079),
    d = n(477782),
    r = n(442433),
    a = n(820284),
    c = n(17928),
    l = n(334738),
    u = n(222823),
    o = n(790782),
    h = n(985018),
    v = n(568873),
    _ = n(652215);
function b(e) {
    let t,
        { guildId: n, analyticsContext: b, onSelect: E } = e,
        p =
            ((t = (0, c.bG)([u.Ay], () => u.Ay.hasUnread(n, o.P.GUILD_EVENT), [n])),
            (0, i.jsx)(d.Dr, {
                id: "mark-events-read",
                label: h.intl.string(h.t.e6RscS),
                action: function () {
                    (0, l.hK)(n, o.P.GUILD_EVENT);
                },
                disabled: !t,
            })),
        x = (0, v.A)(n);
    return (0, i.jsx)(a.A, {
        context: b,
        object: _.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(s.W, {
            "data-menu-migrated": !0,
            navId: "user-context",
            onClose: r.Z_,
            "aria-label": h.intl.string(h.t.liqwPJ),
            onSelect: E,
            children: [(0, i.jsx)(d.rX, { children: p }), (0, i.jsx)(d.rX, { children: x })],
        }),
    });
}
