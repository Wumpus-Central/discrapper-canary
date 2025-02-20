n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(739566),
    a = n(834129),
    o = n(388032),
    l = n(896438);
function s(e) {
    let { message: t, usernameHook: s, compact: c, isForumPost: d } = e,
        u = (0, i.ZP)(t),
        p = s(u);
    return (0, r.jsx)(a.Z, {
        compact: c,
        className: l.channelNameChange,
        icon: n(819373),
        timestamp: t.timestamp,
        children: o.NW.format(d ? o.t.SOQ4hI : o.t.oItgEx, {
            username: u.nick,
            usernameHook: p,
            channelName: t.content
        })
    });
}
