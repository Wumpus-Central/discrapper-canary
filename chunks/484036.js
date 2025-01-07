n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(347469),
    s = n(613795);
function c(e) {
    let { resizableNode: t, minHeight: n, onResize: a } = e,
        l = (0, o.Z)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: a,
            orientation: o.y.VERTICAL_TOP,
            usePointerEvents: !0
        });
    return (0, r.jsx)('div', {
        onPointerDown: l,
        className: s.resizeHandle
    });
}
function d(e) {
    let { children: t, className: n, initialHeight: l, minHeight: o } = e,
        d = a.useRef(null),
        [u, h] = a.useState(l);
    return (0, r.jsxs)('div', {
        ref: d,
        className: s.container,
        style: {
            minHeight: o,
            height: u
        },
        children: [
            (0, r.jsx)(c, {
                resizableNode: d,
                minHeight: o,
                onResize: h
            }),
            (0, r.jsx)('div', {
                className: i()(s.subPanelContent, n),
                children: t
            })
        ]
    });
}
