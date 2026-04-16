n.d(t, { E: () => u, l: () => A });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(454908),
    s = n(788593),
    o = n(442356),
    d = n(3869);
function c(e) {
    let { applicationId: t } = e,
        { data: n } = (0, r.I)(t),
        l = n?.getCoverURL();
    return null != l && "" !== l
        ? (0, i.jsx)("div", { className: a()(o.PY, d.LH), children: (0, i.jsx)(s.R, { imageSrc: l }) })
        : (0, i.jsx)("div", { className: a()(o.mD, d.LH) });
}
function u(e) {
    let { applicationId: t, className: n, gridClassName: l } = e;
    return (0, i.jsx)("div", {
        className: a()(d.kL, n),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: a()(d.Yi, l),
            children: [
                null != t ? (0, i.jsx)(c, { applicationId: t }) : (0, i.jsx)("div", { className: o.mD }),
                (0, i.jsxs)("div", {
                    className: d.RC,
                    children: [(0, i.jsx)("div", { className: d.h$ }), (0, i.jsx)("div", { className: d.h$ })],
                }),
            ],
        }),
    });
}
function A(e) {
    let { applicationIds: t, className: n, gridClassName: l } = e;
    return (0, i.jsx)("div", {
        className: a()(d.kL, n),
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: a()(d.Nu, l),
            children: t.slice(0, 4).map((e, t) => (0, i.jsx)(c, { applicationId: e }, t)),
        }),
    });
}
