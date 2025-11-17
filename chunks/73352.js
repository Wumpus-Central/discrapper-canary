n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(739566),
    a = n(834129),
    o = n(388032);
function s(e) {
    let { message: t, otherUsername: s, usernameHook: l, otherUsernameHook: c, compact: u } = e,
        { nick: d } = (0, i.ZP)(t),
        f = l(),
        _ = c(),
        p = o.intl.format(o.t.MMN2Jq, {
            username: d,
            usernameHook: f,
            otherUsername: s,
            otherUsernameHook: _,
        });
    return (0, r.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: u,
        children: p,
    });
}
