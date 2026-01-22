n.d(t, {
    A: () => d,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(761929),
    o = n(124070);

function c(e) {
    let { resizableNode: t, minHeight: n, onResize: l } = e,
        i = (0, s.A)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: l,
            orientation: s.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, a.jsx)("div", {
        onPointerDown: i,
        className: o.Di,
    });
}

function d(e) {
    let { children: t, className: n, initialHeight: i, minHeight: s } = e,
        d = l.useRef(null),
        [u, m] = l.useState(i);
    return (0, a.jsxs)("div", {
        ref: d,
        className: o.kL,
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
                className: r()(o.KZ, n),
                children: t,
            }),
        ],
    });
}
