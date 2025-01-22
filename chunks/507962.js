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
    let t,
        { message: o, usernameHook: s, otherUser: c, otherUsernameHook: u, compact: d, channel: m } = e,
        h = (0, r.ZP)(o),
        f = h.nick,
        p = s(h),
        _ = (0, r.Sw)(c, m);
    if (null != _ && null != u) {
        let e = u(_);
        t = a.intl.format(a.t.L2FyVl, {
            username: f,
            usernameHook: p,
            otherUsername: _.nick,
            otherUsernameHook: e
        });
    } else
        t = a.intl.format(a.t['5v2xa2'], {
            username: f,
            usernameHook: p
        });
    return (0, i.jsx)(l.Z, {
        icon: n(474019),
        timestamp: o.timestamp,
        compact: d,
        children: t
    });
}
