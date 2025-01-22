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
    let { message: t, usernameHook: o, compact: s } = e,
        c = (0, r.ZP)(t),
        u = o(c);
    return (0, i.jsx)(l.Z, {
        icon: n(819373),
        timestamp: t.timestamp,
        compact: s,
        children: a.intl.format(a.t.OEdU6e, {
            username: c.nick,
            usernameHook: u
        })
    });
}
