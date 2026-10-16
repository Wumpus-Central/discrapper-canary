n.d(t, { A: () => h });
var i = n(587895),
    r = n(568598),
    a = n(709055),
    s = n(976860),
    l = n(795816),
    o = n(933958),
    d = n(851907),
    c = n(969151),
    u = n(277344),
    _ = n(108959),
    E = n(5867),
    A = n(652215);
function h(e, t) {
    let n = o.Ay.getSelfEmbeddedActivityForLocation(t);
    if (null == n) return;
    let h = i.A.getApplication(n.applicationId),
        f = (0, c.H)(n.location),
        I = (0, d.Ay)({ application: h, channelId: f });
    null != I
        ? (0, a.A)(I)
        : null != f &&
          ((0, s.pX)(A.BVt.CHANNEL(e, f)),
          (0, _.A)(f)
              ? (0, u.A)(f, (0, r.Qt)({ applicationId: n.applicationId, instanceId: n?.compositeInstanceId }))
              : (0, l.gk)(E.Gd.PANEL));
}
