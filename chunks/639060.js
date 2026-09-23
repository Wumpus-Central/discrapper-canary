n.d(t, { A: () => _ });
var u = n(512750),
    l = n(17928),
    r = n(554146),
    i = n(645619),
    o = n(939981),
    s = n(456124),
    A = n(356863),
    E = n(375708);
function _(e, t) {
    let n = (0, l.bG)([i.A], () => i.A.getStateForGuild(e)),
        _ = n?.allPowerups[u.d0];
    return (0, s.E)(e, t)
        ? (function (e) {
              let t = e?.storeRemovalDate;
              if (null == e || null == t) return null;
              let n = (0, o.A)(t);
              return {
                  dismissibleContent: r.M.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION,
                  title: E.intl.formatToPlainString(A.default["6e2ry1"], { dateString: n }),
                  description: E.intl.formatToPlainString(A.default.jd8fki, {
                      startDate: n,
                      endDate: n,
                      perkName: e.title,
                      boostCount: e.cost,
                  }),
              };
          })(_)
        : null;
}
