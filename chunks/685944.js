"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607399),
    l = n(311907),
    u = n(397927),
    c = n(241524),
    d = n(775602),
    _ = n(607470),
    f = n(676279),
    p = n(156312),
    h = n(166532),
    m = n(376747),
    g = n(679190),
    E = n(386224),
    A = n(568442),
    I = n(582860);
let T = (e) => {
    let { className: t, style: n } = e;
    return (0, l.bG)([d.A], () => d.A.useReducedMotion)
        ? (0, r.jsx)("img", { src: A.A, className: t, style: n, alt: "" })
        : (0, r.jsxs)(_.A, {
              tabIndex: -1,
              className: t,
              style: n,
              autoPlay: !0,
              loop: !0,
              children: [
                  (0, r.jsx)("source", { src: I.A, type: "video/webm" }),
                  (0, r.jsx)("img", { src: A.A, className: t, style: n, alt: "" }),
              ],
          });
};
function y(e) {
    let { step: t, onClose: n, isOrbCheckout: a } = e,
        l = (0, c.A)(m.T),
        { footerNode: d } = (0, p.P5)(),
        _ = (0, f.nr)() && !o.Fr,
        A = null != d ? d.offsetWidth : void 0,
        I = i.useMemo(() => (_ && null != A && (t === h.pn.ADD_PAYMENT_STEPS || a) ? A : void 0), [_, A, t, a]);
    if (t === h.pn.BENEFITS || t === h.pn.CONFIRM) return null;
    let y = null != I ? { width: I + 2 } : void 0,
        S = null != I ? { width: I + 3 } : void 0;
    return (0, r.jsxs)("div", {
        className: g.N1,
        style: y,
        children: [
            !l &&
                (0, r.jsx)("div", {
                    className: g.oZ,
                    "aria-hidden": "true",
                    "data-accessibility": "desaturate",
                    style: S,
                    children: a
                        ? (0, r.jsx)(T, { className: s()(g.F0, g.WL) })
                        : (0, r.jsx)("img", { src: E, alt: "", className: g.F0 }),
                }),
            (0, r.jsx)(u.s_y, { "data-migration-pending": !0, withCircleBackground: !0, className: g.b, onClick: n }),
        ],
    });
}
