n.d(t, { A: () => c });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(761929),
    o = n(23599);
function d(e) {
    let { resizableNode: t, minHeight: n, onResize: i } = e,
        s = (0, r.A)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: i,
            orientation: r.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, a.jsx)("div", { onPointerDown: s, className: o.Di });
}
function c(e) {
    let { children: t, className: n, initialHeight: s, minHeight: r } = e,
        c = i.useRef(null),
        [u, m] = i.useState(s);
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
