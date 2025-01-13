n.d(t, {
    z: function () {
        return s;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(658312),
    u = n(503082);
let s = (e) => {
    let { drawCallback: t, size: n, fps: s = 60, useOffscreen: c = !0 } = e,
        l = i.useRef(null),
        o = i.useRef();
    return (
        i.useEffect(() => {
            null != o.current && o.current.setSize(n);
        }, [n]),
        i.useEffect(() => {
            null != o.current && o.current.setSize(n);
        }, [n]),
        i.useEffect(() => {
            if (null != l.current) {
                let e = new u.Z(l.current);
                (o.current = e), c && e.setupOffscreenCanvas();
            }
        }, [l, c, n]),
        (0, a.Z)((e) => {
            if (null != o.current) {
                let { width: n, height: r } = o.current.canvas;
                o.current.clearRect({
                    x: 0,
                    y: 0,
                    w: n,
                    h: r
                }),
                    t(o.current, e / 1000);
            }
        }, 1000 / s),
        (0, r.jsx)('div', { children: (0, r.jsx)('canvas', { ref: l }) })
    );
};
