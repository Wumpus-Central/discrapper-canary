n.d(t, { Z: () => C });
var r = n(200651);
n(192379);
var i = n(99815),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    l = n(314897),
    c = n(553795),
    u = n(430824),
    d = n(496675),
    f = n(626135),
    _ = n(70956),
    p = n(425128),
    h = n(979192),
    m = n(873128),
    g = n(703733),
    E = n(463031),
    b = n(981631),
    y = n(388032),
    v = n(333329);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
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
function N(e, t) {
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
    let r = null != t ? e.getTime() > t.getTime() && n < _.Z.Seconds.HOUR : n < _.Z.Seconds.HOUR,
        i = r ? y.intl.string(y.t['3gPhoa']) : A(n);
    return {
        disabled: r,
        subtext: i
    };
}
function C(e) {
    let { guildId: t, leaderboardId: _ } = e,
        O = (0, a.e7)([l.default], () => l.default.getId()),
        S = (0, a.e7)([c.Z], () => c.Z.getAccount(null, b.ABu.RIOT_GAMES)),
        A = (0, a.e7)([c.Z], () => c.Z.getAccount(null, b.ABu.LEAGUE_OF_LEGENDS)),
        C = (0, m.Z)({
            guildId: t,
            leaderboardId: _
        }),
        { leaderboardsDisabled: R } = (0, h.O)(t, _),
        P =
            null != A && null != S
                ? () => {
                      f.default.track(b.rMx.LEADERBOARD_USER_DATA_REFRESH_REQUESTED, {
                          leaderboard_id: _,
                          guild_id: t
                      }),
                          (0, p._7)({
                              riotConnectionId: S.id,
                              lolConnectionId: A.id
                          });
                  }
                : b.dG4,
        w = null == S || R ? y.intl.string(y.t['0yRXHx']) : y.intl.string(y.t['KWpU6+']),
        { lastUpdateRequested: D, statisticLastUpdatedDate: L } = (0, g.Z)({
            userId: O,
            guildId: t,
            leaderboardId: _,
            statisticId: i.E.LOL_TOTAL_KILLS
        }),
        { disabled: x, subtext: M } = N(D, L),
        k = (0, a.e7)(
            [d.Z, u.Z],
            () => {
                let e = u.Z.getGuild(t);
                return d.Z.can(b.Plq.ADMINISTRATOR, e);
            },
            [t]
        );
    return null == C
        ? null
        : (0, r.jsx)(o.yRy, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(o.v2r, {
                      navId: 'leaderboard-popout-context-menu',
                      onClose: () => {
                          (0, s.Zy)(), i();
                      },
                      'aria-label': y.intl.string(y.t.BjCuf3),
                      onSelect: void 0,
                      children: (0, r.jsxs)(o.kSQ, {
                          children: [
                              C.leaderboard_id === E.z &&
                                  null != S &&
                                  (0, r.jsx)(o.sNh, {
                                      id: 'refresh-my-data',
                                      label: y.intl.string(y.t.iopWUV),
                                      action: P,
                                      disabled: x,
                                      subtext: M
                                  }),
                              (0, r.jsx)(o.sNh, {
                                  id: 'leaderboard-modal',
                                  label: w,
                                  action: () => {
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await n.e('73217').then(n.bind(n, 139964));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  T(I({}, n), {
                                                      guildId: t,
                                                      leaderboard: C
                                                  })
                                              );
                                      }),
                                          null == i || i();
                                  }
                              }),
                              k
                                  ? (0, r.jsx)(o.sNh, {
                                        id: 'leaderboard-settings-modal',
                                        label: y.intl.string(y.t['QV4/6u']),
                                        action: () => {
                                            (0, o.ZDy)(async () => {
                                                let { default: e } = await n.e('25526').then(n.bind(n, 262918));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        e,
                                                        T(I({}, n), {
                                                            guildId: t,
                                                            leaderboardId: _
                                                        })
                                                    );
                                            }),
                                                null == i || i();
                                        }
                                    })
                                  : null
                          ]
                      })
                  });
              },
              children: (e) =>
                  (0, r.jsx)(o.ua7, {
                      text: y.intl.string(y.t.UKOtz8),
                      children: (t) =>
                          (0, r.jsx)(
                              o.P3F,
                              T(I(T(I({}, t), { className: v.menuIcon }), e), {
                                  children: (0, r.jsx)(o.xhG, {
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
