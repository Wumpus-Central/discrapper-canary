n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(739566),
    a = n(942951),
    o = n(834129),
    s = n(981791),
    c = n(875378);
function u(e) {
    let { message: t, channel: n, compact: u } = e,
        d = (0, l.ZP)(t),
        p = t.application,
        m = (0, a.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, r.jsx)(o.Z, {
        iconNode: (0, r.jsx)(i.Prq, {
            size: 'md',
            color: 'currentColor',
            className: c.ticketIcon
        }),
        timestamp: t.timestamp,
        compact: u,
        children: (0, s.A)({
            application: p,
            username: d.nick,
            usernameHook: m(d)
        })
    });
}
