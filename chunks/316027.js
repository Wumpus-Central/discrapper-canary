n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    o = n(699516),
    s = n(979627);
function l(e) {
    let { user: t, guildId: n } = e,
        l = (0, i.e7)([o.Z], () => o.Z.isBlocked(t.id));
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsx)(a.qEK, {
                className: s.avatar,
                size: a.EFr.SIZE_56,
                src: t.getAvatarURL(n, 64),
                'aria-label': t.username
            }),
            (0, r.jsx)('div', {
                className: s.avatarIconContainer,
                children: l ? (0, r.jsx)(a.t6m, {}) : (0, r.jsx)(a.kZF, {})
            })
        ]
    });
}
