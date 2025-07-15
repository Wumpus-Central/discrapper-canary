n.d(t, { Z: () => _ });
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
function _(e) {
    var t, n, i, _;
    let { guildId: h, productId: g } = e,
        b = (0, a.e7)([u.Z], () => u.Z.getGuildProduct(g)),
        E = (null != (_ = null == b || null == (t = b.attachments) ? void 0 : t.length) ? _ : 0) > 1,
        y = null == b || null == (i = b.attachments) || null == (n = i[0]) ? void 0 : n.id;
    return E
        ? (0, r.jsxs)(o.zx, {
              onClick: function () {
                  d.Z.open({
                      guildId: h,
                      productId: g
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
        : (l()(null != y, 'No attachment'),
          (0, r.jsxs)(p.Z, {
              guildId: h,
              productId: g,
              attachmentId: y,
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
