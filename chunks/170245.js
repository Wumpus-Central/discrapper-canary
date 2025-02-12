n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    s = n(129861),
    o = n(700582),
    c = n(699516);
n(51144);
var d = n(424609);
let u = function (e) {
    let { user: t, hovered: n, subText: l, showAccountIdentifier: u, status: h, isMobile: m, className: p } = e,
        g = (0, a.e7)([c.Z], () => c.Z.getNickname(t.id));
    return (0, i.jsxs)('div', {
        className: r()(d.userInfo, p, { [d.hovered]: n }),
        children: [
            (0, i.jsx)(o.Z, {
                user: t,
                className: d.avatar,
                animate: n,
                status: h,
                isMobile: m
            }),
            (0, i.jsxs)('div', {
                className: d.text,
                children: [
                    (0, i.jsx)(s.Z, {
                        user: t,
                        nick: g,
                        botClass: d.botTag,
                        className: r()(d.discordTag, { [d.alignPomelo]: t.isPomelo() }),
                        usernameClass: d.username,
                        discriminatorClass: d.discriminator,
                        showAccountIdentifier: u
                    }),
                    (0, i.jsx)('div', {
                        className: d.subtext,
                        children: l
                    })
                ]
            })
        ]
    });
};
