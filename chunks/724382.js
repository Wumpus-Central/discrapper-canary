n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(429913),
    s = n(763754),
    o = n(447215),
    l = n(888675),
    c = n(985018),
    u = n(893112);

function d(e) {
    let { message: t, channel: n, compact: d } = e,
        f = (0, s.Ay)(t),
        p = (0, o.P)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        })(f),
        _ = (0, a.h)(t.applicationId);
    if (null == _) return null;
    let h = c.intl.format(c.t.mAtJTC, {
        username: t.author.username,
        usernameHook: p,
        applicationName: _.name,
        applicationNameHook: () =>
            (0, r.jsx)(
                i.Text,
                {
                    className: u.S,
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: _.name,
                },
                _.name,
            ),
        helpdeskArticle: "#",
    });
    return (0, r.jsx)(l.A, {
        iconNode: (0, r.jsx)(i.fNY, {
            size: "sm",
            color: i.LU0.colors.STATUS_POSITIVE,
        }),
        timestamp: t.timestamp,
        compact: d,
        contentClassName: u.H,
        children: h,
    });
}
