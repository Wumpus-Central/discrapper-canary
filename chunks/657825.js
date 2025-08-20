n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(399606),
    a = n(481060),
    o = n(594174),
    s = n(51144),
    l = n(546791),
    c = n(198952),
    u = n(905599);
let d = (e) => {
    let { userId: t, timestamp: n, timestampFormatter: d } = e,
        f = (0, i.e7)([o.default], () => o.default.getUser(t));
    return void 0 === f
        ? null
        : (0, r.jsxs)("div", {
              className: u.container,
              children: [
                  (0, r.jsx)(c.r, {
                      user: f,
                      avatarSize: a.EFr.SIZE_40,
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: u.descriptors,
                          children: [
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/semibold",
                                  children: s.ZP.getName(f),
                              }),
                              (0, r.jsx)(a.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  children: (0, l.LI)(new Date(n).getTime(), d),
                              }),
                          ],
                      }),
                  }),
              ],
          });
};
