r.d(t, { z: () => c });
var n = r(255367),
    a = r(73800),
    i = r(658312),
    l = r(503082);
let u = { minInterval: 1000 / 60 },
    c = (e) => {
        let { drawCallback: t, size: r, fps: c = 60, useOffscreen: s = !0, playing: o = !0, useClockOptions: d = {} } = e,
            f = a.useMemo(() => Object.assign({ minInterval: 1000 / c }, u, d), [c, d]),
            m = a.useRef(null),
            h = a.useRef(null);
        a.useEffect(() => {
            null != h.current && r.w > 0 && r.h > 0 && h.current.setSize(r);
        }, [r]),
            a.useEffect(() => {
                if (null != m.current) {
                    let e = new l.Z(m.current);
                    (h.current = e), s && e.setupOffscreenCanvas();
                }
            }, [m, s, r]);
        let {
            ticking: p,
            stop: y,
            reset: w
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
                o && !p.current && w(), o || y();
            }, [o, w, y, p]),
            (0, n.jsx)('div', { children: (0, n.jsx)('canvas', { ref: m }) })
        );
    };
