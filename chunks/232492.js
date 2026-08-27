n.d(t, { A: () => d });
var l = n(17928),
    r = n(963027),
    i = n(262763),
    o = n(976860),
    u = n(734057),
    s = n(977997),
    a = n(499211),
    c = n(652215);
function d(e, t) {
    let n = (0, l.bG)([u.A], () => u.A.getChannel(t)),
        { needSubscriptionToAccess: d } = (0, a.A)(n?.id);
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
                    : (0, o.pX)(c.BVt.CHANNEL(e, n.id)));
        },
        ariaLabel: (0, r.Ay)({ channel: n }),
    };
}
