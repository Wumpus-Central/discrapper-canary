n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var l = n(512722),
    a = n.n(l),
    r = n(399606),
    s = n(481060),
    o = n(671533),
    c = n(240864),
    d = n(613810),
    u = n(596211),
    m = n(388032),
    h = n(916060);
function _(e) {
    var t, n, l, _;
    let { guildId: p, productId: g } = e,
        f = (0, r.e7)([c.Z], () => c.Z.getGuildProduct(g)),
        x = (null !== (_ = null == f ? void 0 : null === (t = f.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== _ ? _ : 0) > 1,
        E = null == f ? void 0 : null === (l = f.attachments) || void 0 === l ? void 0 : null === (n = l[0]) || void 0 === n ? void 0 : n.id;
    return x
        ? (0, i.jsxs)(s.zxk, {
              onClick: function () {
                  d.Z.open({
                      guildId: p,
                      productId: g
                  });
              },
              innerClassName: h.textWithIcon,
              children: [
                  (0, i.jsx)('div', { children: m.intl.string(m.t.UyuiUF) }),
                  (0, i.jsx)(s.LZC, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, i.jsx)(o.Z, {
                      width: 16,
                      height: 16,
                      direction: o.Z.Directions.RIGHT
                  })
              ]
          })
        : (a()(null != E, 'No attachment'),
          (0, i.jsxs)(u.Z, {
              guildId: p,
              productId: g,
              attachmentId: E,
              innerClassName: h.textWithIcon,
              children: [
                  (0, i.jsx)('div', { children: m.intl.string(m.t.t9bE9f) }),
                  (0, i.jsx)(s.LZC, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, i.jsx)(s._8t, {
                      size: 'xs',
                      color: 'currentColor'
                  })
              ]
          }));
}
