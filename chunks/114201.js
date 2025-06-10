n.d(t, { Z: () => R });
var r = n(255367),
    i = n(73800),
    a = n(99815),
    o = n(442837),
    s = n(481060),
    l = n(239091),
    c = n(314897),
    u = n(553795),
    d = n(430824),
    f = n(496675),
    _ = n(626135),
    p = n(70956),
    h = n(425128),
    m = n(979192),
    g = n(873128),
    E = n(703733),
    b = n(463031),
    y = n(981631),
    O = n(388032),
    v = n(333329);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
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
function A(e, t) {
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
function N(e) {
    if (e > p.Z.Seconds.DAYS_30) {
        let t = Math.round(e / p.Z.Seconds.DAYS_30);
        return O.intl.formatToPlainString(O.t['HF7p4+'], { count: t });
    }
    if (e > 2 * p.Z.Seconds.DAY) {
        let t = Math.round(e / p.Z.Seconds.DAY);
        return O.intl.formatToPlainString(O.t.HkESOj, { count: t });
    }
    if (e > p.Z.Seconds.DAY) return O.intl.string(O.t.gvgh9P);
    if (e > p.Z.Seconds.HOUR) {
        let t = Math.round(e / p.Z.Seconds.HOUR);
        return O.intl.formatToPlainString(O.t.mW55WV, { count: t });
    }
    {
        if (!(e > p.Z.Seconds.MINUTE)) return O.intl.string(O.t.tT0mdn);
        let t = Math.round(e / p.Z.Seconds.MINUTE);
        return O.intl.formatToPlainString(O.t['1mNjX1'], { count: t });
    }
}
function C(e, t) {
    if (null == e)
        return {
            disabled: !1,
            subtext: void 0
        };
    let n = (Date.now() - e.getTime()) / p.Z.Millis.SECOND;
    if (n < 0)
        return {
            disabled: !1,
            subtext: void 0
        };
    let r = null != t ? e.getTime() > t.getTime() && n < p.Z.Seconds.HOUR : n < p.Z.Seconds.HOUR,
        i = r ? O.intl.string(O.t['3gPhoa']) : N(n);
    return {
        disabled: r,
        subtext: i
    };
}
function R(e) {
    let { guildId: t, leaderboardId: p } = e,
        I = (0, o.e7)([c.default], () => c.default.getId()),
        S = (0, o.e7)([u.Z], () => u.Z.getAccount(null, y.ABu.RIOT_GAMES)),
        N = (0, o.e7)([u.Z], () => u.Z.getAccount(null, y.ABu.LEAGUE_OF_LEGENDS)),
        R = (0, g.Z)({
            guildId: t,
            leaderboardId: p
        }),
        { leaderboardsDisabled: P } = (0, m.O)(t, p),
        w =
            null != N && null != S
                ? () => {
                      _.default.track(y.rMx.LEADERBOARD_USER_DATA_REFRESH_REQUESTED, {
                          leaderboard_id: p,
                          guild_id: t
                      }),
                          (0, h._7)({
                              riotConnectionId: S.id,
                              lolConnectionId: N.id
                          });
                  }
                : y.dG4,
        D = null == S || P ? O.intl.string(O.t['0yRXHx']) : O.intl.string(O.t['KWpU6+']),
        { lastUpdateRequested: L, statisticLastUpdatedDate: x } = (0, E.Z)({
            userId: I,
            guildId: t,
            leaderboardId: p,
            statisticId: a.E.LOL_TOTAL_KILLS
        }),
        { disabled: M, subtext: k } = C(L, x),
        j = (0, o.e7)(
            [f.Z, d.Z],
            () => {
                let e = d.Z.getGuild(t);
                return f.Z.can(y.Plq.ADMINISTRATOR, e);
            },
            [t]
        ),
        U = i.useRef(null);
    return null == R
        ? null
        : (0, r.jsx)(s.yRy, {
              targetElementRef: U,
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(s.v2r, {
                      navId: 'leaderboard-popout-context-menu',
                      onClose: () => {
                          (0, l.Zy)(), i();
                      },
                      'aria-label': O.intl.string(O.t.BjCuf3),
                      onSelect: void 0,
                      children: (0, r.jsxs)(s.kSQ, {
                          children: [
                              R.leaderboard_id === b.z &&
                                  null != S &&
                                  (0, r.jsx)(s.sNh, {
                                      id: 'refresh-my-data',
                                      label: O.intl.string(O.t.iopWUV),
                                      action: w,
                                      disabled: M,
                                      subtext: k
                                  }),
                              (0, r.jsx)(s.sNh, {
                                  id: 'leaderboard-modal',
                                  label: D,
                                  action: () => {
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await n.e('73217').then(n.bind(n, 139964));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  A(T({}, n), {
                                                      guildId: t,
                                                      leaderboard: R
                                                  })
                                              );
                                      }),
                                          null == i || i();
                                  }
                              }),
                              j
                                  ? (0, r.jsx)(s.sNh, {
                                        id: 'leaderboard-settings-modal',
                                        label: O.intl.string(O.t['QV4/6u']),
                                        action: () => {
                                            (0, s.ZDy)(async () => {
                                                let { default: e } = await n.e('25526').then(n.bind(n, 262918));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        e,
                                                        A(T({}, n), {
                                                            guildId: t,
                                                            leaderboardId: p
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
                  (0, r.jsx)(s.ua7, {
                      text: O.intl.string(O.t.UKOtz8),
                      targetElementRef: U,
                      children: (t) =>
                          (0, r.jsx)(
                              s.P3F,
                              A(T(A(T({}, t), { className: v.menuIcon }), e), {
                                  innerRef: U,
                                  children: (0, r.jsx)(s.xhG, {
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
