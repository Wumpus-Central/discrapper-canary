n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(778414),
    s = n(594174),
    o = n(388032),
    c = n(641081);
let d = (e) => {
    let { widget: t, userId: n } = e,
        d = (0, i.e7)([s.default], () => s.default.getUser(n));
    return null == d
        ? null
        : (0, r.jsxs)("div", {
              className: c.container,
              children: [
                  (0, r.jsx)(l.Heading, {
                      className: c.header,
                      variant: "heading-sm/semibold",
                      children: o.intl.string(o.t.SpsnDY),
                  }),
                  (0, r.jsx)(a.Z, {
                      widget: t,
                      user: d,
                      disableInteraction: !0,
                  }),
              ],
          });
};
