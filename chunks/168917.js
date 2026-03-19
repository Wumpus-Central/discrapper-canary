n.d(t, { A: () => A });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(757036),
    r = n(128450),
    o = n(180020),
    d = n(84540),
    c = n(576705),
    u = n(652215),
    _ = n(788868),
    m = n(985018),
    g = n(367915);
function A(e) {
    let { errors: t, pendingNick: n, currentNick: A, username: x, user: h, guild: p } = e,
        T = (0, s.bG)([c.A], () => c.A.can(u.xBc.CHANGE_NICKNAME, p) || c.A.can(u.xBc.MANAGE_NICKNAMES, p)),
        E = (0, a.L)(_.PremiumTypes.TIER_2);
    return (0, i.jsxs)(r.A, {
        title: m.intl.string(m.t.me1lRk),
        errors: t,
        children: [
            (0, i.jsx)(l.ksK, {
                value: n ?? A ?? "",
                placeholder: x,
                maxLength: u.d0r,
                onChange: function (e) {
                    (0, d.p)({ guildId: p.id, nickname: e });
                },
                disabled: !T,
                helperText: T ? void 0 : m.intl.string(m.t.gzjxQi),
            }),
            E && (0, i.jsx)(o.A, { user: h, guildId: p.id, className: g.F }),
        ],
    });
}
