var r = n(477900),
    o = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(289873),
    l = n(922278);
function c(t) {
    let { alt: e, ...n } = t,
        [i, a] = o.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            i && (0, r.jsx)(s.y, { type: s.y.Type.LOW_MOTION, className: l.wG }),
            (0, r.jsx)("img", { ...n, alt: e, onLoad: () => a(!1) }),
        ],
    });
}
n.d(
    e,
    {},
    {
        A: function (t) {
            let { src: e, backgroundSrc: n, alt: o, aspectRatio: i, className: s, imageChildClassName: g, ...u } = t;
            return (0, r.jsxs)("div", {
                className: a()(l.kL, s),
                children: [
                    (0, r.jsx)("img", { src: n, alt: o, className: l.iL }),
                    (0, r.jsx)("div", { className: l.CC }),
                    (0, r.jsx)("div", {
                        style: { aspectRatio: i },
                        className: l.ZS,
                        children: (0, r.jsx)(c, { src: e, alt: o, className: a()(l.Sl, g), ...u }),
                    }),
                ],
            });
        },
    },
);
