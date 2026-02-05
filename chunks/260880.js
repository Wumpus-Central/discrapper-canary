n.d(t, { A: () => c });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(761929),
    o = n(124070);
function d(e) {
    let { resizableNode: t, minHeight: n, onResize: s } = e,
        i = (0, r.A)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: s,
            orientation: r.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, a.jsx)("div", { onPointerDown: i, className: o.Di });
}
function c(e) {
    let { children: t, className: n, initialHeight: i, minHeight: r } = e,
        c = s.useRef(null),
        [u, m] = s.useState(i);
    return (0, a.jsxs)("div", {
        ref: c,
        className: o.kL,
        style: { minHeight: r, height: u },
        children: [
            (0, a.jsx)(d, { resizableNode: c, minHeight: r, onResize: m }),
            (0, a.jsx)("div", { className: l()(o.KZ, n), children: t }),
        ],
    });
}
