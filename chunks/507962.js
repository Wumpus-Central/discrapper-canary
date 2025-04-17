n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(739566),
    l = n(834129),
    a = n(388032);
function o(e) {
    let t,
        { message: o, usernameHook: s, otherUser: c, otherUsernameHook: u, compact: d, channel: p } = e,
        m = (0, i.ZP)(o),
        f = m.nick,
        h = s(m),
        g = (0, i.Sw)(c, p);
    if (null != g && null != u) {
        let e = u(g);
        t = a.NW.format(a.t.L2FyVl, {
            username: f,
            usernameHook: h,
            otherUsername: g.nick,
            otherUsernameHook: e
        });
    } else
        t = a.NW.format(a.t['5v2xa2'], {
            username: f,
            usernameHook: h
        });
    return (0, r.jsx)(l.Z, {
        icon: n(474019),
        timestamp: o.timestamp,
        compact: d,
        children: t
    });
}
