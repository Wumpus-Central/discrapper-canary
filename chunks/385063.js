n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(739566),
    a = n(834129),
    r = n(388032),
    s = n(408106);
function o(e) {
    let { message: t, usernameHook: o, compact: c, isForumPost: d } = e,
        u = (0, l.ZP)(t),
        m = o(u);
    return (0, i.jsx)(a.Z, {
        compact: c,
        className: s.channelNameChange,
        icon: n(819373),
        timestamp: t.timestamp,
        children: r.intl.format(d ? r.t.SOQ4hI : r.t.oItgEx, {
            username: u.nick,
            usernameHook: m,
            channelName: t.content
        })
    });
}
