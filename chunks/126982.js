n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(442837),
    c = n(481060),
    u = n(131388),
    d = n(607070),
    f = n(70097),
    _ = n(526167),
    p = n(563132),
    h = n(409813),
    m = n(750143),
    g = n(735553),
    E = n(60314),
    b = n(420602),
    y = n(197099);
let O = (e) => {
    let { className: t, style: n } = e;
    return (0, l.e7)([d.Z], () => d.Z.useReducedMotion)
        ? (0, r.jsx)("img", {
              src: b.Z,
              className: t,
              style: n,
              alt: "",
          })
        : (0, r.jsxs)(f.Z, {
              tabIndex: -1,
              className: t,
              style: n,
              autoPlay: !0,
              loop: !0,
              children: [
                  (0, r.jsx)("source", {
                      src: y.Z,
                      type: "video/webm",
                  }),
                  (0, r.jsx)("img", {
                      src: b.Z,
                      className: t,
                      style: n,
                      alt: "",
                  }),
              ],
          });
};
function v(e) {
    let { step: t, onClose: n, isOrbCheckout: a } = e,
        l = (0, u.Z)(m.X),
        { footerNode: d } = (0, p.JL)(),
        f = (0, _.G6)() && !s.tq,
        b = null != d ? d.offsetWidth : void 0,
        y = i.useMemo(() => (f && null != b && (t === h.h8.ADD_PAYMENT_STEPS || a) ? b : void 0), [f, b, t, a]);
    if (t === h.h8.BENEFITS || t === h.h8.CONFIRM) return null;
    let v = null != y ? { width: y + 2 } : void 0,
        I = null != y ? { width: y + 3 } : void 0;
    return (0, r.jsxs)("div", {
        className: g.headerContainer,
        style: v,
        children: [
            !l &&
                (0, r.jsx)("div", {
                    className: g.headerImageContainer,
                    "aria-hidden": "true",
                    "data-accessibility": "desaturate",
                    style: I,
                    children: a
                        ? (0, r.jsx)(O, { className: o()(g.headerImage, g.orbCheckoutHeaderVideo) })
                        : (0, r.jsx)("img", {
                              src: E,
                              alt: "",
                              className: g.headerImage,
                          }),
                }),
            (0, r.jsx)(c.olH, {
                "data-migration-pending": !0,
                withCircleBackground: !0,
                className: g.closeButton,
                onClick: n,
            }),
        ],
    });
}
