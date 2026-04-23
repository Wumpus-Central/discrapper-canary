l.d(t, { A: () => g });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(417597),
    d = l(778712),
    c = l(834730),
    u = l(287809),
    o = l(427262),
    x = l(283900),
    h = l(914518);
let m = i.memo((e) => {
    let { userId: t, subText: l, className: i } = e,
        s = (0, r.bG)([u.default], () => u.default.getUser(t));
    return void 0 === s
        ? null
        : (0, n.jsxs)("div", {
              className: a()(h.k, i),
              children: [
                  (0, n.jsx)(x.H, { user: s, avatarSize: d._3.SIZE_40 }),
                  (0, n.jsx)("div", {
                      children: (0, n.jsxs)("div", {
                          className: h.$,
                          children: [
                              (0, n.jsx)(c.E, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: o.Ay.getName(s),
                              }),
                              null != l &&
                                  (0, n.jsx)(c.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                          ],
                      }),
                  }),
              ],
          });
});
m.displayName = "FamilyCenterActivityUserRow";
let g = m;
