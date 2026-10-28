e.d(a, { E: () => t, l: () => j });
var i = e(477900);
e(582128);
var c = e(503698),
    d = e.n(c),
    l = e(454908),
    n = e(788593),
    r = e(365611),
    m = e(747760);
function h(s) {
    let { gameId: a } = s,
        { data: e } = (0, l.I)(a);
    return null != e
        ? (0, i.jsx)("div", {
              className: d()(r.PY, m.LH),
              children: (0, i.jsx)(n.R, { imageSrc: e.getCoverURL(), iconSrc: e.getIconURL(256), gameName: e.name }),
          })
        : (0, i.jsx)("div", { className: d()(r.mD, m.LH) });
}
function t(s) {
    let { gameId: a, className: e, gridClassName: c } = s;
    return (0, i.jsx)("div", {
        className: d()(m.kL, e),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: d()(m.Yi, c),
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
    let { gameIds: a, className: e, gridClassName: c } = s;
    return (0, i.jsx)("div", {
        className: d()(m.kL, e),
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: d()(m.Nu, c),
            children: a.slice(0, 4).map((s, a) => (0, i.jsx)(h, { gameId: s }, a)),
        }),
    });
}
