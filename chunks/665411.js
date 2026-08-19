a.d(r, { A: () => p });
var s = a(477900);
a(582128);
var i = a(503698),
    t = a.n(i),
    n = a(754474),
    l = a(744808),
    c = a(875741),
    d = a(375708),
    u = a(70040),
    o = a(423393);
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
    let { frame: r, transparentBackground: a = !1, ...i } = e,
        { profileFrameStyle: n, profileFrameClassName: p } = (0, c.A)(r);
    return (0, s.jsxs)("div", {
        className: t()(u.i1, p),
        style: n,
        role: "img",
        "aria-label": d.intl.formatToPlainString(d.t["DT/PwH"], { a11y_text: r.label }),
        children: [
            a &&
                (0, s.jsx)("div", {
                    className: u.tL,
                    children: (0, s.jsx)("div", {
                        className: u.HX,
                        children: (0, s.jsx)(l.A, { frame: r, filterLayer: m, ...i }),
                    }),
                }),
            (0, s.jsxs)("div", {
                className: u.HX,
                children: [
                    (0, s.jsx)("img", {
                        src: o.A,
                        alt: "",
                        className: t()(u.wt, u.EX, { [u.GA]: a }),
                        "aria-hidden": !0,
                        draggable: !1,
                    }),
                    (0, s.jsx)(l.A, { frame: r, filterLayer: a ? f : h, ...i }),
                ],
            }),
        ],
    });
}
