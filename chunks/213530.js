t.d(e, { K: () => b });
var a = t(477900),
    p = t(503698),
    n = t.n(p),
    d = t(17928),
    r = t(462887),
    c = t(607470),
    l = t(363195),
    o = t(770342);
function b(s) {
    let { className: e, options: t } = s,
        p = (0, d.bG)([l.A], () => (0, r.M)(l.A.theme));
    return null == t
        ? null
        : null != t
          ? t.animated
              ? (0, a.jsx)(c.A, {
                    src: t.getSrc(p),
                    className: n()(o.O, e),
                    style: t.style,
                    loop: !1,
                    muted: !0,
                    autoPlay: !0,
                })
              : (0, a.jsx)("img", {
                    src: t.getSrc(p),
                    className: n()(o.O, e),
                    style: t.style,
                    alt: "",
                    "aria-hidden": "true",
                })
          : null;
}
