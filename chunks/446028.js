n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(763754),
    r = n(447215),
    s = n(888675),
    o = n(345981),
    d = n(657678);
function c(e) {
    let { message: t, channel: n, compact: c } = e,
        u = (0, a.Ay)(t),
        m = t.application,
        _ = (0, r.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
    return (0, i.jsx)(s.A, {
        iconNode: (0, i.jsx)(l.qyI, { size: "md", color: "currentColor", className: d.C }),
        timestamp: t.timestamp,
        compact: c,
        children: (0, o.X)({ application: m, username: u.nick, usernameHook: _(u) }),
    });
}
