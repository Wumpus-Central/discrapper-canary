n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(739566),
    l = n(834129),
    a = n(388032),
    o = n(408106);
function s(e) {
    let { message: t, usernameHook: s, compact: c, isForumPost: d } = e,
        u = (0, r.ZP)(t),
        m = s(u);
    return (0, i.jsx)(l.Z, {
        compact: c,
        className: o.channelNameChange,
        icon: n(819373),
        timestamp: t.timestamp,
        children: a.intl.format(d ? a.t.SOQ4hI : a.t.oItgEx, {
            username: u.nick,
            usernameHook: m,
            channelName: t.content
        })
    });
}
