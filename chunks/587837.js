s.d(n, { A: () => a });
var i = s(477900),
    t = s(582128),
    o = s(761929),
    u = s(21946);
function a(e) {
    let { resizableNode: n, onResize: s, onResizeEnd: a, minHeight: l, maxHeight: r } = e,
        [c, d] = t.useState(null);
    t.useEffect(() => {
        d(n.current?.offsetHeight ?? null);
    }, [n]);
    let m = (0, o.A)({
        initialElementDimension: c,
        minDimension: l,
        maxDimension: r,
        resizableDomNodeRef: n,
        onElementResize: s,
        onElementResizeEnd: a,
        orientation: o.R.VERTICAL_BOTTOM,
    });
    return (0, i.jsx)("div", { onMouseDown: m, className: u.D });
}
