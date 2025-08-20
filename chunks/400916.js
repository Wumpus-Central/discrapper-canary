n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    o = n(399606),
    s = n(755721),
    l = n(481060),
    c = n(671533),
    u = n(240864),
    d = n(613810),
    f = n(596211),
    _ = n(388032),
    p = n(914388);
function h(e) {
    var t, n, i, h;
    let { guildId: m, productId: g } = e,
        E = (0, o.e7)([u.Z], () => u.Z.getGuildProduct(g)),
        b = (null != (h = null == E || null == (t = E.attachments) ? void 0 : t.length) ? h : 0) > 1,
        y = null == E || null == (i = E.attachments) || null == (n = i[0]) ? void 0 : n.id;
    function O() {
        d.Z.open({
            guildId: m,
            productId: g,
        });
    }
    return b
        ? (0, r.jsxs)(s.zx, {
              onClick: O,
              innerClassName: p.textWithIcon,
              children: [
                  (0, r.jsx)("div", { children: _.intl.string(_.t.UyuiUF) }),
                  (0, r.jsx)(l.LZC, {
                      size: 8,
                      horizontal: !0,
                  }),
                  (0, r.jsx)(c.Z, {
                      width: 16,
                      height: 16,
                      direction: c.Z.Directions.RIGHT,
                  }),
              ],
          })
        : (a()(null != y, "No attachment"),
          (0, r.jsxs)(f.Z, {
              guildId: m,
              productId: g,
              attachmentId: y,
              innerClassName: p.textWithIcon,
              children: [
                  (0, r.jsx)("div", { children: _.intl.string(_.t.t9bE9f) }),
                  (0, r.jsx)(l.LZC, {
                      size: 8,
                      horizontal: !0,
                  }),
                  (0, r.jsx)(l._8t, {
                      size: "xs",
                      color: "currentColor",
                  }),
              ],
          }));
}
