n.d(t, { Z: () => a }), n(47120), n(653041);
var r = n(200651),
    o = n(192379),
    s = n(481060);
let l = [
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
    let { className: t, children: n, containerRef: a, faderSize: i, faderEdgeThreshold: c } = e,
        u = o.useRef(null),
        [d, m] = o.useState(0),
        [h, x] = o.useState(0),
        [p, f] = o.useState(0),
        N = o.useCallback(() => {
            null != u.current && (m(u.current.getDistanceFromTop()), x(u.current.getDistanceFromBottom()), f(u.current.getScrollerState().offsetHeight));
        }, []);
    o.useEffect(() => {
        if ((N(), null == a.current)) return;
        let e = new ResizeObserver(() => {
            N();
        });
        return (
            e.observe(a.current),
            () => {
                e.disconnect();
            }
        );
    }, [u, a, N]);
    let v = o.useMemo(() => {
        if (0 === d && 0 === h) return {};
        let e = [];
        if ((e.push('to bottom'), d > 0)) {
            let t = c > 0 ? 1 - Math.min(c, d) / c : 1;
            for (let n = 0; n < l.length; n++) {
                let { position: r, alpha: o } = l[n],
                    s = (r * i).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + o * (1 - t), ') ').concat(s, 'px'));
            }
        }
        if (h > 0) {
            let t = p - i,
                n = c > 0 ? 1 - Math.min(c, h) / c : 1;
            for (let r = l.length - 1; r >= 0; r--) {
                let { position: o, alpha: s } = l[r],
                    a = (t + (1 - o) * i).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + s * (1 - n), ') ').concat(a, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [h, d, c, i, p]);
    return (0, r.jsx)(s.xVE, {
        ref: u,
        style: v,
        className: t,
        onScroll: N,
        children: n
    });
}
