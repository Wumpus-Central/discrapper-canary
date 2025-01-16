r.d(n, {
    Z: function () {
        return A;
    }
});
var i = r(200651);
r(192379);
var a = r(99815),
    s = r(442837),
    o = r(481060),
    l = r(239091),
    u = r(314897),
    c = r(553795),
    d = r(430824),
    f = r(496675),
    _ = r(626135),
    h = r(70956),
    p = r(425128),
    m = r(979192),
    g = r(873128),
    E = r(703733),
    v = r(463031),
    I = r(981631),
    T = r(388032),
    b = r(234032);
function y(e) {
    if (e > h.Z.Seconds.DAYS_30) {
        let n = Math.round(e / h.Z.Seconds.DAYS_30);
        return T.intl.formatToPlainString(T.t['HF7p4+'], { count: n });
    }
    if (e > 2 * h.Z.Seconds.DAY) {
        let n = Math.round(e / h.Z.Seconds.DAY);
        return T.intl.formatToPlainString(T.t.HkESOj, { count: n });
    }
    if (e > h.Z.Seconds.DAY) return T.intl.string(T.t.gvgh9P);
    else if (e > h.Z.Seconds.HOUR) {
        let n = Math.round(e / h.Z.Seconds.HOUR);
        return T.intl.formatToPlainString(T.t.mW55WV, { count: n });
    } else {
        if (!(e > h.Z.Seconds.MINUTE)) return T.intl.string(T.t.tT0mdn);
        let n = Math.round(e / h.Z.Seconds.MINUTE);
        return T.intl.formatToPlainString(T.t['1mNjX1'], { count: n });
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
        a = i ? T.intl.string(T.t['3gPhoa']) : y(r);
    return {
        disabled: i,
        subtext: a
    };
}
function A(e) {
    let { guildId: n, leaderboardId: h } = e,
        y = (0, s.e7)([u.default], () => u.default.getId()),
        A = (0, s.e7)([c.Z], () => c.Z.getAccount(null, I.ABu.RIOT_GAMES)),
        N = (0, s.e7)([c.Z], () => c.Z.getAccount(null, I.ABu.LEAGUE_OF_LEGENDS)),
        C = (0, g.Z)({
            guildId: n,
            leaderboardId: h
        }),
        { leaderboardsDisabled: R } = (0, m.O)(n, h),
        O =
            null != N && null != A
                ? () => {
                      _.default.track(I.rMx.LEADERBOARD_USER_DATA_REFRESH_REQUESTED, {
                          leaderboard_id: h,
                          guild_id: n
                      }),
                          (0, p._7)({
                              riotConnectionId: A.id,
                              lolConnectionId: N.id
                          });
                  }
                : I.dG4,
        D = null == A || R ? T.intl.string(T.t['0yRXHx']) : T.intl.string(T.t['KWpU6+']),
        { lastUpdateRequested: L, statisticLastUpdatedDate: x } = (0, E.Z)({
            userId: y,
            guildId: n,
            leaderboardId: h,
            statisticId: a.E.LOL_TOTAL_KILLS
        }),
        { disabled: w, subtext: P } = S(L, x),
        M = (0, s.e7)(
            [f.Z, d.Z],
            () => {
                let e = d.Z.getGuild(n);
                return f.Z.can(I.Plq.ADMINISTRATOR, e);
            },
            [n]
        );
    return null == C
        ? null
        : (0, i.jsx)(o.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsx)(o.Menu, {
                      navId: 'leaderboard-popout-context-menu',
                      onClose: () => {
                          (0, l.Zy)(), a();
                      },
                      'aria-label': T.intl.string(T.t.BjCuf3),
                      onSelect: void 0,
                      children: (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsxs)(o.MenuGroup, {
                              children: [
                                  C.leaderboard_id === v.z &&
                                      null != A &&
                                      (0, i.jsx)(o.MenuItem, {
                                          id: 'refresh-my-data',
                                          label: T.intl.string(T.t.iopWUV),
                                          action: O,
                                          disabled: w,
                                          subtext: P
                                      }),
                                  (0, i.jsx)(o.MenuItem, {
                                      id: 'leaderboard-modal',
                                      label: D,
                                      action: () => {
                                          (0, o.openModalLazy)(async () => {
                                              let { default: e } = await r.e('73217').then(r.bind(r, 139964));
                                              return (r) =>
                                                  (0, i.jsx)(e, {
                                                      ...r,
                                                      guildId: n,
                                                      leaderboard: C
                                                  });
                                          }),
                                              null == a || a();
                                      }
                                  }),
                                  M
                                      ? (0, i.jsx)(o.MenuItem, {
                                            id: 'leaderboard-settings-modal',
                                            label: T.intl.string(T.t['QV4/6u']),
                                            action: () => {
                                                (0, o.openModalLazy)(async () => {
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
                  (0, i.jsx)(o.Tooltip, {
                      text: T.intl.string(T.t.UKOtz8),
                      children: (n) =>
                          (0, i.jsx)(o.Clickable, {
                              ...n,
                              className: b.menuIcon,
                              ...e,
                              children: (0, i.jsx)(o.MoreHorizontalIcon, {
                                  color: 'currentColor',
                                  size: 'custom',
                                  width: 16,
                                  height: 16
                              })
                          })
                  })
          });
}
