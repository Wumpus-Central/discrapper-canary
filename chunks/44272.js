n.d(t, { Z: () => s }), n(388685), n(539854);
var l = n(200651),
    a = n(192379),
    r = n(481060);
let i = [
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
        d = a.useRef(null),
        [u, m] = a.useState(0),
        [f, h] = a.useState(0),
        [p, x] = a.useState(0),
        _ = a.useCallback(() => {
            null != d.current && (m(d.current.getDistanceFromTop()), h(d.current.getDistanceFromBottom()), x(d.current.getScrollerState().offsetHeight));
        }, []);
    a.useEffect(() => {
        if ((_(), null == s.current)) return;
        let e = new ResizeObserver(() => {
            _();
        });
        return (
            e.observe(s.current),
            () => {
                e.disconnect();
            }
        );
    }, [d, s, _]);
    let g = a.useMemo(() => {
        if (0 === u && 0 === f) return {};
        let e = [];
        if ((e.push('to bottom'), u > 0)) {
            let t = c > 0 ? 1 - Math.min(c, u) / c : 1;
            for (let n = 0; n < i.length; n++) {
                let { position: l, alpha: a } = i[n],
                    r = (l * o).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + a * (1 - t), ') ').concat(r, 'px'));
            }
        }
        if (f > 0) {
            let t = p - o,
                n = c > 0 ? 1 - Math.min(c, f) / c : 1;
            for (let l = i.length - 1; l >= 0; l--) {
                let { position: a, alpha: r } = i[l],
                    s = (t + (1 - a) * o).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + r * (1 - n), ') ').concat(s, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [f, u, c, o, p]);
    return (0, l.jsx)(r.xVE, {
        ref: d,
        style: g,
        className: t,
        onScroll: _,
        children: n
    });
}
