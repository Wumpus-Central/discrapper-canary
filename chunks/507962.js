n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(739566),
    o = n(834129),
    a = n(388032);
function s(e) {
    let t,
        { message: s, usernameHook: l, otherUser: c, otherUsernameHook: u, compact: d, channel: f } = e,
        _ = (0, i.ZP)(s),
        p = _.nick,
        h = l(_),
        m = (0, i.Sw)(c, f);
    if (null != m && null != u) {
        let e = u(m);
        t = a.intl.format(a.t.L2FyVl, {
            username: p,
            usernameHook: h,
            otherUsername: m.nick,
            otherUsernameHook: e,
        });
    } else
        t = a.intl.format(a.t["5v2xa2"], {
            username: p,
            usernameHook: h,
        });
    return (0, r.jsx)(o.Z, {
        icon: n(474019),
        timestamp: s.timestamp,
        compact: d,
        children: t,
    });
}
