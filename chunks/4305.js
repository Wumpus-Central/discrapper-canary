n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(352736),
    a = n(739566),
    r = n(834129),
    s = n(388032);
function o(e) {
    let { message: t, usernameHook: o, compact: c, guildId: d } = e,
        u = (0, a.ZP)(t),
        m = o(u),
        h = l.Z.getWelcomeMessageKind(d),
        _ = l.Z.getSystemMessageUserJoin(t.id, h),
        p = s.intl.format(_, {
            username: u.nick,
            usernameHook: m
        });
    return (0, i.jsx)(r.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: c,
        children: p
    });
}
