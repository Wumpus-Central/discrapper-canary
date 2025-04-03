l.d(n, { Z: () => v });
var r = l(200651),
    t = l(192379),
    a = l(442837),
    i = l(481060),
    o = l(884902),
    s = l(271383),
    c = l(430824),
    u = l(594174),
    d = l(5192),
    m = l(645896),
    f = l(979264),
    h = l(308083),
    g = l(388032),
    x = l(443924);
let v = t.memo(function (e) {
    var n, l, t, v, j, p;
    let { guildId: b, isTagAdopted: N, onChangeUseTag: P } = e,
        y = (0, m.Cc)(b),
        C = (0, a.e7)([c.Z], () => c.Z.getGuild(b)),
        w = null != (v = null == y || null == (n = y.badge) ? void 0 : n.imageHash) ? v : null == C || null == (l = C.profile) ? void 0 : l.badge,
        _ = null != (j = null == y ? void 0 : y.tag) ? j : null == C || null == (t = C.profile) ? void 0 : t.tag,
        S = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        k = (0, a.e7)([s.ZP], () => (null != S ? s.ZP.getMember(b, S.id) : null)),
        O = (0, o.E)(b, null == k ? void 0 : k.colorStrings);
    return null == C || null == S || null == k || null == w
        ? null
        : (0, r.jsxs)('div', {
              className: x.previewSection,
              children: [
                  (0, r.jsxs)('div', {
                      className: x.chatPreview,
                      children: [
                          (0, r.jsx)(i.qEK, {
                              src: S.getAvatarURL(b, 40),
                              size: i.EFr.SIZE_40,
                              'aria-hidden': !0
                          }),
                          (0, r.jsxs)('div', {
                              className: x.previewText,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: x.userName,
                                      children: [
                                          (0, r.jsx)(i.PUh, {
                                              className: x.userName,
                                              name: d.ZP.getName(b, null, S),
                                              color: null != (p = k.colorString) ? p : void 0,
                                              roleGradient: O
                                          }),
                                          N &&
                                              (0, r.jsx)(f.aG, {
                                                  guildId: b,
                                                  clanBadge: w,
                                                  clanTag: _,
                                                  badgeSize: h.NC.SIZE_12,
                                                  textVariant: 'text-xs/semibold'
                                              })
                                      ]
                                  }),
                                  (0, r.jsx)('div', {
                                      className: x.fakeMessage,
                                      style: { width: '80%' }
                                  }),
                                  (0, r.jsx)('div', {
                                      className: x.fakeMessage,
                                      style: { width: '50%' }
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', { className: x.divider }),
                  (0, r.jsxs)('div', {
                      className: x.settingSection,
                      children: [
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(i.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: g.NW.string(g.t.nwNzVV)
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: g.NW.string(g.t.Dpl68P)
                                  })
                              ]
                          }),
                          (0, r.jsx)(i.rsf, {
                              onChange: P,
                              checked: N
                          })
                      ]
                  })
              ]
          });
});
