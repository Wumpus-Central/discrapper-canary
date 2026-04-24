"use strict";
r.d(t, { A: () => i });
var l = r(627968),
    s = r(607470),
    n = r(506456),
    a = r(241056);
let i = (e) => {
    let { src: t } = e,
        r = (0, n.A)(t);
    return null == r
        ? null
        : (0, n.c)(r.mimeType)
          ? (0, l.jsx)(s.A, { className: a.S, src: r.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 })
          : (0, l.jsx)("img", { className: a.S, src: r.src, alt: r.alt ?? "" });
};
