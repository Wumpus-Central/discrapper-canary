n.d(t, { Z: () => s }), n(388685), n(539854);
var r = n(54381),
    l = n(473749),
    i = n(481060);
let a = [
    {
        position: 0,
        alpha: 0,
    },
    {
        position: 0.19,
        alpha: 0.262,
    },
    {
        position: 0.34,
        alpha: 0.459,
    },
    {
        position: 0.47,
        alpha: 0.618,
    },
    {
        position: 0.57,
        alpha: 0.722,
    },
    {
        position: 0.65,
        alpha: 0.806,
    },
    {
        position: 0.73,
        alpha: 0.874,
    },
    {
        position: 0.8,
        alpha: 0.925,
    },
    {
        position: 0.86,
        alpha: 0.958,
    },
    {
        position: 0.91,
        alpha: 0.979,
    },
    {
        position: 0.95,
        alpha: 0.992,
    },
    {
        position: 0.98,
        alpha: 0.998,
    },
    {
        position: 1,
        alpha: 1,
    },
];
function s(e) {
    let { className: t, children: n, containerRef: s, faderSize: o, faderEdgeThreshold: c } = e,
        u = l.useRef(null),
        [d, m] = l.useState(0),
        [f, b] = l.useState(0),
        [x, h] = l.useState(0),
        g = l.useCallback(() => {
            null != u.current &&
                (m(u.current.getDistanceFromTop()),
                b(u.current.getDistanceFromBottom()),
                h(u.current.getScrollerState().offsetHeight));
        }, []);
    l.useEffect(() => {
        if ((g(), null == s.current)) return;
        let e = new ResizeObserver(() => {
            g();
        });
        return (
            e.observe(s.current),
            () => {
                e.disconnect();
            }
        );
    }, [u, s, g]);
    let p = l.useMemo(() => {
        if (0 === d && 0 === f) return {};
        let e = [];
        if ((e.push("to bottom"), d > 0)) {
            let t = c > 0 ? 1 - Math.min(c, d) / c : 1;
            for (let n = 0; n < a.length; n++) {
                let { position: r, alpha: l } = a[n],
                    i = (r * o).toFixed(2);
                e.push("hsla(0, 0%, 0%, ".concat(t + l * (1 - t), ") ").concat(i, "px"));
            }
        }
        if (f > 0) {
            let t = x - o,
                n = c > 0 ? 1 - Math.min(c, f) / c : 1;
            for (let r = a.length - 1; r >= 0; r--) {
                let { position: l, alpha: i } = a[r],
                    s = (t + (1 - l) * o).toFixed(2);
                e.push("hsla(0, 0%, 0%, ".concat(n + i * (1 - n), ") ").concat(s, "px"));
            }
        }
        return { maskImage: "linear-gradient(".concat(e.join(","), ")") };
    }, [f, d, c, o, x]);
    return (0, r.jsx)(i.xVE, {
        ref: u,
        style: p,
        className: t,
        onScroll: g,
        children: n,
    });
}
