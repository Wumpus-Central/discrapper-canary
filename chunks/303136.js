var r = e(477900);
e(582128);
var c = e(855986),
    d = e(775602),
    i = e(607470);
e.d(
    s,
    {},
    {
        A: function (a) {
            let { src: s, children: e, fallbackImage: l, className: t, preload: u, forceReducedMotion: n } = a,
                p = (0, c.bG)([d.Ay], () => d.Ay.useReducedMotion) || n;
            return p && null != l
                ? (0, r.jsx)("img", { src: l, alt: "", className: t })
                : (0, r.jsx)(i.A, {
                      muted: !0,
                      autoPlay: !p,
                      loop: !p,
                      playsInline: !0,
                      "aria-hidden": "true",
                      src: s,
                      className: t,
                      preload: u,
                      children: e,
                  });
        },
    },
);
