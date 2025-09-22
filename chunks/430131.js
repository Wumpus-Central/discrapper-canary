n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(594928),
    s = n(993413),
    l = n(235433),
    c = n(496675),
    u = n(52597),
    d = n(981631),
    f = n(388032),
    _ = n(473385);
function p(e) {
    let { errors: t, pendingNick: n, currentNick: p, username: h, user: m, guild: g } = e,
        E = null != n ? n : p,
        b = (0, i.e7)([c.Z], () => c.Z.can(d.Plq.CHANGE_NICKNAME, g) || c.Z.can(d.Plq.MANAGE_NICKNAMES, g)),
        { enabled: y } = o.s9.useConfig({ location: "NicknameSection" });
    function O(e) {
        (0, u.wi)(e, p);
    }
    return (0, r.jsxs)(s.Z, {
        title: f.intl.string(f.t.me1lRk),
        errors: t,
        children: [
            (0, r.jsx)(a.oil, {
                value: null != E ? E : "",
                placeholder: h,
                maxLength: d.l$U,
                onChange: O,
                disabled: !b,
            }),
            !b &&
                (0, r.jsx)(a.R94, {
                    className: _.nicknameDisabled,
                    type: a.R94.Types.DESCRIPTION,
                    children: f.intl.string(f.t.gzjxQk),
                }),
            y &&
                (0, r.jsx)(l.Z, {
                    user: m,
                    guildId: g.id,
                    className: _.displayNameStylesSection,
                }),
        ],
    });
}
