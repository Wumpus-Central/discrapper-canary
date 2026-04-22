a.d(t, { A: () => c });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(761929),
    o = a(804271);
function d(e) {
    let { resizableNode: t, minHeight: a, onResize: l } = e,
        i = (0, r.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: l,
            orientation: r.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, n.jsx)("div", { onPointerDown: i, className: o.Di });
}
function c(e) {
    let { children: t, className: a, initialHeight: i, minHeight: r } = e,
        c = l.useRef(null),
        [u, m] = l.useState(i);
    return (0, n.jsxs)("div", {
        ref: c,
        className: o.kL,
        style: { minHeight: r, height: u },
        children: [
            (0, n.jsx)(d, { resizableNode: c, minHeight: r, onResize: m }),
            (0, n.jsx)("div", { className: s()(o.KZ, a), children: t }),
        ],
    });
}
