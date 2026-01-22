n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(311907),
    a = n(397927),
    s = n(757036),
    o = n(128450),
    l = n(180020),
    c = n(576705),
    u = n(684732),
    d = n(652215),
    f = n(788868),
    p = n(985018),
    _ = n(131025);

function h(e) {
    let { errors: t, pendingNick: n, currentNick: h, username: m, user: g, guild: E } = e,
        b = null != n ? n : h,
        y = (0, i.bG)([c.A], () => c.A.can(d.xBc.CHANGE_NICKNAME, E) || c.A.can(d.xBc.MANAGE_NICKNAMES, E)),
        O = (0, s.L)(f.PremiumTypes.TIER_2);

    function A(e) {
        (0, u.o_)(e, h);
    }
    return (0, r.jsxs)(o.A, {
        title: p.intl.string(p.t.me1lRk),
        errors: t,
        children: [
            (0, r.jsx)(a.ksK, {
                value: null != b ? b : "",
                placeholder: m,
                maxLength: d.d0r,
                onChange: A,
                disabled: !y,
                helperText: y ? void 0 : p.intl.string(p.t.gzjxQi),
            }),
            O &&
                (0, r.jsx)(l.A, {
                    user: g,
                    guildId: E.id,
                    className: _.F,
                }),
        ],
    });
}
