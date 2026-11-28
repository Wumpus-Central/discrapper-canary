var l = n(512750),
    u = n(855986),
    r = n(554146),
    i = n(645619),
    o = n(939981),
    s = n(456124),
    A = n(912510),
    _ = n(792996);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = (0, u.bG)([i.A], () => i.A.getStateForGuild(e)),
                E = n?.allPowerups[l.d0];
            return (0, s.E)(e, t)
                ? (function (e) {
                      let t = e?.storeRemovalDate;
                      if (null == e || null == t) return null;
                      let n = (0, o.A)(t);
                      return {
                          dismissibleContent: r.M.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION,
                          title: _.intl.formatToPlainString(A.default["6e2ry1"], { dateString: n }),
                          description: _.intl.formatToPlainString(A.default.jd8fki, {
                              startDate: n,
                              endDate: n,
                              perkName: e.title,
                              boostCount: e.cost,
                          }),
                      };
                  })(E)
                : null;
        },
    },
);
