n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(739566),
    a = n(834129),
    r = n(388032);
function s(e) {
    let t,
        { message: s, usernameHook: o, otherUser: c, otherUsernameHook: d, compact: u, channel: m } = e,
        _ = (0, l.ZP)(s),
        h = _.nick,
        p = o(_),
        g = (0, l.Sw)(c, m);
    if (null != g && null != d) {
        let e = d(g);
        t = r.intl.format(r.t.L2FyVl, {
            username: h,
            usernameHook: p,
            otherUsername: g.nick,
            otherUsernameHook: e
        });
    } else
        t = r.intl.format(r.t['5v2xa2'], {
            username: h,
            usernameHook: p
        });
    return (0, i.jsx)(a.Z, {
        icon: n(474019),
        timestamp: s.timestamp,
        compact: u,
        children: t
    });
}
