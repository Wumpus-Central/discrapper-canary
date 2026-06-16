"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(289873),
    l = n(446539);
function u(e) {
    let { alt: t, ...n } = e,
        [s, a] = r.useState(!0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && (0, i.jsx)(o.y, { type: o.y.Type.LOW_MOTION, className: l.wG }),
            (0, i.jsx)("img", { ...n, alt: t, onLoad: () => a(!1) }),
        ],
    });
}
function c(e) {
    let { src: t, backgroundSrc: n, alt: r, aspectRatio: s, className: o, imageChildClassName: c, ...d } = e;
    return (0, i.jsxs)("div", {
        className: a()(l.kL, o),
        children: [
            (0, i.jsx)("img", { src: n, alt: r, className: l.iL }),
            (0, i.jsx)("div", { className: l.CC }),
            (0, i.jsx)("div", {
                style: { aspectRatio: s },
                className: l.ZS,
                children: (0, i.jsx)(u, { src: t, alt: r, className: a()(l.Sl, c), ...d }),
            }),
        ],
    });
}
