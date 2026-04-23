"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var r = n(763754),
    l = n(888675),
    s = n(985018);
function a(e) {
    let t,
        { message: a, usernameHook: o, otherUser: c, otherUsernameHook: u, compact: d, channel: _ } = e,
        E = (0, r.Ay)(a),
        A = E.nick,
        m = o(E),
        I = (0, r.d8)(c, _);
    if (null != I && null != u) {
        let e = u(I);
        t = s.intl.format(s.t.L2FyVq, { username: A, usernameHook: m, otherUsername: I.nick, otherUsernameHook: e });
    } else t = s.intl.format(s.t["5v2xa8"], { username: A, usernameHook: m });
    return (0, i.jsx)(l.A, { icon: n(884797), timestamp: a.timestamp, compact: d, children: t });
}
