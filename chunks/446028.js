"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(763754),
    a = n(447215),
    l = n(888675),
    o = n(345981),
    c = n(66059);
function u(e) {
    let { message: t, channel: n, compact: u } = e,
        d = (0, s.Ay)(t),
        _ = t.application,
        E = (0, a.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
    return (0, i.jsx)(l.A, {
        iconNode: (0, i.jsx)(r.qyI, { size: "md", color: "currentColor", className: c.C }),
        timestamp: t.timestamp,
        compact: u,
        children: (0, o.X)({ application: _, username: d.nick, usernameHook: E(d) }),
    });
}
