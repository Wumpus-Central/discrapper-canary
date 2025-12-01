n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(739566),
    a = n(834129),
    o = n(388032);
function s(e) {
    let { message: t, channel: s, targetUser: l, actorUsernameHook: c, targetUsernameHook: u, compact: d } = e,
        f = (0, i.ZP)(t),
        p = (0, i.Sw)(l, s),
        _ = c(f),
        m = u(null != p ? p : void 0),
        h = o.intl.format(o.t.tusv2h, {
            actorName: f.nick,
            actorHook: _,
            targetName: null == p ? void 0 : p.nick,
            targetHook: m,
        });
    return (0, r.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: d,
        children: h,
    });
}
