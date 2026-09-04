n.d(t, { A: () => c });
var r = n(477900),
    l = n(582128),
    o = n(503698),
    i = n.n(o),
    a = n(289873),
    s = n(922278);
function u(e) {
    let { alt: t, ...n } = e,
        [o, i] = l.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o && (0, r.jsx)(a.y, { type: a.y.Type.LOW_MOTION, className: s.wG }),
            (0, r.jsx)("img", { ...n, alt: t, onLoad: () => i(!1) }),
        ],
    });
}
function c(e) {
    let { src: t, backgroundSrc: n, alt: l, aspectRatio: o, className: a, imageChildClassName: c, ...d } = e;
    return (0, r.jsxs)("div", {
        className: i()(s.kL, a),
        children: [
            (0, r.jsx)("img", { src: n, alt: l, className: s.iL }),
            (0, r.jsx)("div", { className: s.CC }),
            (0, r.jsx)("div", {
                style: { aspectRatio: o },
                className: s.ZS,
                children: (0, r.jsx)(u, { src: t, alt: l, className: i()(s.Sl, c), ...d }),
            }),
        ],
    });
}
