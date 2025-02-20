n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(512722),
    a = n.n(i),
    o = n(399606),
    l = n(481060),
    s = n(671533),
    c = n(240864),
    d = n(613810),
    u = n(596211),
    p = n(388032),
    m = n(776128);
function f(e) {
    var t, n, i, f;
    let { guildId: h, productId: g } = e,
        _ = (0, o.e7)([c.Z], () => c.Z.getGuildProduct(g)),
        b = (null !== (f = null == _ ? void 0 : null === (t = _.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== f ? f : 0) > 1,
        v = null == _ ? void 0 : null === (i = _.attachments) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.id;
    return b
        ? (0, r.jsxs)(l.zxk, {
              onClick: function () {
                  d.Z.open({
                      guildId: h,
                      productId: g
                  });
              },
              innerClassName: m.textWithIcon,
              children: [
                  (0, r.jsx)('div', { children: p.NW.string(p.t.UyuiUF) }),
                  (0, r.jsx)(l.LZC, {
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
        : (a()(null != v, 'No attachment'),
          (0, r.jsxs)(u.Z, {
              guildId: h,
              productId: g,
              attachmentId: v,
              innerClassName: m.textWithIcon,
              children: [
                  (0, r.jsx)('div', { children: p.NW.string(p.t.t9bE9f) }),
                  (0, r.jsx)(l.LZC, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, r.jsx)(l._8t, {
                      size: 'xs',
                      color: 'currentColor'
                  })
              ]
          }));
}
