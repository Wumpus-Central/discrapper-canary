n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(657707),
    a = n(835473),
    l = n(925329),
    o = n(63063),
    s = n(739566),
    c = n(942951),
    u = n(834129),
    d = n(981631),
    p = n(388032),
    m = n(768921);
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
    let x = p.NW.format(p.t.m7Lwam, {
        username: g,
        usernameHook: _,
        gameName: b.name,
        gameIconHook: (e) =>
            (0, r.jsxs)('span', {
                className: m.gameContainer,
                children: [
                    (0, r.jsx)(l.Z, {
                        game: b,
                        size: l.Z.Sizes.XXSMALL,
                        className: m.inlineIcon
                    }),
                    ' ',
                    e
                ]
            }),
        helpdeskArticle: o.Z.getArticleURL(d.BhN.SOCIAL_LAYER_CONNECTIONS)
    });
    return (0, r.jsx)(u.Z, {
        iconNode: (0, r.jsx)(i.iWm, { size: 'sm' }),
        compact: h,
        contentClassName: m.content,
        children: (0, r.jsx)('div', { children: x })
    });
}
