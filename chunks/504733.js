n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(739566),
    a = n(942951),
    o = n(834129),
    s = n(981791),
    c = n(234596);
function u(e) {
    let { message: t, channel: n, compact: u } = e,
        d = (0, l.ZP)(t),
        m = t.application,
        h = (0, a.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(o.Z, {
        iconNode: (0, i.jsx)(r.TicketIcon, {
            size: 'md',
            color: 'currentColor',
            className: c.ticketIcon
        }),
        timestamp: t.timestamp,
        compact: u,
        children: (0, s.A)({
            application: m,
            username: d.nick,
            usernameHook: h(d)
        })
    });
}
