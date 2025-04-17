n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(739566),
    a = n(834129),
    l = n(388032);
function o(e) {
    let { message: t, channel: o, targetUser: s, actorUsernameHook: c, targetUsernameHook: u, compact: d } = e,
        p = (0, i.ZP)(t),
        m = (0, i.Sw)(s, o),
        f = c(p),
        h = u(null != m ? m : void 0),
        g = l.NW.format(l.t.tusv2t, {
            actorName: p.nick,
            actorHook: f,
            targetName: null == m ? void 0 : m.nick,
            targetHook: h
        });
    return (0, r.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: d,
        children: g
    });
}
