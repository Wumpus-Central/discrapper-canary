c.d(e, { Z: () => N });
var d = c(200651);
c(192379);
var a = c(99815),
    s = c(442837),
    n = c(481060),
    o = c(239091),
    f = c(314897),
    i = c(553795),
    p = c(430824),
    r = c(496675),
    b = c(626135),
    u = c(70956),
    l = c(425128),
    m = c(979192),
    g = c(873128),
    h = c(703733),
    j = c(463031),
    _ = c(981631),
    v = c(388032),
    x = c(342378);
function N(t) {
    let { guildId: e, leaderboardId: N } = t,
        Z = (0, s.e7)([f.default], () => f.default.getId()),
        T = (0, s.e7)([i.Z], () => i.Z.getAccount(null, _.ABu.RIOT_GAMES)),
        E = (0, s.e7)([i.Z], () => i.Z.getAccount(null, _.ABu.LEAGUE_OF_LEGENDS)),
        I = (0, g.Z)({
            guildId: e,
            leaderboardId: N
        }),
        { leaderboardsDisabled: S } = (0, m.O)(e, N),
        R =
            null != E && null != T
                ? () => {
                      b.default.track(_.rMx.LEADERBOARD_USER_DATA_REFRESH_REQUESTED, {
                          leaderboard_id: N,
                          guild_id: e
                      }),
                          (0, l._7)({
                              riotConnectionId: T.id,
                              lolConnectionId: E.id
                          });
                  }
                : _.dG4,
        L = null == T || S ? v.intl.string(v.t['0yRXHx']) : v.intl.string(v.t['KWpU6+']),
        { lastUpdateRequested: A, statisticLastUpdatedDate: y } = (0, h.Z)({
            userId: Z,
            guildId: e,
            leaderboardId: N,
            statisticId: a.E.LOL_TOTAL_KILLS
        }),
        { disabled: k, subtext: D } = (function (t, e) {
            if (null == t)
                return {
                    disabled: !1,
                    subtext: void 0
                };
            let c = (Date.now() - t.getTime()) / u.Z.Millis.SECOND;
            if (c < 0)
                return {
                    disabled: !1,
                    subtext: void 0
                };
            let d = null != e ? t.getTime() > e.getTime() && c < u.Z.Seconds.HOUR : c < u.Z.Seconds.HOUR,
                a = d
                    ? v.intl.string(v.t['3gPhoa'])
                    : (function (t) {
                          if (t > u.Z.Seconds.DAYS_30) {
                              let e = Math.round(t / u.Z.Seconds.DAYS_30);
                              return v.intl.formatToPlainString(v.t['HF7p4+'], { count: e });
                          }
                          if (t > 2 * u.Z.Seconds.DAY) {
                              let e = Math.round(t / u.Z.Seconds.DAY);
                              return v.intl.formatToPlainString(v.t.HkESOj, { count: e });
                          }
                          if (t > u.Z.Seconds.DAY) return v.intl.string(v.t.gvgh9P);
                          if (t > u.Z.Seconds.HOUR) {
                              let e = Math.round(t / u.Z.Seconds.HOUR);
                              return v.intl.formatToPlainString(v.t.mW55WV, { count: e });
                          }
                          {
                              if (!(t > u.Z.Seconds.MINUTE)) return v.intl.string(v.t.tT0mdn);
                              let e = Math.round(t / u.Z.Seconds.MINUTE);
                              return v.intl.formatToPlainString(v.t['1mNjX1'], { count: e });
                          }
                      })(c);
            return {
                disabled: d,
                subtext: a
            };
        })(A, y),
        O = (0, s.e7)(
            [r.Z, p.Z],
            () => {
                let t = p.Z.getGuild(e);
                return r.Z.can(_.Plq.ADMINISTRATOR, t);
            },
            [e]
        );
    return null == I
        ? null
        : (0, d.jsx)(n.yRy, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (t) => {
                  let { closePopout: a } = t;
                  return (0, d.jsx)(n.v2r, {
                      navId: 'leaderboard-popout-context-menu',
                      onClose: () => {
                          (0, o.Zy)(), a();
                      },
                      'aria-label': v.intl.string(v.t.BjCuf3),
                      onSelect: void 0,
                      children: (0, d.jsx)(d.Fragment, {
                          children: (0, d.jsxs)(n.kSQ, {
                              children: [
                                  I.leaderboard_id === j.z &&
                                      null != T &&
                                      (0, d.jsx)(n.sNh, {
                                          id: 'refresh-my-data',
                                          label: v.intl.string(v.t.iopWUV),
                                          action: R,
                                          disabled: k,
                                          subtext: D
                                      }),
                                  (0, d.jsx)(n.sNh, {
                                      id: 'leaderboard-modal',
                                      label: L,
                                      action: () => {
                                          (0, n.ZDy)(async () => {
                                              let { default: t } = await c.e('73217').then(c.bind(c, 139964));
                                              return (c) =>
                                                  (0, d.jsx)(t, {
                                                      ...c,
                                                      guildId: e,
                                                      leaderboard: I
                                                  });
                                          }),
                                              null == a || a();
                                      }
                                  }),
                                  O
                                      ? (0, d.jsx)(n.sNh, {
                                            id: 'leaderboard-settings-modal',
                                            label: v.intl.string(v.t['QV4/6u']),
                                            action: () => {
                                                (0, n.ZDy)(async () => {
                                                    let { default: t } = await c.e('25526').then(c.bind(c, 262918));
                                                    return (c) =>
                                                        (0, d.jsx)(t, {
                                                            ...c,
                                                            guildId: e,
                                                            leaderboardId: N
                                                        });
                                                }),
                                                    null == a || a();
                                            }
                                        })
                                      : null
                              ]
                          })
                      })
                  });
              },
              children: (t) =>
                  (0, d.jsx)(n.ua7, {
                      text: v.intl.string(v.t.UKOtz8),
                      children: (e) =>
                          (0, d.jsx)(n.P3F, {
                              ...e,
                              className: x.menuIcon,
                              ...t,
                              children: (0, d.jsx)(n.xhG, {
                                  color: 'currentColor',
                                  size: 'custom',
                                  width: 16,
                                  height: 16
                              })
                          })
                  })
          });
}
