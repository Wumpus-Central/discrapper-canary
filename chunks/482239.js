n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(739566),
    a = n(834129),
    o = n(388032);
function s(e) {
    let { message: t, channel: s, targetUser: l, actorUsernameHook: c, targetUsernameHook: u, compact: d } = e,
        f = (0, i.ZP)(t),
        _ = (0, i.Sw)(l, s),
        p = c(f),
        h = u(null != _ ? _ : void 0),
        m = o.intl.format(o.t["32QI5/"], {
            actorName: f.nick,
            actorHook: p,
            targetName: null == _ ? void 0 : _.nick,
            targetHook: h,
        });
    return (0, r.jsx)(a.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: d,
        children: m,
    });
}
