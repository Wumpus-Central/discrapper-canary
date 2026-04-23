"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(834730),
    l = n(663417),
    s = n(827734),
    a = n(429913),
    o = n(763754),
    c = n(447215),
    u = n(888675),
    d = n(985018),
    _ = n(111417);
function E(e) {
    let { message: t, channel: n, compact: E } = e,
        A = (0, o.Ay)(t),
        m = (0, c.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id })(A),
        I = (0, a.h)(t.applicationId);
    if (null == I) return null;
    let T = d.intl.format(d.t.mAtJTC, {
        username: t.author.username,
        usernameHook: m,
        applicationName: I.name,
        applicationNameHook: () =>
            (0, i.jsx)(
                r.E,
                { className: _.S, variant: "text-md/semibold", color: "text-strong", children: I.name },
                I.name,
            ),
        helpdeskArticle: "#",
    });
    return (0, i.jsx)(u.A, {
        iconNode: (0, i.jsx)(l.f, { size: "sm", color: s.A.colors.STATUS_POSITIVE }),
        timestamp: t.timestamp,
        compact: E,
        contentClassName: _.H,
        children: T,
    });
}
