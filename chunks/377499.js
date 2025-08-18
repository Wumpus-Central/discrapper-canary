n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(739566),
    l = n(834129),
    o = n(388032);
function a(e) {
    let t,
        { message: a, usernameHook: s, otherUser: c, otherUsernameHook: u, compact: d, channel: p } = e,
        m = (0, i.ZP)(a),
        f = m.nick,
        g = s(m),
        _ = (0, i.Sw)(c, p);
    if (null != _ && null != u) {
        let e = u(_);
        t = o.intl.format(o.t.L2FyVl, {
            username: f,
            usernameHook: g,
            otherUsername: _.nick,
            otherUsernameHook: e,
        });
    } else
        t = o.intl.format(o.t["5v2xa2"], {
            username: f,
            usernameHook: g,
        });
    return (0, r.jsx)(l.Z, {
        icon: n(474019),
        timestamp: a.timestamp,
        compact: d,
        children: t,
    });
}
