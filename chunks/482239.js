n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(739566),
    l = n(834129),
    a = n(388032);
function o(e) {
    let { message: t, channel: o, targetUser: s, actorUsernameHook: c, targetUsernameHook: d, compact: u } = e,
        m = (0, r.ZP)(t),
        h = (0, r.Sw)(s, o),
        f = c(m),
        p = d(null != h ? h : void 0),
        _ = a.intl.format(a.t['32QI5+'], {
            actorName: m.nick,
            actorHook: f,
            targetName: null == h ? void 0 : h.nick,
            targetHook: p
        });
    return (0, i.jsx)(l.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: u,
        children: _
    });
}
