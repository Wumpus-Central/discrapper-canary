n.d(t, { A: () => I });
var i = n(367513),
    r = n(587895),
    a = n(568598),
    l = n(709055),
    s = n(976860),
    o = n(795816),
    u = n(933958),
    _ = n(851907),
    E = n(969151),
    A = n(108959),
    c = n(5867),
    d = n(652215);
function I(e, t) {
    let n = u.Ay.getSelfEmbeddedActivityForLocation(t);
    if (null == n) return;
    let I = r.A.getApplication(n.applicationId),
        T = (0, E.H)(n.location),
        N = (0, _.Ay)({ application: I, channelId: T });
    null != N
        ? (0, l.A)(N)
        : null != T &&
          ((0, s.pX)(d.BVt.CHANNEL(e, T)),
          (0, A.A)(T)
              ? (i.A.selectParticipant(
                    T,
                    (0, a.Qt)({ applicationId: n.applicationId, instanceId: n?.compositeInstanceId }),
                ),
                i.A.updateLayout(T, d.DUB.NO_CHAT))
              : (0, o.gk)(c.Gd.PANEL));
}
