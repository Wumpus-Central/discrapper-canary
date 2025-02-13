n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(739566),
    r = n(942951),
    s = n(834129),
    o = n(981791),
    c = n(91361);
function d(e) {
    let { message: t, channel: n, compact: d } = e,
        u = (0, a.ZP)(t),
        m = t.application,
        _ = (0, r.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(s.Z, {
        iconNode: (0, i.jsx)(l.Prq, {
            size: 'md',
            color: 'currentColor',
            className: c.ticketIcon
        }),
        timestamp: t.timestamp,
        compact: d,
        children: (0, o.A)({
            application: m,
            username: u.nick,
            usernameHook: _(u)
        })
    });
}
