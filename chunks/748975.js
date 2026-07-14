"use strict";
n.d(t, { A: () => I });
var i = n(367513),
    r = n(587895),
    a = n(568598),
    s = n(313961),
    l = n(709055),
    o = n(976860),
    d = n(795816),
    c = n(933958),
    u = n(851907),
    _ = n(969151),
    E = n(108959),
    A = n(5867),
    h = n(652215);
function I(e, t) {
    let n = c.Ay.getSelfEmbeddedActivityForLocation(t);
    if (null == n) return;
    let I = r.A.getApplication(n.applicationId),
        f = (0, _.H)(n.location),
        p = (0, u.Ay)({ application: I, channelId: f });
    null != p
        ? (0, l.A)(p)
        : null != f &&
          ((0, o.pX)(h.BVt.CHANNEL(e, f)),
          (0, E.A)(f)
              ? (i.A.selectParticipant(
                    f,
                    (0, a.Qt)({ applicationId: n.applicationId, instanceId: n?.compositeInstanceId }),
                ),
                s.A.getLayout(f) !== h.DUB.FULL_SCREEN && i.A.updateLayout(f, h.DUB.NO_CHAT))
              : (0, d.gk)(A.Gd.PANEL));
}
