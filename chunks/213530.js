n.d(t, { K: () => E });
var i = n(627968),
    a = n(503698),
    r = n.n(a),
    l = n(17928),
    s = n(462887),
    d = n(607470),
    o = n(363195),
    c = n(475437);
let E = (e) => {
    let { className: t, options: n } = e,
        a = (0, l.bG)([o.A], () => (0, s.M)(o.A.theme));
    return null == n
        ? null
        : null != n
          ? n.animated
              ? (0, i.jsx)(d.A, {
                    src: n.getSrc(a),
                    className: r()(c.O, t),
                    style: n.style,
                    loop: !1,
                    muted: !0,
                    autoPlay: !0,
                })
              : (0, i.jsx)("img", {
                    src: n.getSrc(a),
                    className: r()(c.O, t),
                    style: n.style,
                    alt: "",
                    "aria-hidden": "true",
                })
          : null;
};
