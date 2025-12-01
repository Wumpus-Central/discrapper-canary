n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(739566),
    a = n(834129),
    o = n(388032);
function s(e) {
    let t,
        { message: s, usernameHook: l, otherUser: c, otherUsernameHook: u, compact: d, channel: f } = e,
        p = (0, i.ZP)(s),
        _ = p.nick,
        m = l(p),
        h = (0, i.Sw)(c, f);
    if (null != h && null != u) {
        let e = u(h);
        t = o.intl.format(o.t.L2FyVq, {
            username: _,
            usernameHook: m,
            otherUsername: h.nick,
            otherUsernameHook: e,
        });
    } else
        t = o.intl.format(o.t["5v2xa8"], {
            username: _,
            usernameHook: m,
        });
    return (0, r.jsx)(a.Z, {
        icon: n(474019),
        timestamp: s.timestamp,
        compact: d,
        children: t,
    });
}
