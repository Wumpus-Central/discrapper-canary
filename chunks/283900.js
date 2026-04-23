l.d(t, { A: () => x, H: () => h });
var n = l(627968);
l(64700);
var i = l(97808),
    s = l(778712),
    a = l(854627),
    r = l(19575),
    d = l(602339),
    c = l(985018),
    u = l(279199);
let o = r.Ay.getEnableHardwareAcceleration() ? i.Js : i.eu,
    h = (e) => {
        let { user: t, avatarSize: l = s._3.SIZE_48 } = e,
            { avatarSrc: i, avatarDecorationSrc: r, eventHandlers: u } = (0, a.A)({ userId: t?.id, size: l });
        return (0, n.jsx)("div", {
            ...u,
            children: (0, n.jsx)(o, {
                src: i,
                avatarDecoration: r,
                size: l,
                "aria-label": c.intl.formatToPlainString(d.default.kFj4h1, { name: t.username }),
            }),
        });
    },
    x = (e) => {
        let { currentUser: t, otherUser: l, children: i } = e;
        return (0, n.jsx)("div", {
            className: u.b,
            children: (0, n.jsxs)("div", {
                className: u.M,
                children: [(0, n.jsx)(h, { user: t }), i, (0, n.jsx)(h, { user: l })],
            }),
        });
    };
