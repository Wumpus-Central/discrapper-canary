n.d(t, { A: () => d });
var l = n(17928),
    o = n(963027),
    i = n(262763),
    r = n(976860),
    a = n(734057),
    s = n(977997),
    u = n(499211),
    c = n(652215);
function d(e, t) {
    let n = (0, l.bG)([a.A], () => a.A.getChannel(t)),
        { needSubscriptionToAccess: d } = (0, u.A)(n?.id);
    if (null == n || d || n.isObfuscated()) return null;
    let C = n.isGuildVocal();
    return {
        navigateToChannel: function () {
            null != n &&
                (C
                    ? i.A.handleVoiceConnect({
                          channel: n,
                          connected: s.A.isInChannel(n.id),
                          needSubscriptionToAccess: !1,
                          routeDirectlyToChannel: !0,
                      })
                    : (0, r.pX)(c.BVt.CHANNEL(e, n.id)));
        },
        ariaLabel: (0, o.Ay)({ channel: n }),
    };
}
