n.d(t, {
    A: () => _,
});
var r = n(627968);
n(64700);
var i = n(934551),
    a = n(429913),
    s = n(769015),
    o = n(975571),
    l = n(763754),
    c = n(447215),
    u = n(888675),
    d = n(652215),
    f = n(985018),
    p = n(953837);

function _(e) {
    let { message: t, channel: n, author: _, compact: h } = e,
        { nick: m } = (0, l.d8)(_, n),
        g = (0, c.P)({
            user: _,
            channelId: n.id,
            guildId: void 0,
            messageId: void 0,
        })(),
        E = (0, a.h)(t.applicationId);
    if (null == E) return null;
    let b = f.intl.format(f.t.m7Lwas, {
        username: m,
        usernameHook: g,
        gameName: E.name,
        gameIconHook: (e) =>
            (0, r.jsxs)("span", {
                className: p.Y_,
                children: [
                    (0, r.jsx)(s.A, {
                        game: E,
                        size: s.M.XXSMALL,
                        className: p.p4,
                    }),
                    " ",
                    e,
                ],
            }),
        helpdeskArticle: o.A.getArticleURL(d.MVz.SOCIAL_LAYER_CONNECTIONS),
    });
    return (0, r.jsx)(u.A, {
        iconNode: (0, r.jsx)(i.GameControllerIcon, {
            size: "sm",
        }),
        compact: h,
        contentClassName: p.Qs,
        children: (0, r.jsx)("div", {
            children: b,
        }),
    });
}
