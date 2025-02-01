n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(112724),
    s = n(241915),
    o = n(981631);
let l = 48,
    u = 32,
    c = 32,
    d = 32;
function f(e) {
    let { className: t, defaultPosition: n = o.VD2.BOTTOM_RIGHT, children: a, width: f, height: _ } = e,
        [p, h] = r.useState(n);
    return (0, i.jsx)(s._, {
        className: t,
        position: p,
        id: 0,
        onMove: (e, t) => h(t),
        maxX: f,
        maxY: _,
        edgeOffsetTop: l,
        edgeOffsetBottom: u,
        edgeOffsetLeft: c,
        edgeOffsetRight: d,
        children: a
    });
}
let _ = (0, a.Z)(f);
