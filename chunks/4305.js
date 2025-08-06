n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(352736),
    o = n(739566),
    a = n(834129),
    s = n(388032);
function l(e) {
    let { message: t, usernameHook: l, compact: c } = e,
        u = (0, o.ZP)(t),
        d = l(u),
        f = i.Z.getSystemMessageUserJoin(t.id),
        _ = s.intl.format(f, {
            username: u.nick,
            usernameHook: d,
        });
    return (0, r.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: c,
        children: _,
    });
}
