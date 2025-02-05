n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var l = n(657707),
    a = n(835473),
    r = n(925329),
    s = n(739566),
    o = n(543388),
    c = n(942951),
    d = n(834129),
    u = n(388032),
    m = n(560390);
function _(e) {
    let { message: t, channel: n, author: _, compact: h } = e,
        { nick: p } = (0, s.Sw)(_, n),
        g = (0, c.l)({
            user: _,
            channelId: n.id,
            guildId: void 0,
            messageId: void 0
        })(),
        f = (0, a.q)(t.applicationId);
    if (null == f) return null;
    let x = u.intl.format(u.t.m7Lwam, {
        username: p,
        usernameHook: g,
        gameName: f.name,
        gameIconHook: (e) =>
            (0, i.jsx)(o.j, {
                application: f,
                timestamp: t.timestamp,
                children: (0, i.jsxs)('span', {
                    className: m.gameContainer,
                    children: [
                        (0, i.jsx)(r.Z, {
                            game: f,
                            size: r.Z.Sizes.XXSMALL,
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
        iconNode: (0, i.jsx)(l.iWm, { size: 'sm' }),
        compact: h,
        contentClassName: m.content,
        children: (0, i.jsx)('div', { children: x })
    });
}
