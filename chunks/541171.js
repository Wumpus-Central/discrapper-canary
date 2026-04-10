"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(47167),
    l = n(402216),
    a = n(763754),
    c = n(888675),
    o = n(985018);
function u(e) {
    let { message: t, channel: n, playingActivity: u, onJoinStream: d, usernameHook: _, compact: E } = e,
        A = (0, a.Ay)(t),
        m = (0, s.Ay)(n),
        I = t.call?.duration,
        T = _(A),
        g = o.intl.format(o.t.FKXvaI, {
            username: A.nick,
            activityName: null != u ? u.name : "unknown",
            onJoinStream: d,
            usernameHook: T,
        });
    return (
        null != I &&
            (g = o.intl.format(o.t.NEFxtd, {
                username: A.nick,
                duration: I.humanize(),
                channelName: m ?? "",
                usernameHook: T,
            })),
        (0, i.jsx)(c.A, {
            iconNode:
                null != I
                    ? (0, i.jsx)(r.GT3, { size: "custom", color: "currentColor", width: 20, height: 20 })
                    : (0, i.jsx)(l.Ay, { size: l.Ay.Sizes.SMALL }),
            timestamp: t.timestamp,
            compact: E,
            children: g,
        })
    );
}
