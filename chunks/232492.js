t.d(n, { A: () => d });
var l = t(17928),
    r = t(963027),
    i = t(262763),
    a = t(976860),
    s = t(734057),
    u = t(977997),
    c = t(499211),
    o = t(652215);
function d(e, n) {
    let t = (0, l.bG)([s.A], () => s.A.getChannel(n)),
        { needSubscriptionToAccess: d } = (0, c.A)(t?.id);
    if (null == t || d || t.isObfuscated()) return null;
    let m = t.isGuildVocal();
    return {
        navigateToChannel: function () {
            null != t &&
                (m
                    ? i.A.handleVoiceConnect({
                          channel: t,
                          connected: u.A.isInChannel(t.id),
                          needSubscriptionToAccess: !1,
                          routeDirectlyToChannel: !0,
                      })
                    : (0, a.pX)(o.BVt.CHANNEL(e, t.id)));
        },
        ariaLabel: (0, r.Ay)({ channel: t }),
    };
}
