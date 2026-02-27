n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(397927),
    o = n(6976);
function c(e) {
    let { alt: t, ...n } = e,
        [r, a] = l.useState(!0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r && (0, i.jsx)(s.y$y, { type: s.y$y.Type.LOW_MOTION, className: o.wG }),
            (0, i.jsx)("img", { ...n, alt: t, onLoad: () => a(!1) }),
        ],
    });
}
function _(e) {
    let { src: t, backgroundSrc: n, alt: l, aspectRatio: r, className: s, imageChildClassName: _, ...E } = e;
    return (0, i.jsxs)("div", {
        className: a()(o.kL, s),
        children: [
            (0, i.jsx)("img", { src: n, alt: l, className: o.iL }),
            (0, i.jsx)("div", { className: o.CC }),
            (0, i.jsx)("div", {
                style: { aspectRatio: r },
                className: o.ZS,
                children: (0, i.jsx)(c, { src: t, alt: l, className: a()(o.Sl, _), ...E }),
            }),
        ],
    });
}
