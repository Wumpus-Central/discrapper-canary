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
    let { drawCallback: t, size: n, fps: c = 60, useOffscreen: l = !1 } = e,
        o = i.useRef(null),
        s = i.useRef(),
        d = i.useRef();
    return (
        i.useEffect(() => {
            null != s.current && s.current.setSize(n);
        }, [n]),
        i.useEffect(() => {
            if (null != o.current) {
                let e = new a.Z(o.current);
                if (((s.current = e), l)) {
                    let e = document.createElement('canvas');
                    document.appendChild(e), (d.current = e);
                }
            }
            return () => {
                null != d.current && document.removeChild(d.current);
            };
        }, [o, l]),
        (0, u.Z)((e) => {
            if (null != s.current) {
                let { width: n, height: r } = s.current.canvas;
                s.current.clearRect({
                    x: 0,
                    y: 0,
                    w: n,
                    h: r
                }),
                    t(s.current, e / 1000);
            }
        }, 1000 / c),
        (0, r.jsx)('div', { children: (0, r.jsx)('canvas', { ref: o }) })
    );
};
