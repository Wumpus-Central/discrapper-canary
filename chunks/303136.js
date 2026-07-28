"use strict";
n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(17928),
    a = n(775602),
    s = n(607470);
let l = function (e) {
    let { src: t, children: n, fallbackImage: l, className: o, preload: d, forceReducedMotion: c } = e,
        u = (0, r.bG)([a.Ay], () => a.Ay.useReducedMotion) || c;
    return u && null != l
        ? (0, i.jsx)("img", { src: l, alt: "", className: o })
        : (0, i.jsx)(s.A, {
              muted: !0,
              autoPlay: !u,
              loop: !u,
              playsInline: !0,
              "aria-hidden": "true",
              src: t,
              className: o,
              preload: d,
              children: n,
          });
};
