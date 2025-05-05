n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(993413),
    a = n(496675),
    o = n(52597),
    c = n(981631),
    d = n(388032),
    u = n(784740);
function m(e) {
    let { errors: t, pendingNick: n, currentNick: m, username: g, guild: p } = e,
        h = null != n ? n : m,
        f = (0, r.e7)([a.Z], () => a.Z.can(c.Plq.CHANGE_NICKNAME, p) || a.Z.can(c.Plq.MANAGE_NICKNAMES, p));
    return (0, i.jsxs)(l.Z, {
        title: d.intl.string(d.t.me1lRk),
        errors: t,
        children: [
            (0, i.jsx)(s.oil, {
                value: null != h ? h : '',
                placeholder: g,
                maxLength: c.l$U,
                onChange: function (e) {
                    (0, o.wi)(e, m);
                },
                disabled: !f
            }),
            !f &&
                (0, i.jsx)(s.R94, {
                    className: u.nicknameDisabled,
                    type: s.R94.Types.DESCRIPTION,
                    children: d.intl.string(d.t.gzjxQk)
                })
        ]
    });
}
