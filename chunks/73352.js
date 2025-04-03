n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(739566),
    a = n(834129),
    l = n(388032);
function o(e) {
    let { message: t, otherUsername: o, usernameHook: s, otherUsernameHook: c, compact: u } = e,
        { nick: d } = (0, i.ZP)(t),
        p = s(),
        m = c(),
        f = l.NW.format(l.t.MMN2Ji, {
            username: d,
            usernameHook: p,
            otherUsername: o,
            otherUsernameHook: m
        });
    return (0, r.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: u,
        children: f
    });
}
