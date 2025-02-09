n.d(t, {
    Z: () => l,
    i: () => u
});
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(699516),
    o = n(820910);
function l(e) {
    let { user: t, guildId: n } = e;
    return (0, i.jsx)('div', {
        className: o.avatarHalo,
        children: (0, i.jsx)(a.qEK, {
            className: o.avatar,
            size: a.EFr.SIZE_40,
            src: t.getAvatarURL(n, 40),
            'aria-label': t.username
        })
    });
}
function u(e) {
    let { user: t, guildId: n } = e,
        l = (0, r.e7)([s.Z], () => s.Z.isBlocked(t.id));
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsx)(a.qEK, {
                className: o.avatar,
                size: a.EFr.SIZE_56,
                src: t.getAvatarURL(n, 64),
                'aria-label': t.username
            }),
            (0, i.jsx)('div', {
                className: o.avatarIconContainer,
                children: l ? (0, i.jsx)(a.t6m, {}) : (0, i.jsx)(a.kZF, {})
            })
        ]
    });
}
