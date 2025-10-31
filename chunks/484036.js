n.d(t, { Z: () => d }), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(347469),
    o = n(340669);
function c(e) {
    let { resizableNode: t, minHeight: n, onResize: i } = e,
        l = (0, s.Z)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: i,
            orientation: s.y.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, a.jsx)("div", {
        onPointerDown: l,
        className: o.resizeHandle,
    });
}
function d(e) {
    let { children: t, className: n, initialHeight: l, minHeight: s } = e,
        d = i.useRef(null),
        [u, m] = i.useState(l);
    return (0, a.jsxs)("div", {
        ref: d,
        className: o.container,
        style: {
            minHeight: s,
            height: u,
        },
        children: [
            (0, a.jsx)(c, {
                resizableNode: d,
                minHeight: s,
                onResize: m,
            }),
            (0, a.jsx)("div", {
                className: r()(o.subPanelContent, n),
                children: t,
            }),
        ],
    });
}
