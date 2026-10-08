r.d(t, { A: () => o });
var n = r(477900),
    a = r(582128),
    s = r(503698),
    c = r.n(s),
    l = r(289873),
    i = r(922278);
function u(e) {
    let { alt: t, ...r } = e,
        [s, c] = a.useState(!0);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            s && (0, n.jsx)(l.y, { type: l.y.Type.LOW_MOTION, className: i.wG }),
            (0, n.jsx)("img", { ...r, alt: t, onLoad: () => c(!1) }),
        ],
    });
}
function o(e) {
    let { src: t, backgroundSrc: r, alt: a, aspectRatio: s, className: l, imageChildClassName: o, ...d } = e;
    return (0, n.jsxs)("div", {
        className: c()(i.kL, l),
        children: [
            (0, n.jsx)("img", { src: r, alt: a, className: i.iL }),
            (0, n.jsx)("div", { className: i.CC }),
            (0, n.jsx)("div", {
                style: { aspectRatio: s },
                className: i.ZS,
                children: (0, n.jsx)(u, { src: t, alt: a, className: c()(i.Sl, o), ...d }),
            }),
        ],
    });
}
