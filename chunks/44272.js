n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120),
    n(653041);
var o = n(200651),
    i = n(192379),
    r = n(481060);
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
function c(e) {
    let { className: t, children: n, containerRef: c, faderSize: s, faderEdgeThreshold: l } = e,
        d = i.useRef(null),
        [u, m] = i.useState(0),
        [f, p] = i.useState(0),
        [_, b] = i.useState(0),
        h = i.useCallback(() => {
            null != d.current && (m(d.current.getDistanceFromTop()), p(d.current.getDistanceFromBottom()), b(d.current.getScrollerState().offsetHeight));
        }, []);
    i.useEffect(() => {
        if ((h(), null == c.current)) return;
        let e = new ResizeObserver(() => {
            h();
        });
        return (
            e.observe(c.current),
            () => {
                e.disconnect();
            }
        );
    }, [d, c, h]);
    let x = i.useMemo(() => {
        if (0 === u && 0 === f) return {};
        let e = [];
        if ((e.push('to bottom'), u > 0)) {
            let t = l > 0 ? 1 - Math.min(l, u) / l : 1;
            for (let n = 0; n < a.length; n++) {
                let { position: o, alpha: i } = a[n],
                    r = (o * s).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + i * (1 - t), ') ').concat(r, 'px'));
            }
        }
        if (f > 0) {
            let t = _ - s,
                n = l > 0 ? 1 - Math.min(l, f) / l : 1;
            for (let o = a.length - 1; o >= 0; o--) {
                let { position: i, alpha: r } = a[o],
                    c = (t + (1 - i) * s).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + r * (1 - n), ') ').concat(c, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [f, u, l, s, _]);
    return (0, o.jsx)(r.AdvancedScrollerNone, {
        ref: d,
        style: x,
        className: t,
        onScroll: h,
        children: n
    });
}
