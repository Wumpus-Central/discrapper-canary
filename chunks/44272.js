l.d(t, {
    Z: function () {
        return a;
    }
}),
    l(47120),
    l(653041);
var n = l(200651),
    i = l(192379),
    r = l(481060);
let s = [
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
    let { className: t, children: l, containerRef: a, faderSize: o, faderEdgeThreshold: d } = e,
        u = i.useRef(null),
        [c, m] = i.useState(0),
        [h, x] = i.useState(0),
        [v, p] = i.useState(0),
        g = i.useCallback(() => {
            null != u.current && (m(u.current.getDistanceFromTop()), x(u.current.getDistanceFromBottom()), p(u.current.getScrollerState().offsetHeight));
        }, []);
    i.useEffect(() => {
        if ((g(), null == a.current)) return;
        let e = new ResizeObserver(() => {
            g();
        });
        return (
            e.observe(a.current),
            () => {
                e.disconnect();
            }
        );
    }, [u, a, g]);
    let f = i.useMemo(() => {
        if (0 === c && 0 === h) return {};
        let e = [];
        if ((e.push('to bottom'), c > 0)) {
            let t = d > 0 ? 1 - Math.min(d, c) / d : 1;
            for (let l = 0; l < s.length; l++) {
                let { position: n, alpha: i } = s[l],
                    r = (n * o).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + i * (1 - t), ') ').concat(r, 'px'));
            }
        }
        if (h > 0) {
            let t = v - o,
                l = d > 0 ? 1 - Math.min(d, h) / d : 1;
            for (let n = s.length - 1; n >= 0; n--) {
                let { position: i, alpha: r } = s[n],
                    a = (t + (1 - i) * o).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(l + r * (1 - l), ') ').concat(a, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [h, c, d, o, v]);
    return (0, n.jsx)(r.AdvancedScrollerNone, {
        ref: u,
        style: f,
        className: t,
        onScroll: g,
        children: l
    });
}
