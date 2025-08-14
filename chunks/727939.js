n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(241915),
    s = n(451478),
    l = n(981631);
let c = 48,
    u = 32,
    d = 32,
    f = 32,
    _ = function (e) {
        let { className: t, defaultPosition: n = l.VD2.BOTTOM_RIGHT, children: _, topOffset: p } = e,
            [h, m] = i.useState(n),
            g = (0, o.e7)([s.Z], () => s.Z.windowSize());
        return (0, r.jsx)(a._, {
            className: t,
            position: h,
            id: 0,
            onMove: (e, t) => m(t),
            maxX: g.width,
            maxY: g.height,
            edgeOffsetTop: null != p ? p : c,
            edgeOffsetBottom: u,
            edgeOffsetLeft: d,
            edgeOffsetRight: f,
            children: _,
        });
    };
