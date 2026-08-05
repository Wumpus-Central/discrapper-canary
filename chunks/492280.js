i.d(e, { E: () => m, l: () => u });
var l = i(477900);
i(582128);
var t = i(503698),
    s = i.n(t),
    n = i(569926),
    r = i(788593),
    c = i(350956),
    d = i(478725);
function o(a) {
    let { gameId: e } = a,
        { data: i } = (0, n.I)(e),
        t = i?.getCoverURL();
    return null != t && "" !== t
        ? (0, l.jsx)("div", { className: s()(c.PY, d.LH), children: (0, l.jsx)(r.R, { imageSrc: t }) })
        : (0, l.jsx)("div", { className: s()(c.mD, d.LH) });
}
function m(a) {
    let { gameId: e, className: i, gridClassName: t } = a;
    return (0, l.jsx)("div", {
        className: s()(d.kL, i),
        "aria-hidden": !0,
        children: (0, l.jsxs)("div", {
            className: s()(d.Yi, t),
            children: [
                null != e ? (0, l.jsx)(o, { gameId: e }) : (0, l.jsx)("div", { className: c.mD }),
                (0, l.jsxs)("div", {
                    className: d.RC,
                    children: [(0, l.jsx)("div", { className: d.h$ }), (0, l.jsx)("div", { className: d.h$ })],
                }),
            ],
        }),
    });
}
function u(a) {
    let { gameIds: e, className: i, gridClassName: t } = a;
    return (0, l.jsx)("div", {
        className: s()(d.kL, i),
        "aria-hidden": !0,
        children: (0, l.jsx)("div", {
            className: s()(d.Nu, t),
            children: e.slice(0, 4).map((a, e) => (0, l.jsx)(o, { gameId: a }, e)),
        }),
    });
}
