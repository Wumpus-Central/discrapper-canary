n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(657707),
    a = n(835473),
    r = n(925329),
    s = n(63063),
    o = n(739566),
    c = n(942951),
    d = n(834129),
    u = n(981631),
    m = n(388032),
    _ = n(368272);
function h(e) {
    let { message: t, channel: n, author: h, compact: p } = e,
        { nick: g } = (0, o.Sw)(h, n),
        f = (0, c.l)({
            user: h,
            channelId: n.id,
            guildId: void 0,
            messageId: void 0
        })(),
        x = (0, a.q)(t.applicationId);
    if (null == x) return null;
    let C = m.intl.format(m.t.m7Lwam, {
        username: g,
        usernameHook: f,
        gameName: x.name,
        gameIconHook: (e) =>
            (0, i.jsxs)('span', {
                className: _.gameContainer,
                children: [
                    (0, i.jsx)(r.Z, {
                        game: x,
                        size: r.Z.Sizes.XXSMALL,
                        className: _.inlineIcon
                    }),
                    ' ',
                    e
                ]
            }),
        helpdeskArticle: s.Z.getArticleURL(u.BhN.SOCIAL_LAYER_CONNECTIONS)
    });
    return (0, i.jsx)(d.Z, {
        iconNode: (0, i.jsx)(l.iWm, { size: 'sm' }),
        compact: p,
        contentClassName: _.content,
        children: (0, i.jsx)('div', { children: C })
    });
}
