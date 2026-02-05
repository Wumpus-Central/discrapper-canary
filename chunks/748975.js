"use strict";
n.d(t, { A: () => h });
var r = n(367513),
    i = n(587895),
    a = n(568598),
    s = n(709055),
    o = n(976860),
    l = n(795816),
    u = n(933958),
    c = n(851907),
    d = n(969151),
    _ = n(108959),
    f = n(5867),
    p = n(652215);
function h(e, t) {
    let n = u.Ay.getSelfEmbeddedActivityForLocation(t);
    if (null == n) return;
    let h = i.A.getApplication(n.applicationId),
        m = (0, d.H)(n.location),
        g = (0, c.Ay)({ application: h, channelId: m });
    null != g
        ? (0, s.A)(g)
        : null != m &&
          ((0, o.pX)(p.BVt.CHANNEL(e, m)),
          (0, _.A)(m)
              ? (r.A.selectParticipant(
                    m,
                    (0, a.Qt)({ applicationId: n.applicationId, instanceId: n?.compositeInstanceId }),
                ),
                r.A.updateLayout(m, p.DUB.NO_CHAT))
              : (0, l.gk)(f.Gd.PANEL));
}
