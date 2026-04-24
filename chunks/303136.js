i.d(t, { A: () => s });
var n = i(627968);
i(64700);
var l = i(17928),
    r = i(775602),
    a = i(607470);
let s = (e) => {
    let { src: t, children: i, fallbackImage: s, className: o, preload: d, forceReducedMotion: c } = e,
        u = (0, l.bG)([r.A], () => r.A.useReducedMotion) || c;
    return u && null != s
        ? (0, n.jsx)("img", { src: s, alt: "", className: o })
        : (0, n.jsx)(a.A, {
              muted: !0,
              autoPlay: !u,
              loop: !u,
              playsInline: !0,
              "aria-hidden": "true",
              src: t,
              className: o,
              preload: d,
              children: i,
          });
};
