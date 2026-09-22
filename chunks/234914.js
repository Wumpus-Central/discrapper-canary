r.d(n, { A: () => u });
var t = r(477900),
    l = r(582128),
    i = r(503698),
    s = r.n(i),
    o = r(289873),
    a = r(922278);
function c(e) {
    let { alt: n, ...r } = e,
        [i, s] = l.useState(!0);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            i && (0, t.jsx)(o.y, { type: o.y.Type.LOW_MOTION, className: a.wG }),
            (0, t.jsx)("img", { ...r, alt: n, onLoad: () => s(!1) }),
        ],
    });
}
function u(e) {
    let { src: n, backgroundSrc: r, alt: l, aspectRatio: i, className: o, imageChildClassName: u, ...d } = e;
    return (0, t.jsxs)("div", {
        className: s()(a.kL, o),
        children: [
            (0, t.jsx)("img", { src: r, alt: l, className: a.iL }),
            (0, t.jsx)("div", { className: a.CC }),
            (0, t.jsx)("div", {
                style: { aspectRatio: i },
                className: a.ZS,
                children: (0, t.jsx)(c, { src: n, alt: l, className: s()(a.Sl, u), ...d }),
            }),
        ],
    });
}
