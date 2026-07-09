t.d(r, { A: () => _ });
var i = t(627968);
t(64700);
var n = t(503698),
    s = t.n(n),
    a = t(754474),
    u = t(744808),
    l = t(875741),
    c = t(375708),
    o = t(573877),
    d = t(423393);
function f(e) {
    let { responsive: r } = e;
    return !0 !== r;
}
function m(e) {
    return e.order === a.u.BACK && !0 !== e.responsive;
}
function R(e) {
    return e.order === a.u.FRONT && !0 !== e.responsive;
}
function _(e) {
    let { frame: r, transparentBackground: t = !1, ...n } = e,
        { profileFrameStyle: a, profileFrameClassName: _ } = (0, l.A)(r.skuId);
    return (0, i.jsxs)("div", {
        className: s()(o.i1, _),
        style: a,
        role: "img",
        "aria-label": c.intl.formatToPlainString(c.t["DT/PwH"], { a11y_text: r.label }),
        children: [
            t &&
                (0, i.jsx)("div", {
                    className: o.tL,
                    children: (0, i.jsx)("div", {
                        className: o.HX,
                        children: (0, i.jsx)(u.A, { frame: r, filterLayer: m, ...n }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: o.HX,
                children: [
                    (0, i.jsx)("img", {
                        src: d.A,
                        alt: "",
                        className: s()(o.wt, o.EX, { [o.GA]: t }),
                        "aria-hidden": !0,
                        draggable: !1,
                    }),
                    (0, i.jsx)(u.A, { frame: r, filterLayer: t ? R : f, ...n }),
                ],
            }),
        ],
    });
}
