n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(739566),
    a = n(834129),
    o = n(388032);
function l(e) {
    let { message: t, otherUsername: l, usernameHook: s, otherUsernameHook: c, compact: d } = e,
        { nick: u } = (0, i.ZP)(t),
        p = s(),
        m = c(),
        f = o.NW.format(o.t.MMN2Ji, {
            username: u,
            usernameHook: p,
            otherUsername: l,
            otherUsernameHook: m
        });
    return (0, r.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: d,
        children: f
    });
}
