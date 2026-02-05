n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(934551),
    a = n(429913),
    r = n(769015),
    s = n(975571),
    o = n(763754),
    d = n(447215),
    c = n(888675),
    u = n(652215),
    m = n(985018),
    _ = n(953837);
function h(e) {
    let { message: t, channel: n, author: h, compact: p } = e,
        { nick: g } = (0, o.d8)(h, n),
        A = (0, d.P)({ user: h, channelId: n.id, guildId: void 0, messageId: void 0 })(),
        f = (0, a.h)(t.applicationId);
    if (null == f) return null;
    let x = m.intl.format(m.t.m7Lwas, {
        username: g,
        usernameHook: A,
        gameName: f.name,
        gameIconHook: (e) =>
            (0, i.jsxs)("span", {
                className: _.Y_,
                children: [(0, i.jsx)(r.A, { game: f, size: r.M.XXSMALL, className: _.p4 }), " ", e],
            }),
        helpdeskArticle: s.A.getArticleURL(u.MVz.SOCIAL_LAYER_CONNECTIONS),
    });
    return (0, i.jsx)(c.A, {
        iconNode: (0, i.jsx)(l.GameControllerIcon, { size: "sm" }),
        compact: p,
        contentClassName: _.Qs,
        children: (0, i.jsx)("div", { children: x }),
    });
}
