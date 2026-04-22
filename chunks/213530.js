n.d(t, { K: () => c });
var l = n(627968),
    r = n(503698),
    i = n.n(r),
    s = n(311907),
    a = n(462887),
    o = n(607470),
    u = n(544028),
    d = n(475437);
let c = (e) => {
    let { className: t, options: n } = e,
        r = (0, s.bG)([u.A], () => (0, a.M)(u.A.theme));
    return null == n
        ? null
        : null != n
          ? n.animated
              ? (0, l.jsx)(o.A, {
                    src: n.getSrc(r),
                    className: i()(d.O, t),
                    style: n.style,
                    loop: !1,
                    muted: !0,
                    autoPlay: !0,
                })
              : (0, l.jsx)("img", {
                    src: n.getSrc(r),
                    className: i()(d.O, t),
                    style: n.style,
                    alt: "",
                    "aria-hidden": "true",
                })
          : null;
};
