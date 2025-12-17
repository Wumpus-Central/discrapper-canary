i.d(t, { Z: () => h });
var n = i(54381);
i(473749);
var s = i(120356),
    r = i.n(s),
    o = i(442837),
    a = i(129861),
    l = i(700582),
    u = i(699516);
i(51144);
var c = i(639845);
let h = function (e) {
    let { user: t, hovered: i, subText: s, showAccountIdentifier: h, status: p, isMobile: d, className: m } = e,
        O = (0, o.e7)([u.Z], () => u.Z.getNickname(t.id));
    return (0, n.jsxs)("div", {
        className: r()(c.userInfo, m, { [c.hovered]: i }),
        children: [
            (0, n.jsx)(l.Z, {
                user: t,
                className: c.avatar,
                animate: i,
                status: p,
                isMobile: d,
            }),
            (0, n.jsxs)("div", {
                className: c.text,
                children: [
                    (0, n.jsx)(a.Z, {
                        user: t,
                        nick: O,
                        botClass: c.botTag,
                        className: r()(c.discordTag, { [c.alignPomelo]: t.hasUniqueUsername() }),
                        usernameClass: c.username,
                        discriminatorClass: c.discriminator,
                        showAccountIdentifier: h,
                    }),
                    (0, n.jsx)("div", {
                        className: c.subtext,
                        children: s,
                    }),
                ],
            }),
        ],
    });
};
