n.d(e, { A: () => g });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    l = n(289873),
    o = n(922278);
function c(t) {
    let { alt: e, ...n } = t,
        [s, a] = i.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            s && (0, r.jsx)(l.y, { type: l.y.Type.LOW_MOTION, className: o.wG }),
            (0, r.jsx)("img", { ...n, alt: e, onLoad: () => a(!1) }),
        ],
    });
}
function g(t) {
    let { src: e, backgroundSrc: n, alt: i, aspectRatio: s, className: l, imageChildClassName: g, ...u } = t;
    return (0, r.jsxs)("div", {
        className: a()(o.kL, l),
        children: [
            (0, r.jsx)("img", { src: n, alt: i, className: o.iL }),
            (0, r.jsx)("div", { className: o.CC }),
            (0, r.jsx)("div", {
                style: { aspectRatio: s },
                className: o.ZS,
                children: (0, r.jsx)(c, { src: e, alt: i, className: a()(o.Sl, g), ...u }),
            }),
        ],
    });
}
