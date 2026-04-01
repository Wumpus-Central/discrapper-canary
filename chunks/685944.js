"use strict";
n.d(t, { A: () => T });
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
    h = n(554418),
    m = n(26617),
    E = n(386224),
    g = n(568442),
    A = n(582860);
let I = (e) => {
    let { className: t } = e;
    return (0, r.jsx)(c.A, { src: A.A, fallbackImage: g.A, className: t });
};
function T(e) {
    let { step: t, onClose: n, isOrbCheckout: s } = e,
        c = (0, u.A)(p.T),
        { footerNode: g } = (0, _.P5)(),
        A = (0, d.nr)() && !o.Fr,
        T = null != g ? g.offsetWidth : void 0,
        S = i.useMemo(() => (A && null != T && (t === f.pn.ADD_PAYMENT_STEPS || s) ? T : void 0), [A, T, t, s]);
    if (t === f.pn.BENEFITS || t === f.pn.CONFIRM) return null;
    let y = null != S ? { width: S + 2 } : void 0,
        v = null != S ? { width: S + 3 } : void 0;
    return (0, r.jsxs)("div", {
        className: a()(m.N1, h.GI),
        style: y,
        children: [
            !c &&
                (0, r.jsx)("div", {
                    className: m.oZ,
                    "aria-hidden": "true",
                    "data-accessibility": "desaturate",
                    style: v,
                    children: s
                        ? (0, r.jsx)(I, { className: a()(m.F0, m.WL) })
                        : (0, r.jsx)("img", { src: E, alt: "", className: m.F0 }),
                }),
            (0, r.jsx)(l.s_y, { "data-migration-pending": !0, withCircleBackground: !0, className: m.b, onClick: n }),
        ],
    });
}
