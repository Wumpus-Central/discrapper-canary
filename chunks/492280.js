n.d(t, { E: () => u, l: () => _ });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(454908),
    r = n(788593),
    o = n(442356),
    c = n(3869);
function d(e) {
    let { applicationId: t } = e,
        { data: n } = (0, s.I)(t),
        a = n?.getCoverURL();
    return null != a && "" !== a
        ? (0, i.jsx)("div", { className: l()(o.PY, c.LH), children: (0, i.jsx)(r.R, { imageSrc: a }) })
        : (0, i.jsx)("div", { className: l()(o.mD, c.LH) });
}
function u(e) {
    let { applicationId: t, className: n, gridClassName: a } = e;
    return (0, i.jsx)("div", {
        className: l()(c.kL, n),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: l()(c.Yi, a),
            children: [
                null != t ? (0, i.jsx)(d, { applicationId: t }) : (0, i.jsx)("div", { className: o.mD }),
                (0, i.jsxs)("div", {
                    className: c.RC,
                    children: [(0, i.jsx)("div", { className: c.h$ }), (0, i.jsx)("div", { className: c.h$ })],
                }),
            ],
        }),
    });
}
function _(e) {
    let { applicationIds: t, className: n, gridClassName: a } = e;
    return (0, i.jsx)("div", {
        className: l()(c.kL, n),
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: l()(c.Nu, a),
            children: t.slice(0, 4).map((e, t) => (0, i.jsx)(d, { applicationId: e }, t)),
        }),
    });
}
