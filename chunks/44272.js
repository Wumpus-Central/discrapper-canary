t.d(l, { Z: () => a }), t(47120), t(653041);
var i = t(200651),
    n = t(192379),
    s = t(481060);
let r = [
    {
        position: 0,
        alpha: 0
    },
    {
        position: 0.19,
        alpha: 0.262
    },
    {
        position: 0.34,
        alpha: 0.459
    },
    {
        position: 0.47,
        alpha: 0.618
    },
    {
        position: 0.57,
        alpha: 0.722
    },
    {
        position: 0.65,
        alpha: 0.806
    },
    {
        position: 0.73,
        alpha: 0.874
    },
    {
        position: 0.8,
        alpha: 0.925
    },
    {
        position: 0.86,
        alpha: 0.958
    },
    {
        position: 0.91,
        alpha: 0.979
    },
    {
        position: 0.95,
        alpha: 0.992
    },
    {
        position: 0.98,
        alpha: 0.998
    },
    {
        position: 1,
        alpha: 1
    }
];
function a(e) {
    let { className: l, children: t, containerRef: a, faderSize: o, faderEdgeThreshold: d } = e,
        u = n.useRef(null),
        [c, m] = n.useState(0),
        [h, x] = n.useState(0),
        [v, g] = n.useState(0),
        f = n.useCallback(() => {
            null != u.current && (m(u.current.getDistanceFromTop()), x(u.current.getDistanceFromBottom()), g(u.current.getScrollerState().offsetHeight));
        }, []);
    n.useEffect(() => {
        if ((f(), null == a.current)) return;
        let e = new ResizeObserver(() => {
            f();
        });
        return (
            e.observe(a.current),
            () => {
                e.disconnect();
            }
        );
    }, [u, a, f]);
    let p = n.useMemo(() => {
        if (0 === c && 0 === h) return {};
        let e = [];
        if ((e.push('to bottom'), c > 0)) {
            let l = d > 0 ? 1 - Math.min(d, c) / d : 1;
            for (let t = 0; t < r.length; t++) {
                let { position: i, alpha: n } = r[t],
                    s = (i * o).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(l + n * (1 - l), ') ').concat(s, 'px'));
            }
        }
        if (h > 0) {
            let l = v - o,
                t = d > 0 ? 1 - Math.min(d, h) / d : 1;
            for (let i = r.length - 1; i >= 0; i--) {
                let { position: n, alpha: s } = r[i],
                    a = (l + (1 - n) * o).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + s * (1 - t), ') ').concat(a, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [h, c, d, o, v]);
    return (0, i.jsx)(s.xVE, {
        ref: u,
        style: p,
        className: l,
        onScroll: f,
        children: t
    });
}
