n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120),
    n(653041);
var o = n(200651),
    r = n(192379),
    i = n(481060);
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
    let { className: t, children: n, containerRef: a, faderSize: c, faderEdgeThreshold: u } = e,
        d = r.useRef(null),
        [l, f] = r.useState(0),
        [p, b] = r.useState(0),
        [m, _] = r.useState(0),
        g = r.useCallback(() => {
            null != d.current && (f(d.current.getDistanceFromTop()), b(d.current.getDistanceFromBottom()), _(d.current.getScrollerState().offsetHeight));
        }, []);
    r.useEffect(() => {
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
    }, [d, a, g]);
    let h = r.useMemo(() => {
        if (0 === l && 0 === p) return {};
        let e = [];
        if ((e.push('to bottom'), l > 0)) {
            let t = u > 0 ? 1 - Math.min(u, l) / u : 1;
            for (let n = 0; n < s.length; n++) {
                let { position: o, alpha: r } = s[n],
                    i = (o * c).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + r * (1 - t), ') ').concat(i, 'px'));
            }
        }
        if (p > 0) {
            let t = m - c,
                n = u > 0 ? 1 - Math.min(u, p) / u : 1;
            for (let o = s.length - 1; o >= 0; o--) {
                let { position: r, alpha: i } = s[o],
                    a = (t + (1 - r) * c).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + i * (1 - n), ') ').concat(a, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [p, l, u, c, m]);
    return (0, o.jsx)(i.AdvancedScrollerNone, {
        ref: d,
        style: h,
        className: t,
        onScroll: g,
        children: n
    });
}
