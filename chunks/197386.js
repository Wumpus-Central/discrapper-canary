n.d(t, { Z: () => m });
var r = n(475179),
    i = n(812206),
    a = n(413523),
    o = n(776862),
    s = n(703656),
    l = n(566620),
    c = n(317381),
    u = n(531826),
    d = n(16609),
    f = n(917107),
    p = n(918559),
    _ = n(981631);
function m(e, t) {
    let n = c.ZP.getSelfEmbeddedActivityForLocation(t);
    if (null == n) return;
    let m = i.Z.getApplication(n.applicationId),
        h = (0, d.p)(n.location),
        g = (0, u.ZP)({
            application: m,
            channelId: h,
        });
    if (null != g) return void (0, o.Z)(g);
    null != h &&
        ((0, s.uL)(_.Z5c.CHANNEL(e, h)),
        (0, f.Z)(h)
            ? (r.Z.selectParticipant(
                  h,
                  (0, a.gN)({
                      applicationId: n.applicationId,
                      instanceId: null == n ? void 0 : n.compositeInstanceId,
                  }),
              ),
              r.Z.updateLayout(h, _.AEg.NO_CHAT))
            : (0, l.tg)(p.Ez.PANEL));
}
