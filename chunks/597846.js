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
            p = a.useRef();
        a.useEffect(() => {
            null != p.current && r.w > 0 && r.h > 0 && p.current.setSize(r);
        }, [r]),
            a.useEffect(() => {
                if (null != m.current) {
                    let e = new l.Z(m.current);
                    (p.current = e), s && e.setupOffscreenCanvas();
                }
            }, [m, s, r]);
        let {
            ticking: h,
            stop: y,
            reset: w
        } = (0, i.Z)((e) => {
            if (null != p.current) {
                let { width: r, height: n } = p.current.canvas;
                p.current.clearRect({
                    x: 0,
                    y: 0,
                    w: r,
                    h: n
                }),
                    t(p.current, e / 1000);
            }
        }, f);
        return (
            a.useEffect(() => {
                o && !h.current && w(), o || y();
            }, [o, w, y, h]),
            (0, n.jsx)('div', { children: (0, n.jsx)('canvas', { ref: m }) })
        );
    };
