"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(959988),
    l = n(47167),
    s = n(402216),
    a = n(763754),
    o = n(888675),
    c = n(985018);
function u(e) {
    let { message: t, channel: n, playingActivity: u, onJoinStream: d, usernameHook: _, compact: E } = e,
        A = (0, a.Ay)(t),
        m = (0, l.Ay)(n),
        I = t.call?.duration,
        T = _(A),
        N = c.intl.format(c.t.FKXvaI, {
            username: A.nick,
            activityName: null != u ? u.name : "unknown",
            onJoinStream: d,
            usernameHook: T,
        });
    return (
        null != I &&
            (N = c.intl.format(c.t.NEFxtd, {
                username: A.nick,
                duration: I.humanize(),
                channelName: m ?? "",
                usernameHook: T,
            })),
        (0, i.jsx)(o.A, {
            iconNode:
                null != I
                    ? (0, i.jsx)(r.G, { size: "custom", color: "currentColor", width: 20, height: 20 })
                    : (0, i.jsx)(s.Ay, { size: s.Ay.Sizes.SMALL }),
            timestamp: t.timestamp,
            compact: E,
            children: N,
        })
    );
}
