a.d(e, { Z: () => O });
var c = a(200651);
a(192379);
var d = a(99815),
    s = a(442837),
    n = a(481060),
    f = a(239091),
    i = a(314897),
    o = a(553795),
    p = a(430824),
    r = a(496675),
    l = a(626135),
    b = a(70956),
    u = a(425128),
    m = a(979192),
    g = a(873128),
    j = a(703733),
    h = a(463031),
    y = a(981631),
    _ = a(388032),
    B = a(333329);
function x(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = null != arguments[e] ? arguments[e] : {},
            c = Object.keys(a);
        'function' == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
                Object.getOwnPropertySymbols(a).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(a, t).enumerable;
                })
            )),
            c.forEach(function (e) {
                var c;
                (c = a[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = c);
            });
    }
    return t;
}
function v(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var a = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var c = Object.getOwnPropertySymbols(t);
                      a.push.apply(a, c);
                  }
                  return a;
              })(Object(e)).forEach(function (a) {
                  Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a));
              }),
        t
    );
}
function O(t) {
    let { guildId: e, leaderboardId: O } = t,
        N = (0, s.e7)([i.default], () => i.default.getId()),
        S = (0, s.e7)([o.Z], () => o.Z.getAccount(null, y.ABu.RIOT_GAMES)),
        Z = (0, s.e7)([o.Z], () => o.Z.getAccount(null, y.ABu.LEAGUE_OF_LEGENDS)),
        P = (0, g.Z)({
            guildId: e,
            leaderboardId: O
        }),
        { leaderboardsDisabled: E } = (0, m.O)(e, O),
        T =
            null != Z && null != S
                ? () => {
                      l.default.track(y.rMx.LEADERBOARD_USER_DATA_REFRESH_REQUESTED, {
                          leaderboard_id: O,
                          guild_id: e
                      }),
                          (0, u._7)({
                              riotConnectionId: S.id,
                              lolConnectionId: Z.id
                          });
                  }
                : y.dG4,
        I = null == S || E ? _.NW.string(_.t['0yRXHx']) : _.NW.string(_.t['KWpU6+']),
        { lastUpdateRequested: R, statisticLastUpdatedDate: w } = (0, j.Z)({
            userId: N,
            guildId: e,
            leaderboardId: O,
            statisticId: d.E.LOL_TOTAL_KILLS
        }),
        { disabled: D, subtext: k } = (function (t, e) {
            if (null == t)
                return {
                    disabled: !1,
                    subtext: void 0
                };
            let a = (Date.now() - t.getTime()) / b.Z.Millis.SECOND;
            if (a < 0)
                return {
                    disabled: !1,
                    subtext: void 0
                };
            let c = null != e ? t.getTime() > e.getTime() && a < b.Z.Seconds.HOUR : a < b.Z.Seconds.HOUR,
                d = c
                    ? _.NW.string(_.t['3gPhoa'])
                    : (function (t) {
                          if (t > b.Z.Seconds.DAYS_30) {
                              let e = Math.round(t / b.Z.Seconds.DAYS_30);
                              return _.NW.formatToPlainString(_.t['HF7p4+'], { count: e });
                          }
                          if (t > 2 * b.Z.Seconds.DAY) {
                              let e = Math.round(t / b.Z.Seconds.DAY);
                              return _.NW.formatToPlainString(_.t.HkESOj, { count: e });
                          }
                          if (t > b.Z.Seconds.DAY) return _.NW.string(_.t.gvgh9P);
                          if (t > b.Z.Seconds.HOUR) {
                              let e = Math.round(t / b.Z.Seconds.HOUR);
                              return _.NW.formatToPlainString(_.t.mW55WV, { count: e });
                          }
                          {
                              if (!(t > b.Z.Seconds.MINUTE)) return _.NW.string(_.t.tT0mdn);
                              let e = Math.round(t / b.Z.Seconds.MINUTE);
                              return _.NW.formatToPlainString(_.t['1mNjX1'], { count: e });
                          }
                      })(a);
            return {
                disabled: c,
                subtext: d
            };
        })(R, w),
        L = (0, s.e7)(
            [r.Z, p.Z],
            () => {
                let t = p.Z.getGuild(e);
                return r.Z.can(y.Plq.ADMINISTRATOR, t);
            },
            [e]
        );
    return null == P
        ? null
        : (0, c.jsx)(n.yRy, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (t) => {
                  let { closePopout: d } = t;
                  return (0, c.jsx)(n.v2r, {
                      navId: 'leaderboard-popout-context-menu',
                      onClose: () => {
                          (0, f.Zy)(), d();
                      },
                      'aria-label': _.NW.string(_.t.BjCuf3),
                      onSelect: void 0,
                      children: (0, c.jsxs)(n.kSQ, {
                          children: [
                              P.leaderboard_id === h.z &&
                                  null != S &&
                                  (0, c.jsx)(n.sNh, {
                                      id: 'refresh-my-data',
                                      label: _.NW.string(_.t.iopWUV),
                                      action: T,
                                      disabled: D,
                                      subtext: k
                                  }),
                              (0, c.jsx)(n.sNh, {
                                  id: 'leaderboard-modal',
                                  label: I,
                                  action: () => {
                                      (0, n.ZDy)(async () => {
                                          let { default: t } = await a.e('73217').then(a.bind(a, 139964));
                                          return (a) =>
                                              (0, c.jsx)(
                                                  t,
                                                  v(x({}, a), {
                                                      guildId: e,
                                                      leaderboard: P
                                                  })
                                              );
                                      }),
                                          null == d || d();
                                  }
                              }),
                              L
                                  ? (0, c.jsx)(n.sNh, {
                                        id: 'leaderboard-settings-modal',
                                        label: _.NW.string(_.t['QV4/6u']),
                                        action: () => {
                                            (0, n.ZDy)(async () => {
                                                let { default: t } = await a.e('25526').then(a.bind(a, 262918));
                                                return (a) =>
                                                    (0, c.jsx)(
                                                        t,
                                                        v(x({}, a), {
                                                            guildId: e,
                                                            leaderboardId: O
                                                        })
                                                    );
                                            }),
                                                null == d || d();
                                        }
                                    })
                                  : null
                          ]
                      })
                  });
              },
              children: (t) =>
                  (0, c.jsx)(n.ua7, {
                      text: _.NW.string(_.t.UKOtz8),
                      children: (e) =>
                          (0, c.jsx)(
                              n.P3F,
                              v(x(v(x({}, e), { className: B.menuIcon }), t), {
                                  children: (0, c.jsx)(n.xhG, {
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
