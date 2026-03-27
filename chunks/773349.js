n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(417597),
    o = n(397927),
    d = n(287809),
    c = n(427262),
    u = n(283900),
    m = n(18043);
let _ = s.memo((e) => {
    let { userId: t, subText: n, className: s } = e,
        l = (0, r.bG)([d.default], () => d.default.getUser(t));
    return void 0 === l
        ? null
        : (0, i.jsxs)("div", {
              className: a()(m.k, s),
              children: [
                  (0, i.jsx)(u.H, { user: l, avatarSize: o._3J.SIZE_40 }),
                  (0, i.jsx)("div", {
                      children: (0, i.jsxs)("div", {
                          className: m.$,
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: c.Ay.getName(l),
                              }),
                              null != n &&
                                  (0, i.jsx)(o.Text, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                          ],
                      }),
                  }),
              ],
          });
});
_.displayName = "FamilyCenterActivityUserRow";
let g = _;
