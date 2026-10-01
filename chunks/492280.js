s.d(a, { E: () => o, l: () => u });
var i = s(477900);
s(582128);
var r = s(503698),
    n = s.n(r),
    l = s(569926),
    c = s(788593),
    t = s(365611),
    d = s(747760);
function m(e) {
    let { gameId: a } = e,
        { data: s } = (0, l.I)(a),
        r = s?.getCoverURL();
    return null != r && "" !== r
        ? (0, i.jsx)("div", { className: n()(t.PY, d.LH), children: (0, i.jsx)(c.R, { imageSrc: r }) })
        : (0, i.jsx)("div", { className: n()(t.mD, d.LH) });
}
function o(e) {
    let { gameId: a, className: s, gridClassName: r } = e;
    return (0, i.jsx)("div", {
        className: n()(d.kL, s),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: n()(d.Yi, r),
            children: [
                null != a ? (0, i.jsx)(m, { gameId: a }) : (0, i.jsx)("div", { className: t.mD }),
                (0, i.jsxs)("div", {
                    className: d.RC,
                    children: [(0, i.jsx)("div", { className: d.h$ }), (0, i.jsx)("div", { className: d.h$ })],
                }),
            ],
        }),
    });
}
function u(e) {
    let { gameIds: a, className: s, gridClassName: r } = e;
    return (0, i.jsx)("div", {
        className: n()(d.kL, s),
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: n()(d.Nu, r),
            children: a.slice(0, 4).map((e, a) => (0, i.jsx)(m, { gameId: e }, a)),
        }),
    });
}
