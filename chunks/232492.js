l.d(n, { A: () => d });
var t = l(17928),
    r = l(963027),
    i = l(262763),
    u = l(976860),
    s = l(734057),
    a = l(977997),
    o = l(499211),
    c = l(652215);
function d(e, n) {
    let l = (0, t.bG)([s.A], () => s.A.getChannel(n)),
        { needSubscriptionToAccess: d } = (0, o.A)(l?.id);
    if (null == l || d || l.isObfuscated()) return null;
    let m = l.isGuildVocal();
    return {
        navigateToChannel: function () {
            null != l &&
                (m
                    ? i.A.handleVoiceConnect({
                          channel: l,
                          connected: a.A.isInChannel(l.id),
                          needSubscriptionToAccess: !1,
                          routeDirectlyToChannel: !0,
                      })
                    : (0, u.pX)(c.BVt.CHANNEL(e, l.id)));
        },
        ariaLabel: (0, r.Ay)({ channel: l }),
    };
}
