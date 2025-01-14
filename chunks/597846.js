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
    let { drawCallback: t, size: n, fps: c = 60, useOffscreen: l = !0, playing: s = !0 } = e,
        o = i.useRef(null),
        d = i.useRef();
    i.useEffect(() => {
        null != d.current && d.current.setSize(n);
    }, [n]),
        i.useEffect(() => {
            null != d.current && d.current.setSize(n);
        }, [n]),
        i.useEffect(() => {
            if (null != o.current) {
                let e = new a.Z(o.current);
                (d.current = e), l && e.setupOffscreenCanvas();
            }
        }, [o, l, n]);
    let {
        ticking: f,
        stop: h,
        reset: v
    } = (0, u.Z)((e) => {
        if (null != d.current) {
            let { width: n, height: r } = d.current.canvas;
            d.current.clearRect({
                x: 0,
                y: 0,
                w: n,
                h: r
            }),
                t(d.current, e / 1000);
        }
    }, 1000 / c);
    return (
        i.useEffect(() => {
            s && !f.current && v(), !s && h();
        }, [s, v, h, f]),
        (0, r.jsx)('div', { children: (0, r.jsx)('canvas', { ref: o }) })
    );
};
