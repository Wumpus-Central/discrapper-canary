a.d(l, { Z: () => h });
var i = a(200651),
    n = a(192379),
    r = a(442837),
    t = a(481060),
    o = a(271383),
    s = a(430824),
    d = a(594174),
    c = a(5192),
    u = a(645896),
    m = a(979264),
    x = a(308083),
    v = a(388032),
    g = a(357458);
let h = n.memo(function (e) {
    var l, a, n, h, N, C;
    let { guildId: _, isTagAdopted: j, onChangeUseTag: f } = e,
        k = (0, u.Cc)(_),
        p = (0, r.e7)([s.Z], () => s.Z.getGuild(_)),
        S = null !== (h = null == k ? void 0 : null === (l = k.badge) || void 0 === l ? void 0 : l.imageHash) && void 0 !== h ? h : null == p ? void 0 : null === (a = p.profile) || void 0 === a ? void 0 : a.badge,
        T = null !== (N = null == k ? void 0 : k.tag) && void 0 !== N ? N : null == p ? void 0 : null === (n = p.profile) || void 0 === n ? void 0 : n.tag,
        b = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
        P = (0, r.e7)([o.ZP], () => (null != b ? o.ZP.getMember(_, b.id) : null));
    return null == p || null == b || null == P || null == S
        ? null
        : (0, i.jsxs)('div', {
              className: g.previewSection,
              children: [
                  (0, i.jsxs)('div', {
                      className: g.chatPreview,
                      children: [
                          (0, i.jsx)(t.qEK, {
                              src: b.getAvatarURL(_, 40),
                              size: t.EFr.SIZE_40,
                              'aria-hidden': !0
                          }),
                          (0, i.jsxs)('div', {
                              className: g.previewText,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: g.userName,
                                      children: [
                                          (0, i.jsx)(t.PUh, {
                                              className: g.userName,
                                              name: c.ZP.getName(_, null, b),
                                              color: null !== (C = P.colorString) && void 0 !== C ? C : void 0
                                          }),
                                          j &&
                                              (0, i.jsx)(m.aG, {
                                                  guildId: _,
                                                  clanBadge: S,
                                                  clanTag: T,
                                                  badgeSize: x.NC.SIZE_12,
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
                                  (0, i.jsx)(t.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: v.NW.string(v.t.nwNzVV)
                                  }),
                                  (0, i.jsx)(t.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: v.NW.string(v.t.Dpl68P)
                                  })
                              ]
                          }),
                          (0, i.jsx)(t.rsf, {
                              onChange: f,
                              checked: j
                          })
                      ]
                  })
              ]
          });
});
