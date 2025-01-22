n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(347469),
    s = n(613795);
function c(e) {
    let { resizableNode: t, minHeight: n, onResize: r } = e,
        l = (0, o.Z)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: r,
            orientation: o.y.VERTICAL_TOP,
            usePointerEvents: !0
        });
    return (0, a.jsx)('div', {
        onPointerDown: l,
        className: s.resizeHandle
    });
}
function d(e) {
    let { children: t, className: n, initialHeight: l, minHeight: o } = e,
        d = r.useRef(null),
        [u, h] = r.useState(l);
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
                onResize: h
            }),
            (0, a.jsx)('div', {
                className: i()(s.subPanelContent, n),
                children: t
            })
        ]
    });
}
