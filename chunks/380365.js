r.d(t, { Z: () => x });
var n = r(200651),
    l = r(192379),
    i = r(442837),
    a = r(481060),
    s = r(884902),
    o = r(271383),
    c = r(430824),
    u = r(594174),
    d = r(5192),
    f = r(645896),
    m = r(979264),
    p = r(308083),
    h = r(388032),
    g = r(443924);
let x = l.memo(function (e) {
    var t, r, l, x, j, b;
    let { guildId: y, isTagAdopted: v, onChangeUseTag: O } = e,
        C = (0, f.Cc)(y),
        w = (0, i.e7)([c.Z], () => c.Z.getGuild(y)),
        N = null != (x = null == C || null == (t = C.badge) ? void 0 : t.imageHash) ? x : null == w || null == (r = w.profile) ? void 0 : r.badge,
        P = null != (j = null == C ? void 0 : C.tag) ? j : null == w || null == (l = w.profile) ? void 0 : l.tag,
        S = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        Z = (0, i.e7)([o.ZP], () => (null != S ? o.ZP.getMember(y, S.id) : null)),
        T = (0, s.E)(y, null == Z ? void 0 : Z.colorStrings);
    return null == w || null == S || null == Z || null == N
        ? null
        : (0, n.jsxs)('div', {
              className: g.previewSection,
              children: [
                  (0, n.jsxs)('div', {
                      className: g.chatPreview,
                      children: [
                          (0, n.jsx)(a.qEK, {
                              src: S.getAvatarURL(y, 40),
                              size: a.EFr.SIZE_40,
                              'aria-hidden': !0
                          }),
                          (0, n.jsxs)('div', {
                              className: g.previewText,
                              children: [
                                  (0, n.jsxs)('div', {
                                      className: g.userName,
                                      children: [
                                          (0, n.jsx)(a.PUh, {
                                              className: g.userName,
                                              name: d.ZP.getName(y, null, S),
                                              color: null != (b = Z.colorString) ? b : void 0,
                                              roleGradient: T
                                          }),
                                          v &&
                                              (0, n.jsx)(m.aG, {
                                                  guildId: y,
                                                  clanBadge: N,
                                                  clanTag: P,
                                                  badgeSize: p.NC.SIZE_12,
                                                  textVariant: 'text-xs/semibold'
                                              })
                                      ]
                                  }),
                                  (0, n.jsx)('div', {
                                      className: g.fakeMessage,
                                      style: { width: '80%' }
                                  }),
                                  (0, n.jsx)('div', {
                                      className: g.fakeMessage,
                                      style: { width: '50%' }
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, n.jsx)('div', { className: g.divider }),
                  (0, n.jsxs)('div', {
                      className: g.settingSection,
                      children: [
                          (0, n.jsxs)('div', {
                              children: [
                                  (0, n.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: h.NW.string(h.t.nwNzVV)
                                  }),
                                  (0, n.jsx)(a.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: h.NW.string(h.t.Dpl68P)
                                  })
                              ]
                          }),
                          (0, n.jsx)(a.rsf, {
                              onChange: O,
                              checked: v
                          })
                      ]
                  })
              ]
          });
});
