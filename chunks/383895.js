var r = n(200651),
    i = n(192379),
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
    f = n(5192),
    h = n(810568),
    x = n(388032),
    _ = n(444354),
    E = n(561526);
t.Z = (e) => {
    let { entry: t, viewId: n, officialGuildId: a, onClose: v } = e,
        I = (0, o.e7)([p.Z, m.Z], () => m.Z.getChannel(p.Z.getChannelId())),
        C = (0, o.e7)([g.default], () => g.default.getUser(t.author_id)),
        { nick: A, avatar: S } = i.useMemo(() => {
            let e = null == C ? void 0 : C.getAvatarURL(null == I ? void 0 : I.guild_id, 48, !1);
            return {
                nick: f.ZP.getName(null == I ? void 0 : I.guild_id, null == I ? void 0 : I.id, C),
                avatar: e
            };
        }, [C, I]);
    return null == C
        ? null
        : (0, r.jsx)(s.Popout, {
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: i, updatePosition: l } = e;
                  return (0, r.jsx)(c.J, {
                      entry: t,
                      closePopout: i,
                      updatePopoutPosition: l,
                      onReaction: () => {
                          (0, h.UE)({
                              action: h.as.SendMessageUser,
                              applicationId: t.extra.application_id,
                              gameName: t.extra.game_name,
                              recipientUserId: t.author_id,
                              viewId: n,
                              officialGuildId: a
                          }),
                              v(),
                              i();
                      },
                      onUserPopoutClosed: () => i(),
                      disableGameProfileLinks: !0
                  });
              },
              positionKey: 'game-profile-entry-'.concat(t.id),
              onRequestOpen: () => {
                  (0, h.UE)({
                      action: h.as.ClickMessageUser,
                      applicationId: t.extra.application_id,
                      gameName: t.extra.game_name,
                      recipientUserId: t.author_id,
                      viewId: n,
                      officialGuildId: a
                  });
              },
              children: (e) =>
                  (0, r.jsx)(s.Clickable, {
                      ...e,
                      className: _.profileEntryCard,
                      children: (0, r.jsx)(s.FocusRing, {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          },
                          children: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('img', {
                                      className: _.avatar,
                                      src: S,
                                      alt: x.intl.formatToPlainString(x.t.IzVXxc, { userName: A })
                                  }),
                                  (0, r.jsx)('div', {
                                      className: l()(_.playerInfo),
                                      children: (0, r.jsxs)('div', {
                                          className: l()(E.column, E.gapXs),
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: A
                                              }),
                                              (0, r.jsx)(u.Gk, {
                                                  location: u.Gt.GAME_PROFILE,
                                                  children: d.W.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, r.jsx)('div', {
                                      className: _.reactions,
                                      children: (0, r.jsx)(s.ArrowAngleLeftUpIcon, { size: 'sm' })
                                  })
                              ]
                          })
                      })
                  })
          });
};
