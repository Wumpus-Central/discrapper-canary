n.d(t, { A: () => g });
var i = n(627968),
    s = n(311907),
    r = n(397927),
    a = n(757036),
    l = n(128450),
    o = n(180020),
    c = n(576705),
    d = n(684732),
    u = n(652215),
    _ = n(788868),
    m = n(985018),
    A = n(131025);
function g(e) {
    let { errors: t, pendingNick: n, currentNick: g, username: E, user: h, guild: p } = e,
        C = n ?? g,
        x = (0, s.bG)([c.A], () => c.A.can(u.xBc.CHANGE_NICKNAME, p) || c.A.can(u.xBc.MANAGE_NICKNAMES, p)),
        T = (0, a.L)(_.PremiumTypes.TIER_2);
    return (0, i.jsxs)(l.A, {
        title: m.intl.string(m.t.me1lRk),
        errors: t,
        children: [
            (0, i.jsx)(r.ksK, {
                value: C ?? "",
                placeholder: E,
                maxLength: u.d0r,
                onChange: function (e) {
                    (0, d.o_)(e, g);
                },
                disabled: !x,
                helperText: x ? void 0 : m.intl.string(m.t.gzjxQi),
            }),
            T && (0, i.jsx)(o.A, { user: h, guildId: p.id, className: A.F }),
        ],
    });
}
