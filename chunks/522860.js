n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(194082),
    l = n(739566),
    o = n(834129),
    s = n(388032);
function c(e) {
    var t;
    let { message: n, channel: c, playingActivity: u, onJoinStream: d, usernameHook: p, compact: m } = e,
        f = (0, l.ZP)(n),
        h = null == (t = n.call) ? void 0 : t.duration,
        g = p(f),
        _ = s.NW.format(s.t.FKXvaG, {
            username: f.nick,
            activityName: null != u ? u.name : 'unknown',
            onJoinStream: d,
            usernameHook: g
        });
    return (
        null != h &&
            (_ = s.NW.format(s.t.NEFxtb, {
                username: f.nick,
                duration: h.humanize(),
                channelName: c.name,
                usernameHook: g
            })),
        (0, r.jsx)(o.Z, {
            iconNode:
                null != h
                    ? (0, r.jsx)(i.g5r, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 20,
                          height: 20
                      })
                    : (0, r.jsx)(a.ZP, { size: a.ZP.Sizes.SMALL }),
            timestamp: n.timestamp,
            compact: m,
            children: _
        })
    );
}
