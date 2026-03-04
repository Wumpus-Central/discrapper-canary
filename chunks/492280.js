n.d(t, { E: () => u, l: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(885151),
    r = n(788593),
    o = n(461349),
    c = n(640830);
function d(e) {
    let { applicationId: t } = e,
        { data: n } = (0, s.k)(t),
        l = n?.supplementalData?.coverImageUrl;
    return null != l && "" !== l
        ? (0, i.jsx)("div", { className: a()(o.PY, c.LH), children: (0, i.jsx)(r.R, { imageSrc: l }) })
        : (0, i.jsx)("div", { className: a()(o.mD, c.LH) });
}
function u(e) {
    let { applicationId: t, size: n = "default", className: l } = e;
    return (0, i.jsxs)("div", {
        className: a()(c.kL, c.Yi, { [c.PG]: "small" === n, [c.$g]: "medium" === n }, l),
        "aria-hidden": !0,
        children: [
            null != t ? (0, i.jsx)(d, { applicationId: t }) : (0, i.jsx)("div", { className: o.mD }),
            (0, i.jsxs)("div", {
                className: c.RC,
                children: [(0, i.jsx)("div", { className: c.h$ }), (0, i.jsx)("div", { className: c.h$ })],
            }),
        ],
    });
}
function g(e) {
    let { applicationIds: t, size: n = "default", className: l } = e,
        s = "small" === n ? t.slice(0, 3) : t.slice(0, 4);
    return (0, i.jsx)("div", {
        className: a()(c.kL, c.Nu, { [c.PG]: "small" === n, [c.$g]: "medium" === n }, l),
        "aria-hidden": !0,
        children: s.map((e, t) => (0, i.jsx)(d, { applicationId: e }, t)),
    });
}
