"use strict";
r.d(t, { A: () => l }), r(321073);
var i = r(627968),
    a = r(64700),
    n = r(599319);
let s = [
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
function l(e) {
    let { className: t, children: r, containerRef: l, faderSize: o, faderEdgeThreshold: c } = e,
        d = a.useRef(null),
        [_, u] = a.useState(0),
        [p, m] = a.useState(0),
        [h, g] = a.useState(0),
        f = a.useCallback(() => {
            null != d.current &&
                (u(d.current.getDistanceFromTop()),
                m(d.current.getDistanceFromBottom()),
                g(d.current.getScrollerState().offsetHeight));
        }, []);
    a.useEffect(() => {
        if ((f(), null == l.current)) return;
        let e = new ResizeObserver(() => {
            f();
        });
        return (
            e.observe(l.current),
            () => {
                e.disconnect();
            }
        );
    }, [d, l, f]);
    let b = a.useMemo(() => {
        if (0 === _ && 0 === p) return {};
        let e = [];
        if ((e.push("to bottom"), _ > 0)) {
            let t = c > 0 ? 1 - Math.min(c, _) / c : 1;
            for (let r = 0; r < s.length; r++) {
                let { position: i, alpha: a } = s[r],
                    n = (i * o).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${t + a * (1 - t)}) ${n}px`);
            }
        }
        if (p > 0) {
            let t = h - o,
                r = c > 0 ? 1 - Math.min(c, p) / c : 1;
            for (let i = s.length - 1; i >= 0; i--) {
                let { position: a, alpha: n } = s[i],
                    l = (t + (1 - a) * o).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${r + n * (1 - r)}) ${l}px`);
            }
        }
        return { maskImage: `linear-gradient(${e.join(",")})` };
    }, [p, _, c, o, h]);
    return (0, i.jsx)(n.zC, { ref: d, style: b, className: t, onScroll: f, children: r });
}
