t.d(n, { A: () => d });
var r = t(17928),
    l = t(963027),
    i = t(262763),
    s = t(976860),
    o = t(734057),
    a = t(977997),
    u = t(499211),
    c = t(652215);
function d(e, n) {
    let t = (0, r.bG)([o.A], () => o.A.getChannel(n)),
        { needSubscriptionToAccess: d } = (0, u.A)(t?.id);
    if (null == t || d || t.isObfuscated()) return null;
    let h = t.isGuildVocal();
    return {
        navigateToChannel: function () {
            null != t &&
                (h
                    ? i.A.handleVoiceConnect({
                          channel: t,
                          connected: a.A.isInChannel(t.id),
                          needSubscriptionToAccess: !1,
                          routeDirectlyToChannel: !0,
                      })
                    : (0, s.pX)(c.BVt.CHANNEL(e, t.id)));
        },
        ariaLabel: (0, l.Ay)({ channel: t }),
    };
}
