n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(657707),
    l = n(835473),
    a = n(925329),
    o = n(739566),
    s = n(543388),
    c = n(942951),
    d = n(834129),
    u = n(388032),
    m = n(560390);
function h(e) {
    let { message: t, channel: n, author: h, compact: f } = e,
        { nick: p } = (0, o.Sw)(h, n),
        _ = (0, c.l)({
            user: h,
            channelId: n.id,
            guildId: void 0,
            messageId: void 0
        })(),
        g = (0, l.q)(t.applicationId);
    if (null == g) return null;
    let E = u.intl.format(u.t.m7Lwam, {
        username: p,
        usernameHook: _,
        gameName: g.name,
        gameIconHook: (e) =>
            (0, i.jsx)(s.j, {
                application: g,
                timestamp: t.timestamp,
                children: (0, i.jsxs)('span', {
                    className: m.gameContainer,
                    children: [
                        (0, i.jsx)(a.Z, {
                            game: g,
                            size: a.Z.Sizes.XXSMALL,
                            className: m.inlineIcon
                        }),
                        ' ',
                        e
                    ]
                })
            }),
        helpdeskArticle: '#'
    });
    return (0, i.jsx)(d.Z, {
        iconNode: (0, i.jsx)(r.iWm, { size: 'sm' }),
        compact: f,
        contentClassName: m.content,
        children: (0, i.jsx)('div', { children: E })
    });
}
