n.d(t, { Z: () => S });
var i = n(200651);
n(192379);
var r = n(99815),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    l = n(314897),
    u = n(553795),
    c = n(430824),
    d = n(496675),
    f = n(626135),
    _ = n(70956),
    p = n(425128),
    h = n(979192),
    m = n(873128),
    g = n(703733),
    E = n(463031),
    v = n(981631),
    y = n(388032),
    I = n(234032);
function b(e) {
    if (e > _.Z.Seconds.DAYS_30) {
        let t = Math.round(e / _.Z.Seconds.DAYS_30);
        return y.intl.formatToPlainString(y.t['HF7p4+'], { count: t });
    }
    if (e > 2 * _.Z.Seconds.DAY) {
        let t = Math.round(e / _.Z.Seconds.DAY);
        return y.intl.formatToPlainString(y.t.HkESOj, { count: t });
    }
    if (e > _.Z.Seconds.DAY) return y.intl.string(y.t.gvgh9P);
    if (e > _.Z.Seconds.HOUR) {
        let t = Math.round(e / _.Z.Seconds.HOUR);
        return y.intl.formatToPlainString(y.t.mW55WV, { count: t });
    }
    {
        if (!(e > _.Z.Seconds.MINUTE)) return y.intl.string(y.t.tT0mdn);
        let t = Math.round(e / _.Z.Seconds.MINUTE);
        return y.intl.formatToPlainString(y.t['1mNjX1'], { count: t });
    }
}
function T(e, t) {
    if (null == e)
        return {
            disabled: !1,
            subtext: void 0
        };
    let n = (Date.now() - e.getTime()) / _.Z.Millis.SECOND;
    if (n < 0)
        return {
            disabled: !1,
            subtext: void 0
        };
    let i = null != t ? e.getTime() > t.getTime() && n < _.Z.Seconds.HOUR : n < _.Z.Seconds.HOUR,
        r = i ? y.intl.string(y.t['3gPhoa']) : b(n);
    return {
        disabled: i,
        subtext: r
    };
}
function S(e) {
    let { guildId: t, leaderboardId: _ } = e,
        b = (0, a.e7)([l.default], () => l.default.getId()),
        S = (0, a.e7)([u.Z], () => u.Z.getAccount(null, v.ABu.RIOT_GAMES)),
        A = (0, a.e7)([u.Z], () => u.Z.getAccount(null, v.ABu.LEAGUE_OF_LEGENDS)),
        N = (0, m.Z)({
            guildId: t,
            leaderboardId: _
        }),
        { leaderboardsDisabled: C } = (0, h.O)(t, _),
        R =
            null != A && null != S
                ? () => {
                      f.default.track(v.rMx.LEADERBOARD_USER_DATA_REFRESH_REQUESTED, {
                          leaderboard_id: _,
                          guild_id: t
                      }),
                          (0, p._7)({
                              riotConnectionId: S.id,
                              lolConnectionId: A.id
                          });
                  }
                : v.dG4,
        O = null == S || C ? y.intl.string(y.t['0yRXHx']) : y.intl.string(y.t['KWpU6+']),
        { lastUpdateRequested: D, statisticLastUpdatedDate: x } = (0, g.Z)({
            userId: b,
            guildId: t,
            leaderboardId: _,
            statisticId: r.E.LOL_TOTAL_KILLS
        }),
        { disabled: L, subtext: P } = T(D, x),
        w = (0, a.e7)(
            [d.Z, c.Z],
            () => {
                let e = c.Z.getGuild(t);
                return d.Z.can(v.Plq.ADMINISTRATOR, e);
            },
            [t]
        );
    return null == N
        ? null
        : (0, i.jsx)(s.yRy, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: r } = e;
                  return (0, i.jsx)(s.v2r, {
                      navId: 'leaderboard-popout-context-menu',
                      onClose: () => {
                          (0, o.Zy)(), r();
                      },
                      'aria-label': y.intl.string(y.t.BjCuf3),
                      onSelect: void 0,
                      children: (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsxs)(s.kSQ, {
                              children: [
                                  N.leaderboard_id === E.z &&
                                      null != S &&
                                      (0, i.jsx)(s.sNh, {
                                          id: 'refresh-my-data',
                                          label: y.intl.string(y.t.iopWUV),
                                          action: R,
                                          disabled: L,
                                          subtext: P
                                      }),
                                  (0, i.jsx)(s.sNh, {
                                      id: 'leaderboard-modal',
                                      label: O,
                                      action: () => {
                                          (0, s.ZDy)(async () => {
                                              let { default: e } = await n.e('73217').then(n.bind(n, 139964));
                                              return (n) =>
                                                  (0, i.jsx)(e, {
                                                      ...n,
                                                      guildId: t,
                                                      leaderboard: N
                                                  });
                                          }),
                                              null == r || r();
                                      }
                                  }),
                                  w
                                      ? (0, i.jsx)(s.sNh, {
                                            id: 'leaderboard-settings-modal',
                                            label: y.intl.string(y.t['QV4/6u']),
                                            action: () => {
                                                (0, s.ZDy)(async () => {
                                                    let { default: e } = await n.e('25526').then(n.bind(n, 262918));
                                                    return (n) =>
                                                        (0, i.jsx)(e, {
                                                            ...n,
                                                            guildId: t,
                                                            leaderboardId: _
                                                        });
                                                }),
                                                    null == r || r();
                                            }
                                        })
                                      : null
                              ]
                          })
                      })
                  });
              },
              children: (e) =>
                  (0, i.jsx)(s.ua7, {
                      text: y.intl.string(y.t.UKOtz8),
                      children: (t) =>
                          (0, i.jsx)(s.P3F, {
                              ...t,
                              className: I.menuIcon,
                              ...e,
                              children: (0, i.jsx)(s.xhG, {
                                  color: 'currentColor',
                                  size: 'custom',
                                  width: 16,
                                  height: 16
                              })
                          })
                  })
          });
}
