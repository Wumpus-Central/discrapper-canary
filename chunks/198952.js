n.d(t, {
    r: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(518950),
    a = n(998502),
    l = n(388032),
    o = n(866445);
let c = a.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar,
    d = (e) => {
        let { user: t, avatarSize: n = s.AvatarSizes.SIZE_48 } = e,
            {
                avatarSrc: a,
                avatarDecorationSrc: d,
                eventHandlers: u
            } = (0, r.Z)({
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
    let { currentUser: t, otherUser: n, children: s } = e;
    return (0, i.jsx)('div', {
        className: o.avatarPairContainer,
        children: (0, i.jsxs)('div', {
            className: o.avatarPair,
            children: [(0, i.jsx)(d, { user: t }), s, (0, i.jsx)(d, { user: n })]
        })
    });
};
