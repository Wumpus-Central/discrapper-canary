n.d(t, { Z: () => l });
var r = n(951288);
n(647438);
var i = n(352736),
    a = n(739566),
    o = n(834129),
    s = n(388032);
function l(e) {
    let { message: t, usernameHook: l, compact: c } = e,
        u = (0, a.ZP)(t),
        d = l(u),
        f = i.Z.getSystemMessageUserJoin(t.id),
        _ = s.intl.format(f, {
            username: u.nick,
            usernameHook: d,
        });
    return (0, r.jsx)(o.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: c,
        children: _,
    });
}
