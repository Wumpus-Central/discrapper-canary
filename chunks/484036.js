n.d(t, { Z: () => d }), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(347469),
    o = n(888978);
function c(e) {
    let { resizableNode: t, minHeight: n, onResize: l } = e,
        r = (0, s.Z)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: l,
            orientation: s.y.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, a.jsx)("div", {
        onPointerDown: r,
        className: o.resizeHandle,
    });
}
function d(e) {
    let { children: t, className: n, initialHeight: r, minHeight: s } = e,
        d = l.useRef(null),
        [u, m] = l.useState(r);
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
                className: i()(o.subPanelContent, n),
                children: t,
            }),
        ],
    });
}
