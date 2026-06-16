"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(963027),
    s = n(262763),
    a = n(976860),
    o = n(734057),
    l = n(977997),
    u = n(499211),
    c = n(652215);
function d(e, t) {
    let n = (0, i.bG)([o.A], () => o.A.getChannel(t)),
        { needSubscriptionToAccess: d } = (0, u.A)(n?.id);
    if (null == n || d || n.isObfuscated()) return null;
    let _ = n.isGuildVocal();
    return {
        navigateToChannel: () => {
            _
                ? s.A.handleVoiceConnect({
                      channel: n,
                      connected: l.A.isInChannel(n.id),
                      needSubscriptionToAccess: !1,
                      routeDirectlyToChannel: !0,
                  })
                : (0, a.pX)(c.BVt.CHANNEL(e, n.id));
        },
        ariaLabel: (0, r.Ay)({ channel: n }),
    };
}
