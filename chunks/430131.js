n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    a = n(993413),
    l = n(496675),
    o = n(52597),
    c = n(981631),
    d = n(388032),
    u = n(765998);
function m(e) {
    let { errors: t, pendingNick: n, currentNick: m, username: g, guild: h } = e,
        p = null != n ? n : m,
        x = (0, s.e7)([l.Z], () => l.Z.can(c.Plq.CHANGE_NICKNAME, h) || l.Z.can(c.Plq.MANAGE_NICKNAMES, h));
    return (0, i.jsxs)(a.Z, {
        title: d.intl.string(d.t.me1lRk),
        errors: t,
        children: [
            (0, i.jsx)(r.TextInput, {
                value: null != p ? p : '',
                placeholder: g,
                maxLength: c.l$U,
                onChange: function (e) {
                    (0, o.wi)(e, m);
                },
                disabled: !x
            }),
            !x &&
                (0, i.jsx)(r.FormText, {
                    className: u.nicknameDisabled,
                    type: r.FormText.Types.DESCRIPTION,
                    children: d.intl.string(d.t.gzjxQk)
                })
        ]
    });
}
