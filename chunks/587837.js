"use strict";
n.d(t, { A: () => a });
var i = n(627968),
    s = n(64700),
    l = n(761929),
    r = n(423765);
function a(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: a, minHeight: o, maxHeight: c } = e,
        [d, u] = s.useState(null);
    s.useEffect(() => {
        u(t.current?.offsetHeight ?? null);
    }, [t]);
    let h = (0, l.A)({
        initialElementDimension: d,
        minDimension: o,
        maxDimension: c,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: a,
        orientation: l.R.VERTICAL_BOTTOM,
    });
    return (0, i.jsx)("div", { onMouseDown: h, className: r.D });
}
