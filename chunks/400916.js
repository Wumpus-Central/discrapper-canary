n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(512722),
    l = n.n(i),
    a = n(399606),
    o = n(755721),
    s = n(481060),
    c = n(671533),
    u = n(240864),
    d = n(613810),
    p = n(596211),
    m = n(388032),
    f = n(165674);
function g(e) {
    var t, n, i, g;
    let { guildId: _, productId: h } = e,
        b = (0, a.e7)([u.Z], () => u.Z.getGuildProduct(h)),
        E = (null != (g = null == b || null == (t = b.attachments) ? void 0 : t.length) ? g : 0) > 1,
        C = null == b || null == (i = b.attachments) || null == (n = i[0]) ? void 0 : n.id;
    return E
        ? (0, r.jsxs)(o.zx, {
              onClick: function () {
                  d.Z.open({
                      guildId: _,
                      productId: h
                  });
              },
              innerClassName: f.textWithIcon,
              children: [
                  (0, r.jsx)('div', { children: m.intl.string(m.t.UyuiUF) }),
                  (0, r.jsx)(s.LZC, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, r.jsx)(c.Z, {
                      width: 16,
                      height: 16,
                      direction: c.Z.Directions.RIGHT
                  })
              ]
          })
        : (l()(null != C, 'No attachment'),
          (0, r.jsxs)(p.Z, {
              guildId: _,
              productId: h,
              attachmentId: C,
              innerClassName: f.textWithIcon,
              children: [
                  (0, r.jsx)('div', { children: m.intl.string(m.t.t9bE9f) }),
                  (0, r.jsx)(s.LZC, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, r.jsx)(s._8t, {
                      size: 'xs',
                      color: 'currentColor'
                  })
              ]
          }));
}
