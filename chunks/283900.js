n.d(t, { A: () => m, H: () => x });
var l = n(477900);
n(582128);
var i = n(97808),
    r = n(778712),
    s = n(854627),
    a = n(19575),
    d = n(670595),
    c = n(375708),
    u = n(756308);
let o = a.Ay.getEnableHardwareAcceleration() ? i.Js : i.eu;
function x(e) {
    let { user: t, avatarSize: n = r._3.SIZE_48 } = e,
        { avatarSrc: i, avatarDecorationSrc: a, eventHandlers: u } = (0, s.A)({ userId: t?.id, size: n });
    return (0, l.jsx)("div", {
        ...u,
        children: (0, l.jsx)(o, {
            src: i,
            avatarDecoration: a,
            size: n,
            "aria-label": c.intl.formatToPlainString(d.default.kFj4h1, { name: t.username }),
        }),
    });
}
let m = function (e) {
    let { currentUser: t, otherUser: n, children: i } = e;
    return (0, l.jsx)("div", {
        className: u.b,
        children: (0, l.jsxs)("div", {
            className: u.M,
            children: [(0, l.jsx)(x, { user: t }), i, (0, l.jsx)(x, { user: n })],
        }),
    });
};
