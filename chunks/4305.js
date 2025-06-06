n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(352736),
    l = n(739566),
    a = n(834129),
    o = n(388032);
function s(e) {
    let { message: t, usernameHook: s, compact: c } = e,
        u = (0, l.ZP)(t),
        d = s(u),
        p = i.Z.getSystemMessageUserJoin(t.id),
        m = o.intl.format(p, {
            username: u.nick,
            usernameHook: d
        });
    return (0, r.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: c,
        children: m
    });
}
