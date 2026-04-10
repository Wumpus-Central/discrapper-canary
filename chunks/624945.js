"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(311907),
    s = n(827734),
    l = n(397927),
    a = n(287809),
    c = n(763754),
    o = n(447215),
    u = n(888675),
    d = n(985018),
    _ = n(351810);
function E(e) {
    let { message: t, channel: n, compact: E } = e,
        A = t.getChannelId(),
        m = n.isDM() ? n.getRecipientId() : void 0,
        I = (0, r.bG)([a.default], () => (null != m ? a.default.getUser(m) : void 0), [m]),
        T = (0, r.bG)([a.default], () => a.default.getCurrentUser(), []),
        g = null != T && t.author.id === T.id,
        N = (0, c.d8)(I, n),
        f = (0, o.P)({ user: I, channelId: A, guildId: void 0, messageId: t.id })(N);
    if (!n.isDM() || null == I || null == T) return null;
    let p = g ? d.t.S6PRsh : d.t["H/9Tlj"],
        C = d.intl.format(p, { username: N.nick, usernameHook: f });
    return (0, i.jsx)(u.A, {
        iconNode: (0, i.jsx)(l.V1C, { size: "sm", color: s.A.colors.STATUS_POSITIVE }),
        iconContainerClassName: _.z,
        timestamp: t.timestamp,
        compact: E,
        children: C,
    });
}
