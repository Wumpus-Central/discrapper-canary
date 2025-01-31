n.d(t, { Z: () => d }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(347469),
    s = n(613795);
function c(e) {
    let { resizableNode: t, minHeight: n, onResize: l } = e,
        r = (0, o.Z)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: l,
            orientation: o.y.VERTICAL_TOP,
            usePointerEvents: !0
        });
    return (0, a.jsx)('div', {
        onPointerDown: r,
        className: s.resizeHandle
    });
}
function d(e) {
    let { children: t, className: n, initialHeight: r, minHeight: o } = e,
        d = l.useRef(null),
        [u, m] = l.useState(r);
    return (0, a.jsxs)('div', {
        ref: d,
        className: s.container,
        style: {
            minHeight: o,
            height: u
        },
        children: [
            (0, a.jsx)(c, {
                resizableNode: d,
                minHeight: o,
                onResize: m
            }),
            (0, a.jsx)('div', {
                className: i()(s.subPanelContent, n),
                children: t
            })
        ]
    });
}
