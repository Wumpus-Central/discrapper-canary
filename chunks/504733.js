n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(739566),
    a = n(942951),
    s = n(834129),
    l = n(981791),
    c = n(583535);
function u(e) {
    let { message: t, channel: n, compact: u } = e,
        d = (0, o.ZP)(t),
        f = t.application,
        _ = (0, a.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(s.Z, {
        iconNode: (0, r.jsx)(i.Prq, {
            size: "md",
            color: "currentColor",
            className: c.ticketIcon,
        }),
        timestamp: t.timestamp,
        compact: u,
        children: (0, l.A)({
            application: f,
            username: d.nick,
            usernameHook: _(d),
        }),
    });
}
