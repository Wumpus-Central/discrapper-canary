n.d(t, { default: () => h });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
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
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['guildId', 'leaderboard']);
    let h = (0, l.e7)([x.Z], () => x.Z.getGuild(d)),
        y = (0, l.e7)([a.Z], () => a.Z.getApplication(u.settings.application_id));
    return (i.useEffect(() => {
        null != d &&
            s.ZP.trackWithMetadata(p.rMx.OPEN_MODAL, {
                type: p.jXE.GUILD_LEADERBOARD_ACCESS_MODAL,
                guild_id: d
            });
    }, [d]),
    null == h || null == y)
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
                      title: b.intl.formatToPlainString(b.t['3BZonp'], { applicationName: y.name })
                  },
                  m
              )),
              (n = n =
                  {
                      children: (0, r.jsxs)(o.hzk, {
                          className: _.modalContent,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: _.subtitleContainer,
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-secondary',
                                          children: b.intl.string(b.t.OBuzJi)
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
                                                children: [(0, r.jsx)(O, {}), (0, r.jsx)(o.LZC, { size: 4 }), (0, r.jsx)(c.Z, { className: _.divider })]
                                            })
                                          : null,
                                      null != h &&
                                          (0, r.jsx)(v, {
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
            (0, r.jsx)(o.Text, {
                variant: 'text-md/medium',
                children: b.intl.string(b.t.PL48CA)
            }),
            (0, r.jsx)(y, {})
        ]
    });
}
function y() {
    return null != (0, l.e7)([u.Z], () => u.Z.getAccount(null, p.ABu.RIOT_GAMES))
        ? (0, r.jsxs)(o.zxk, {
              disabled: !0,
              color: o.zxk.Colors.TRANSPARENT,
              look: o.zxk.Looks.OUTLINED,
              innerClassName: _.doneButton,
              children: [
                  (0, r.jsx)(o.kmB, {}),
                  (0, r.jsx)(o.Text, {
                      variant: 'text-sm/medium',
                      children: b.intl.string(b.t.i4jeWV)
                  })
              ]
          })
        : (0, r.jsx)(o.zxk, {
              onClick: () => (0, d.Z)({ platformType: p.ABu.RIOT_GAMES }),
              size: o.zxk.Sizes.SMALL,
              color: o.zxk.Colors.PRIMARY,
              children: b.intl.string(b.t.To26Nj)
          });
}
function v(e) {
    let { guild: t, leaderboardId: n } = e,
        { leaderboardsDisabled: i, toggleGuildLeaderboardsDisabled: l } = (0, m.O)(t.id, n);
    return (0, r.jsx)(o.j7V, {
        hideBorder: !0,
        onChange: l,
        value: !i,
        className: _.guildOptoutSwitch,
        children: b.intl.string(b.t.eZhXQU)
    });
}
