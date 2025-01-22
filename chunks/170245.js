n.d(t, {
    n: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    s = n(129861),
    o = n(700582),
    c = n(699516),
    d = n(51144),
    u = n(757338);
function h(e) {
    let { user: t, hovered: n, subText: r, showAccountIdentifier: d, status: h, isMobile: m, className: p } = e,
        g = (0, a.e7)([c.Z], () => c.Z.getNickname(t.id));
    return (0, i.jsxs)('div', {
        className: l()(u.userInfo, p, { [u.hovered]: n }),
        children: [
            (0, i.jsx)(o.Z, {
                user: t,
                className: u.avatar,
                animate: n,
                status: h,
                isMobile: m
            }),
            (0, i.jsxs)('div', {
                className: u.text,
                children: [
                    (0, i.jsx)(s.Z, {
                        user: t,
                        nick: g,
                        botClass: u.botTag,
                        className: l()(u.discordTag, { [u.alignPomelo]: t.isPomelo() }),
                        usernameClass: u.username,
                        discriminatorClass: u.discriminator,
                        showAccountIdentifier: d
                    }),
                    (0, i.jsx)('div', {
                        className: u.subtext,
                        children: r
                    })
                ]
            })
        ]
    });
}
function m(e) {
    let t = d.ZP.useUserTag(e.user);
    return (0, i.jsx)(h, {
        ...e,
        showAccountIdentifier: !1,
        subText: t
    });
}
t.Z = h;
