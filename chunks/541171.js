n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(402216),
    r = n(763754),
    s = n(888675),
    o = n(985018);
function d(e) {
    let { message: t, channel: n, playingActivity: d, onJoinStream: c, usernameHook: u, compact: m } = e,
        _ = (0, r.Ay)(t),
        h = t.call?.duration,
        p = u(_),
        g = o.intl.format(o.t.FKXvaI, {
            username: _.nick,
            activityName: null != d ? d.name : "unknown",
            onJoinStream: c,
            usernameHook: p,
        });
    return (
        null != h &&
            (g = o.intl.format(o.t.NEFxtd, {
                username: _.nick,
                duration: h.humanize(),
                channelName: n.name,
                usernameHook: p,
            })),
        (0, i.jsx)(s.A, {
            iconNode:
                null != h
                    ? (0, i.jsx)(l.GT3, { size: "custom", color: "currentColor", width: 20, height: 20 })
                    : (0, i.jsx)(a.Ay, { size: a.Ay.Sizes.SMALL }),
            timestamp: t.timestamp,
            compact: m,
            children: g,
        })
    );
}
