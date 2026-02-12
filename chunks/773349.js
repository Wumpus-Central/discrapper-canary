n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(417597),
    o = n(397927),
    c = n(287809),
    d = n(427262),
    u = n(283900),
    _ = n(975977);
let m = s.memo((e) => {
    let { userId: t, subText: n, className: s } = e,
        a = (0, r.bG)([c.default], () => c.default.getUser(t));
    return void 0 === a
        ? null
        : (0, i.jsxs)("div", {
              className: l()(_.k, s),
              children: [
                  (0, i.jsx)(u.H, { user: a, avatarSize: o._3J.SIZE_40 }),
                  (0, i.jsx)("div", {
                      children: (0, i.jsxs)("div", {
                          className: _.$,
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: d.Ay.getName(a),
                              }),
                              null != n &&
                                  (0, i.jsx)(o.Text, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                          ],
                      }),
                  }),
              ],
          });
});
m.displayName = "FamilyCenterActivityUserRow";
let A = m;
