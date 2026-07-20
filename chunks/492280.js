e.d(i, { E: () => p, l: () => u });
var l = e(627968);
e(64700);
var t = e(503698),
    n = e.n(t),
    s = e(569926),
    r = e(788593),
    c = e(220084),
    d = e(429085);
function o(a) {
    let { applicationId: i } = a,
        { data: e } = (0, s.I)(i),
        t = e?.getCoverURL();
    return null != t && "" !== t
        ? (0, l.jsx)("div", { className: n()(c.PY, d.LH), children: (0, l.jsx)(r.R, { imageSrc: t }) })
        : (0, l.jsx)("div", { className: n()(c.mD, d.LH) });
}
function p(a) {
    let { applicationId: i, className: e, gridClassName: t } = a;
    return (0, l.jsx)("div", {
        className: n()(d.kL, e),
        "aria-hidden": !0,
        children: (0, l.jsxs)("div", {
            className: n()(d.Yi, t),
            children: [
                null != i ? (0, l.jsx)(o, { applicationId: i }) : (0, l.jsx)("div", { className: c.mD }),
                (0, l.jsxs)("div", {
                    className: d.RC,
                    children: [(0, l.jsx)("div", { className: d.h$ }), (0, l.jsx)("div", { className: d.h$ })],
                }),
            ],
        }),
    });
}
function u(a) {
    let { applicationIds: i, className: e, gridClassName: t } = a;
    return (0, l.jsx)("div", {
        className: n()(d.kL, e),
        "aria-hidden": !0,
        children: (0, l.jsx)("div", {
            className: n()(d.Nu, t),
            children: i.slice(0, 4).map((a, i) => (0, l.jsx)(o, { applicationId: a }, i)),
        }),
    });
}
