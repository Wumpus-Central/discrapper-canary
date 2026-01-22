n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(402216),
    s = n(763754),
    o = n(888675),
    l = n(985018);
let c = 20;
function u(e) {
    var t;
    let { message: n, channel: u, playingActivity: d, onJoinStream: f, usernameHook: p, compact: _ } = e,
        h = (0, s.Ay)(n),
        m = null == (t = n.call) ? void 0 : t.duration,
        g = p(h),
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
        (0, r.jsx)(o.A, {
            iconNode:
                null != m
                    ? (0, r.jsx)(i.GT3, {
                          size: "custom",
                          color: "currentColor",
                          width: c,
                          height: c,
                      })
                    : (0, r.jsx)(a.Ay, { size: a.Ay.Sizes.SMALL }),
            timestamp: n.timestamp,
            compact: _,
            children: E,
        })
    );
}
