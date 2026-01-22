n.d(t, { A: () => h });
var r = n(367513),
    i = n(587895),
    a = n(568598),
    s = n(709055),
    o = n(976860),
    l = n(795816),
    c = n(933958),
    u = n(851907),
    d = n(969151),
    f = n(108959),
    p = n(5867),
    _ = n(652215);
function h(e, t) {
    let n = c.Ay.getSelfEmbeddedActivityForLocation(t);
    if (null == n) return;
    let h = i.A.getApplication(n.applicationId),
        m = (0, d.H)(n.location),
        g = (0, u.Ay)({
            application: h,
            channelId: m,
        });
    null != g
        ? (0, s.A)(g)
        : null != m &&
          ((0, o.pX)(_.BVt.CHANNEL(e, m)),
          (0, f.A)(m)
              ? (r.A.selectParticipant(
                    m,
                    (0, a.Qt)({
                        applicationId: n.applicationId,
                        instanceId: null == n ? void 0 : n.compositeInstanceId,
                    }),
                ),
                r.A.updateLayout(m, _.DUB.NO_CHAT))
              : (0, l.gk)(p.Gd.PANEL));
}
