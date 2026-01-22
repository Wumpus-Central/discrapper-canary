n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(763754),
    s = n(888675),
    o = n(985018),
    l = n(355200);

function c(e) {
    let { message: t, compact: n, usernameHook: c } = e,
        u = (0, a.Ay)(t),
        d = c(u),
        f = o.intl.format(o.t.Yy6vLs, {
            username: u.nick,
            usernameHook: d,
            topic: t.content,
        });
    return (0, r.jsx)(s.A, {
        className: l.d,
        iconNode: (0, r.jsx)(i.qux, {
            size: "md",
            color: "currentColor",
        }),
        iconContainerClassName: l.z,
        timestamp: t.timestamp,
        compact: n,
        children: f,
    });
}
