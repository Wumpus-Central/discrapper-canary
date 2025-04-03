n.d(t, { Z: () => l }), n(47120), n(653041);
var r = n(200651),
    o = n(192379),
    s = n(481060);
let a = [
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
function l(e) {
    let { className: t, children: n, containerRef: l, faderSize: i, faderEdgeThreshold: c } = e,
        u = o.useRef(null),
        [d, h] = o.useState(0),
        [m, x] = o.useState(0),
        [p, N] = o.useState(0),
        j = o.useCallback(() => {
            null != u.current && (h(u.current.getDistanceFromTop()), x(u.current.getDistanceFromBottom()), N(u.current.getScrollerState().offsetHeight));
        }, []);
    o.useEffect(() => {
        if ((j(), null == l.current)) return;
        let e = new ResizeObserver(() => {
            j();
        });
        return (
            e.observe(l.current),
            () => {
                e.disconnect();
            }
        );
    }, [u, l, j]);
    let f = o.useMemo(() => {
        if (0 === d && 0 === m) return {};
        let e = [];
        if ((e.push('to bottom'), d > 0)) {
            let t = c > 0 ? 1 - Math.min(c, d) / c : 1;
            for (let n = 0; n < a.length; n++) {
                let { position: r, alpha: o } = a[n],
                    s = (r * i).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + o * (1 - t), ') ').concat(s, 'px'));
            }
        }
        if (m > 0) {
            let t = p - i,
                n = c > 0 ? 1 - Math.min(c, m) / c : 1;
            for (let r = a.length - 1; r >= 0; r--) {
                let { position: o, alpha: s } = a[r],
                    l = (t + (1 - o) * i).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + s * (1 - n), ') ').concat(l, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [m, d, c, i, p]);
    return (0, r.jsx)(s.xVE, {
        ref: u,
        style: f,
        className: t,
        onScroll: j,
        children: n
    });
}
