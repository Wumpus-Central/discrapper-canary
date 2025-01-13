n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(399606),
    o = n(481060),
    s = n(671533),
    c = n(240864),
    d = n(613810),
    u = n(596211),
    m = n(388032),
    h = n(916060);
function f(e) {
    var t, n, r, f;
    let { guildId: p, productId: _ } = e,
        g = (0, a.e7)([c.Z], () => c.Z.getGuildProduct(_)),
        E = (null !== (f = null == g ? void 0 : null === (t = g.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== f ? f : 0) > 1,
        C = null == g ? void 0 : null === (r = g.attachments) || void 0 === r ? void 0 : null === (n = r[0]) || void 0 === n ? void 0 : n.id;
    return E
        ? (0, i.jsxs)(o.Button, {
              onClick: function () {
                  d.Z.open({
                      guildId: p,
                      productId: _
                  });
              },
              innerClassName: h.textWithIcon,
              children: [
                  (0, i.jsx)('div', { children: m.intl.string(m.t.UyuiUF) }),
                  (0, i.jsx)(o.Spacer, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, i.jsx)(s.Z, {
                      width: 16,
                      height: 16,
                      direction: s.Z.Directions.RIGHT
                  })
              ]
          })
        : (l()(null != C, 'No attachment'),
          (0, i.jsxs)(u.Z, {
              guildId: p,
              productId: _,
              attachmentId: C,
              innerClassName: h.textWithIcon,
              children: [
                  (0, i.jsx)('div', { children: m.intl.string(m.t.t9bE9f) }),
                  (0, i.jsx)(o.Spacer, {
                      size: 8,
                      horizontal: !0
                  }),
                  (0, i.jsx)(o.DownloadIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })
              ]
          }));
}
