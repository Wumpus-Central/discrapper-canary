n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var l = n(442837),
    i = n(481060),
    a = n(778414),
    s = n(594174),
    o = n(388032),
    d = n(641081);
let c = (e) => {
    let { widget: t, userId: n } = e,
        c = (0, l.e7)([s.default], () => s.default.getUser(n));
    return null == c
        ? null
        : (0, r.jsxs)("div", {
              className: d.container,
              children: [
                  (0, r.jsx)(i.Heading, {
                      className: d.header,
                      variant: "heading-sm/semibold",
                      children: o.intl.string(o.t.SpsnDY),
                  }),
                  (0, r.jsx)(a.Z, {
                      widget: t,
                      user: c,
                      disableInteraction: !0,
                  }),
              ],
          });
};
