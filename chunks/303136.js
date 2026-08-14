s.d(e, { A: () => d });
var l = s(477900);
s(582128);
var r = s(17928),
    t = s(775602),
    c = s(607470);
let d = function (a) {
    let { src: e, children: s, fallbackImage: d, className: i, preload: u, forceReducedMotion: n } = a,
        p = (0, r.bG)([t.Ay], () => t.Ay.useReducedMotion) || n;
    return p && null != d
        ? (0, l.jsx)("img", { src: d, alt: "", className: i })
        : (0, l.jsx)(c.A, {
              muted: !0,
              autoPlay: !p,
              loop: !p,
              playsInline: !0,
              "aria-hidden": "true",
              src: e,
              className: i,
              preload: u,
              children: s,
          });
};
