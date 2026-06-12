s.d(l, { K: () => p });
var t = s(627968),
    a = s(503698),
    r = s.n(a),
    u = s(17928),
    c = s(462887),
    n = s(607470),
    d = s(363195),
    i = s(475437);
let p = (e) => {
    let { className: l, options: s } = e,
        a = (0, u.bG)([d.A], () => (0, c.M)(d.A.theme));
    return null == s
        ? null
        : null != s
          ? s.animated
              ? (0, t.jsx)(n.A, {
                    src: s.getSrc(a),
                    className: r()(i.O, l),
                    style: s.style,
                    loop: !1,
                    muted: !0,
                    autoPlay: !0,
                })
              : (0, t.jsx)("img", {
                    src: s.getSrc(a),
                    className: r()(i.O, l),
                    style: s.style,
                    alt: "",
                    "aria-hidden": "true",
                })
          : null;
};
