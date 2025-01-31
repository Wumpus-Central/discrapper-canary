r.d(t, { z: () => c });
var n = r(200651),
    a = r(192379),
    i = r(658312),
    l = r(503082);
let u = { minInterval: 1000 / 60 },
    c = (e) => {
        let { drawCallback: t, size: r, fps: c = 60, useOffscreen: s = !0, playing: o = !0, useClockOptions: d = {} } = e,
            f = a.useMemo(() => Object.assign({ minInterval: 1000 / c }, u, d), [c, d]),
            m = a.useRef(null),
            h = a.useRef();
        a.useEffect(() => {
            null != h.current && h.current.setSize(r);
        }, [r]),
            a.useEffect(() => {
                if (null != m.current) {
                    let e = new l.Z(m.current);
                    (h.current = e), s && e.setupOffscreenCanvas();
                }
            }, [m, s, r]);
        let {
            ticking: p,
            stop: w,
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
                o && !p.current && y(), o || w();
            }, [o, y, w, p]),
            (0, n.jsx)('div', { children: (0, n.jsx)('canvas', { ref: m }) })
        );
    };
