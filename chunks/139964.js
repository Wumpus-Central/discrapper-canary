n.d(t, { default: () => O });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    l = n(755721),
    a = n(481060),
    s = n(367907),
    d = n(812206),
    c = n(231757),
    u = n(511010),
    m = n(553795),
    x = n(430824),
    g = n(979192),
    j = n(647529),
    p = n(986398),
    f = n(463031),
    b = n(981631),
    _ = n(388032),
    h = n(751848);
function O(e) {
    var t,
        n,
        { guildId: l, leaderboard: c } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['guildId', 'leaderboard']);
    let g = (0, o.e7)([x.Z], () => x.Z.getGuild(l)),
        O = (0, o.e7)([d.Z], () => d.Z.getApplication(c.settings.application_id));
    return (i.useEffect(() => {
        null != l &&
            s.ZP.trackWithMetadata(b.rMx.OPEN_MODAL, {
                type: b.jXE.GUILD_LEADERBOARD_ACCESS_MODAL,
                guild_id: l
            });
    }, [l]),
    null == g || null == O)
        ? null
        : (0, r.jsx)(
              j.Z,
              ((t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      ('function' == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              })
                          )),
                          r.forEach(function (t) {
                              var r;
                              ((r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = r));
                          }));
                  }
                  return e;
              })(
                  {
                      guildId: l,
                      title: _.intl.formatToPlainString(_.t['3BZonp'], { applicationName: O.name })
                  },
                  m
              )),
              (n = n =
                  {
                      children: (0, r.jsxs)(a.hzk, {
                          className: h.modalContent,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: h.subtitleContainer,
                                  children: [
                                      (0, r.jsx)(a.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-secondary',
                                          children: _.intl.string(_.t.OBuzJi)
                                      }),
                                      (0, r.jsx)(p.Z, {
                                          className: h.winnerImage,
                                          leaderboard: c
                                      })
                                  ]
                              }),
                              (0, r.jsxs)('div', {
                                  className: h.notes,
                                  children: [
                                      c.leaderboard_id === f.z
                                          ? (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)(y, {}), (0, r.jsx)(a.LZC, { size: 4 }), (0, r.jsx)(u.Z, { className: h.divider })]
                                            })
                                          : null,
                                      null != g &&
                                          (0, r.jsx)(C, {
                                              guild: g,
                                              leaderboardId: c.leaderboard_id
                                          })
                                  ]
                              })
                          ]
                      })
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r);
                        }
                        return n;
                    })(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    }),
              t)
          );
}
function y() {
    return (0, r.jsxs)('div', {
        className: h.row,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-md/medium',
                children: _.intl.string(_.t.PL48CA)
            }),
            (0, r.jsx)(v, {})
        ]
    });
}
function v() {
    return null != (0, o.e7)([m.Z], () => m.Z.getAccount(null, b.ABu.RIOT_GAMES))
        ? (0, r.jsxs)(l.zx, {
              disabled: !0,
              color: l.zx.Colors.TRANSPARENT,
              look: l.zx.Looks.OUTLINED,
              innerClassName: h.doneButton,
              children: [
                  (0, r.jsx)(a.kmB, {}),
                  (0, r.jsx)(a.Text, {
                      variant: 'text-sm/medium',
                      children: _.intl.string(_.t.i4jeWV)
                  })
              ]
          })
        : (0, r.jsx)(a.zxk, {
              variant: 'secondary',
              size: 'sm',
              text: _.intl.string(_.t.To26Nj),
              onClick: () => (0, c.Z)({ platformType: b.ABu.RIOT_GAMES })
          });
}
function C(e) {
    let { guild: t, leaderboardId: n } = e,
        { leaderboardsDisabled: i, toggleGuildLeaderboardsDisabled: o } = (0, g.O)(t.id, n);
    return (0, r.jsx)(a.j7V, {
        hideBorder: !0,
        onChange: o,
        value: !i,
        className: h.guildOptoutSwitch,
        children: _.intl.string(_.t.eZhXQU)
    });
}
