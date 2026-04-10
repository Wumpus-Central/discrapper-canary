"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(763754),
    l = n(888675),
    a = n(985018),
    c = n(442268);
function o(e) {
    let { message: t, compact: n, usernameHook: o } = e,
        u = (0, s.Ay)(t),
        d = o(u),
        _ = a.intl.format(a.t.tv2DNy, { username: u.nick, usernameHook: d });
    return (0, i.jsx)(l.A, {
        className: c.d,
        iconNode: (0, i.jsx)(r.E7M, { size: "md", color: "currentColor" }),
        iconContainerClassName: c.z,
        timestamp: t.timestamp,
        compact: n,
        children: _,
    });
}
