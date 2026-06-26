i.d(t, { E: () => d, l: () => g });
var n = i(627968);
i(64700);
var l = i(503698),
    s = i.n(l),
    a = i(569926),
    r = i(788593),
    c = i(442356),
    o = i(3869);
function u(e) {
    let { applicationId: t } = e,
        { data: i } = (0, a.I)(t),
        l = i?.getCoverURL();
    return null != l && "" !== l
        ? (0, n.jsx)("div", { className: s()(c.PY, o.LH), children: (0, n.jsx)(r.R, { imageSrc: l }) })
        : (0, n.jsx)("div", { className: s()(c.mD, o.LH) });
}
function d(e) {
    let { applicationId: t, className: i, gridClassName: l } = e;
    return (0, n.jsx)("div", {
        className: s()(o.kL, i),
        "aria-hidden": !0,
        children: (0, n.jsxs)("div", {
            className: s()(o.Yi, l),
            children: [
                null != t ? (0, n.jsx)(u, { applicationId: t }) : (0, n.jsx)("div", { className: c.mD }),
                (0, n.jsxs)("div", {
                    className: o.RC,
                    children: [(0, n.jsx)("div", { className: o.h$ }), (0, n.jsx)("div", { className: o.h$ })],
                }),
            ],
        }),
    });
}
function g(e) {
    let { applicationIds: t, className: i, gridClassName: l } = e;
    return (0, n.jsx)("div", {
        className: s()(o.kL, i),
        "aria-hidden": !0,
        children: (0, n.jsx)("div", {
            className: s()(o.Nu, l),
            children: t.slice(0, 4).map((e, t) => (0, n.jsx)(u, { applicationId: e }, t)),
        }),
    });
}
