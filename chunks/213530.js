"use strict";
n.d(t, { K: () => d });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(462887),
    l = n(607470),
    u = n(544028),
    c = n(475437);
let d = (e) => {
    let { className: t, options: n } = e,
        i = (0, a.bG)([u.A], () => (0, o.M)(u.A.theme));
    return null == n
        ? null
        : null != n
          ? n.animated
              ? (0, r.jsx)(l.A, {
                    src: n.getSrc(i),
                    className: s()(c.O, t),
                    style: n.style,
                    loop: !1,
                    muted: !0,
                    autoPlay: !0,
                })
              : (0, r.jsx)("img", {
                    src: n.getSrc(i),
                    className: s()(c.O, t),
                    style: n.style,
                    alt: "",
                    "aria-hidden": "true",
                })
          : null;
};
