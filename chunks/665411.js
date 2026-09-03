r.d(a, { A: () => m });
var s = r(477900);
r(582128);
var t = r(503698),
    i = r.n(t),
    n = r(754474),
    c = r(744808),
    d = r(875741),
    l = r(375708),
    o = r(70040),
    u = r(423393);
function f(e) {
    let { responsive: a } = e;
    return !0 !== a;
}
function p(e) {
    return e.order === n.u.BACK && !0 !== e.responsive;
}
function h(e) {
    return e.order === n.u.FRONT && !0 !== e.responsive;
}
function m(e) {
    let { frame: a, transparentBackground: r = !1, ...t } = e,
        { profileFrameStyle: n, profileFrameClassName: m } = (0, d.A)(a);
    return (0, s.jsxs)("div", {
        className: i()(o.i1, m),
        style: n,
        role: "img",
        "aria-label": l.intl.formatToPlainString(l.t["DT/PwH"], { a11y_text: a.label }),
        children: [
            r &&
                (0, s.jsx)("div", {
                    className: o.tL,
                    children: (0, s.jsx)("div", {
                        className: o.HX,
                        children: (0, s.jsx)(c.A, { frame: a, filterLayer: p, ...t }),
                    }),
                }),
            (0, s.jsxs)("div", {
                className: o.HX,
                children: [
                    (0, s.jsx)("img", {
                        src: u.A,
                        alt: "",
                        className: i()(o.wt, o.EX, { [o.GA]: r }),
                        "aria-hidden": !0,
                        draggable: !1,
                    }),
                    (0, s.jsx)(c.A, { frame: a, filterLayer: r ? h : f, ...t }),
                ],
            }),
        ],
    });
}
