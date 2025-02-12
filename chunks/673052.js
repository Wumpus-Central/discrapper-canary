n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(835473),
    r = n(739566),
    s = n(942951),
    o = n(834129),
    c = n(388032),
    d = n(155554);
function u(e) {
    let { message: t, channel: n, compact: u } = e,
        m = (0, r.ZP)(t),
        _ = (0, s.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        })(m),
        h = (0, a.q)(t.applicationId);
    if (null == h) return null;
    let p = c.intl.format(c.t.mAtJTE, {
        username: t.author.username,
        usernameHook: _,
        applicationName: h.name,
        applicationNameHook: () =>
            (0, i.jsx)(
                l.Text,
                {
                    className: d.applicationName,
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: h.name
                },
                h.name
            ),
        helpdeskArticle: '#'
    });
    return (0, i.jsx)(o.Z, {
        iconNode: (0, i.jsx)(l.DuK, {
            size: 'sm',
            color: l.TVs.colors.STATUS_POSITIVE
        }),
        timestamp: t.timestamp,
        compact: u,
        contentClassName: d.systemMessage,
        children: p
    });
}
