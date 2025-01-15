n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(518950),
    a = n(998502),
    l = n(631885),
    o = n(329242),
    c = n(766991);
let d = a.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;
function u(e) {
    let { otherUser: t, status: n } = e,
        a = (0, l.j_)(t.id, n),
        {
            avatarSrc: u,
            avatarDecorationSrc: m,
            eventHandlers: g
        } = (0, r.Z)({
            user: t,
            size: s.AvatarSizes.SIZE_40,
            animateOnHover: !0
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ...g,
                children: (0, i.jsx)(d, {
                    className: c.avatar,
                    src: u,
                    avatarDecoration: m,
                    size: s.AvatarSizes.SIZE_40,
                    'aria-label': t.username
                })
            }),
            (0, i.jsxs)('div', {
                className: c.userPreview,
                children: [
                    (0, i.jsx)('div', {
                        className: c.userContainerWithTimestamp,
                        children: (0, i.jsx)(o.Z, { user: t })
                    }),
                    (0, i.jsx)(s.Text, {
                        className: c.__invalid_timestamp,
                        color: 'text-muted',
                        variant: 'text-xs/normal',
                        children: a
                    })
                ]
            })
        ]
    });
}
