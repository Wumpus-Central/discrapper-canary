"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(311907),
    l = n(827734),
    s = n(497767),
    a = n(287809),
    o = n(763754),
    c = n(447215),
    u = n(888675),
    d = n(985018),
    _ = n(179250);
function E(e) {
    let { message: t, channel: n, compact: E } = e,
        A = t.getChannelId(),
        m = n.isDM() ? n.getRecipientId() : void 0,
        I = (0, r.bG)([a.default], () => (null != m ? a.default.getUser(m) : void 0), [m]),
        T = (0, r.bG)([a.default], () => a.default.getCurrentUser(), []),
        N = null != T && t.author.id === T.id,
        g = (0, o.d8)(I, n),
        p = (0, c.P)({ user: I, channelId: A, guildId: void 0, messageId: t.id })(g);
    if (!n.isDM() || null == I || null == T) return null;
    let C = N ? d.t.S6PRsh : d.t["H/9Tlj"],
        f = d.intl.format(C, { username: g.nick, usernameHook: p });
    return (0, i.jsx)(u.A, {
        iconNode: (0, i.jsx)(s.V, { size: "sm", color: l.A.colors.STATUS_POSITIVE }),
        iconContainerClassName: _.z,
        timestamp: t.timestamp,
        compact: E,
        children: f,
    });
}
