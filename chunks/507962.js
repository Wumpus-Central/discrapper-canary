n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(739566),
    a = n(834129),
    o = n(388032);
function l(e) {
    let t,
        { message: l, usernameHook: s, otherUser: c, otherUsernameHook: d, compact: u, channel: p } = e,
        m = (0, i.ZP)(l),
        f = m.nick,
        h = s(m),
        g = (0, i.Sw)(c, p);
    if (null != g && null != d) {
        let e = d(g);
        t = o.NW.format(o.t.L2FyVl, {
            username: f,
            usernameHook: h,
            otherUsername: g.nick,
            otherUsernameHook: e
        });
    } else
        t = o.NW.format(o.t['5v2xa2'], {
            username: f,
            usernameHook: h
        });
    return (0, r.jsx)(a.Z, {
        icon: n(474019),
        timestamp: l.timestamp,
        compact: u,
        children: t
    });
}
