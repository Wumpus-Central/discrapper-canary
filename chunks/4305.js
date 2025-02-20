n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(352736),
    a = n(739566),
    o = n(834129),
    l = n(388032);
function s(e) {
    let { message: t, usernameHook: s, compact: c, guildId: d } = e,
        u = (0, a.ZP)(t),
        p = s(u),
        m = i.Z.getWelcomeMessageKind(d),
        f = i.Z.getSystemMessageUserJoin(t.id, m),
        h = l.NW.format(f, {
            username: u.nick,
            usernameHook: p
        });
    return (0, r.jsx)(o.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: c,
        children: h
    });
}
