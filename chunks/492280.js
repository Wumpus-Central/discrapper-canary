n.d(t, { E: () => u, l: () => A });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(585958),
    s = n(788593),
    o = n(461349),
    d = n(640830);
function c(e) {
    let { applicationId: t } = e,
        { coverImageUrl: n } = (0, l.n)(t);
    return null != n && "" !== n
        ? (0, i.jsx)("div", { className: a()(o.PY, d.LH), children: (0, i.jsx)(s.R, { imageSrc: n }) })
        : (0, i.jsx)("div", { className: a()(o.mD, d.LH) });
}
function u(e) {
    let { applicationId: t, size: n = "default", className: r } = e;
    return (0, i.jsxs)("div", {
        className: a()(d.kL, d.Yi, { [d.PG]: "small" === n, [d.$g]: "medium" === n }, r),
        "aria-hidden": !0,
        children: [
            null != t ? (0, i.jsx)(c, { applicationId: t }) : (0, i.jsx)("div", { className: o.mD }),
            (0, i.jsxs)("div", {
                className: d.RC,
                children: [(0, i.jsx)("div", { className: d.h$ }), (0, i.jsx)("div", { className: d.h$ })],
            }),
        ],
    });
}
function A(e) {
    let { applicationIds: t, size: n = "default", className: r } = e,
        l = "small" === n ? t.slice(0, 3) : t.slice(0, 4);
    return (0, i.jsx)("div", {
        className: a()(d.kL, d.Nu, { [d.PG]: "small" === n, [d.$g]: "medium" === n }, r),
        "aria-hidden": !0,
        children: l.map((e, t) => (0, i.jsx)(c, { applicationId: e }, t)),
    });
}
