n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(827734),
    a = n(397927),
    s = n(763754),
    o = n(888675),
    l = n(985018),
    c = n(355200);
function u(e) {
    let { message: t, compact: n, usernameHook: u } = e,
        d = (0, s.Ay)(t),
        f = u(d),
        p = l.intl.format(l.t["Rv+TSM"], {
            username: d.nick,
            usernameHook: f,
            topic: t.content,
        });
    return (0, r.jsx)(o.A, {
        className: c.d,
        iconNode: (0, r.jsx)(a.qux, {
            size: "md",
            color: i.A.unsafe_rawColors.GREEN_360.css,
        }),
        iconContainerClassName: c.z,
        timestamp: t.timestamp,
        compact: n,
        children: p,
    });
}
