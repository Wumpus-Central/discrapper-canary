n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    o = n(399606),
    s = n(159691),
    l = n(481060),
    c = n(240864),
    u = n(613810),
    d = n(596211),
    f = n(388032);
function _(e) {
    var t, n, i, _;
    let { guildId: p, productId: h } = e,
        m = (0, o.e7)([c.Z], () => c.Z.getGuildProduct(h)),
        g = (null != (_ = null == m || null == (t = m.attachments) ? void 0 : t.length) ? _ : 0) > 1,
        E = null == m || null == (i = m.attachments) || null == (n = i[0]) ? void 0 : n.id;
    function b() {
        u.Z.open({
            guildId: p,
            productId: h,
        });
    }
    return g
        ? (0, r.jsx)(s.zx, {
              text: f.intl.string(f.t.UyuiUF),
              icon: l.d4D,
              iconPosition: "end",
              onClick: b,
          })
        : (a()(null != E, "No attachment"),
          (0, r.jsx)(d.Z, {
              text: f.intl.string(f.t.t9bE9f),
              icon: l._8t,
              iconPosition: "end",
              guildId: p,
              productId: h,
              attachmentId: E,
          }));
}
