n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(739566),
    a = n(834129),
    r = n(388032);
function s(e) {
    let { message: t, channel: s, targetUser: o, actorUsernameHook: c, targetUsernameHook: d, compact: u } = e,
        m = (0, l.ZP)(t),
        _ = (0, l.Sw)(o, s),
        h = c(m),
        p = d(null != _ ? _ : void 0),
        g = r.intl.format(r.t['32QI5+'], {
            actorName: m.nick,
            actorHook: h,
            targetName: null == _ ? void 0 : _.nick,
            targetHook: p
        });
    return (0, i.jsx)(a.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: u,
        children: g
    });
}
