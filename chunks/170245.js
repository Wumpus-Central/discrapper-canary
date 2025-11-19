n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(129861),
    o = n(700582),
    c = n(699516);
n(51144);
var u = n(913139);
let d = function (e) {
    let { user: t, hovered: n, subText: i, showAccountIdentifier: d, status: p, isMobile: f, className: h } = e,
        g = (0, a.e7)([c.Z], () => c.Z.getNickname(t.id));
    return (0, r.jsxs)("div", {
        className: l()(u.userInfo, h, { [u.hovered]: n }),
        children: [
            (0, r.jsx)(o.Z, {
                user: t,
                className: u.avatar,
                animate: n,
                status: p,
                isMobile: f,
            }),
            (0, r.jsxs)("div", {
                className: u.text,
                children: [
                    (0, r.jsx)(s.Z, {
                        user: t,
                        nick: g,
                        botClass: u.botTag,
                        className: l()(u.discordTag, { [u.alignPomelo]: t.hasUniqueUsername() }),
                        usernameClass: u.username,
                        discriminatorClass: u.discriminator,
                        showAccountIdentifier: d,
                    }),
                    (0, r.jsx)("div", {
                        className: u.subtext,
                        children: i,
                    }),
                ],
            }),
        ],
    });
};
