n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(993413),
    s = n(496675),
    l = n(52597),
    c = n(981631),
    u = n(388032),
    d = n(473385);
function f(e) {
    let { errors: t, pendingNick: n, currentNick: f, username: _, guild: p } = e,
        h = null != n ? n : f,
        m = (0, i.e7)([s.Z], () => s.Z.can(c.Plq.CHANGE_NICKNAME, p) || s.Z.can(c.Plq.MANAGE_NICKNAMES, p));
    function g(e) {
        (0, l.wi)(e, f);
    }
    return (0, r.jsxs)(o.Z, {
        title: u.intl.string(u.t.me1lRk),
        errors: t,
        children: [
            (0, r.jsx)(a.oil, {
                value: null != h ? h : "",
                placeholder: _,
                maxLength: c.l$U,
                onChange: g,
                disabled: !m,
            }),
            !m &&
                (0, r.jsx)(a.R94, {
                    className: d.nicknameDisabled,
                    type: a.R94.Types.DESCRIPTION,
                    children: u.intl.string(u.t.gzjxQk),
                }),
        ],
    });
}
