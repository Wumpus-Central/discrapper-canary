n.r(t),
    n.d(t, {
        default: function () {
            return f;
        }
    });
var i = n(200651),
    a = n(192379),
    l = n(442837),
    o = n(481060),
    s = n(367907),
    r = n(812206),
    d = n(231757),
    c = n(511010),
    u = n(553795),
    m = n(430824),
    x = n(979192),
    h = n(647529),
    g = n(986398),
    j = n(463031),
    p = n(981631),
    _ = n(388032),
    b = n(168423);
function f(e) {
    let { guildId: t, leaderboard: n, ...d } = e,
        u = (0, l.e7)([m.Z], () => m.Z.getGuild(t)),
        x = (0, l.e7)([r.Z], () => r.Z.getApplication(n.settings.application_id));
    return (a.useEffect(() => {
        null != t &&
            s.ZP.trackWithMetadata(p.rMx.OPEN_MODAL, {
                type: p.jXE.GUILD_LEADERBOARD_ACCESS_MODAL,
                guild_id: t
            });
    }, [t]),
    null == u || null == x)
        ? null
        : (0, i.jsx)(h.Z, {
              guildId: t,
              title: _.intl.formatToPlainString(_.t['3BZonp'], { applicationName: x.name }),
              ...d,
              children: (0, i.jsxs)(o.ModalContent, {
                  className: b.modalContent,
                  children: [
                      (0, i.jsxs)('div', {
                          className: b.subtitleContainer,
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  children: _.intl.string(_.t.OBuzJi)
                              }),
                              (0, i.jsx)(g.Z, {
                                  className: b.winnerImage,
                                  leaderboard: n
                              })
                          ]
                      }),
                      (0, i.jsxs)('div', {
                          className: b.notes,
                          children: [
                              n.leaderboard_id === j.z
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)(N, {}), (0, i.jsx)(o.Spacer, { size: 4 }), (0, i.jsx)(c.Z, { className: b.divider })]
                                    })
                                  : null,
                              null != u &&
                                  (0, i.jsx)(C, {
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
        className: b.row,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-md/medium',
                children: _.intl.string(_.t.PL48CA)
            }),
            (0, i.jsx)(B, {})
        ]
    });
}
function B() {
    return null != (0, l.e7)([u.Z], () => u.Z.getAccount(null, p.ABu.RIOT_GAMES))
        ? (0, i.jsxs)(o.Button, {
              disabled: !0,
              color: o.Button.Colors.TRANSPARENT,
              look: o.Button.Looks.OUTLINED,
              innerClassName: b.doneButton,
              children: [
                  (0, i.jsx)(o.CheckmarkSmallIcon, {}),
                  (0, i.jsx)(o.Text, {
                      variant: 'text-sm/medium',
                      children: _.intl.string(_.t.i4jeWV)
                  })
              ]
          })
        : (0, i.jsx)(o.Button, {
              onClick: () => (0, d.Z)({ platformType: p.ABu.RIOT_GAMES }),
              size: o.Button.Sizes.SMALL,
              color: o.Button.Colors.PRIMARY,
              children: _.intl.string(_.t.To26Nj)
          });
}
function C(e) {
    let { guild: t, leaderboardId: n } = e,
        { leaderboardsDisabled: a, toggleGuildLeaderboardsDisabled: l } = (0, x.O)(t.id, n);
    return (0, i.jsx)(o.FormSwitch, {
        hideBorder: !0,
        onChange: l,
        value: !a,
        className: b.guildOptoutSwitch,
        children: _.intl.string(_.t.eZhXQU)
    });
}
