n.d(t, { A: () => A });
var i = n(627968),
    s = n(311907),
    l = n(292666),
    a = n(757036),
    r = n(128450),
    o = n(180020),
    d = n(84540),
    u = n(576705),
    c = n(652215),
    g = n(788868),
    m = n(985018),
    _ = n(376294);
function A(e) {
    let { errors: t, pendingNick: n, currentNick: A, username: h, user: p, guild: x } = e,
        E = (0, s.bG)([u.A], () => u.A.can(c.xBc.CHANGE_NICKNAME, x) || u.A.can(c.xBc.MANAGE_NICKNAMES, x)),
        T = (0, a.L)(g.PremiumTypes.TIER_2);
    return (0, i.jsxs)(r.A, {
        title: m.intl.string(m.t.me1lRk),
        errors: t,
        children: [
            (0, i.jsx)(l.k, {
                value: n ?? A ?? "",
                placeholder: h,
                maxLength: c.d0r,
                onChange: function (e) {
                    (0, d.p)({ guildId: x.id, nickname: e });
                },
                disabled: !E,
                helperText: E ? void 0 : m.intl.string(m.t.gzjxQi),
            }),
            T && (0, i.jsx)(o.A, { user: p, guildId: x.id, className: _.F }),
        ],
    });
}
