n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(657707),
    a = n(835473),
    o = n(925329),
    s = n(63063),
    l = n(739566),
    c = n(942951),
    u = n(834129),
    d = n(981631),
    f = n(388032),
    p = n(169592);
function _(e) {
    let { message: t, channel: n, author: _, compact: m } = e,
        { nick: h } = (0, l.Sw)(_, n),
        g = (0, c.l)({
            user: _,
            channelId: n.id,
            guildId: void 0,
            messageId: void 0,
        })(),
        E = (0, a.q)(t.applicationId);
    if (null == E) return null;
    let b = f.intl.format(f.t.m7Lwas, {
        username: h,
        usernameHook: g,
        gameName: E.name,
        gameIconHook: (e) =>
            (0, r.jsxs)("span", {
                className: p.gameContainer,
                children: [
                    (0, r.jsx)(o.Z, {
                        game: E,
                        size: o.A.XXSMALL,
                        className: p.inlineIcon,
                    }),
                    " ",
                    e,
                ],
            }),
        helpdeskArticle: s.Z.getArticleURL(d.BhN.SOCIAL_LAYER_CONNECTIONS),
    });
    return (0, r.jsx)(u.Z, {
        iconNode: (0, r.jsx)(i.iWm, { size: "sm" }),
        compact: m,
        contentClassName: p.content,
        children: (0, r.jsx)("div", { children: b }),
    });
}
