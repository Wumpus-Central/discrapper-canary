n.d(t, { A: () => E });
var l = n(512750),
    u = n(17928),
    r = n(554146),
    i = n(645619),
    o = n(545445),
    s = n(939981),
    _ = n(645704),
    A = n(375708);
function E(e, t) {
    let n = (0, u.bG)([i.A], () => i.A.getStateForGuild(e)),
        E = n?.allPowerups[l.zY],
        a = E?.storeRemovalDate;
    return (0, o.p)(e, t) && null != a && E?.title != null && E?.cost != null
        ? {
              dismissibleContent: r.M.FILE_UPLOAD_POWERUP_ROLLBACK_NOTIFICATION,
              title: A.intl.formatToPlainString(_.default["6e2ry1"], { dateString: (0, s.A)(a) }),
              description: A.intl.formatToPlainString(_.default.jd8fki, {
                  startDate: (0, s.A)(a),
                  endDate: (0, s.A)(a),
                  perkName: E?.title,
                  boostCount: E?.cost,
              }),
          }
        : null;
}
