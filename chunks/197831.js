n.d(t, { i: () => d });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(780384),
    l = n(70097),
    c = n(210887),
    u = n(269523);
let d = (e) => {
    let { className: t, options: n } = e,
        i = (0, a.e7)([c.Z], () => (0, s.wj)(c.Z.theme));
    return null == n
        ? null
        : null != n
          ? n.animated
              ? (0, r.jsx)(l.Z, {
                    src: n.getSrc(i),
                    className: o()(u.customConfetti, t),
                    style: n.style,
                    loop: !1,
                    muted: !0,
                    autoPlay: !0
                })
              : (0, r.jsx)('img', {
                    src: n.getSrc(i),
                    className: o()(u.customConfetti, t),
                    style: n.style,
                    alt: '',
                    'aria-hidden': 'true'
                })
          : null;
};
