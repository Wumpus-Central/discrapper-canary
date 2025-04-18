n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(993413),
    l = n(496675),
    o = n(52597),
    c = n(981631),
    d = n(388032),
    u = n(784740);
function m(e) {
    let { errors: t, pendingNick: n, currentNick: m, username: g, guild: p } = e,
        h = null != n ? n : m,
        f = (0, i.e7)([l.Z], () => l.Z.can(c.Plq.CHANGE_NICKNAME, p) || l.Z.can(c.Plq.MANAGE_NICKNAMES, p));
    return (0, r.jsxs)(a.Z, {
        title: d.NW.string(d.t.me1lRk),
        errors: t,
        children: [
            (0, r.jsx)(s.oil, {
                value: null != h ? h : '',
                placeholder: g,
                maxLength: c.l$U,
                onChange: function (e) {
                    (0, o.wi)(e, m);
                },
                disabled: !f
            }),
            !f &&
                (0, r.jsx)(s.R94, {
                    className: u.nicknameDisabled,
                    type: s.R94.Types.DESCRIPTION,
                    children: d.NW.string(d.t.gzjxQk)
                })
        ]
    });
}
