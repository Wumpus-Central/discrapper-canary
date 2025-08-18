n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(739566),
    l = n(834129),
    o = n(388032);
function a(e) {
    let { message: t, channel: a, targetUser: s, actorUsernameHook: c, targetUsernameHook: u, compact: d } = e,
        p = (0, i.ZP)(t),
        m = (0, i.Sw)(s, a),
        f = c(p),
        g = u(null != m ? m : void 0),
        _ = o.intl.format(o.t.tusv2t, {
            actorName: p.nick,
            actorHook: f,
            targetName: null == m ? void 0 : m.nick,
            targetHook: g,
        });
    return (0, r.jsx)(l.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: d,
        children: _,
    });
}
