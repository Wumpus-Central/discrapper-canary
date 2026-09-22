r.d(n, { A: () => d });
var t = r(17928),
    l = r(963027),
    i = r(262763),
    s = r(976860),
    o = r(734057),
    a = r(977997),
    c = r(499211),
    u = r(652215);
function d(e, n) {
    let r = (0, t.bG)([o.A], () => o.A.getChannel(n)),
        { needSubscriptionToAccess: d } = (0, c.A)(r?.id);
    if (null == r || d || r.isObfuscated()) return null;
    let h = r.isGuildVocal();
    return {
        navigateToChannel: function () {
            null != r &&
                (h
                    ? i.A.handleVoiceConnect({
                          channel: r,
                          connected: a.A.isInChannel(r.id),
                          needSubscriptionToAccess: !1,
                          routeDirectlyToChannel: !0,
                      })
                    : (0, s.pX)(u.BVt.CHANNEL(e, r.id)));
        },
        ariaLabel: (0, l.Ay)({ channel: r }),
    };
}
