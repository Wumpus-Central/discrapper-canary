n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(194082),
    o = n(739566),
    s = n(834129),
    l = n(388032);
let c = 20;
function u(e) {
    var t;
    let { message: n, channel: u, playingActivity: d, onJoinStream: f, usernameHook: p, compact: _ } = e,
        m = (0, o.ZP)(n),
        h = null == (t = n.call) ? void 0 : t.duration,
        g = p(m),
        E = l.intl.format(l.t.FKXvaI, {
            username: m.nick,
            activityName: null != d ? d.name : "unknown",
            onJoinStream: f,
            usernameHook: g,
        });
    return (
        null != h &&
            (E = l.intl.format(l.t.NEFxtd, {
                username: m.nick,
                duration: h.humanize(),
                channelName: u.name,
                usernameHook: g,
            })),
        (0, r.jsx)(s.Z, {
            iconNode:
                null != h
                    ? (0, r.jsx)(i.g5r, {
                          size: "custom",
                          color: "currentColor",
                          width: c,
                          height: c,
                      })
                    : (0, r.jsx)(a.ZP, { size: a.ZP.Sizes.SMALL }),
            timestamp: n.timestamp,
            compact: _,
            children: E,
        })
    );
}
