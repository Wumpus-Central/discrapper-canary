n.d(t, { Z: () => h });
var r = n(54381),
    i = n(442837),
    a = n(481060),
    o = n(594928),
    s = n(612659),
    l = n(993413),
    c = n(235433),
    u = n(496675),
    d = n(52597),
    f = n(981631),
    p = n(474936),
    _ = n(388032),
    m = n(362117);
function h(e) {
    let { errors: t, pendingNick: n, currentNick: h, username: g, user: E, guild: b } = e,
        y = null != n ? n : h,
        O = (0, i.e7)([u.Z], () => u.Z.can(f.Plq.CHANGE_NICKNAME, b) || u.Z.can(f.Plq.MANAGE_NICKNAMES, b)),
        v = (0, s.m)(p.PremiumTypes.TIER_2),
        S = o.JH.useExperiment({ location: "NicknameSection" }).enabled;
    function I(e) {
        (0, d.wi)(e, h);
    }
    return (0, r.jsxs)(l.Z, {
        title: _.intl.string(_.t.me1lRk),
        errors: t,
        children: [
            (0, r.jsx)(a.oil, {
                value: null != y ? y : "",
                placeholder: g,
                maxLength: f.l$U,
                onChange: I,
                disabled: !O,
                helperText: O ? void 0 : _.intl.string(_.t.gzjxQi),
            }),
            S &&
                v &&
                (0, r.jsx)(c.Z, {
                    user: E,
                    guildId: b.id,
                    className: m.displayNameStylesSection,
                }),
        ],
    });
}
