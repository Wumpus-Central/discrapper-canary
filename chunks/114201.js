r.d(n, {
    Z: function () {
        return A;
    }
});
var i = r(200651);
r(192379);
var a = r(99815),
    o = r(442837),
    s = r(481060),
    l = r(239091),
    u = r(314897),
    c = r(553795),
    d = r(430824),
    f = r(496675),
    p = r(626135),
    h = r(70956),
    _ = r(425128),
    m = r(979192),
    g = r(873128),
    E = r(703733),
    v = r(463031),
    y = r(981631),
    b = r(388032),
    I = r(234032);
function T(e) {
    if (e > h.Z.Seconds.DAYS_30) {
        let n = Math.round(e / h.Z.Seconds.DAYS_30);
        return b.intl.formatToPlainString(b.t['HF7p4+'], { count: n });
    }
    if (e > 2 * h.Z.Seconds.DAY) {
        let n = Math.round(e / h.Z.Seconds.DAY);
        return b.intl.formatToPlainString(b.t.HkESOj, { count: n });
    }
    if (e > h.Z.Seconds.DAY) return b.intl.string(b.t.gvgh9P);
    else if (e > h.Z.Seconds.HOUR) {
        let n = Math.round(e / h.Z.Seconds.HOUR);
        return b.intl.formatToPlainString(b.t.mW55WV, { count: n });
    } else {
        if (!(e > h.Z.Seconds.MINUTE)) return b.intl.string(b.t.tT0mdn);
        let n = Math.round(e / h.Z.Seconds.MINUTE);
        return b.intl.formatToPlainString(b.t['1mNjX1'], { count: n });
    }
}
function S(e, n) {
    if (null == e)
        return {
            disabled: !1,
            subtext: void 0
        };
    let r = (Date.now() - e.getTime()) / h.Z.Millis.SECOND;
    if (r < 0)
        return {
            disabled: !1,
            subtext: void 0
        };
    let i = null != n ? e.getTime() > n.getTime() && r < h.Z.Seconds.HOUR : r < h.Z.Seconds.HOUR,
        a = i ? b.intl.string(b.t['3gPhoa']) : T(r);
    return {
        disabled: i,
        subtext: a
    };
}
function A(e) {
    let { guildId: n, leaderboardId: h } = e,
        T = (0, o.e7)([u.default], () => u.default.getId()),
        A = (0, o.e7)([c.Z], () => c.Z.getAccount(null, y.ABu.RIOT_GAMES)),
        C = (0, o.e7)([c.Z], () => c.Z.getAccount(null, y.ABu.LEAGUE_OF_LEGENDS)),
        N = (0, g.Z)({
            guildId: n,
            leaderboardId: h
        }),
        { leaderboardsDisabled: R } = (0, m.O)(n, h),
        O =
            null != C && null != A
                ? () => {
                      p.default.track(y.rMx.LEADERBOARD_USER_DATA_REFRESH_REQUESTED, {
                          leaderboard_id: h,
                          guild_id: n
                      }),
                          (0, _._7)({
                              riotConnectionId: A.id,
                              lolConnectionId: C.id
                          });
                  }
                : y.dG4,
        D = null == A || R ? b.intl.string(b.t['0yRXHx']) : b.intl.string(b.t['KWpU6+']),
        { lastUpdateRequested: L, statisticLastUpdatedDate: x } = (0, E.Z)({
            userId: T,
            guildId: n,
            leaderboardId: h,
            statisticId: a.E.LOL_TOTAL_KILLS
        }),
        { disabled: w, subtext: P } = S(L, x),
        M = (0, o.e7)(
            [f.Z, d.Z],
            () => {
                let e = d.Z.getGuild(n);
                return f.Z.can(y.Plq.ADMINISTRATOR, e);
            },
            [n]
        );
    return null == N
        ? null
        : (0, i.jsx)(s.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsx)(s.Menu, {
                      navId: 'leaderboard-popout-context-menu',
                      onClose: () => {
                          (0, l.Zy)(), a();
                      },
                      'aria-label': b.intl.string(b.t.BjCuf3),
                      onSelect: void 0,
                      children: (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsxs)(s.MenuGroup, {
                              children: [
                                  N.leaderboard_id === v.z &&
                                      null != A &&
                                      (0, i.jsx)(s.MenuItem, {
                                          id: 'refresh-my-data',
                                          label: b.intl.string(b.t.iopWUV),
                                          action: O,
                                          disabled: w,
                                          subtext: P
                                      }),
                                  (0, i.jsx)(s.MenuItem, {
                                      id: 'leaderboard-modal',
                                      label: D,
                                      action: () => {
                                          (0, s.openModalLazy)(async () => {
                                              let { default: e } = await r.e('73217').then(r.bind(r, 139964));
                                              return (r) =>
                                                  (0, i.jsx)(e, {
                                                      ...r,
                                                      guildId: n,
                                                      leaderboard: N
                                                  });
                                          }),
                                              null == a || a();
                                      }
                                  }),
                                  M
                                      ? (0, i.jsx)(s.MenuItem, {
                                            id: 'leaderboard-settings-modal',
                                            label: b.intl.string(b.t['QV4/6u']),
                                            action: () => {
                                                (0, s.openModalLazy)(async () => {
                                                    let { default: e } = await r.e('25526').then(r.bind(r, 262918));
                                                    return (r) =>
                                                        (0, i.jsx)(e, {
                                                            ...r,
                                                            guildId: n,
                                                            leaderboardId: h
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
              children: (e) =>
                  (0, i.jsx)(s.Tooltip, {
                      text: b.intl.string(b.t.UKOtz8),
                      children: (n) =>
                          (0, i.jsx)(s.Clickable, {
                              ...n,
                              className: I.menuIcon,
                              ...e,
                              children: (0, i.jsx)(s.MoreHorizontalIcon, {
                                  color: 'currentColor',
                                  size: 'custom',
                                  width: 16,
                                  height: 16
                              })
                          })
                  })
          });
}
