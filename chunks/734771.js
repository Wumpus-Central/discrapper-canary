n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var l = n(763754),
    a = n(888675),
    r = n(985018);
function s(e) {
    let t,
        { message: s, usernameHook: o, otherUser: d, otherUsernameHook: c, compact: u, channel: m } = e,
        _ = (0, l.Ay)(s),
        h = _.nick,
        p = o(_),
        g = (0, l.d8)(d, m);
    if (null != g && null != c) {
        let e = c(g);
        t = r.intl.format(r.t.L2FyVq, { username: h, usernameHook: p, otherUsername: g.nick, otherUsernameHook: e });
    } else t = r.intl.format(r.t["5v2xa8"], { username: h, usernameHook: p });
    return (0, i.jsx)(a.A, { icon: n(884797), timestamp: s.timestamp, compact: u, children: t });
}
