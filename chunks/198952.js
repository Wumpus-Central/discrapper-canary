n.d(t, {
    Z: () => u,
    r: () => d
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(518950),
    s = n(998502),
    l = n(388032),
    o = n(613565);
let c = s.ZP.getEnableHardwareAcceleration() ? r.Xo$ : r.qEK,
    d = (e) => {
        let { user: t, avatarSize: n = r.EFr.SIZE_48 } = e,
            {
                avatarSrc: s,
                avatarDecorationSrc: d,
                eventHandlers: u
            } = (0, a.Z)({
                user: t,
                size: n
            });
        return (0, i.jsx)('div', {
            ...u,
            children: (0, i.jsx)(c, {
                className: o.__invalid_avatar,
                src: s,
                avatarDecoration: d,
                size: n,
                'aria-label': l.intl.formatToPlainString(l.t.kFj4h4, { name: t.username })
            })
        });
    },
    u = (e) => {
        let { currentUser: t, otherUser: n, children: r } = e;
        return (0, i.jsx)('div', {
            className: o.avatarPairContainer,
            children: (0, i.jsxs)('div', {
                className: o.avatarPair,
                children: [(0, i.jsx)(d, { user: t }), r, (0, i.jsx)(d, { user: n })]
            })
        });
    };
