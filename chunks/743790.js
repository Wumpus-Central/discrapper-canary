"use strict";
n.d(t, { $: () => o, K: () => d });
var i = n(627968),
    r = n(834730),
    a = n(573435),
    s = n(260509),
    l = n(854455);
function o(e) {
    let { guild: t, size: n } = e,
        a = (0, s.Iv)(t, n, !1, !0),
        o = (0, s.Rb)(t);
    return null != a
        ? (0, i.jsx)("img", { src: a, alt: t.name, height: n, width: n })
        : (0, i.jsx)("div", {
              className: l.F,
              children: (0, i.jsx)(r.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: o,
              }),
          });
}
function d(e) {
    let { guild: t, size: n } = e;
    return (0, i.jsx)(a.Ay, {
        className: l.z,
        mask: a.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, i.jsx)(o, { guild: t, size: n }),
    });
}
