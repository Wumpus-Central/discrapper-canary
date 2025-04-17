n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(512722),
    a = n.n(i),
    l = n(399606),
    o = n(481060),
    s = n(671533),
    c = n(240864),
    u = n(613810),
    d = n(596211),
    p = n(388032),
    m = n(165674);
function f(e) {
    var t, n, i, f;
    let { guildId: h, productId: g } = e,
        _ = (0, l.e7)([c.Z], () => c.Z.getGuildProduct(g)),
        b = (null != (f = null == _ || null == (t = _.attachments) ? void 0 : t.length) ? f : 0) > 1,
        x = null == _ || null == (i = _.attachments) || null == (n = i[0]) ? void 0 : n.id;
    return b
        ? (0, r.jsxs)(o.zxk, {
              onClick: function () {
                  u.Z.open({
                      guildId: h,
                      productId: g
                  });
              },
              innerClassName: m.textWithIcon,
              children: [
                  (0, r.jsx)('div', { children: p.NW.string(p.t.UyuiUF) }),
                  (0, r.jsx)(o.LZC, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, r.jsx)(s.Z, {
                      width: 16,
                      height: 16,
                      direction: s.Z.Directions.RIGHT
                  })
              ]
          })
        : (a()(null != x, 'No attachment'),
          (0, r.jsxs)(d.Z, {
              guildId: h,
              productId: g,
              attachmentId: x,
              innerClassName: m.textWithIcon,
              children: [
                  (0, r.jsx)('div', { children: p.NW.string(p.t.t9bE9f) }),
                  (0, r.jsx)(o.LZC, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, r.jsx)(o._8t, {
                      size: 'xs',
                      color: 'currentColor'
                  })
              ]
          }));
}
