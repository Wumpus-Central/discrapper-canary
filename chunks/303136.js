"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(775602),
    a = n(607470);
let o = (e) => {
    let { src: t, children: n, fallbackImage: o, className: l, preload: u, forceReducedMotion: c } = e,
        d = (0, r.bG)([s.A], () => s.A.useReducedMotion) || c;
    return d && null != o
        ? (0, i.jsx)("img", { src: o, alt: "", className: l })
        : (0, i.jsx)(a.A, {
              muted: !0,
              autoPlay: !d,
              loop: !d,
              playsInline: !0,
              "aria-hidden": "true",
              src: t,
              className: l,
              preload: u,
              children: n,
          });
};
