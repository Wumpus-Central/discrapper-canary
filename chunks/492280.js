e.d(a, { E: () => t, l: () => j });
var i = e(477900);
e(582128);
var d = e(503698),
    c = e.n(d),
    l = e(569926),
    n = e(788593),
    r = e(365611),
    m = e(747760);
function h(s) {
    let { gameId: a } = s,
        { data: e } = (0, l.I)(a),
        d = e?.getCoverURL();
    return null != d && "" !== d
        ? (0, i.jsx)("div", { className: c()(r.PY, m.LH), children: (0, i.jsx)(n.R, { imageSrc: d }) })
        : (0, i.jsx)("div", { className: c()(r.mD, m.LH) });
}
function t(s) {
    let { gameId: a, className: e, gridClassName: d } = s;
    return (0, i.jsx)("div", {
        className: c()(m.kL, e),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: c()(m.Yi, d),
            children: [
                null != a ? (0, i.jsx)(h, { gameId: a }) : (0, i.jsx)("div", { className: r.mD }),
                (0, i.jsxs)("div", {
                    className: m.RC,
                    children: [(0, i.jsx)("div", { className: m.h$ }), (0, i.jsx)("div", { className: m.h$ })],
                }),
            ],
        }),
    });
}
function j(s) {
    let { gameIds: a, className: e, gridClassName: d } = s;
    return (0, i.jsx)("div", {
        className: c()(m.kL, e),
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: c()(m.Nu, d),
            children: a.slice(0, 4).map((s, a) => (0, i.jsx)(h, { gameId: s }, a)),
        }),
    });
}
