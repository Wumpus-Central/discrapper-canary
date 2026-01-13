n.d(t, { Z: () => m });
var r = n(54381),
    i = n(442837),
    a = n(481060),
    o = n(612659),
    s = n(993413),
    l = n(235433),
    c = n(496675),
    u = n(52597),
    d = n(981631),
    f = n(474936),
    p = n(388032),
    _ = n(362117);
function m(e) {
    let { errors: t, pendingNick: n, currentNick: m, username: h, user: g, guild: E } = e,
        b = null != n ? n : m,
        y = (0, i.e7)([c.Z], () => c.Z.can(d.Plq.CHANGE_NICKNAME, E) || c.Z.can(d.Plq.MANAGE_NICKNAMES, E)),
        O = (0, o.m)(f.PremiumTypes.TIER_2);
    function v(e) {
        (0, u.wi)(e, m);
    }
    return (0, r.jsxs)(s.Z, {
        title: p.intl.string(p.t.me1lRk),
        errors: t,
        children: [
            (0, r.jsx)(a.oil, {
                value: null != b ? b : "",
                placeholder: h,
                maxLength: d.l$U,
                onChange: v,
                disabled: !y,
                helperText: y ? void 0 : p.intl.string(p.t.gzjxQi),
            }),
            O &&
                (0, r.jsx)(l.Z, {
                    user: g,
                    guildId: E.id,
                    className: _.displayNameStylesSection,
                }),
        ],
    });
}
