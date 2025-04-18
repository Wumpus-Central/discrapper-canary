n.d(t, { Z: () => d }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(347469),
    o = n(191810);
function c(e) {
    let { resizableNode: t, minHeight: n, onResize: r } = e,
        l = (0, s.Z)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: r,
            orientation: s.y.VERTICAL_TOP,
            usePointerEvents: !0
        });
    return (0, a.jsx)('div', {
        onPointerDown: l,
        className: o.resizeHandle
    });
}
function d(e) {
    let { children: t, className: n, initialHeight: l, minHeight: s } = e,
        d = r.useRef(null),
        [u, m] = r.useState(l);
    return (0, a.jsxs)('div', {
        ref: d,
        className: o.container,
        style: {
            minHeight: s,
            height: u
        },
        children: [
            (0, a.jsx)(c, {
                resizableNode: d,
                minHeight: s,
                onResize: m
            }),
            (0, a.jsx)('div', {
                className: i()(o.subPanelContent, n),
                children: t
            })
        ]
    });
}
