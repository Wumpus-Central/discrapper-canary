n.d(t, { A: () => c });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    s = n.n(i),
    u = n(289873),
    o = n(922278);
function a(e) {
    let { alt: t, ...n } = e,
        [i, s] = l.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            i && (0, r.jsx)(u.y, { type: u.y.Type.LOW_MOTION, className: o.wG }),
            (0, r.jsx)("img", { ...n, alt: t, onLoad: () => s(!1) }),
        ],
    });
}
function c(e) {
    let { src: t, backgroundSrc: n, alt: l, aspectRatio: i, className: u, imageChildClassName: c, ...d } = e;
    return (0, r.jsxs)("div", {
        className: s()(o.kL, u),
        children: [
            (0, r.jsx)("img", { src: n, alt: l, className: o.iL }),
            (0, r.jsx)("div", { className: o.CC }),
            (0, r.jsx)("div", {
                style: { aspectRatio: i },
                className: o.ZS,
                children: (0, r.jsx)(a, { src: t, alt: l, className: s()(o.Sl, c), ...d }),
            }),
        ],
    });
}
