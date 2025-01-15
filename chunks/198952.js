n.d(t, {
    r: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(518950),
    a = n(998502),
    l = n(388032),
    o = n(768766);
let c = a.ZP.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar,
    d = (e) => {
        let { user: t, avatarSize: n = r.AvatarSizes.SIZE_48 } = e,
            {
                avatarSrc: a,
                avatarDecorationSrc: d,
                eventHandlers: u
            } = (0, s.Z)({
                user: t,
                size: n
            });
        return (0, i.jsx)('div', {
            ...u,
            children: (0, i.jsx)(c, {
                className: o.__invalid_avatar,
                src: a,
                avatarDecoration: d,
                size: n,
                'aria-label': l.intl.formatToPlainString(l.t.kFj4h4, { name: t.username })
            })
        });
    };
t.Z = (e) => {
    let { currentUser: t, otherUser: n, children: r } = e;
    return (0, i.jsx)('div', {
        className: o.avatarPairContainer,
        children: (0, i.jsxs)('div', {
            className: o.avatarPair,
            children: [(0, i.jsx)(d, { user: t }), r, (0, i.jsx)(d, { user: n })]
        })
    });
};
