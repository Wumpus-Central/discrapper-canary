"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(963027),
    a = n(262763),
    s = n(976860),
    o = n(734057),
    l = n(977997),
    u = n(721592),
    c = n(652215);
function d(e, t) {
    let n = (0, r.bG)([o.A], () => o.A.getChannel(t)),
        { needSubscriptionToAccess: d } = (0, u.A)(n?.id);
    if (null == n || d) return null;
    let _ = n.isGuildVocal();
    return {
        navigateToChannel: () => {
            _
                ? a.A.handleVoiceConnect({
                      channel: n,
                      connected: l.A.isInChannel(n.id),
                      needSubscriptionToAccess: !1,
                      routeDirectlyToChannel: !0,
                  })
                : (0, s.pX)(c.BVt.CHANNEL(e, n.id));
        },
        ariaLabel: (0, i.Ay)({ channel: n }),
    };
}
