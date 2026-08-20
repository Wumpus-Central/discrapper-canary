n.d(t, { A: () => c });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    o = n.n(i),
    u = n(289873),
    s = n(922278);
function a(e) {
    let { alt: t, ...n } = e,
        [i, o] = l.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            i && (0, r.jsx)(u.y, { type: u.y.Type.LOW_MOTION, className: s.wG }),
            (0, r.jsx)("img", { ...n, alt: t, onLoad: () => o(!1) }),
        ],
    });
}
function c(e) {
    let { src: t, backgroundSrc: n, alt: l, aspectRatio: i, className: u, imageChildClassName: c, ...d } = e;
    return (0, r.jsxs)("div", {
        className: o()(s.kL, u),
        children: [
            (0, r.jsx)("img", { src: n, alt: l, className: s.iL }),
            (0, r.jsx)("div", { className: s.CC }),
            (0, r.jsx)("div", {
                style: { aspectRatio: i },
                className: s.ZS,
                children: (0, r.jsx)(a, { src: t, alt: l, className: o()(s.Sl, c), ...d }),
            }),
        ],
    });
}
