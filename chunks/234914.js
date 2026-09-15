t.d(n, { A: () => c });
var r = t(477900),
    l = t(582128),
    i = t(503698),
    s = t.n(i),
    o = t(289873),
    a = t(922278);
function u(e) {
    let { alt: n, ...t } = e,
        [i, s] = l.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            i && (0, r.jsx)(o.y, { type: o.y.Type.LOW_MOTION, className: a.wG }),
            (0, r.jsx)("img", { ...t, alt: n, onLoad: () => s(!1) }),
        ],
    });
}
function c(e) {
    let { src: n, backgroundSrc: t, alt: l, aspectRatio: i, className: o, imageChildClassName: c, ...d } = e;
    return (0, r.jsxs)("div", {
        className: s()(a.kL, o),
        children: [
            (0, r.jsx)("img", { src: t, alt: l, className: a.iL }),
            (0, r.jsx)("div", { className: a.CC }),
            (0, r.jsx)("div", {
                style: { aspectRatio: i },
                className: a.ZS,
                children: (0, r.jsx)(u, { src: n, alt: l, className: s()(a.Sl, c), ...d }),
            }),
        ],
    });
}
