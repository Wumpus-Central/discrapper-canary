"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    l = n(397927),
    u = n(241524),
    c = n(303136),
    d = n(676279),
    _ = n(156312),
    f = n(166532),
    p = n(376747),
    h = n(679190),
    m = n(386224),
    E = n(568442),
    g = n(582860);
let A = (e) => {
    let { className: t } = e;
    return (0, r.jsx)(c.A, { src: g.A, fallbackImage: E.A, className: t });
};
function I(e) {
    let { step: t, onClose: n, isOrbCheckout: s } = e,
        c = (0, u.A)(p.T),
        { footerNode: E } = (0, _.P5)(),
        g = (0, d.nr)() && !o.Fr,
        I = null != E ? E.offsetWidth : void 0,
        T = i.useMemo(() => (g && null != I && (t === f.pn.ADD_PAYMENT_STEPS || s) ? I : void 0), [g, I, t, s]);
    if (t === f.pn.BENEFITS || t === f.pn.CONFIRM) return null;
    let S = null != T ? { width: T + 2 } : void 0,
        y = null != T ? { width: T + 3 } : void 0;
    return (0, r.jsxs)("div", {
        className: h.N1,
        style: S,
        children: [
            !c &&
                (0, r.jsx)("div", {
                    className: h.oZ,
                    "aria-hidden": "true",
                    "data-accessibility": "desaturate",
                    style: y,
                    children: s
                        ? (0, r.jsx)(A, { className: a()(h.F0, h.WL) })
                        : (0, r.jsx)("img", { src: m, alt: "", className: h.F0 }),
                }),
            (0, r.jsx)(l.s_y, { "data-migration-pending": !0, withCircleBackground: !0, className: h.b, onClick: n }),
        ],
    });
}
