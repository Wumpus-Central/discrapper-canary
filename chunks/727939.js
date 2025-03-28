n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(112724),
    a = n(241915),
    s = n(981631);
let l = {
    top: 48,
    bottom: 32,
    left: 32,
    right: 32
};
function c(e) {
    let { className: t, defaultPosition: n = s.VD2.BOTTOM_RIGHT, children: o, width: c, height: u, topOffset: d } = e,
        [f, _] = i.useState(n);
    return (0, r.jsx)(a._, {
        className: t,
        position: f,
        id: 0,
        onMove: (e, t) => _(t),
        maxX: c,
        maxY: u,
        edgeOffsetTop: null != d ? d : l.top,
        edgeOffsetBottom: l.bottom,
        edgeOffsetLeft: l.left,
        edgeOffsetRight: l.right,
        children: o
    });
}
let u = (0, o.Z)(c);
