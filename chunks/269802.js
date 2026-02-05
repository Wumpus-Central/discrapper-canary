n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(827734),
    a = n(397927),
    r = n(763754),
    s = n(888675),
    o = n(985018),
    d = n(355200);
function c(e) {
    let { message: t, compact: n, usernameHook: c } = e,
        u = (0, r.Ay)(t),
        m = c(u),
        _ = o.intl.format(o.t["Rv+TSM"], { username: u.nick, usernameHook: m, topic: t.content });
    return (0, i.jsx)(s.A, {
        className: d.d,
        iconNode: (0, i.jsx)(a.qux, { size: "md", color: l.A.unsafe_rawColors.GREEN_360.css }),
        iconContainerClassName: d.z,
        timestamp: t.timestamp,
        compact: n,
        children: _,
    });
}
