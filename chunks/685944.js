n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607399),
    l = n(311907),
    c = n(397927),
    u = n(241524),
    d = n(775602),
    f = n(607470),
    p = n(676279),
    _ = n(156312),
    h = n(166532),
    m = n(376747),
    g = n(679190),
    E = n(386224),
    b = n(568442),
    y = n(582860);
let O = (e) => {
    let { className: t, style: n } = e;
    return (0, l.bG)([d.A], () => d.A.useReducedMotion)
        ? (0, r.jsx)("img", {
              src: b.A,
              className: t,
              style: n,
              alt: "",
          })
        : (0, r.jsxs)(f.A, {
              tabIndex: -1,
              className: t,
              style: n,
              autoPlay: !0,
              loop: !0,
              children: [
                  (0, r.jsx)("source", {
                      src: y.A,
                      type: "video/webm",
                  }),
                  (0, r.jsx)("img", {
                      src: b.A,
                      className: t,
                      style: n,
                      alt: "",
                  }),
              ],
          });
};
function A(e) {
    let { step: t, onClose: n, isOrbCheckout: a } = e,
        l = (0, u.A)(m.T),
        { footerNode: d } = (0, _.P5)(),
        f = (0, p.nr)() && !o.Fr,
        b = null != d ? d.offsetWidth : void 0,
        y = i.useMemo(() => (f && null != b && (t === h.pn.ADD_PAYMENT_STEPS || a) ? b : void 0), [f, b, t, a]);
    if (t === h.pn.BENEFITS || t === h.pn.CONFIRM) return null;
    let A = null != y ? { width: y + 2 } : void 0,
        v = null != y ? { width: y + 3 } : void 0;
    return (0, r.jsxs)("div", {
        className: g.N1,
        style: A,
        children: [
            !l &&
                (0, r.jsx)("div", {
                    className: g.oZ,
                    "aria-hidden": "true",
                    "data-accessibility": "desaturate",
                    style: v,
                    children: a
                        ? (0, r.jsx)(O, { className: s()(g.F0, g.WL) })
                        : (0, r.jsx)("img", {
                              src: E,
                              alt: "",
                              className: g.F0,
                          }),
                }),
            (0, r.jsx)(c.s_y, {
                "data-migration-pending": !0,
                withCircleBackground: !0,
                className: g.b,
                onClick: n,
            }),
        ],
    });
}
