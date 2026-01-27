n.d(t, {
    A: () => g,
});
var r = n(627968),
    i = n(311907),
    l = n(397927),
    s = n(757036),
    a = n(128450),
    o = n(180020),
    c = n(576705),
    d = n(684732),
    u = n(652215),
    _ = n(788868),
    p = n(985018),
    m = n(131025);

function g(e) {
    let { errors: t, pendingNick: n, currentNick: g, username: A, user: f, guild: h } = e,
        b = null != n ? n : g,
        E = (0, i.bG)([c.A], () => c.A.can(u.xBc.CHANGE_NICKNAME, h) || c.A.can(u.xBc.MANAGE_NICKNAMES, h)),
        x = (0, s.L)(_.PremiumTypes.TIER_2);
    return (0, r.jsxs)(a.A, {
        title: p.intl.string(p.t.me1lRk),
        errors: t,
        children: [
            (0, r.jsx)(l.ksK, {
                value: null != b ? b : "",
                placeholder: A,
                maxLength: u.d0r,
                onChange: function (e) {
                    (0, d.o_)(e, g);
                },
                disabled: !E,
                helperText: E ? void 0 : p.intl.string(p.t.gzjxQi),
            }),
            x &&
                (0, r.jsx)(o.A, {
                    user: f,
                    guildId: h.id,
                    className: m.F,
                }),
        ],
    });
}
