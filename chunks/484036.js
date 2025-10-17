n.d(t, { Z: () => d }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    o = n(347469),
    s = n(340669);
function c(e) {
    let { resizableNode: t, minHeight: n, onResize: r } = e,
        i = (0, o.Z)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: r,
            orientation: o.y.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, a.jsx)("div", {
        onPointerDown: i,
        className: s.resizeHandle,
    });
}
function d(e) {
    let { children: t, className: n, initialHeight: i, minHeight: o } = e,
        d = r.useRef(null),
        [u, m] = r.useState(i);
    return (0, a.jsxs)("div", {
        ref: d,
        className: s.container,
        style: {
            minHeight: o,
            height: u,
        },
        children: [
            (0, a.jsx)(c, {
                resizableNode: d,
                minHeight: o,
                onResize: m,
            }),
            (0, a.jsx)("div", {
                className: l()(s.subPanelContent, n),
                children: t,
            }),
        ],
    });
}
