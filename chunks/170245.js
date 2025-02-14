n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    s = n(129861),
    o = n(700582),
    d = n(699516);
n(51144);
var c = n(922358);
let u = function (e) {
    let { user: t, hovered: n, subText: l, showAccountIdentifier: u, status: h, isMobile: m, className: p } = e,
        g = (0, a.e7)([d.Z], () => d.Z.getNickname(t.id));
    return (0, i.jsxs)('div', {
        className: r()(c.userInfo, p, { [c.hovered]: n }),
        children: [
            (0, i.jsx)(o.Z, {
                user: t,
                className: c.avatar,
                animate: n,
                status: h,
                isMobile: m
            }),
            (0, i.jsxs)('div', {
                className: c.text,
                children: [
                    (0, i.jsx)(s.Z, {
                        user: t,
                        nick: g,
                        botClass: c.botTag,
                        className: r()(c.discordTag, { [c.alignPomelo]: t.isPomelo() }),
                        usernameClass: c.username,
                        discriminatorClass: c.discriminator,
                        showAccountIdentifier: u
                    }),
                    (0, i.jsx)('div', {
                        className: c.subtext,
                        children: l
                    })
                ]
            })
        ]
    });
};
