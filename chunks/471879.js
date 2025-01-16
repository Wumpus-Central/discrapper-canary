r.d(n, {
    Z: function () {
        return u;
    },
    i: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(699516),
    l = r(142416);
function u(e) {
    let { user: n, guildId: r } = e;
    return (0, i.jsx)('div', {
        className: l.avatarHalo,
        children: (0, i.jsx)(s.Avatar, {
            className: l.avatar,
            size: s.AvatarSizes.SIZE_40,
            src: n.getAvatarURL(r, 40),
            'aria-label': n.username
        })
    });
}
function c(e) {
    let { user: n, guildId: r } = e,
        u = (0, a.e7)([o.Z], () => o.Z.isBlocked(n.id));
    return (0, i.jsxs)('div', {
        className: l.container,
        children: [
            (0, i.jsx)(s.Avatar, {
                className: l.avatar,
                size: s.AvatarSizes.SIZE_56,
                src: n.getAvatarURL(r, 64),
                'aria-label': n.username
            }),
            (0, i.jsx)('div', {
                className: l.avatarIconContainer,
                children: u ? (0, i.jsx)(s.DenyIcon, {}) : (0, i.jsx)(s.EyeSlashIcon, {})
            })
        ]
    });
}
