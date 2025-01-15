n.d(t, {
    z: function () {
        return l;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(658312),
    u = n(503082);
let l = (e) => {
    let { drawCallback: t, size: n, fps: l = 60, useOffscreen: c = !0, playing: o = !0 } = e,
        s = i.useRef(null),
        d = i.useRef();
    i.useEffect(() => {
        null != d.current && d.current.setSize(n);
    }, [n]),
        i.useEffect(() => {
            null != d.current && d.current.setSize(n);
        }, [n]),
        i.useEffect(() => {
            if (null != s.current) {
                let e = new u.Z(s.current);
                (d.current = e), c && e.setupOffscreenCanvas();
            }
        }, [s, c, n]);
    let {
        ticking: f,
        stop: h,
        reset: w
    } = (0, a.Z)((e) => {
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
    }, 1000 / l);
    return (
        i.useEffect(() => {
            o && !f.current && w(), !o && h();
        }, [o, w, h, f]),
        (0, r.jsx)('div', { children: (0, r.jsx)('canvas', { ref: s }) })
    );
};
