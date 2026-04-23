"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var r = n(687966),
    l = n(429913),
    s = n(769015),
    a = n(975571),
    o = n(763754),
    c = n(447215),
    u = n(888675),
    d = n(652215),
    _ = n(985018),
    E = n(479978);
function A(e) {
    let { message: t, channel: n, author: A, compact: m } = e,
        { nick: I } = (0, o.d8)(A, n),
        T = (0, c.P)({ user: A, channelId: n.id, guildId: void 0, messageId: void 0 })(),
        N = (0, l.h)(t.applicationId);
    if (null == N) return null;
    let g = _.intl.format(_.t.m7Lwas, {
        username: I,
        usernameHook: T,
        gameName: N.name,
        gameIconHook: (e) =>
            (0, i.jsxs)("span", {
                className: E.Y_,
                children: [(0, i.jsx)(s.A, { game: N, size: s.M.XXSMALL, className: E.p4 }), " ", e],
            }),
        helpdeskArticle: a.A.getArticleURL(d.MVz.SOCIAL_LAYER_CONNECTIONS),
    });
    return (0, i.jsx)(u.A, {
        iconNode: (0, i.jsx)(r._, { size: "sm" }),
        compact: m,
        contentClassName: E.Qs,
        children: (0, i.jsx)("div", { children: g }),
    });
}
