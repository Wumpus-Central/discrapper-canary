n.d(t, { E: () => u, l: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(885151),
    r = n(788593),
    o = n(461349),
    d = n(640830);
function c(e) {
    let { applicationId: t } = e,
        { data: n } = (0, s.k)(t),
        l = n?.supplementalData?.coverImageUrl;
    return null != l && "" !== l
        ? (0, i.jsx)("div", { className: a()(o.PY, d.LH), children: (0, i.jsx)(r.R, { imageSrc: l }) })
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
function g(e) {
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
