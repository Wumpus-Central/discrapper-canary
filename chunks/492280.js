l.d(e, { E: () => m, l: () => u });
var i = l(477900);
l(582128);
var s = l(503698),
    t = l.n(s),
    n = l(569926),
    r = l(788593),
    c = l(365611),
    d = l(747760);
function o(a) {
    let { gameId: e } = a,
        { data: l } = (0, n.I)(e),
        s = l?.getCoverURL();
    return null != s && "" !== s
        ? (0, i.jsx)("div", { className: t()(c.PY, d.LH), children: (0, i.jsx)(r.R, { imageSrc: s }) })
        : (0, i.jsx)("div", { className: t()(c.mD, d.LH) });
}
function m(a) {
    let { gameId: e, className: l, gridClassName: s } = a;
    return (0, i.jsx)("div", {
        className: t()(d.kL, l),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: t()(d.Yi, s),
            children: [
                null != e ? (0, i.jsx)(o, { gameId: e }) : (0, i.jsx)("div", { className: c.mD }),
                (0, i.jsxs)("div", {
                    className: d.RC,
                    children: [(0, i.jsx)("div", { className: d.h$ }), (0, i.jsx)("div", { className: d.h$ })],
                }),
            ],
        }),
    });
}
function u(a) {
    let { gameIds: e, className: l, gridClassName: s } = a;
    return (0, i.jsx)("div", {
        className: t()(d.kL, l),
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: t()(d.Nu, s),
            children: e.slice(0, 4).map((a, e) => (0, i.jsx)(o, { gameId: a }, e)),
        }),
    });
}
