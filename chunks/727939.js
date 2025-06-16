n.d(t, { Z: () => u }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(241915),
    s = n(451478),
    l = n(981631);
let c = {
        top: 48,
        bottom: 32,
        left: 32,
        right: 32
    },
    u = function (e) {
        let { className: t, defaultPosition: n = l.VD2.BOTTOM_RIGHT, children: u, topOffset: d } = e,
            [f, _] = i.useState(n),
            p = (0, a.e7)([s.Z], () => s.Z.windowSize());
        return (0, r.jsx)(o._, {
            className: t,
            position: f,
            id: 0,
            onMove: (e, t) => _(t),
            maxX: p.width,
            maxY: p.height,
            edgeOffsetTop: null != d ? d : c.top,
            edgeOffsetBottom: c.bottom,
            edgeOffsetLeft: c.left,
            edgeOffsetRight: c.right,
            children: u
        });
    };
