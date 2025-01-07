n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(518950),
    s = n(998502),
    l = n(631885),
    o = n(329242),
    c = n(766991);
let d = s.ZP.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;
function u(e) {
    let { otherUser: t, status: n } = e,
        s = (0, l.j_)(t.id, n),
        {
            avatarSrc: u,
            avatarDecorationSrc: g,
            eventHandlers: m
        } = (0, a.Z)({
            user: t,
            size: r.AvatarSizes.SIZE_40,
            animateOnHover: !0
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ...m,
                children: (0, i.jsx)(d, {
                    className: c.avatar,
                    src: u,
                    avatarDecoration: g,
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
                        children: s
                    })
                ]
            })
        ]
    });
}
