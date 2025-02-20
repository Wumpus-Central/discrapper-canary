n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(657707),
    a = n(835473),
    o = n(925329),
    l = n(63063),
    s = n(739566),
    c = n(942951),
    d = n(834129),
    u = n(981631),
    p = n(388032),
    m = n(912550);
function f(e) {
    let { message: t, channel: n, author: f, compact: h } = e,
        { nick: g } = (0, s.Sw)(f, n),
        _ = (0, c.l)({
            user: f,
            channelId: n.id,
            guildId: void 0,
            messageId: void 0
        })(),
        b = (0, a.q)(t.applicationId);
    if (null == b) return null;
    let v = p.NW.format(p.t.m7Lwam, {
        username: g,
        usernameHook: _,
        gameName: b.name,
        gameIconHook: (e) =>
            (0, r.jsxs)('span', {
                className: m.gameContainer,
                children: [
                    (0, r.jsx)(o.Z, {
                        game: b,
                        size: o.Z.Sizes.XXSMALL,
                        className: m.inlineIcon
                    }),
                    ' ',
                    e
                ]
            }),
        helpdeskArticle: l.Z.getArticleURL(u.BhN.SOCIAL_LAYER_CONNECTIONS)
    });
    return (0, r.jsx)(d.Z, {
        iconNode: (0, r.jsx)(i.iWm, { size: 'sm' }),
        compact: h,
        contentClassName: m.content,
        children: (0, r.jsx)('div', { children: v })
    });
}
