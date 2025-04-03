n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(739566),
    a = n(834129),
    l = n(388032);
function o(e) {
    let { message: t, usernameHook: o, compact: s } = e,
        c = (0, i.ZP)(t),
        u = o(c);
    return (0, r.jsx)(a.Z, {
        icon: n(819373),
        timestamp: t.timestamp,
        compact: s,
        children: l.NW.format(l.t.OEdU6e, {
            username: c.nick,
            usernameHook: u
        })
    });
}
