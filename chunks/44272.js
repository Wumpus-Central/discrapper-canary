n.d(t, { Z: () => o }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(481060);
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
function o(e) {
    let { className: t, children: n, containerRef: o, faderSize: s, faderEdgeThreshold: c } = e,
        u = i.useRef(null),
        [d, f] = i.useState(0),
        [m, _] = i.useState(0),
        [p, h] = i.useState(0),
        b = i.useCallback(() => {
            null != u.current && (f(u.current.getDistanceFromTop()), _(u.current.getDistanceFromBottom()), h(u.current.getScrollerState().offsetHeight));
        }, []);
    i.useEffect(() => {
        if ((b(), null == o.current)) return;
        let e = new ResizeObserver(() => {
            b();
        });
        return (
            e.observe(o.current),
            () => {
                e.disconnect();
            }
        );
    }, [u, o, b]);
    let g = i.useMemo(() => {
        if (0 === d && 0 === m) return {};
        let e = [];
        if ((e.push('to bottom'), d > 0)) {
            let t = c > 0 ? 1 - Math.min(c, d) / c : 1;
            for (let n = 0; n < a.length; n++) {
                let { position: r, alpha: i } = a[n],
                    l = (r * s).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + i * (1 - t), ') ').concat(l, 'px'));
            }
        }
        if (m > 0) {
            let t = p - s,
                n = c > 0 ? 1 - Math.min(c, m) / c : 1;
            for (let r = a.length - 1; r >= 0; r--) {
                let { position: i, alpha: l } = a[r],
                    o = (t + (1 - i) * s).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + l * (1 - n), ') ').concat(o, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [m, d, c, s, p]);
    return (0, r.jsx)(l.xVE, {
        ref: u,
        style: g,
        className: t,
        onScroll: b,
        children: n
    });
}
