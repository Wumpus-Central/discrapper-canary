n.d(t, { A: () => d });
var l = n(17928),
    o = n(963027),
    r = n(262763),
    i = n(976860),
    a = n(734057),
    u = n(977997),
    s = n(499211),
    c = n(652215);
function d(e, t) {
    let n = (0, l.bG)([a.A], () => a.A.getChannel(t)),
        { needSubscriptionToAccess: d } = (0, s.A)(n?.id);
    if (null == n || d || n.isObfuscated()) return null;
    let C = n.isGuildVocal();
    return {
        navigateToChannel: function () {
            null != n &&
                (C
                    ? r.A.handleVoiceConnect({
                          channel: n,
                          connected: u.A.isInChannel(n.id),
                          needSubscriptionToAccess: !1,
                          routeDirectlyToChannel: !0,
                      })
                    : (0, i.pX)(c.BVt.CHANNEL(e, n.id)));
        },
        ariaLabel: (0, o.Ay)({ channel: n }),
    };
}
