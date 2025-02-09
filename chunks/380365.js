i.d(l, { Z: () => h });
var a = i(200651),
    n = i(192379),
    t = i(442837),
    r = i(481060),
    o = i(271383),
    s = i(430824),
    d = i(594174),
    c = i(5192),
    u = i(645896),
    m = i(979264),
    x = i(308083),
    v = i(388032),
    g = i(863805);
let h = n.memo(function (e) {
    var l, i, n, h, C, _;
    let { guildId: N, isTagAdopted: j, onChangeUseTag: f } = e,
        k = (0, u.Cc)(N),
        p = (0, t.e7)([s.Z], () => s.Z.getGuild(N)),
        S = null !== (h = null == k ? void 0 : null === (l = k.badge) || void 0 === l ? void 0 : l.imageHash) && void 0 !== h ? h : null == p ? void 0 : null === (i = p.profile) || void 0 === i ? void 0 : i.badge,
        T = null !== (C = null == k ? void 0 : k.tag) && void 0 !== C ? C : null == p ? void 0 : null === (n = p.profile) || void 0 === n ? void 0 : n.tag,
        b = (0, t.e7)([d.default], () => d.default.getCurrentUser()),
        P = (0, t.e7)([o.ZP], () => (null != b ? o.ZP.getMember(N, b.id) : null));
    return null == p || null == b || null == P || null == S
        ? null
        : (0, a.jsxs)('div', {
              className: g.previewSection,
              children: [
                  (0, a.jsxs)('div', {
                      className: g.chatPreview,
                      children: [
                          (0, a.jsx)(r.qEK, {
                              src: b.getAvatarURL(N, 40),
                              size: r.EFr.SIZE_40,
                              'aria-hidden': !0
                          }),
                          (0, a.jsxs)('div', {
                              className: g.previewText,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: g.userName,
                                      children: [
                                          (0, a.jsx)(r.PUh, {
                                              className: g.userName,
                                              name: c.ZP.getName(N, null, b),
                                              color: null !== (_ = P.colorString) && void 0 !== _ ? _ : void 0
                                          }),
                                          j &&
                                              (0, a.jsx)(m.aG, {
                                                  guildId: N,
                                                  clanBadge: S,
                                                  clanTag: T,
                                                  badgeSize: x.NC.SIZE_12,
                                                  textVariant: 'text-xs/semibold'
                                              })
                                      ]
                                  }),
                                  (0, a.jsx)('div', {
                                      className: g.fakeMessage,
                                      style: { width: '80%' }
                                  }),
                                  (0, a.jsx)('div', {
                                      className: g.fakeMessage,
                                      style: { width: '50%' }
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, a.jsx)('div', { className: g.divider }),
                  (0, a.jsxs)('div', {
                      className: g.settingSection,
                      children: [
                          (0, a.jsxs)('div', {
                              children: [
                                  (0, a.jsx)(r.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: v.intl.string(v.t.nwNzVV)
                                  }),
                                  (0, a.jsx)(r.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: v.intl.string(v.t.Dpl68P)
                                  })
                              ]
                          }),
                          (0, a.jsx)(r.rsf, {
                              onChange: f,
                              checked: j
                          })
                      ]
                  })
              ]
          });
});
