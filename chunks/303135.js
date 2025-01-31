n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(739566),
    a = n(834129),
    r = n(388032);
function s(e) {
    let { message: t, usernameHook: s, compact: o } = e,
        c = (0, l.ZP)(t),
        d = s(c);
    return (0, i.jsx)(a.Z, {
        icon: n(819373),
        timestamp: t.timestamp,
        compact: o,
        children: r.intl.format(r.t.OEdU6e, {
            username: c.nick,
            usernameHook: d
        })
    });
}
