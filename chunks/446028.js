"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(638916),
    l = n(763754),
    s = n(447215),
    a = n(888675),
    o = n(345981),
    c = n(66059);
function u(e) {
    let { message: t, channel: n, compact: u } = e,
        d = (0, l.Ay)(t),
        _ = t.application,
        E = (0, s.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
    return (0, i.jsx)(a.A, {
        iconNode: (0, i.jsx)(r.q, { size: "md", color: "currentColor", className: c.C }),
        timestamp: t.timestamp,
        compact: u,
        children: (0, o.X)({ application: _, username: d.nick, usernameHook: E(d) }),
    });
}
