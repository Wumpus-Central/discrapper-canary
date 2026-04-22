n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(289873),
    o = n(446539);
function d(e) {
    let { alt: t, ...n } = e,
        [s, a] = l.useState(!0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && (0, i.jsx)(r.y, { type: r.y.Type.LOW_MOTION, className: o.wG }),
            (0, i.jsx)("img", { ...n, alt: t, onLoad: () => a(!1) }),
        ],
    });
}
function c(e) {
    let { src: t, backgroundSrc: n, alt: l, aspectRatio: s, className: r, imageChildClassName: c, ...u } = e;
    return (0, i.jsxs)("div", {
        className: a()(o.kL, r),
        children: [
            (0, i.jsx)("img", { src: n, alt: l, className: o.iL }),
            (0, i.jsx)("div", { className: o.CC }),
            (0, i.jsx)("div", {
                style: { aspectRatio: s },
                className: o.ZS,
                children: (0, i.jsx)(d, { src: t, alt: l, className: a()(o.Sl, c), ...u }),
            }),
        ],
    });
}
