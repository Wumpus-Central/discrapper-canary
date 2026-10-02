n.d(e, { A: () => g });
var r = n(477900),
    i = n(582128),
    l = n(503698),
    a = n.n(l),
    s = n(289873),
    o = n(922278);
function c(t) {
    let { alt: e, ...n } = t,
        [l, a] = i.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l && (0, r.jsx)(s.y, { type: s.y.Type.LOW_MOTION, className: o.wG }),
            (0, r.jsx)("img", { ...n, alt: e, onLoad: () => a(!1) }),
        ],
    });
}
function g(t) {
    let { src: e, backgroundSrc: n, alt: i, aspectRatio: l, className: s, imageChildClassName: g, ...u } = t;
    return (0, r.jsxs)("div", {
        className: a()(o.kL, s),
        children: [
            (0, r.jsx)("img", { src: n, alt: i, className: o.iL }),
            (0, r.jsx)("div", { className: o.CC }),
            (0, r.jsx)("div", {
                style: { aspectRatio: l },
                className: o.ZS,
                children: (0, r.jsx)(c, { src: e, alt: i, className: a()(o.Sl, g), ...u }),
            }),
        ],
    });
}
