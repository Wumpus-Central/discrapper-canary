n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(194082),
    r = n(739566),
    s = n(834129),
    o = n(388032);
function c(e) {
    var t;
    let { message: n, channel: c, playingActivity: d, onJoinStream: u, usernameHook: m, compact: h } = e,
        _ = (0, r.ZP)(n),
        p = null === (t = n.call) || void 0 === t ? void 0 : t.duration,
        g = m(_),
        f = o.intl.format(o.t.FKXvaG, {
            username: _.nick,
            activityName: null != d ? d.name : 'unknown',
            onJoinStream: u,
            usernameHook: g
        });
    return (
        null != p &&
            (f = o.intl.format(o.t.NEFxtb, {
                username: _.nick,
                duration: p.humanize(),
                channelName: c.name,
                usernameHook: g
            })),
        (0, i.jsx)(s.Z, {
            iconNode:
                null != p
                    ? (0, i.jsx)(l.g5r, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 20,
                          height: 20
                      })
                    : (0, i.jsx)(a.ZP, { size: a.ZP.Sizes.SMALL }),
            timestamp: n.timestamp,
            compact: h,
            children: f
        })
    );
}
