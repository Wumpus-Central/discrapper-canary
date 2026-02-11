n.d(t, { A: () => u });
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(463259),
    s = n(287809),
    d = n(985018),
    o = n(4664);
let u = (e) => {
    let { widget: t, userId: n } = e,
        u = (0, i.bG)([s.default], () => s.default.getUser(n));
    return null == u
        ? null
        : (0, l.jsxs)("div", {
              className: o.k,
              children: [
                  (0, l.jsx)(a.Heading, {
                      className: o.w,
                      variant: "heading-sm/semibold",
                      children: d.intl.string(d.t.SpsnDY),
                  }),
                  (0, l.jsx)(r.u, { widget: t, user: u, disableInteraction: !0 }),
              ],
          });
};
