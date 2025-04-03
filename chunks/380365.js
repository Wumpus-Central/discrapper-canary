l.d(n, { Z: () => g });
var t = l(200651),
    r = l(192379),
    a = l(442837),
    i = l(481060),
    s = l(271383),
    o = l(430824),
    c = l(594174),
    u = l(5192),
    d = l(645896),
    m = l(979264),
    f = l(308083),
    h = l(388032),
    x = l(443924);
let g = r.memo(function (e) {
    var n, l, r, g, v, j;
    let { guildId: p, isTagAdopted: b, onChangeUseTag: N } = e,
        P = (0, d.Cc)(p),
        y = (0, a.e7)([o.Z], () => o.Z.getGuild(p)),
        C = null != (g = null == P || null == (n = P.badge) ? void 0 : n.imageHash) ? g : null == y || null == (l = y.profile) ? void 0 : l.badge,
        w = null != (v = null == P ? void 0 : P.tag) ? v : null == y || null == (r = y.profile) ? void 0 : r.tag,
        _ = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        k = (0, a.e7)([s.ZP], () => (null != _ ? s.ZP.getMember(p, _.id) : null));
    return null == y || null == _ || null == k || null == C
        ? null
        : (0, t.jsxs)('div', {
              className: x.previewSection,
              children: [
                  (0, t.jsxs)('div', {
                      className: x.chatPreview,
                      children: [
                          (0, t.jsx)(i.qEK, {
                              src: _.getAvatarURL(p, 40),
                              size: i.EFr.SIZE_40,
                              'aria-hidden': !0
                          }),
                          (0, t.jsxs)('div', {
                              className: x.previewText,
                              children: [
                                  (0, t.jsxs)('div', {
                                      className: x.userName,
                                      children: [
                                          (0, t.jsx)(i.PUh, {
                                              className: x.userName,
                                              name: u.ZP.getName(p, null, _),
                                              color: null != (j = k.colorString) ? j : void 0
                                          }),
                                          b &&
                                              (0, t.jsx)(m.aG, {
                                                  guildId: p,
                                                  clanBadge: C,
                                                  clanTag: w,
                                                  badgeSize: f.NC.SIZE_12,
                                                  textVariant: 'text-xs/semibold'
                                              })
                                      ]
                                  }),
                                  (0, t.jsx)('div', {
                                      className: x.fakeMessage,
                                      style: { width: '80%' }
                                  }),
                                  (0, t.jsx)('div', {
                                      className: x.fakeMessage,
                                      style: { width: '50%' }
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, t.jsx)('div', { className: x.divider }),
                  (0, t.jsxs)('div', {
                      className: x.settingSection,
                      children: [
                          (0, t.jsxs)('div', {
                              children: [
                                  (0, t.jsx)(i.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: h.NW.string(h.t.nwNzVV)
                                  }),
                                  (0, t.jsx)(i.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: h.NW.string(h.t.Dpl68P)
                                  })
                              ]
                          }),
                          (0, t.jsx)(i.rsf, {
                              onChange: N,
                              checked: b
                          })
                      ]
                  })
              ]
          });
});
