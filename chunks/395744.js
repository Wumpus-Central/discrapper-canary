i.d(s, { A: () => m });
var e = i(627968);
i(64700);
var r = i(503698),
    l = i.n(r),
    t = i(744808),
    d = i(875741),
    c = i(375708),
    n = i(744053),
    h = i(778765);
function m(a) {
    let { frame: s, ...i } = a,
        { profileFrameStyle: r, profileFrameClassName: m } = (0, d.A)(s.skuId);
    return (0, e.jsx)("div", {
        className: l()(n.i1, m),
        style: r,
        role: "img",
        "aria-label": c.intl.formatToPlainString(c.t["DT/PwH"], { a11y_text: s.label }),
        children: (0, e.jsxs)("div", {
            className: n.HX,
            children: [
                (0, e.jsx)("img", { src: h.A, alt: "", className: n.wt, "aria-hidden": !0, draggable: !1 }),
                (0, e.jsx)(t.A, { frame: s, ...i }),
            ],
        }),
    });
}
