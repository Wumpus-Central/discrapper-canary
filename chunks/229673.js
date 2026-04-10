"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var r = n(934551),
    s = n(429913),
    l = n(769015),
    a = n(975571),
    c = n(763754),
    o = n(447215),
    u = n(888675),
    d = n(652215),
    _ = n(985018),
    E = n(226234);
function A(e) {
    let { message: t, channel: n, author: A, compact: m } = e,
        { nick: I } = (0, c.d8)(A, n),
        T = (0, o.P)({ user: A, channelId: n.id, guildId: void 0, messageId: void 0 })(),
        g = (0, s.h)(t.applicationId);
    if (null == g) return null;
    let N = _.intl.format(_.t.m7Lwas, {
        username: I,
        usernameHook: T,
        gameName: g.name,
        gameIconHook: (e) =>
            (0, i.jsxs)("span", {
                className: E.Y_,
                children: [(0, i.jsx)(l.A, { game: g, size: l.M.XXSMALL, className: E.p4 }), " ", e],
            }),
        helpdeskArticle: a.A.getArticleURL(d.MVz.SOCIAL_LAYER_CONNECTIONS),
    });
    return (0, i.jsx)(u.A, {
        iconNode: (0, i.jsx)(r.GameControllerIcon, { size: "sm" }),
        compact: m,
        contentClassName: E.Qs,
        children: (0, i.jsx)("div", { children: N }),
    });
}
