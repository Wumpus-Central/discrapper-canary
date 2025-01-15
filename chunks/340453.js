n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(518950),
    a = n(998502),
    l = n(631885),
    o = n(329242),
    c = n(105452);
let d = a.ZP.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;
function u(e) {
    let { otherUser: t, status: n } = e,
        a = (0, l.j_)(t.id, n),
        {
            avatarSrc: u,
            avatarDecorationSrc: m,
            eventHandlers: g
        } = (0, s.Z)({
            user: t,
            size: r.AvatarSizes.SIZE_40,
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
                    size: r.AvatarSizes.SIZE_40,
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
                    (0, i.jsx)(r.Text, {
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
