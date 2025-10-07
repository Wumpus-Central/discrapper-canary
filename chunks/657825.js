n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(399606),
    s = n(481060),
    l = n(594174),
    c = n(51144),
    u = n(198952),
    d = n(905599);
let f = (e) => {
    let { userId: t, subText: n, className: i } = e,
        f = (0, o.e7)([l.default], () => l.default.getUser(t));
    return void 0 === f
        ? null
        : (0, r.jsxs)("div", {
              className: a()(d.container, i),
              children: [
                  (0, r.jsx)(u.r, {
                      user: f,
                      avatarSize: s.EFr.SIZE_40,
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: d.descriptors,
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: "text-md/semibold",
                                  color: "interactive-active",
                                  children: c.ZP.getName(f),
                              }),
                              (0, r.jsx)(s.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-secondary",
                                  children: n,
                              }),
                          ],
                      }),
                  }),
              ],
          });
};
