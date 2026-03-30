n.d(t, { A: () => m });
var i = n(627968),
    l = n(311907),
    a = n(827734),
    r = n(397927),
    s = n(287809),
    o = n(763754),
    c = n(447215),
    d = n(888675),
    u = n(985018),
    _ = n(351810);
function m(e) {
    let { message: t, channel: n, compact: m } = e,
        A = t.getChannelId(),
        E = n.isDM() ? n.getRecipientId() : void 0,
        I = (0, l.bG)([s.default], () => (null != E ? s.default.getUser(E) : void 0), [E]),
        T = (0, l.bG)([s.default], () => s.default.getCurrentUser(), []),
        f = null != T && t.author.id === T.id,
        N = (0, o.d8)(I, n),
        C = (0, c.P)({ user: I, channelId: A, guildId: void 0, messageId: t.id })(N);
    if (!n.isDM() || null == I || null == T) return null;
    let g = f ? u.t.S6PRsh : u.t["H/9Tlj"],
        h = u.intl.format(g, { username: N.nick, usernameHook: C });
    return (0, i.jsx)(d.A, {
        iconNode: (0, i.jsx)(r.V1C, { size: "sm", color: a.A.colors.STATUS_POSITIVE }),
        iconContainerClassName: _.z,
        timestamp: t.timestamp,
        compact: m,
        children: h,
    });
}
