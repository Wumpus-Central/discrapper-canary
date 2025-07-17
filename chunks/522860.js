n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(194082),
    a = n(739566),
    o = n(834129),
    s = n(388032);
function c(e) {
    var t;
    let { message: n, channel: c, playingActivity: u, onJoinStream: d, usernameHook: p, compact: m } = e,
        f = (0, a.ZP)(n),
        g = null == (t = n.call) ? void 0 : t.duration,
        h = p(f),
        _ = s.intl.format(s.t.FKXvaG, {
            username: f.nick,
            activityName: null != u ? u.name : 'unknown',
            onJoinStream: d,
            usernameHook: h
        });
    return (
        null != g &&
            (_ = s.intl.format(s.t.NEFxtb, {
                username: f.nick,
                duration: g.humanize(),
                channelName: c.name,
                usernameHook: h
            })),
        (0, r.jsx)(o.Z, {
            iconNode:
                null != g
                    ? (0, r.jsx)(i.g5r, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 20,
                          height: 20
                      })
                    : (0, r.jsx)(l.ZP, { size: l.ZP.Sizes.SMALL }),
            timestamp: n.timestamp,
            compact: m,
            children: _
        })
    );
}
