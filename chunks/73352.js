n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(739566),
    l = n(834129),
    o = n(388032);
function a(e) {
    let { message: t, otherUsername: a, usernameHook: s, otherUsernameHook: c, compact: u } = e,
        { nick: d } = (0, i.ZP)(t),
        p = s(),
        m = c(),
        f = o.intl.format(o.t.MMN2Ji, {
            username: d,
            usernameHook: p,
            otherUsername: a,
            otherUsernameHook: m,
        });
    return (0, r.jsx)(l.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: u,
        children: f,
    });
}
