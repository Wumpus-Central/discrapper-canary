i.d(t, { A: () => c });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    a = i(289873),
    u = i(446539);
function o(e) {
    let { alt: t, ...i } = e,
        [s, r] = l.useState(!0);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            s && (0, n.jsx)(a.y, { type: a.y.Type.LOW_MOTION, className: u.wG }),
            (0, n.jsx)("img", { ...i, alt: t, onLoad: () => r(!1) }),
        ],
    });
}
function c(e) {
    let { src: t, backgroundSrc: i, alt: l, aspectRatio: s, className: a, imageChildClassName: c, ...d } = e;
    return (0, n.jsxs)("div", {
        className: r()(u.kL, a),
        children: [
            (0, n.jsx)("img", { src: i, alt: l, className: u.iL }),
            (0, n.jsx)("div", { className: u.CC }),
            (0, n.jsx)("div", {
                style: { aspectRatio: s },
                className: u.ZS,
                children: (0, n.jsx)(o, { src: t, alt: l, className: r()(u.Sl, c), ...d }),
            }),
        ],
    });
}
