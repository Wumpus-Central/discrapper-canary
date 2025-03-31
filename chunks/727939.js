n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(241915),
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
            p = (0, o.e7)([s.Z], () => s.Z.windowSize());
        return (0, r.jsx)(a._, {
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
