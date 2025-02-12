n.d(t, { default: () => C });
var i = n(200651),
    l = n(192379),
    s = n(442837),
    a = n(481060),
    d = n(367907),
    o = n(812206),
    r = n(231757),
    c = n(511010),
    u = n(553795),
    x = n(430824),
    m = n(979192),
    _ = n(647529),
    h = n(986398),
    g = n(463031),
    j = n(981631),
    f = n(388032),
    p = n(673393);
function C(e) {
    let { guildId: t, leaderboard: n, ...r } = e,
        u = (0, s.e7)([x.Z], () => x.Z.getGuild(t)),
        m = (0, s.e7)([o.Z], () => o.Z.getApplication(n.settings.application_id));
    return (l.useEffect(() => {
        null != t &&
            d.ZP.trackWithMetadata(j.rMx.OPEN_MODAL, {
                type: j.jXE.GUILD_LEADERBOARD_ACCESS_MODAL,
                guild_id: t
            });
    }, [t]),
    null == u || null == m)
        ? null
        : (0, i.jsx)(_.Z, {
              guildId: t,
              title: f.intl.formatToPlainString(f.t['3BZonp'], { applicationName: m.name }),
              ...r,
              children: (0, i.jsxs)(a.hzk, {
                  className: p.modalContent,
                  children: [
                      (0, i.jsxs)('div', {
                          className: p.subtitleContainer,
                          children: [
                              (0, i.jsx)(a.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  children: f.intl.string(f.t.OBuzJi)
                              }),
                              (0, i.jsx)(h.Z, {
                                  className: p.winnerImage,
                                  leaderboard: n
                              })
                          ]
                      }),
                      (0, i.jsxs)('div', {
                          className: p.notes,
                          children: [
                              n.leaderboard_id === g.z
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)(N, {}), (0, i.jsx)(a.LZC, { size: 4 }), (0, i.jsx)(c.Z, { className: p.divider })]
                                    })
                                  : null,
                              null != u &&
                                  (0, i.jsx)(b, {
                                      guild: u,
                                      leaderboardId: n.leaderboard_id
                                  })
                          ]
                      })
                  ]
              })
          });
}
function N() {
    return (0, i.jsxs)('div', {
        className: p.row,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-md/medium',
                children: f.intl.string(f.t.PL48CA)
            }),
            (0, i.jsx)(Z, {})
        ]
    });
}
function Z() {
    return null != (0, s.e7)([u.Z], () => u.Z.getAccount(null, j.ABu.RIOT_GAMES))
        ? (0, i.jsxs)(a.zxk, {
              disabled: !0,
              color: a.zxk.Colors.TRANSPARENT,
              look: a.zxk.Looks.OUTLINED,
              innerClassName: p.doneButton,
              children: [
                  (0, i.jsx)(a.kmB, {}),
                  (0, i.jsx)(a.Text, {
                      variant: 'text-sm/medium',
                      children: f.intl.string(f.t.i4jeWV)
                  })
              ]
          })
        : (0, i.jsx)(a.zxk, {
              onClick: () => (0, r.Z)({ platformType: j.ABu.RIOT_GAMES }),
              size: a.zxk.Sizes.SMALL,
              color: a.zxk.Colors.PRIMARY,
              children: f.intl.string(f.t.To26Nj)
          });
}
function b(e) {
    let { guild: t, leaderboardId: n } = e,
        { leaderboardsDisabled: l, toggleGuildLeaderboardsDisabled: s } = (0, m.O)(t.id, n);
    return (0, i.jsx)(a.j7V, {
        hideBorder: !0,
        onChange: s,
        value: !l,
        className: p.guildOptoutSwitch,
        children: f.intl.string(f.t.eZhXQU)
    });
}
