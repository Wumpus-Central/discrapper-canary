c.d(e, { Z: () => N });
var d = c(200651);
c(192379);
var a = c(99815),
    s = c(442837),
    n = c(481060),
    o = c(239091),
    f = c(314897),
    p = c(553795),
    i = c(430824),
    r = c(496675),
    b = c(626135),
    u = c(70956),
    l = c(425128),
    m = c(979192),
    g = c(873128),
    j = c(703733),
    h = c(463031),
    _ = c(981631),
    v = c(388032),
    x = c(132052);
function O(t) {
    for (var e = 1; e < arguments.length; e++) {
        var c = null != arguments[e] ? arguments[e] : {},
            d = Object.keys(c);
        'function' == typeof Object.getOwnPropertySymbols &&
            (d = d.concat(
                Object.getOwnPropertySymbols(c).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(c, t).enumerable;
                })
            )),
            d.forEach(function (e) {
                var d;
                (d = c[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: d,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = d);
            });
    }
    return t;
}
function y(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var c = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var d = Object.getOwnPropertySymbols(t);
                      c.push.apply(c, d);
                  }
                  return c;
              })(Object(e)).forEach(function (c) {
                  Object.defineProperty(t, c, Object.getOwnPropertyDescriptor(e, c));
              }),
        t
    );
}
function N(t) {
    let { guildId: e, leaderboardId: N } = t,
        S = (0, s.e7)([f.default], () => f.default.getId()),
        Z = (0, s.e7)([p.Z], () => p.Z.getAccount(null, _.ABu.RIOT_GAMES)),
        P = (0, s.e7)([p.Z], () => p.Z.getAccount(null, _.ABu.LEAGUE_OF_LEGENDS)),
        E = (0, g.Z)({
            guildId: e,
            leaderboardId: N
        }),
        { leaderboardsDisabled: T } = (0, m.O)(e, N),
        I =
            null != P && null != Z
                ? () => {
                      b.default.track(_.rMx.LEADERBOARD_USER_DATA_REFRESH_REQUESTED, {
                          leaderboard_id: N,
                          guild_id: e
                      }),
                          (0, l._7)({
                              riotConnectionId: Z.id,
                              lolConnectionId: P.id
                          });
                  }
                : _.dG4,
        R = null == Z || T ? v.NW.string(v.t['0yRXHx']) : v.NW.string(v.t['KWpU6+']),
        { lastUpdateRequested: w, statisticLastUpdatedDate: D } = (0, j.Z)({
            userId: S,
            guildId: e,
            leaderboardId: N,
            statisticId: a.E.LOL_TOTAL_KILLS
        }),
        { disabled: k, subtext: L } = (function (t, e) {
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
                    ? v.NW.string(v.t['3gPhoa'])
                    : (function (t) {
                          if (t > u.Z.Seconds.DAYS_30) {
                              let e = Math.round(t / u.Z.Seconds.DAYS_30);
                              return v.NW.formatToPlainString(v.t['HF7p4+'], { count: e });
                          }
                          if (t > 2 * u.Z.Seconds.DAY) {
                              let e = Math.round(t / u.Z.Seconds.DAY);
                              return v.NW.formatToPlainString(v.t.HkESOj, { count: e });
                          }
                          if (t > u.Z.Seconds.DAY) return v.NW.string(v.t.gvgh9P);
                          if (t > u.Z.Seconds.HOUR) {
                              let e = Math.round(t / u.Z.Seconds.HOUR);
                              return v.NW.formatToPlainString(v.t.mW55WV, { count: e });
                          }
                          {
                              if (!(t > u.Z.Seconds.MINUTE)) return v.NW.string(v.t.tT0mdn);
                              let e = Math.round(t / u.Z.Seconds.MINUTE);
                              return v.NW.formatToPlainString(v.t['1mNjX1'], { count: e });
                          }
                      })(c);
            return {
                disabled: d,
                subtext: a
            };
        })(w, D),
        A = (0, s.e7)(
            [r.Z, i.Z],
            () => {
                let t = i.Z.getGuild(e);
                return r.Z.can(_.Plq.ADMINISTRATOR, t);
            },
            [e]
        );
    return null == E
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
                      'aria-label': v.NW.string(v.t.BjCuf3),
                      onSelect: void 0,
                      children: (0, d.jsx)(d.Fragment, {
                          children: (0, d.jsxs)(n.kSQ, {
                              children: [
                                  E.leaderboard_id === h.z &&
                                      null != Z &&
                                      (0, d.jsx)(n.sNh, {
                                          id: 'refresh-my-data',
                                          label: v.NW.string(v.t.iopWUV),
                                          action: I,
                                          disabled: k,
                                          subtext: L
                                      }),
                                  (0, d.jsx)(n.sNh, {
                                      id: 'leaderboard-modal',
                                      label: R,
                                      action: () => {
                                          (0, n.ZDy)(async () => {
                                              let { default: t } = await c.e('73217').then(c.bind(c, 139964));
                                              return (c) =>
                                                  (0, d.jsx)(
                                                      t,
                                                      y(O({}, c), {
                                                          guildId: e,
                                                          leaderboard: E
                                                      })
                                                  );
                                          }),
                                              null == a || a();
                                      }
                                  }),
                                  A
                                      ? (0, d.jsx)(n.sNh, {
                                            id: 'leaderboard-settings-modal',
                                            label: v.NW.string(v.t['QV4/6u']),
                                            action: () => {
                                                (0, n.ZDy)(async () => {
                                                    let { default: t } = await c.e('25526').then(c.bind(c, 262918));
                                                    return (c) =>
                                                        (0, d.jsx)(
                                                            t,
                                                            y(O({}, c), {
                                                                guildId: e,
                                                                leaderboardId: N
                                                            })
                                                        );
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
                      text: v.NW.string(v.t.UKOtz8),
                      children: (e) =>
                          (0, d.jsx)(
                              n.P3F,
                              y(O(y(O({}, e), { className: x.menuIcon }), t), {
                                  children: (0, d.jsx)(n.xhG, {
                                      color: 'currentColor',
                                      size: 'custom',
                                      width: 16,
                                      height: 16
                                  })
                              })
                          )
                  })
          });
}
