n.d(t, { A: () => m, H: () => x });
var l = n(627968);
n(64700);
var i = n(97808),
    s = n(778712),
    r = n(854627),
    a = n(19575),
    d = n(602339),
    c = n(375708),
    u = n(279199);
let o = a.Ay.getEnableHardwareAcceleration() ? i.Js : i.eu;
function x(e) {
    let { user: t, avatarSize: n = s._3.SIZE_48 } = e,
        { avatarSrc: i, avatarDecorationSrc: a, eventHandlers: u } = (0, r.A)({ userId: t?.id, size: n });
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
