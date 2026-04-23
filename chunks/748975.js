"use strict";
n.d(t, { A: () => h });
var r = n(367513),
    i = n(587895),
    s = n(568598),
    a = n(709055),
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
        E = (0, d.H)(n.location),
        m = (0, c.Ay)({ application: h, channelId: E });
    null != m
        ? (0, a.A)(m)
        : null != E &&
          ((0, o.pX)(p.BVt.CHANNEL(e, E)),
          (0, _.A)(E)
              ? (r.A.selectParticipant(
                    E,
                    (0, s.Qt)({ applicationId: n.applicationId, instanceId: n?.compositeInstanceId }),
                ),
                r.A.updateLayout(E, p.DUB.NO_CHAT))
              : (0, l.gk)(f.Gd.PANEL));
}
