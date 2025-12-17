n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(399606),
    l = n(481060),
    c = n(594174),
    u = n(51144),
    d = n(198952),
    f = n(414424);
let p = i.memo((e) => {
    let { userId: t, subText: n, className: i } = e,
        a = (0, s.e7)([c.default], () => c.default.getUser(t));
    return void 0 === a
        ? null
        : (0, r.jsxs)("div", {
              className: o()(f.container, i),
              children: [
                  (0, r.jsx)(d.r, {
                      user: a,
                      avatarSize: l.EFr.SIZE_40,
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: f.descriptors,
                          children: [
                              (0, r.jsx)(l.Text, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: u.ZP.getName(a),
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
