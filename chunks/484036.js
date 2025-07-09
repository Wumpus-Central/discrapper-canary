(a.d(t, { Z: () => d }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(347469),
    o = a(191810);
function c(e) {
    let { resizableNode: t, minHeight: a, onResize: r } = e,
        l = (0, s.Z)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: r,
            orientation: s.y.VERTICAL_TOP,
            usePointerEvents: !0
        });
    return (0, n.jsx)('div', {
        onPointerDown: l,
        className: o.resizeHandle
    });
}
function d(e) {
    let { children: t, className: a, initialHeight: l, minHeight: s } = e,
        d = r.useRef(null),
        [u, m] = r.useState(l);
    return (0, n.jsxs)('div', {
        ref: d,
        className: o.container,
        style: {
            minHeight: s,
            height: u
        },
        children: [
            (0, n.jsx)(c, {
                resizableNode: d,
                minHeight: s,
                onResize: m
            }),
            (0, n.jsx)('div', {
                className: i()(o.subPanelContent, a),
                children: t
            })
        ]
    });
}
