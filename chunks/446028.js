n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(763754),
    s = n(447215),
    o = n(888675),
    l = n(345981),
    c = n(657678);

function u(e) {
    let { message: t, channel: n, compact: u } = e,
        d = (0, a.Ay)(t),
        f = t.application,
        p = (0, s.P)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(o.A, {
        iconNode: (0, r.jsx)(i.qyI, {
            size: "md",
            color: "currentColor",
            className: c.C,
        }),
        timestamp: t.timestamp,
        compact: u,
        children: (0, l.X)({
            application: f,
            username: d.nick,
            usernameHook: p(d),
        }),
    });
}
