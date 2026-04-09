n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(47167),
    r = n(402216),
    s = n(763754),
    o = n(888675),
    c = n(985018);
function d(e) {
    let { message: t, channel: n, playingActivity: d, onJoinStream: u, usernameHook: _, compact: A } = e,
        m = (0, s.Ay)(t),
        E = (0, a.Ay)(n),
        T = t.call?.duration,
        I = _(m),
        N = c.intl.format(c.t.FKXvaI, {
            username: m.nick,
            activityName: null != d ? d.name : "unknown",
            onJoinStream: u,
            usernameHook: I,
        });
    return (
        null != T &&
            (N = c.intl.format(c.t.NEFxtd, {
                username: m.nick,
                duration: T.humanize(),
                channelName: E ?? "",
                usernameHook: I,
            })),
        (0, i.jsx)(o.A, {
            iconNode:
                null != T
                    ? (0, i.jsx)(l.GT3, { size: "custom", color: "currentColor", width: 20, height: 20 })
                    : (0, i.jsx)(r.Ay, { size: r.Ay.Sizes.SMALL }),
            timestamp: t.timestamp,
            compact: A,
            children: N,
        })
    );
}
