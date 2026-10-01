n.d(t, { A: () => u });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(289873),
    o = n(922278);
function c(e) {
    let { alt: t, ...n } = e,
        [i, a] = l.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            i && (0, r.jsx)(s.y, { type: s.y.Type.LOW_MOTION, className: o.wG }),
            (0, r.jsx)("img", { ...n, alt: t, onLoad: () => a(!1) }),
        ],
    });
}
function u(e) {
    let { src: t, backgroundSrc: n, alt: l, aspectRatio: i, className: s, imageChildClassName: u, ...d } = e;
    return (0, r.jsxs)("div", {
        className: a()(o.kL, s),
        children: [
            (0, r.jsx)("img", { src: n, alt: l, className: o.iL }),
            (0, r.jsx)("div", { className: o.CC }),
            (0, r.jsx)("div", {
                style: { aspectRatio: i },
                className: o.ZS,
                children: (0, r.jsx)(c, { src: t, alt: l, className: a()(o.Sl, u), ...d }),
            }),
        ],
    });
}
