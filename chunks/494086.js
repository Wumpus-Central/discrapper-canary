"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var r = n(763754),
    s = n(888675),
    l = n(985018);
function a(e) {
    let { message: t, otherUsername: a, usernameHook: c, otherUsernameHook: o, compact: u } = e,
        { nick: d } = (0, r.Ay)(t),
        _ = c(),
        E = o(),
        A = l.intl.format(l.t.MMN2Jq, { username: d, usernameHook: _, otherUsername: a, otherUsernameHook: E });
    return (0, i.jsx)(s.A, { icon: n(617184), timestamp: t.timestamp, compact: u, children: A });
}
