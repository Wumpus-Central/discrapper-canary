var i = n(200651),
    a = n(192379),
    t = n(442837),
    o = n(481060),
    r = n(271383),
    s = n(430824),
    d = n(594174),
    c = n(5192),
    u = n(645896),
    m = n(979264),
    v = n(308083),
    x = n(388032),
    g = n(175189);
l.Z = a.memo(function (e) {
    var l, n, a, h, f, C;
    let { guildId: N, isTagAdopted: j, onChangeUseTag: S } = e,
        p = (0, u.Cc)(N),
        _ = (0, t.e7)([s.Z], () => s.Z.getGuild(N)),
        k = null !== (h = null == p ? void 0 : null === (l = p.badge) || void 0 === l ? void 0 : l.imageHash) && void 0 !== h ? h : null == _ ? void 0 : null === (n = _.profile) || void 0 === n ? void 0 : n.badge,
        b = null !== (f = null == p ? void 0 : p.tag) && void 0 !== f ? f : null == _ ? void 0 : null === (a = _.profile) || void 0 === a ? void 0 : a.tag,
        T = (0, t.e7)([d.default], () => d.default.getCurrentUser()),
        w = (0, t.e7)([r.ZP], () => (null != T ? r.ZP.getMember(N, T.id) : null));
    return null == _ || null == T || null == w || null == k
        ? null
        : (0, i.jsxs)('div', {
              className: g.previewSection,
              children: [
                  (0, i.jsxs)('div', {
                      className: g.chatPreview,
                      children: [
                          (0, i.jsx)(o.Avatar, {
                              src: T.getAvatarURL(N, 40),
                              size: o.AvatarSizes.SIZE_40,
                              'aria-hidden': !0
                          }),
                          (0, i.jsxs)('div', {
                              className: g.previewText,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: g.userName,
                                      children: [
                                          (0, i.jsx)(o.NameWithRole, {
                                              className: g.userName,
                                              name: c.ZP.getName(N, null, T),
                                              color: null !== (C = w.colorString) && void 0 !== C ? C : void 0
                                          }),
                                          j &&
                                              (0, i.jsx)(m.aG, {
                                                  guildId: N,
                                                  clanBadge: k,
                                                  clanTag: b,
                                                  badgeSize: v.NC.SIZE_12,
                                                  textVariant: 'text-xs/semibold'
                                              })
                                      ]
                                  }),
                                  (0, i.jsx)('div', {
                                      className: g.fakeMessage,
                                      style: { width: '80%' }
                                  }),
                                  (0, i.jsx)('div', {
                                      className: g.fakeMessage,
                                      style: { width: '50%' }
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)('div', { className: g.divider }),
                  (0, i.jsxs)('div', {
                      className: g.settingSection,
                      children: [
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: x.intl.string(x.t.nwNzVV)
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: x.intl.string(x.t.Dpl68P)
                                  })
                              ]
                          }),
                          (0, i.jsx)(o.Switch, {
                              onChange: S,
                              checked: j
                          })
                      ]
                  })
              ]
          });
});
