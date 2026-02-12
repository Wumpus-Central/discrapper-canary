n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(429913),
    r = n(763754),
    s = n(447215),
    o = n(888675),
    d = n(985018),
    c = n(893112);
function u(e) {
    let { message: t, channel: n, compact: u } = e,
        m = (0, r.Ay)(t),
        _ = (0, s.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id })(m),
        h = (0, a.h)(t.applicationId);
    if (null == h) return null;
    let p = d.intl.format(d.t.mAtJTC, {
        username: t.author.username,
        usernameHook: _,
        applicationName: h.name,
        applicationNameHook: () =>
            (0, i.jsx)(
                l.Text,
                { className: c.S, variant: "text-md/semibold", color: "text-strong", children: h.name },
                h.name,
            ),
        helpdeskArticle: "#",
    });
    return (0, i.jsx)(o.A, {
        iconNode: (0, i.jsx)(l.fNY, { size: "sm", color: l.LU0.colors.STATUS_POSITIVE }),
        timestamp: t.timestamp,
        compact: u,
        contentClassName: c.H,
        children: p,
    });
}
