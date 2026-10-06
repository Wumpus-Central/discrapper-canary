l.d(n, { A: () => d });
var t = l(17928),
    r = l(963027),
    i = l(262763),
    a = l(976860),
    s = l(734057),
    u = l(977997),
    c = l(499211),
    o = l(652215);
function d(e, n) {
    let l = (0, t.bG)([s.A], () => s.A.getChannel(n)),
        { needSubscriptionToAccess: d } = (0, c.A)(l?.id);
    if (null == l || d || l.isObfuscated()) return null;
    let m = l.isGuildVocal();
    return {
        navigateToChannel: function () {
            null != l &&
                (m
                    ? i.A.handleVoiceConnect({
                          channel: l,
                          connected: u.A.isInChannel(l.id),
                          needSubscriptionToAccess: !1,
                          routeDirectlyToChannel: !0,
                      })
                    : (0, a.pX)(o.BVt.CHANNEL(e, l.id)));
        },
        ariaLabel: (0, r.Ay)({ channel: l }),
    };
}
