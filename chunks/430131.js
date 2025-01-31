n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(993413),
    a = n(496675),
    o = n(52597),
    c = n(981631),
    d = n(388032),
    u = n(765998);
function m(e) {
    let { errors: t, pendingNick: n, currentNick: m, username: h, guild: g } = e,
        _ = null != n ? n : m,
        x = (0, s.e7)([a.Z], () => a.Z.can(c.Plq.CHANGE_NICKNAME, g) || a.Z.can(c.Plq.MANAGE_NICKNAMES, g));
    return (0, i.jsxs)(l.Z, {
        title: d.intl.string(d.t.me1lRk),
        errors: t,
        children: [
            (0, i.jsx)(r.oil, {
                value: null != _ ? _ : '',
                placeholder: h,
                maxLength: c.l$U,
                onChange: function (e) {
                    (0, o.wi)(e, m);
                },
                disabled: !x
            }),
            !x &&
                (0, i.jsx)(r.R94, {
                    className: u.nicknameDisabled,
                    type: r.R94.Types.DESCRIPTION,
                    children: d.intl.string(d.t.gzjxQk)
                })
        ]
    });
}
