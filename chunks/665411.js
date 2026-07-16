s.d(r, { A: () => p });
var a = s(627968);
s(64700);
var i = s(503698),
    t = s.n(i),
    n = s(754474),
    l = s(744808),
    c = s(875741),
    d = s(375708),
    u = s(744053),
    o = s(423393);
function h(e) {
    let { responsive: r } = e;
    return !0 !== r;
}
function m(e) {
    return e.order === n.u.BACK && !0 !== e.responsive;
}
function f(e) {
    return e.order === n.u.FRONT && !0 !== e.responsive;
}
function p(e) {
    let { frame: r, transparentBackground: s = !1, ...i } = e,
        { profileFrameStyle: n, profileFrameClassName: p } = (0, c.A)(r.skuId);
    return (0, a.jsxs)("div", {
        className: t()(u.i1, p),
        style: n,
        role: "img",
        "aria-label": d.intl.formatToPlainString(d.t["DT/PwH"], { a11y_text: r.label }),
        children: [
            s &&
                (0, a.jsx)("div", {
                    className: u.tL,
                    children: (0, a.jsx)("div", {
                        className: u.HX,
                        children: (0, a.jsx)(l.A, { frame: r, filterLayer: m, ...i }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: u.HX,
                children: [
                    (0, a.jsx)("img", {
                        src: o.A,
                        alt: "",
                        className: t()(u.wt, u.EX, { [u.GA]: s }),
                        "aria-hidden": !0,
                        draggable: !1,
                    }),
                    (0, a.jsx)(l.A, { frame: r, filterLayer: s ? f : h, ...i }),
                ],
            }),
        ],
    });
}
