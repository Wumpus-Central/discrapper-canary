n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(739566),
    a = n(834129),
    r = n(388032);
function s(e) {
    let { message: t, otherUsername: s, usernameHook: o, otherUsernameHook: c, compact: d } = e,
        { nick: u } = (0, l.ZP)(t),
        m = o(),
        _ = c(),
        h = r.intl.format(r.t.MMN2Ji, {
            username: u,
            usernameHook: m,
            otherUsername: s,
            otherUsernameHook: _
        });
    return (0, i.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: d,
        children: h
    });
}
