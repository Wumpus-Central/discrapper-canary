n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(778414),
    o = n(594174),
    s = n(388032),
    c = n(641081);
let d = (e) => {
    let { widget: t, userId: n } = e,
        d = (0, i.e7)([o.default], () => o.default.getUser(n));
    return null == d
        ? null
        : (0, r.jsxs)("div", {
              className: c.container,
              children: [
                  (0, r.jsx)(l.X6q, {
                      className: c.header,
                      variant: "heading-sm/semibold",
                      children: s.intl.string(s.t.SpsnDQ),
                  }),
                  (0, r.jsx)(a.Z, {
                      widget: t,
                      user: d,
                      disableInteraction: !0,
                  }),
              ],
          });
};
