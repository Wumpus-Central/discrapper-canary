n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(739566),
    l = n(834129),
    a = n(388032);
function o(e) {
    let t,
        { message: o, usernameHook: s, otherUser: c, otherUsernameHook: u, compact: d, channel: p } = e,
        m = (0, i.ZP)(o),
        f = m.nick,
        g = s(m),
        _ = (0, i.Sw)(c, p);
    if (null != _ && null != u) {
        let e = u(_);
        t = a.intl.format(a.t.L2FyVl, {
            username: f,
            usernameHook: g,
            otherUsername: _.nick,
            otherUsernameHook: e
        });
    } else
        t = a.intl.format(a.t['5v2xa2'], {
            username: f,
            usernameHook: g
        });
    return (0, r.jsx)(l.Z, {
        icon: n(474019),
        timestamp: o.timestamp,
        compact: d,
        children: t
    });
}
