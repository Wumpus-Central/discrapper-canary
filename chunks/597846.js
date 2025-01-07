t.d(n, {
    z: function () {
        return o;
    }
});
var r = t(200651),
    i = t(192379),
    a = t(658312),
    u = t(503082);
let o = (e) => {
    let { drawCallback: n, size: t, fps: o = 60 } = e,
        c = i.useRef(null),
        l = i.useRef();
    return (
        i.useEffect(() => {
            if (null != c.current) {
                let e = new u.Z(c.current);
                e.setSize(t), (l.current = e);
            }
        }, [t]),
        (0, a.Z)((e) => {
            if (null != l.current) {
                let { width: t, height: r } = l.current.canvas;
                l.current.clearRect({
                    x: 0,
                    y: 0,
                    w: t,
                    h: r
                }),
                    n(l.current, e / 1000);
            }
        }, 1000 / o),
        (0, r.jsx)('div', { children: (0, r.jsx)('canvas', { ref: c }) })
    );
};
