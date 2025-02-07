n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(657707),
    a = n(835473),
    r = n(925329),
    s = n(63063),
    o = n(739566),
    c = n(543388),
    d = n(942951),
    u = n(834129),
    m = n(981631),
    _ = n(388032),
    h = n(560390);
function p(e) {
    let { message: t, channel: n, author: p, compact: g } = e,
        { nick: f } = (0, o.Sw)(p, n),
        x = (0, d.l)({
            user: p,
            channelId: n.id,
            guildId: void 0,
            messageId: void 0
        })(),
        C = (0, a.q)(t.applicationId);
    if (null == C) return null;
    let v = _.intl.format(_.t.m7Lwam, {
        username: f,
        usernameHook: x,
        gameName: C.name,
        gameIconHook: (e) =>
            (0, i.jsx)(c.j, {
                application: C,
                timestamp: t.timestamp,
                children: (0, i.jsxs)('span', {
                    className: h.gameContainer,
                    children: [
                        (0, i.jsx)(r.Z, {
                            game: C,
                            size: r.Z.Sizes.XXSMALL,
                            className: h.inlineIcon
                        }),
                        ' ',
                        e
                    ]
                })
            }),
        helpdeskArticle: s.Z.getArticleURL(m.BhN.SOCIAL_LAYER_CONNECTIONS)
    });
    return (0, i.jsx)(u.Z, {
        iconNode: (0, i.jsx)(l.iWm, { size: 'sm' }),
        compact: g,
        contentClassName: h.content,
        children: (0, i.jsx)('div', { children: v })
    });
}
