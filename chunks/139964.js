n.d(t, { default: () => h });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    l = n(481060),
    s = n(367907),
    a = n(812206),
    d = n(231757),
    c = n(511010),
    u = n(553795),
    x = n(430824),
    m = n(979192),
    j = n(647529),
    f = n(986398),
    g = n(463031),
    p = n(981631),
    b = n(388032),
    _ = n(751848);
function h(e) {
    var t,
        n,
        { guildId: d, leaderboard: u } = e,
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
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['guildId', 'leaderboard']);
    let h = (0, o.e7)([x.Z], () => x.Z.getGuild(d)),
        N = (0, o.e7)([a.Z], () => a.Z.getApplication(u.settings.application_id));
    return (i.useEffect(() => {
        null != d &&
            s.ZP.trackWithMetadata(p.rMx.OPEN_MODAL, {
                type: p.jXE.GUILD_LEADERBOARD_ACCESS_MODAL,
                guild_id: d
            });
    }, [d]),
    null == h || null == N)
        ? null
        : (0, r.jsx)(
              j.Z,
              ((t = (function (e) {
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
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })(
                  {
                      guildId: d,
                      title: b.NW.formatToPlainString(b.t['3BZonp'], { applicationName: N.name })
                  },
                  m
              )),
              (n = n =
                  {
                      children: (0, r.jsxs)(l.hzk, {
                          className: _.modalContent,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: _.subtitleContainer,
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-secondary',
                                          children: b.NW.string(b.t.OBuzJi)
                                      }),
                                      (0, r.jsx)(f.Z, {
                                          className: _.winnerImage,
                                          leaderboard: u
                                      })
                                  ]
                              }),
                              (0, r.jsxs)('div', {
                                  className: _.notes,
                                  children: [
                                      u.leaderboard_id === g.z
                                          ? (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)(O, {}), (0, r.jsx)(l.LZC, { size: 4 }), (0, r.jsx)(c.Z, { className: _.divider })]
                                            })
                                          : null,
                                      null != h &&
                                          (0, r.jsx)(y, {
                                              guild: h,
                                              leaderboardId: u.leaderboard_id
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
function O() {
    return (0, r.jsxs)('div', {
        className: _.row,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-md/medium',
                children: b.NW.string(b.t.PL48CA)
            }),
            (0, r.jsx)(N, {})
        ]
    });
}
function N() {
    return null != (0, o.e7)([u.Z], () => u.Z.getAccount(null, p.ABu.RIOT_GAMES))
        ? (0, r.jsxs)(l.zxk, {
              disabled: !0,
              color: l.zxk.Colors.TRANSPARENT,
              look: l.zxk.Looks.OUTLINED,
              innerClassName: _.doneButton,
              children: [
                  (0, r.jsx)(l.kmB, {}),
                  (0, r.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      children: b.NW.string(b.t.i4jeWV)
                  })
              ]
          })
        : (0, r.jsx)(l.zxk, {
              onClick: () => (0, d.Z)({ platformType: p.ABu.RIOT_GAMES }),
              size: l.zxk.Sizes.SMALL,
              color: l.zxk.Colors.PRIMARY,
              children: b.NW.string(b.t.To26Nj)
          });
}
function y(e) {
    let { guild: t, leaderboardId: n } = e,
        { leaderboardsDisabled: i, toggleGuildLeaderboardsDisabled: o } = (0, m.O)(t.id, n);
    return (0, r.jsx)(l.j7V, {
        hideBorder: !0,
        onChange: o,
        value: !i,
        className: _.guildOptoutSwitch,
        children: b.NW.string(b.t.eZhXQU)
    });
}
