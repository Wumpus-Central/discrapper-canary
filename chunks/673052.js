n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(835473),
    o = n(739566),
    l = n(942951),
    s = n(834129),
    c = n(388032),
    d = n(453392);
function u(e) {
    let { message: t, channel: n, compact: u } = e,
        p = (0, o.ZP)(t),
        m = (0, l.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        })(p),
        f = (0, a.q)(t.applicationId);
    if (null == f) return null;
    let h = c.NW.format(c.t.mAtJTE, {
        username: t.author.username,
        usernameHook: m,
        applicationName: f.name,
        applicationNameHook: () =>
            (0, r.jsx)(
                i.Text,
                {
                    className: d.applicationName,
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: f.name
                },
                f.name
            ),
        helpdeskArticle: '#'
    });
    return (0, r.jsx)(s.Z, {
        iconNode: (0, r.jsx)(i.DuK, {
            size: 'sm',
            color: i.TVs.colors.STATUS_POSITIVE
        }),
        timestamp: t.timestamp,
        compact: u,
        contentClassName: d.systemMessage,
        children: h
    });
}
