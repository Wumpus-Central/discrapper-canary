n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(739566),
    o = n(942951),
    l = n(834129),
    s = n(981791),
    c = n(265247);
function d(e) {
    let { message: t, channel: n, compact: d } = e,
        u = (0, a.ZP)(t),
        p = t.application,
        m = (0, o.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(l.Z, {
        iconNode: (0, r.jsx)(i.Prq, {
            size: 'md',
            color: 'currentColor',
            className: c.ticketIcon
        }),
        timestamp: t.timestamp,
        compact: d,
        children: (0, s.A)({
            application: p,
            username: u.nick,
            usernameHook: m(u)
        })
    });
}
