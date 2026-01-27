n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(402216),
    a = n(763754),
    s = n(888675),
    o = n(985018);

function c(e) {
    var t;
    let { message: n, channel: c, playingActivity: u, onJoinStream: d, usernameHook: p, compact: m } = e,
        f = (0, a.Ay)(n),
        g = null == (t = n.call) ? void 0 : t.duration,
        h = p(f),
        _ = o.intl.format(o.t.FKXvaI, {
            username: f.nick,
            activityName: null != u ? u.name : "unknown",
            onJoinStream: d,
            usernameHook: h,
        });
    return (
        null != g &&
            (_ = o.intl.format(o.t.NEFxtd, {
                username: f.nick,
                duration: g.humanize(),
                channelName: c.name,
                usernameHook: h,
            })),
        (0, r.jsx)(s.A, {
            iconNode:
                null != g
                    ? (0, r.jsx)(i.GT3, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                      })
                    : (0, r.jsx)(l.Ay, {
                          size: l.Ay.Sizes.SMALL,
                      }),
            timestamp: n.timestamp,
            compact: m,
            children: _,
        })
    );
}
