n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(417597),
    l = n(397927),
    c = n(287809),
    u = n(427262),
    d = n(283900),
    f = n(975977);
let p = i.memo((e) => {
    let { userId: t, subText: n, className: i } = e,
        a = (0, o.bG)([c.default], () => c.default.getUser(t));
    return void 0 === a
        ? null
        : (0, r.jsxs)("div", {
              className: s()(f.k, i),
              children: [
                  (0, r.jsx)(d.H, {
                      user: a,
                      avatarSize: l._3J.SIZE_40,
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: f.$,
                          children: [
                              (0, r.jsx)(l.Text, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: u.Ay.getName(a),
                              }),
                              null != n &&
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                          ],
                      }),
                  }),
              ],
          });
});
p.displayName = "FamilyCenterActivityUserRow";
let _ = p;
