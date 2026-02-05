n.d(t, { A: () => a }), n(321073);
var r = n(627968),
    s = n(64700),
    l = n(397927);
let i = [
    { position: 0, alpha: 0 },
    { position: 0.19, alpha: 0.262 },
    { position: 0.34, alpha: 0.459 },
    { position: 0.47, alpha: 0.618 },
    { position: 0.57, alpha: 0.722 },
    { position: 0.65, alpha: 0.806 },
    { position: 0.73, alpha: 0.874 },
    { position: 0.8, alpha: 0.925 },
    { position: 0.86, alpha: 0.958 },
    { position: 0.91, alpha: 0.979 },
    { position: 0.95, alpha: 0.992 },
    { position: 0.98, alpha: 0.998 },
    { position: 1, alpha: 1 },
];
function a(e) {
    let { className: t, children: n, containerRef: a, faderSize: o, faderEdgeThreshold: d } = e,
        c = s.useRef(null),
        [u, m] = s.useState(0),
        [h, x] = s.useState(0),
        [f, g] = s.useState(0),
        _ = s.useCallback(() => {
            null != c.current &&
                (m(c.current.getDistanceFromTop()),
                x(c.current.getDistanceFromBottom()),
                g(c.current.getScrollerState().offsetHeight));
        }, []);
    s.useEffect(() => {
        if ((_(), null == a.current)) return;
        let e = new ResizeObserver(() => {
            _();
        });
        return (
            e.observe(a.current),
            () => {
                e.disconnect();
            }
        );
    }, [c, a, _]);
    let j = s.useMemo(() => {
        if (0 === u && 0 === h) return {};
        let e = [];
        if ((e.push("to bottom"), u > 0)) {
            let t = d > 0 ? 1 - Math.min(d, u) / d : 1;
            for (let n = 0; n < i.length; n++) {
                let { position: r, alpha: s } = i[n],
                    l = (r * o).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${t + s * (1 - t)}) ${l}px`);
            }
        }
        if (h > 0) {
            let t = f - o,
                n = d > 0 ? 1 - Math.min(d, h) / d : 1;
            for (let r = i.length - 1; r >= 0; r--) {
                let { position: s, alpha: l } = i[r],
                    a = (t + (1 - s) * o).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${n + l * (1 - n)}) ${a}px`);
            }
        }
        return { maskImage: `linear-gradient(${e.join(",")})` };
    }, [h, u, d, o, f]);
    return (0, r.jsx)(l.zCo, { ref: c, style: j, className: t, onScroll: _, children: n });
}
