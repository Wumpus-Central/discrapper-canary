n.d(t, { i: () => l });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(699516),
    s = n(86750);
function l(e) {
    let { user: t, guildId: n } = e,
        l = (0, i.e7)([a.Z], () => a.Z.isBlocked(t.id));
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsx)(o.qEK, {
                className: s.avatar,
                size: o.EFr.SIZE_56,
                src: t.getAvatarURL(n, 64),
                'aria-label': t.username
            }),
            (0, r.jsx)('div', {
                className: s.avatarIconContainer,
                children: l ? (0, r.jsx)(o.t6m, {}) : (0, r.jsx)(o.kZF, {})
            })
        ]
    });
}
