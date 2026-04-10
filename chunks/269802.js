"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(827734),
    s = n(397927),
    l = n(763754),
    a = n(888675),
    c = n(985018),
    o = n(442268);
function u(e) {
    let { message: t, compact: n, usernameHook: u } = e,
        d = (0, l.Ay)(t),
        _ = u(d),
        E = c.intl.format(c.t["Rv+TSM"], { username: d.nick, usernameHook: _, topic: t.content });
    return (0, i.jsx)(a.A, {
        className: o.d,
        iconNode: (0, i.jsx)(s.qux, { size: "md", color: r.A.unsafe_rawColors.GREEN_360.css }),
        iconContainerClassName: o.z,
        timestamp: t.timestamp,
        compact: n,
        children: E,
    });
}
