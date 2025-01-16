var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    s = n(129861),
    o = n(700582),
    c = n(699516),
    d = n(757338);
t.Z = function (e) {
    let { user: t, hovered: n, subText: r, showAccountIdentifier: u, status: h, isMobile: m, className: p } = e,
        g = (0, a.e7)([c.Z], () => c.Z.getNickname(t.id));
    return (0, i.jsxs)('div', {
        className: l()(d.userInfo, p, { [d.hovered]: n }),
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
                        className: l()(d.discordTag, { [d.alignPomelo]: t.isPomelo() }),
                        usernameClass: d.username,
                        discriminatorClass: d.discriminator,
                        showAccountIdentifier: u
                    }),
                    (0, i.jsx)('div', {
                        className: d.subtext,
                        children: r
                    })
                ]
            })
        ]
    });
};
