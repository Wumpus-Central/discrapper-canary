l.d(t, {
    A: () => a,
}),
    l(896048),
    l(321073);
var n = l(627968),
    r = l(64700),
    s = l(397927);
let i = [
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

function a(e) {
    let { className: t, children: l, containerRef: a, faderSize: o, faderEdgeThreshold: c } = e,
        d = r.useRef(null),
        [u, f] = r.useState(0),
        [m, x] = r.useState(0),
        [b, h] = r.useState(0),
        v = r.useCallback(() => {
            null != d.current &&
                (f(d.current.getDistanceFromTop()),
                x(d.current.getDistanceFromBottom()),
                h(d.current.getScrollerState().offsetHeight));
        }, []);
    r.useEffect(() => {
        if ((v(), null == a.current)) return;
        let e = new ResizeObserver(() => {
            v();
        });
        return (
            e.observe(a.current),
            () => {
                e.disconnect();
            }
        );
    }, [d, a, v]);
    let g = r.useMemo(() => {
        if (0 === u && 0 === m) return {};
        let e = [];
        if ((e.push("to bottom"), u > 0)) {
            let t = c > 0 ? 1 - Math.min(c, u) / c : 1;
            for (let l = 0; l < i.length; l++) {
                let { position: n, alpha: r } = i[l],
                    s = (n * o).toFixed(2);
                e.push("hsla(0, 0%, 0%, ".concat(t + r * (1 - t), ") ").concat(s, "px"));
            }
        }
        if (m > 0) {
            let t = b - o,
                l = c > 0 ? 1 - Math.min(c, m) / c : 1;
            for (let n = i.length - 1; n >= 0; n--) {
                let { position: r, alpha: s } = i[n],
                    a = (t + (1 - r) * o).toFixed(2);
                e.push("hsla(0, 0%, 0%, ".concat(l + s * (1 - l), ") ").concat(a, "px"));
            }
        }
        return {
            maskImage: "linear-gradient(".concat(e.join(","), ")"),
        };
    }, [m, u, c, o, b]);
    return (0, n.jsx)(s.zCo, {
        ref: d,
        style: g,
        className: t,
        onScroll: v,
        children: l,
    });
}
