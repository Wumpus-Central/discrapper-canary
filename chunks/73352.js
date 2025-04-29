n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(739566),
    l = n(834129),
    a = n(388032);
function o(e) {
    let { message: t, otherUsername: o, usernameHook: s, otherUsernameHook: c, compact: u } = e,
        { nick: d } = (0, i.ZP)(t),
        p = s(),
        m = c(),
        f = a.intl.format(a.t.MMN2Ji, {
            username: d,
            usernameHook: p,
            otherUsername: o,
            otherUsernameHook: m
        });
    return (0, r.jsx)(l.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: u,
        children: f
    });
}
