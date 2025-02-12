n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(993413),
    a = n(496675),
    o = n(52597),
    c = n(981631),
    d = n(388032),
    u = n(292845);
function h(e) {
    let { errors: t, pendingNick: n, currentNick: h, username: m, guild: g } = e,
        x = null != n ? n : h,
        _ = (0, s.e7)([a.Z], () => a.Z.can(c.Plq.CHANGE_NICKNAME, g) || a.Z.can(c.Plq.MANAGE_NICKNAMES, g));
    return (0, i.jsxs)(r.Z, {
        title: d.intl.string(d.t.me1lRk),
        errors: t,
        children: [
            (0, i.jsx)(l.oil, {
                value: null != x ? x : '',
                placeholder: m,
                maxLength: c.l$U,
                onChange: function (e) {
                    (0, o.wi)(e, h);
                },
                disabled: !_
            }),
            !_ &&
                (0, i.jsx)(l.R94, {
                    className: u.nicknameDisabled,
                    type: l.R94.Types.DESCRIPTION,
                    children: d.intl.string(d.t.gzjxQk)
                })
        ]
    });
}
