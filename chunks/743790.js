"use strict";
n.d(t, { $: () => l, K: () => u });
var i = n(627968),
    r = n(834730),
    s = n(573435),
    a = n(260509),
    o = n(601527);
function l(e) {
    let { guild: t, size: n } = e,
        s = (0, a.Iv)(t, n, !1, !0),
        l = (0, a.Rb)(t);
    return null != s
        ? (0, i.jsx)("img", { src: s, alt: t.name, height: n, width: n })
        : (0, i.jsx)("div", {
              className: o.F,
              children: (0, i.jsx)(r.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: l,
              }),
          });
}
function u(e) {
    let { guild: t, size: n } = e;
    return (0, i.jsx)(s.Ay, {
        className: o.z,
        mask: s.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, i.jsx)(l, { guild: t, size: n }),
    });
}
