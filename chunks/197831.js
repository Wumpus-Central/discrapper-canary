n.d(t, { i: () => l });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(70097),
    s = n(394704);
let l = (e) => {
    let { className: t, options: n } = e;
    return null == n
        ? null
        : null != n
          ? n.animated
              ? (0, r.jsx)(a.Z, {
                    src: n.src,
                    className: o()(s.customConfetti, t),
                    style: n.style,
                    loop: !1,
                    muted: !0,
                    autoPlay: !0
                })
              : (0, r.jsx)('img', {
                    src: n.src,
                    className: o()(s.customConfetti, t),
                    style: n.style,
                    alt: '',
                    'aria-hidden': 'true'
                })
          : null;
};
