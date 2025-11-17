n.d(t, { Z: () => m });
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
    _ = n(474936),
    p = n(388032),
    h = n(473385);
function m(e) {
    let { errors: t, pendingNick: n, currentNick: m, username: g, user: E, guild: b } = e,
        y = null != n ? n : m,
        O = (0, i.e7)([u.Z], () => u.Z.can(f.Plq.CHANGE_NICKNAME, b) || u.Z.can(f.Plq.MANAGE_NICKNAMES, b)),
        v = (0, s.m)(_.PremiumTypes.TIER_2),
        I = o.JH.useExperiment({ location: "NicknameSection" }).enabled;
    function T(e) {
        (0, d.wi)(e, m);
    }
    return (0, r.jsxs)(l.Z, {
        title: p.intl.string(p.t.me1lRk),
        errors: t,
        children: [
            (0, r.jsx)(a.oil, {
                value: null != y ? y : "",
                placeholder: g,
                maxLength: f.l$U,
                onChange: T,
                disabled: !O,
                helperText: O ? void 0 : p.intl.string(p.t.gzjxQi),
            }),
            !O &&
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    className: h.nicknameDisabled,
                    children: p.intl.string(p.t.gzjxQi),
                }),
            I &&
                v &&
                (0, r.jsx)(c.Z, {
                    user: E,
                    guildId: b.id,
                    className: h.displayNameStylesSection,
                }),
        ],
    });
}
