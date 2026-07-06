n.d(t, { A: () => c });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(289873),
    s = n(446539);
function u(e) {
    let { alt: t, ...n } = e,
        [i, a] = r.useState(!0);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            i && (0, l.jsx)(o.y, { type: o.y.Type.LOW_MOTION, className: s.wG }),
            (0, l.jsx)("img", { ...n, alt: t, onLoad: () => a(!1) }),
        ],
    });
}
function c(e) {
    let { src: t, backgroundSrc: n, alt: r, aspectRatio: i, className: o, imageChildClassName: c, ...d } = e;
    return (0, l.jsxs)("div", {
        className: a()(s.kL, o),
        children: [
            (0, l.jsx)("img", { src: n, alt: r, className: s.iL }),
            (0, l.jsx)("div", { className: s.CC }),
            (0, l.jsx)("div", {
                style: { aspectRatio: i },
                className: s.ZS,
                children: (0, l.jsx)(u, { src: t, alt: r, className: a()(s.Sl, c), ...d }),
            }),
        ],
    });
}
