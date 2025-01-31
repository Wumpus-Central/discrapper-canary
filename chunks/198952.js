n.d(t, {
    Z: () => u,
    r: () => d
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(518950),
    l = n(998502),
    a = n(388032),
    o = n(866445);
let c = l.ZP.getEnableHardwareAcceleration() ? s.Xo$ : s.qEK,
    d = (e) => {
        let { user: t, avatarSize: n = s.EFr.SIZE_48 } = e,
            {
                avatarSrc: l,
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
                src: l,
                avatarDecoration: d,
                size: n,
                'aria-label': a.intl.formatToPlainString(a.t.kFj4h4, { name: t.username })
            })
        });
    },
    u = (e) => {
        let { currentUser: t, otherUser: n, children: s } = e;
        return (0, i.jsx)('div', {
            className: o.avatarPairContainer,
            children: (0, i.jsxs)('div', {
                className: o.avatarPair,
                children: [(0, i.jsx)(d, { user: t }), s, (0, i.jsx)(d, { user: n })]
            })
        });
    };
