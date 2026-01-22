n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(763754),
    a = n(888675),
    s = n(985018);

function o(e) {
    let { message: t, otherUsername: o, usernameHook: l, otherUsernameHook: c, compact: u } = e,
        { nick: d } = (0, i.Ay)(t),
        f = l(),
        p = c(),
        _ = s.intl.format(s.t.MMN2Jq, {
            username: d,
            usernameHook: f,
            otherUsername: o,
            otherUsernameHook: p,
        });
    return (0, r.jsx)(a.A, {
        icon: n(394803),
        timestamp: t.timestamp,
        compact: u,
        children: _,
    });
}
