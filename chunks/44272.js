n.d(t, { Z: () => s }), n(388685), n(539854);
var r = n(200651),
    l = n(192379),
    i = n(481060);
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
function s(e) {
    let { className: t, children: n, containerRef: s, faderSize: o, faderEdgeThreshold: c } = e,
        d = l.useRef(null),
        [u, m] = l.useState(0),
        [f, p] = l.useState(0),
        [h, _] = l.useState(0),
        x = l.useCallback(() => {
            null != d.current && (m(d.current.getDistanceFromTop()), p(d.current.getDistanceFromBottom()), _(d.current.getScrollerState().offsetHeight));
        }, []);
    l.useEffect(() => {
        if ((x(), null == s.current)) return;
        let e = new ResizeObserver(() => {
            x();
        });
        return (
            e.observe(s.current),
            () => {
                e.disconnect();
            }
        );
    }, [d, s, x]);
    let g = l.useMemo(() => {
        if (0 === u && 0 === f) return {};
        let e = [];
        if ((e.push('to bottom'), u > 0)) {
            let t = c > 0 ? 1 - Math.min(c, u) / c : 1;
            for (let n = 0; n < a.length; n++) {
                let { position: r, alpha: l } = a[n],
                    i = (r * o).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + l * (1 - t), ') ').concat(i, 'px'));
            }
        }
        if (f > 0) {
            let t = h - o,
                n = c > 0 ? 1 - Math.min(c, f) / c : 1;
            for (let r = a.length - 1; r >= 0; r--) {
                let { position: l, alpha: i } = a[r],
                    s = (t + (1 - l) * o).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + i * (1 - n), ') ').concat(s, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [f, u, c, o, h]);
    return (0, r.jsx)(i.xVE, {
        ref: d,
        style: g,
        className: t,
        onScroll: x,
        children: n
    });
}
