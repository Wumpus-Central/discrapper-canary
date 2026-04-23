"use strict";
n.d(t, { K: () => u });
var i = n(627968),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(462887),
    l = n(607470),
    d = n(363195),
    _ = n(475437);
let u = (e) => {
    let { className: t, options: n } = e,
        r = (0, a.bG)([d.A], () => (0, o.M)(d.A.theme));
    return null == n
        ? null
        : null != n
          ? n.animated
              ? (0, i.jsx)(l.A, {
                    src: n.getSrc(r),
                    className: s()(_.O, t),
                    style: n.style,
                    loop: !1,
                    muted: !0,
                    autoPlay: !0,
                })
              : (0, i.jsx)("img", {
                    src: n.getSrc(r),
                    className: s()(_.O, t),
                    style: n.style,
                    alt: "",
                    "aria-hidden": "true",
                })
          : null;
};
