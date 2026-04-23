r.d(t, { A: () => s }), r(321073);
var n = r(627968),
    i = r(64700),
    l = r(599319);
let a = [
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
function s(e) {
    let { className: t, children: r, containerRef: s, faderSize: o, faderEdgeThreshold: d } = e,
        c = i.useRef(null),
        [u, _] = i.useState(0),
        [m, h] = i.useState(0),
        [E, f] = i.useState(0),
        p = i.useCallback(() => {
            null != c.current &&
                (_(c.current.getDistanceFromTop()),
                h(c.current.getDistanceFromBottom()),
                f(c.current.getScrollerState().offsetHeight));
        }, []);
    i.useEffect(() => {
        if ((p(), null == s.current)) return;
        let e = new ResizeObserver(() => {
            p();
        });
        return (
            e.observe(s.current),
            () => {
                e.disconnect();
            }
        );
    }, [c, s, p]);
    let x = i.useMemo(() => {
        if (0 === u && 0 === m) return {};
        let e = [];
        if ((e.push("to bottom"), u > 0)) {
            let t = d > 0 ? 1 - Math.min(d, u) / d : 1;
            for (let r = 0; r < a.length; r++) {
                let { position: n, alpha: i } = a[r],
                    l = (n * o).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${t + i * (1 - t)}) ${l}px`);
            }
        }
        if (m > 0) {
            let t = E - o,
                r = d > 0 ? 1 - Math.min(d, m) / d : 1;
            for (let n = a.length - 1; n >= 0; n--) {
                let { position: i, alpha: l } = a[n],
                    s = (t + (1 - i) * o).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${r + l * (1 - r)}) ${s}px`);
            }
        }
        return { maskImage: `linear-gradient(${e.join(",")})` };
    }, [m, u, d, o, E]);
    return (0, n.jsx)(l.zC, { ref: c, style: x, className: t, onScroll: p, children: r });
}
