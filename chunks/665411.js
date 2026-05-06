r.d(e, { A: () => m });
var i = r(627968);
r(64700);
var s = r(503698),
    t = r.n(s),
    l = r(744808),
    d = r(282389),
    n = r(375708),
    c = r(744053),
    h = r(423393);
let u = (a) => {
    let { responsive: e } = a;
    return !0 !== e;
};
function m(a) {
    let { frame: e, ...r } = a,
        s = (0, d.A)(e.skuId);
    return (0, i.jsx)("div", {
        className: t()(c.i1, s),
        role: "img",
        "aria-label": n.intl.formatToPlainString(n.t["DT/PwH"], { a11y_text: e.label }),
        children: (0, i.jsxs)("div", {
            className: c.HX,
            children: [
                (0, i.jsx)("img", { src: h.A, alt: "", className: t()(c.wt, c.EX), "aria-hidden": !0, draggable: !1 }),
                (0, i.jsx)(l.A, { frame: e, filterLayer: u, ...r }),
            ],
        }),
    });
}
