n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(763754),
    r = n(888675),
    s = n(985018),
    o = n(355200);
function d(e) {
    let { message: t, compact: n, usernameHook: d } = e,
        c = (0, a.Ay)(t),
        u = d(c),
        m = s.intl.format(s.t["zla/ux"], { username: c.nick, usernameHook: u, topic: t.content });
    return (0, i.jsx)(r.A, {
        className: o.d,
        iconNode: (0, i.jsx)(l.qux, { size: "md", color: "currentColor" }),
        iconContainerClassName: o.z,
        timestamp: t.timestamp,
        compact: n,
        children: m,
    });
}
