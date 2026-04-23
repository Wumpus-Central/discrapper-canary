"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(117723),
    l = n(763754),
    s = n(888675),
    a = n(985018),
    o = n(554655);
function c(e) {
    let { message: t, compact: n, usernameHook: c } = e,
        u = (0, l.Ay)(t),
        d = c(u),
        _ = a.intl.format(a.t["dKW5C+"], { username: u.nick, usernameHook: d });
    return (0, i.jsx)(s.A, {
        className: o.d,
        iconNode: (0, i.jsx)(r.L, { size: "md", color: "currentColor" }),
        iconContainerClassName: o.z,
        timestamp: t.timestamp,
        compact: n,
        children: _,
    });
}
