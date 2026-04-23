n.d(t, { A: () => r });
var i = n(627968),
    l = n(64700),
    s = n(761929),
    a = n(5794);
function r(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, minHeight: o, maxHeight: d } = e,
        [c, u] = l.useState(null);
    l.useEffect(() => {
        u(t.current?.offsetHeight ?? null);
    }, [t]);
    let h = (0, s.A)({
        initialElementDimension: c,
        minDimension: o,
        maxDimension: d,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: r,
        orientation: s.R.VERTICAL_BOTTOM,
    });
    return (0, i.jsx)("div", { onMouseDown: h, className: a.D });
}
