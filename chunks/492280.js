i.d(t, { E: () => d, l: () => g });
var n = i(627968);
i(64700);
var l = i(503698),
    s = i.n(l),
    r = i(569926),
    a = i(788593),
    c = i(220084),
    u = i(429085);
function o(e) {
    let { applicationId: t } = e,
        { data: i } = (0, r.I)(t),
        l = i?.getCoverURL();
    return null != l && "" !== l
        ? (0, n.jsx)("div", { className: s()(c.PY, u.LH), children: (0, n.jsx)(a.R, { imageSrc: l }) })
        : (0, n.jsx)("div", { className: s()(c.mD, u.LH) });
}
function d(e) {
    let { applicationId: t, className: i, gridClassName: l } = e;
    return (0, n.jsx)("div", {
        className: s()(u.kL, i),
        "aria-hidden": !0,
        children: (0, n.jsxs)("div", {
            className: s()(u.Yi, l),
            children: [
                null != t ? (0, n.jsx)(o, { applicationId: t }) : (0, n.jsx)("div", { className: c.mD }),
                (0, n.jsxs)("div", {
                    className: u.RC,
                    children: [(0, n.jsx)("div", { className: u.h$ }), (0, n.jsx)("div", { className: u.h$ })],
                }),
            ],
        }),
    });
}
function g(e) {
    let { applicationIds: t, className: i, gridClassName: l } = e;
    return (0, n.jsx)("div", {
        className: s()(u.kL, i),
        "aria-hidden": !0,
        children: (0, n.jsx)("div", {
            className: s()(u.Nu, l),
            children: t.slice(0, 4).map((e, t) => (0, n.jsx)(o, { applicationId: e }, t)),
        }),
    });
}
