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
    let { message: t, otherUsername: o, usernameHook: s, otherUsernameHook: c, compact: u } = e,
        { nick: d } = (0, r.ZP)(t),
        m = s(),
        h = c(),
        f = a.intl.format(a.t.MMN2Ji, {
            username: d,
            usernameHook: m,
            otherUsername: o,
            otherUsernameHook: h
        });
    return (0, i.jsx)(l.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: u,
        children: f
    });
}
