n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(739566),
    o = n(834129),
    a = n(388032);
function s(e) {
    let { message: t, otherUsername: s, usernameHook: l, otherUsernameHook: c, compact: u } = e,
        { nick: d } = (0, i.ZP)(t),
        f = l(),
        _ = c(),
        p = a.intl.format(a.t.MMN2Ji, {
            username: d,
            usernameHook: f,
            otherUsername: s,
            otherUsernameHook: _,
        });
    return (0, r.jsx)(o.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: u,
        children: p,
    });
}
