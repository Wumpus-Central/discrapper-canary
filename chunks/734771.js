n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(763754),
    a = n(888675),
    s = n(985018);
function o(e) {
    let t,
        { message: o, usernameHook: l, otherUser: c, otherUsernameHook: u, compact: d, channel: f } = e,
        p = (0, i.Ay)(o),
        _ = p.nick,
        h = l(p),
        m = (0, i.d8)(c, f);
    if (null != m && null != u) {
        let e = u(m);
        t = s.intl.format(s.t.L2FyVq, {
            username: _,
            usernameHook: h,
            otherUsername: m.nick,
            otherUsernameHook: e,
        });
    } else
        t = s.intl.format(s.t["5v2xa8"], {
            username: _,
            usernameHook: h,
        });
    return (0, r.jsx)(a.A, {
        icon: n(884797),
        timestamp: o.timestamp,
        compact: d,
        children: t,
    });
}
