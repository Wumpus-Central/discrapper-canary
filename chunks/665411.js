"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(754474),
    l = n(744808),
    o = n(875741),
    d = n(375708),
    c = n(573877),
    u = n(423393);
function _(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function E(e) {
    return e.order === s.u.BACK && !0 !== e.responsive;
}
function A(e) {
    return e.order === s.u.FRONT && !0 !== e.responsive;
}
function h(e) {
    let { frame: t, transparentBackground: n = !1, ...r } = e,
        { profileFrameStyle: s, profileFrameClassName: h } = (0, o.A)(t.skuId);
    return (0, i.jsxs)("div", {
        className: a()(c.i1, h),
        style: s,
        role: "img",
        "aria-label": d.intl.formatToPlainString(d.t["DT/PwH"], { a11y_text: t.label }),
        children: [
            n &&
                (0, i.jsx)("div", {
                    className: c.tL,
                    children: (0, i.jsx)("div", {
                        className: c.HX,
                        children: (0, i.jsx)(l.A, { frame: t, filterLayer: E, ...r }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: c.HX,
                children: [
                    (0, i.jsx)("img", {
                        src: u.A,
                        alt: "",
                        className: a()(c.wt, c.EX, { [c.GA]: n }),
                        "aria-hidden": !0,
                        draggable: !1,
                    }),
                    (0, i.jsx)(l.A, { frame: t, filterLayer: n ? A : _, ...r }),
                ],
            }),
        ],
    });
}
