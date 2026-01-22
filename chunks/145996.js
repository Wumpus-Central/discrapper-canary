n.d(t, {
    A: () => d,
});
var l = n(627968);
n(64700);
var r = n(311907),
    a = n(397927),
    i = n(463259),
    s = n(287809),
    o = n(985018),
    c = n(395618);
let d = (e) => {
    let { widget: t, userId: n } = e,
        d = (0, r.bG)([s.default], () => s.default.getUser(n));
    return null == d
        ? null
        : (0, l.jsxs)("div", {
              className: c.k,
              children: [
                  (0, l.jsx)(a.Heading, {
                      className: c.w,
                      variant: "heading-sm/semibold",
                      children: o.intl.string(o.t.SpsnDY),
                  }),
                  (0, l.jsx)(i.u, {
                      widget: t,
                      user: d,
                      disableInteraction: !0,
                  }),
              ],
          });
};
