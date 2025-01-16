r.d(t, {
    z: function () {
        return o;
    }
});
var n = r(200651),
    a = r(192379),
    i = r(658312),
    u = r(503082);
let l = { minInterval: 1000 / 60 },
    o = (e) => {
        let { drawCallback: t, size: r, fps: o = 60, useOffscreen: s = !0, playing: c = !0, useClockOptions: d = {} } = e,
            f = a.useMemo(() => Object.assign({ minInterval: 1000 / o }, l, d), [o, d]),
            m = a.useRef(null),
            h = a.useRef();
        a.useEffect(() => {
            null != h.current && h.current.setSize(r);
        }, [r]),
            a.useEffect(() => {
                null != h.current && h.current.setSize(r);
            }, [r]),
            a.useEffect(() => {
                if (null != m.current) {
                    let e = new u.Z(m.current);
                    (h.current = e), s && e.setupOffscreenCanvas();
                }
            }, [m, s, r]);
        let {
            ticking: w,
            stop: p,
            reset: y
        } = (0, i.Z)((e) => {
            if (null != h.current) {
                let { width: r, height: n } = h.current.canvas;
                h.current.clearRect({
                    x: 0,
                    y: 0,
                    w: r,
                    h: n
                }),
                    t(h.current, e / 1000);
            }
        }, f);
        return (
            a.useEffect(() => {
                c && !w.current && y(), !c && p();
            }, [c, y, p, w]),
            (0, n.jsx)('div', { children: (0, n.jsx)('canvas', { ref: m }) })
        );
    };
