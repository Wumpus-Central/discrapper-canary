var l = n(477900);
n(582128);
var i = n(97808),
    r = n(778712),
    s = n(854627),
    a = n(253400),
    d = n(665956),
    c = n(792996),
    o = n(756308);
let u = a.Ay.getEnableHardwareAcceleration() ? i.Js : i.eu;
function m(e) {
    let { user: t, avatarSize: n = r._3.SIZE_48 } = e,
        { avatarSrc: i, avatarDecorationSrc: a, eventHandlers: o } = (0, s.A)({ userId: t?.id, size: n });
    return (0, l.jsx)("div", {
        ...o,
        children: (0, l.jsx)(u, {
            src: i,
            avatarDecoration: a,
            size: n,
            "aria-label": c.intl.formatToPlainString(d.default.kFj4h1, { name: t.username }),
        }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { currentUser: t, otherUser: n, children: i } = e;
            return (0, l.jsx)("div", {
                className: o.b,
                children: (0, l.jsxs)("div", {
                    className: o.M,
                    children: [(0, l.jsx)(m, { user: t }), i, (0, l.jsx)(m, { user: n })],
                }),
            });
        },
        H: m,
    },
);
