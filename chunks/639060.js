l.d(t, { A: () => E });
var n = l(512750),
    u = l(17928),
    r = l(554146),
    i = l(645619),
    o = l(939981),
    s = l(456124),
    A = l(356863),
    _ = l(660183);
function E(e, t) {
    let l = (0, u.bG)([i.A], () => i.A.getStateForGuild(e)),
        E = l?.allPowerups[n.d0];
    return (0, s.E)(e, t)
        ? (function (e) {
              let t = e?.storeRemovalDate;
              if (null == e || null == t) return null;
              let l = (0, o.A)(t);
              return {
                  dismissibleContent: r.M.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION,
                  title: _.intl.formatToPlainString(A.default["6e2ry1"], { dateString: l }),
                  description: _.intl.formatToPlainString(A.default.jd8fki, {
                      startDate: l,
                      endDate: l,
                      perkName: e.title,
                      boostCount: e.cost,
                  }),
              };
          })(E)
        : null;
}
