t.d(a, { A: () => h });
var l = t(17928),
    n = t(963027),
    r = t(262763),
    i = t(976860),
    s = t(734057),
    u = t(977997),
    o = t(499211),
    c = t(652215);
function h(e, a) {
    let t = (0, l.bG)([s.A], () => s.A.getChannel(a)),
        { needSubscriptionToAccess: h } = (0, o.A)(t?.id);
    if (null == t || h || t.isObfuscated()) return null;
    let d = t.isGuildVocal();
    return {
        navigateToChannel: function () {
            null != t &&
                (d
                    ? r.A.handleVoiceConnect({
                          channel: t,
                          connected: u.A.isInChannel(t.id),
                          needSubscriptionToAccess: !1,
                          routeDirectlyToChannel: !0,
                      })
                    : (0, i.pX)(c.BVt.CHANNEL(e, t.id)));
        },
        ariaLabel: (0, n.Ay)({ channel: t }),
    };
}
