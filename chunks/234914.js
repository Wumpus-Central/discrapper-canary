var n = e(477900),
    s = e(582128),
    o = e(503698),
    i = e.n(o),
    a = e(289873),
    l = e(922278);
function u(r) {
    let { alt: t, ...e } = r,
        [o, i] = s.useState(!0);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            o && (0, n.jsx)(a.y, { type: a.y.Type.LOW_MOTION, className: l.wG }),
            (0, n.jsx)("img", { ...e, alt: t, onLoad: () => i(!1) }),
        ],
    });
}
e.d(
    t,
    {},
    {
        A: function (r) {
            let { src: t, backgroundSrc: e, alt: s, aspectRatio: o, className: a, imageChildClassName: h, ...c } = r;
            return (0, n.jsxs)("div", {
                className: i()(l.kL, a),
                children: [
                    (0, n.jsx)("img", { src: e, alt: s, className: l.iL }),
                    (0, n.jsx)("div", { className: l.CC }),
                    (0, n.jsx)("div", {
                        style: { aspectRatio: o },
                        className: l.ZS,
                        children: (0, n.jsx)(u, { src: t, alt: s, className: i()(l.Sl, h), ...c }),
                    }),
                ],
            });
        },
    },
);
