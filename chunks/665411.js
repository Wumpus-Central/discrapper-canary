a.d(s, { A: () => v });
var r = a(627968);
a(64700);
var i = a(503698),
    l = a.n(i),
    t = a(754474),
    d = a(744808),
    n = a(875741),
    c = a(375708),
    h = a(744053),
    m = a(423393);
let o = (e) => {
        let { responsive: s } = e;
        return !0 !== s;
    },
    u = (e) => e.order === t.u.BACK && !0 !== e.responsive,
    p = (e) => e.order === t.u.FRONT && !0 !== e.responsive;
function v(e) {
    let { frame: s, transparentBackground: a = !1, ...i } = e,
        { profileFrameStyle: t, profileFrameClassName: v } = (0, n.A)(s.skuId);
    return (0, r.jsxs)("div", {
        className: l()(h.i1, v),
        style: t,
        role: "img",
        "aria-label": c.intl.formatToPlainString(c.t["DT/PwH"], { a11y_text: s.label }),
        children: [
            a &&
                (0, r.jsx)("div", {
                    className: h.tL,
                    children: (0, r.jsx)("div", {
                        className: h.HX,
                        children: (0, r.jsx)(d.A, { frame: s, filterLayer: u, ...i }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: h.HX,
                children: [
                    (0, r.jsx)("img", {
                        src: m.A,
                        alt: "",
                        className: l()(h.wt, h.EX, { [h.GA]: a }),
                        "aria-hidden": !0,
                        draggable: !1,
                    }),
                    (0, r.jsx)(d.A, { frame: s, filterLayer: a ? p : o, ...i }),
                ],
            }),
        ],
    });
}
