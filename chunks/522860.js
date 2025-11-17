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
    let { message: n, channel: u, playingActivity: d, onJoinStream: f, usernameHook: _, compact: p } = e,
        h = (0, o.ZP)(n),
        m = null == (t = n.call) ? void 0 : t.duration,
        g = _(h),
        E = l.intl.format(l.t.FKXvaI, {
            username: h.nick,
            activityName: null != d ? d.name : "unknown",
            onJoinStream: f,
            usernameHook: g,
        });
    return (
        null != m &&
            (E = l.intl.format(l.t.NEFxtd, {
                username: h.nick,
                duration: m.humanize(),
                channelName: u.name,
                usernameHook: g,
            })),
        (0, r.jsx)(s.Z, {
            iconNode:
                null != m
                    ? (0, r.jsx)(i.g5r, {
                          size: "custom",
                          color: "currentColor",
                          width: c,
                          height: c,
                      })
                    : (0, r.jsx)(a.ZP, { size: a.ZP.Sizes.SMALL }),
            timestamp: n.timestamp,
            compact: p,
            children: E,
        })
    );
}
