n.d(t, { A: () => r });
var i = n(627968),
    l = n(64700),
    s = n(761929),
    a = n(572498);
function r(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, minHeight: o, maxHeight: c } = e,
        [d, u] = l.useState(null);
    l.useEffect(() => {
        u(t.current?.offsetHeight ?? null);
    }, [t]);
    let h = (0, s.A)({
        initialElementDimension: d,
        minDimension: o,
        maxDimension: c,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: r,
        orientation: s.R.VERTICAL_BOTTOM,
    });
    return (0, i.jsx)("div", { onMouseDown: h, className: a.D });
}
