n.d(t, { Z: () => v });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    s = n(481060),
    c = n(178762),
    d = n(91140),
    u = n(297781),
    m = n(592125),
    p = n(944486),
    g = n(594174),
    h = n(5192),
    _ = n(810568),
    f = n(388032),
    x = n(444354),
    E = n(561526);
let v = (e) => {
    let { entry: t, viewId: n, officialGuildId: a, onClose: v } = e,
        I = (0, o.e7)([p.Z, m.Z], () => m.Z.getChannel(p.Z.getChannelId())),
        C = (0, o.e7)([g.default], () => g.default.getUser(t.author_id)),
        { nick: A, avatar: S } = r.useMemo(() => {
            let e = null == C ? void 0 : C.getAvatarURL(null == I ? void 0 : I.guild_id, 48, !1);
            return {
                nick: h.ZP.getName(null == I ? void 0 : I.guild_id, null == I ? void 0 : I.id, C),
                avatar: e
            };
        }, [C, I]);
    return null == C
        ? null
        : (0, i.jsx)(s.yRy, {
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: r, updatePosition: l } = e;
                  return (0, i.jsx)(c.J, {
                      entry: t,
                      closePopout: r,
                      updatePopoutPosition: l,
                      onReaction: () => {
                          (0, _.UE)({
                              action: _.as.SendMessageUser,
                              applicationId: t.extra.application_id,
                              gameName: t.extra.game_name,
                              recipientUserId: t.author_id,
                              viewId: n,
                              officialGuildId: a
                          }),
                              v(),
                              r();
                      },
                      onUserPopoutClosed: () => r(),
                      disableGameProfileLinks: !0
                  });
              },
              positionKey: 'game-profile-entry-'.concat(t.id),
              onRequestOpen: () => {
                  (0, _.UE)({
                      action: _.as.ClickMessageUser,
                      applicationId: t.extra.application_id,
                      gameName: t.extra.game_name,
                      recipientUserId: t.author_id,
                      viewId: n,
                      officialGuildId: a
                  });
              },
              children: (e) =>
                  (0, i.jsx)(s.P3F, {
                      ...e,
                      className: x.profileEntryCard,
                      children: (0, i.jsx)(s.tEY, {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          },
                          children: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('img', {
                                      className: x.avatar,
                                      src: S,
                                      alt: f.intl.formatToPlainString(f.t.IzVXxc, { userName: A })
                                  }),
                                  (0, i.jsx)('div', {
                                      className: l()(x.playerInfo),
                                      children: (0, i.jsxs)('div', {
                                          className: l()(E.column, E.gapXs),
                                          children: [
                                              (0, i.jsx)(s.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: A
                                              }),
                                              (0, i.jsx)(u.Gk, {
                                                  location: u.Gt.GAME_PROFILE,
                                                  children: d.W.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, i.jsx)('div', {
                                      className: x.reactions,
                                      children: (0, i.jsx)(s.n$P, { size: 'sm' })
                                  })
                              ]
                          })
                      })
                  })
          });
};
