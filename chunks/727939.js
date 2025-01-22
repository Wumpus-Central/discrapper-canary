var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(112724),
    l = r(241915),
    u = r(981631);
let c = 48,
    d = 32,
    f = 32,
    p = 32;
function h(e) {
    let { className: n, defaultPosition: r = u.VD2.BOTTOM_RIGHT, children: i, width: s, height: h } = e,
        [_, m] = o.useState(r);
    return (0, a.jsx)(l._, {
        className: n,
        position: _,
        id: 0,
        onMove: (e, n) => m(n),
        maxX: s,
        maxY: h,
        edgeOffsetTop: c,
        edgeOffsetBottom: d,
        edgeOffsetLeft: f,
        edgeOffsetRight: p,
        children: i
    });
}
n.Z = (0, s.Z)(h);
