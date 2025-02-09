n.d(t, { Z: () => I });
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(442837),
    s = n(481060),
    c = n(178762),
    d = n(91140),
    u = n(297781),
    m = n(592125),
    _ = n(944486),
    g = n(594174),
    p = n(5192),
    f = n(810568),
    h = n(388032),
    x = n(597991),
    v = n(959559);
let I = (e) => {
    let { entry: t, viewId: n, officialGuildId: i, onClose: I } = e,
        C = (0, l.e7)([_.Z, m.Z], () => m.Z.getChannel(_.Z.getChannelId())),
        E = (0, l.e7)([g.default], () => g.default.getUser(t.author_id)),
        { nick: b, avatar: T } = a.useMemo(() => {
            let e = null == E ? void 0 : E.getAvatarURL(null == C ? void 0 : C.guild_id, 48, !1);
            return {
                nick: p.ZP.getName(null == C ? void 0 : C.guild_id, null == C ? void 0 : C.id, E),
                avatar: e
            };
        }, [E, C]);
    return null == E
        ? null
        : (0, r.jsx)(s.yRy, {
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: a, updatePosition: o } = e;
                  return (0, r.jsx)(c.J, {
                      entry: t,
                      closePopout: a,
                      updatePopoutPosition: o,
                      onReaction: () => {
                          (0, f.UE)({
                              action: f.as.SendMessageUser,
                              applicationId: t.extra.application_id,
                              gameName: t.extra.game_name,
                              recipientUserId: t.author_id,
                              viewId: n,
                              officialGuildId: i
                          }),
                              I(),
                              a();
                      },
                      onUserPopoutClosed: () => a(),
                      disableGameProfileLinks: !0
                  });
              },
              positionKey: 'game-profile-entry-'.concat(t.id),
              onRequestOpen: () => {
                  (0, f.UE)({
                      action: f.as.ClickMessageUser,
                      applicationId: t.extra.application_id,
                      gameName: t.extra.game_name,
                      recipientUserId: t.author_id,
                      viewId: n,
                      officialGuildId: i
                  });
              },
              children: (e) =>
                  (0, r.jsx)(s.P3F, {
                      ...e,
                      className: x.profileEntryCard,
                      children: (0, r.jsx)(s.tEY, {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          },
                          children: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('img', {
                                      className: x.avatar,
                                      src: T,
                                      alt: h.intl.formatToPlainString(h.t.IzVXxc, { userName: b })
                                  }),
                                  (0, r.jsx)('div', {
                                      className: o()(x.playerInfo),
                                      children: (0, r.jsxs)('div', {
                                          className: o()(v.column, v.gapXs),
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: b
                                              }),
                                              (0, r.jsx)(u.Gk, {
                                                  location: u.Gt.GAME_PROFILE,
                                                  children: d.W.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, r.jsx)('div', {
                                      className: x.reactions,
                                      children: (0, r.jsx)(s.n$P, { size: 'sm' })
                                  })
                              ]
                          })
                      })
                  })
          });
};
