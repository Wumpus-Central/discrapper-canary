n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var l = n(763754),
    a = n(888675),
    r = n(985018);
function s(e) {
    let { message: t, channel: s, targetUser: o, actorUsernameHook: d, targetUsernameHook: c, compact: u } = e,
        m = (0, l.Ay)(t),
        _ = (0, l.d8)(o, s),
        h = d(m),
        p = c(_ ?? void 0),
        g = r.intl.format(r.t["32QI5/"], { actorName: m.nick, actorHook: h, targetName: _?.nick, targetHook: p });
    return (0, i.jsx)(a.A, { icon: n(884797), timestamp: t.timestamp, compact: u, children: g });
}
