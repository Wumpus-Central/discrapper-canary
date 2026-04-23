n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var a = n(311907),
    i = n(534514),
    r = n(463259),
    s = n(287809),
    d = n(985018),
    o = n(858331);
let c = (e) => {
    let { widget: t, userId: n } = e,
        c = (0, a.bG)([s.default], () => s.default.getUser(n));
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: o.k,
              children: [
                  (0, l.jsx)(i.D, {
                      className: o.w,
                      variant: "heading-sm/semibold",
                      children: d.intl.string(d.t.SpsnDY),
                  }),
                  (0, l.jsx)(r.u, { widget: t, user: c, disableInteraction: !0 }),
              ],
          });
};
