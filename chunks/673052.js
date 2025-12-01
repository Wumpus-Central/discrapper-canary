n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(835473),
    o = n(739566),
    s = n(942951),
    l = n(834129),
    c = n(388032),
    u = n(427070);
function d(e) {
    let { message: t, channel: n, compact: d } = e,
        f = (0, o.ZP)(t),
        p = (0, s.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        })(f),
        _ = (0, a.q)(t.applicationId);
    if (null == _) return null;
    let m = c.intl.format(c.t.mAtJTC, {
        username: t.author.username,
        usernameHook: p,
        applicationName: _.name,
        applicationNameHook: () =>
            (0, r.jsx)(
                i.Text,
                {
                    className: u.applicationName,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: _.name,
                },
                _.name,
            ),
        helpdeskArticle: "#",
    });
    return (0, r.jsx)(l.Z, {
        iconNode: (0, r.jsx)(i.DuK, {
            size: "sm",
            color: i.TVs.colors.STATUS_POSITIVE,
        }),
        timestamp: t.timestamp,
        compact: d,
        contentClassName: u.systemMessage,
        children: m,
    });
}
