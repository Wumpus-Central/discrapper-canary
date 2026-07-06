t.d(s, { K: () => p });
var l = t(627968),
    a = t(503698),
    u = t.n(a),
    c = t(17928),
    n = t(462887),
    r = t(607470),
    i = t(363195),
    d = t(475437);
function p(e) {
    let { className: s, options: t } = e,
        a = (0, c.bG)([i.A], () => (0, n.M)(i.A.theme));
    return null == t
        ? null
        : null != t
          ? t.animated
              ? (0, l.jsx)(r.A, {
                    src: t.getSrc(a),
                    className: u()(d.O, s),
                    style: t.style,
                    loop: !1,
                    muted: !0,
                    autoPlay: !0,
                })
              : (0, l.jsx)("img", {
                    src: t.getSrc(a),
                    className: u()(d.O, s),
                    style: t.style,
                    alt: "",
                    "aria-hidden": "true",
                })
          : null;
}
