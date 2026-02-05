n.d(t, { A: () => u });
var l = n(627968);
n(64700);
var a = n(311907),
    i = n(397927),
    r = n(463259),
    s = n(287809),
    d = n(985018),
    o = n(395618);
let u = (e) => {
    let { widget: t, userId: n } = e,
        u = (0, a.bG)([s.default], () => s.default.getUser(n));
    return null == u
        ? null
        : (0, l.jsxs)("div", {
              className: o.k,
              children: [
                  (0, l.jsx)(i.Heading, {
                      className: o.w,
                      variant: "heading-sm/semibold",
                      children: d.intl.string(d.t.SpsnDY),
                  }),
                  (0, l.jsx)(r.u, { widget: t, user: u, disableInteraction: !0 }),
              ],
          });
};
