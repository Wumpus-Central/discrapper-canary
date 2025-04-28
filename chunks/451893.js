n.d(t, { Z: () => s }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(481060);
let o = [
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
    let { className: t, children: n, containerRef: s, faderSize: a, faderEdgeThreshold: c } = e,
        u = i.useRef(null),
        [d, m] = i.useState(0),
        [f, h] = i.useState(0),
        [p, b] = i.useState(0),
        g = i.useCallback(() => {
            null != u.current && (m(u.current.getDistanceFromTop()), h(u.current.getDistanceFromBottom()), b(u.current.getScrollerState().offsetHeight));
        }, []);
    i.useEffect(() => {
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
    let x = i.useMemo(() => {
        if (0 === d && 0 === f) return {};
        let e = [];
        if ((e.push('to bottom'), d > 0)) {
            let t = c > 0 ? 1 - Math.min(c, d) / c : 1;
            for (let n = 0; n < o.length; n++) {
                let { position: r, alpha: i } = o[n],
                    l = (r * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + i * (1 - t), ') ').concat(l, 'px'));
            }
        }
        if (f > 0) {
            let t = p - a,
                n = c > 0 ? 1 - Math.min(c, f) / c : 1;
            for (let r = o.length - 1; r >= 0; r--) {
                let { position: i, alpha: l } = o[r],
                    s = (t + (1 - i) * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + l * (1 - n), ') ').concat(s, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [f, d, c, a, p]);
    return (0, r.jsx)(l.xVE, {
        ref: u,
        style: x,
        className: t,
        onScroll: g,
        children: n
    });
}
