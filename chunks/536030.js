"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var r = n(763754),
    s = n(888675),
    l = n(985018);
function a(e) {
    let { message: t, channel: a, targetUser: c, actorUsernameHook: o, targetUsernameHook: u, compact: d } = e,
        _ = (0, r.Ay)(t),
        E = (0, r.d8)(c, a),
        A = o(_),
        m = u(E ?? void 0),
        I = l.intl.format(l.t["32QI5/"], { actorName: _.nick, actorHook: A, targetName: E?.nick, targetHook: m });
    return (0, i.jsx)(s.A, { icon: n(884797), timestamp: t.timestamp, compact: d, children: I });
}
