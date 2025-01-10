n.d(t, {
    z: function () {
        return c;
    }
});
var r = n(200651),
    i = n(192379),
    u = n(658312),
    a = n(503082);
let c = (e) => {
    let { drawCallback: t, size: n, fps: c = 60, useOffscreen: l = !0 } = e,
        s = i.useRef(null),
        o = i.useRef();
    return (
        i.useEffect(() => {
            null != o.current && o.current.setSize(n);
        }, [n]),
        i.useEffect(() => {
            null != o.current && o.current.setSize(n);
        }, [n]),
        i.useEffect(() => {
            if (null != s.current) {
                let e = new a.Z(s.current);
                (o.current = e), l && e.setupOffscreenCanvas();
            }
        }, [s, l, n]),
        (0, u.Z)((e) => {
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
        }, 1000 / c),
        (0, r.jsx)('div', { children: (0, r.jsx)('canvas', { ref: s }) })
    );
};
