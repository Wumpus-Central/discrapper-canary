n.d(t, { A: () => I });
var i = n(367513),
    r = n(587895),
    a = n(568598),
    l = n(709055),
    s = n(976860),
    E = n(795816),
    _ = n(933958),
    o = n(851907),
    u = n(969151),
    A = n(108959),
    d = n(5867),
    c = n(652215);
function I(e, t) {
    let n = _.Ay.getSelfEmbeddedActivityForLocation(t);
    if (null == n) return;
    let I = r.A.getApplication(n.applicationId),
        T = (0, u.H)(n.location),
        N = (0, o.Ay)({ application: I, channelId: T });
    null != N
        ? (0, l.A)(N)
        : null != T &&
          ((0, s.pX)(c.BVt.CHANNEL(e, T)),
          (0, A.A)(T)
              ? (i.A.selectParticipant(
                    T,
                    (0, a.Qt)({ applicationId: n.applicationId, instanceId: n?.compositeInstanceId }),
                ),
                i.A.updateLayout(T, c.DUB.NO_CHAT))
              : (0, E.gk)(d.Gd.PANEL));
}
