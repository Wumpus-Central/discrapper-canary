"use strict";
n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var i = n(311907),
    r = n(534514),
    l = n(463259),
    s = n(287809),
    d = n(985018),
    o = n(858331);
let c = (e) => {
    let { widget: t, userId: n } = e,
        c = (0, i.bG)([s.default], () => s.default.getUser(n));
    return null == c
        ? null
        : (0, a.jsxs)("div", {
              className: o.k,
              children: [
                  (0, a.jsx)(r.D, {
                      className: o.w,
                      variant: "heading-sm/semibold",
                      children: d.intl.string(d.t.SpsnDY),
                  }),
                  (0, a.jsx)(l.u, { widget: t, user: c, disableInteraction: !0 }),
              ],
          });
};
