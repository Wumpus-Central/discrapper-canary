n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(739566),
    a = n(834129),
    r = n(388032);
function s(e) {
    let { message: t, channel: s, targetUser: o, actorUsernameHook: c, targetUsernameHook: d, compact: u } = e,
        m = (0, l.ZP)(t),
        h = (0, l.Sw)(o, s),
        _ = c(m),
        p = d(null != h ? h : void 0),
        g = r.intl.format(r.t.tusv2t, {
            actorName: m.nick,
            actorHook: _,
            targetName: null == h ? void 0 : h.nick,
            targetHook: p
        });
    return (0, i.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: u,
        children: g
    });
}
