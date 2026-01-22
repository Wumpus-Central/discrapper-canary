n.d(t, { A: () => s }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(761929),
    a = n(423765);
function s(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: s, minHeight: o, maxHeight: c } = e,
        [u, d] = l.useState(null);
    l.useEffect(() => {
        var e, n;
        d(null != (e = null == (n = t.current) ? void 0 : n.offsetHeight) ? e : null);
    }, [t]);
    let f = (0, i.A)({
        initialElementDimension: u,
        minDimension: o,
        maxDimension: c,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: s,
        orientation: i.R.VERTICAL_BOTTOM,
    });
    return (0, r.jsx)("div", {
        onMouseDown: f,
        className: a.D,
    });
}
