t.d(n, { Z: () => p });
var o = t(200651),
    a = t(192379),
    r = t(120356),
    d = t.n(r),
    i = t(642128),
    s = t(481060),
    l = t(569379),
    c = t(642145),
    f = t(793436);
let p = a.forwardRef((e, n) => {
    let { quest: t, percentComplete: a, size: r = 42, strokeWidth: p = 3, glowBlur: _ = 0.4, percentCompleteText: u, percentCompleteTextVariant: C = 'text-lg/medium', children: v } = e,
        m = (0, l.E)(t, a > 0),
        g = r / 2,
        x = r / 2 - p / 2,
        B = 2 * Math.PI * x,
        S = B - a * B,
        b = {
            strokeDasharray: ''.concat(B, ' ').concat(B),
            strokeDashoffset: S
        },
        k = {
            strokeDasharray: ''.concat(B, ' ').concat(B),
            strokeDashoffset: -a * B
        },
        h = { boxShadow: '0 0 30px 0px '.concat(m.glow) },
        { progressTextAnimation: y } = (0, s.q_F)({
            progressTextAnimation: null != u && 1 !== a ? 1 : 0,
            config: c.Y
        });
    return (0, o.jsxs)('div', {
        className: f.outer,
        ref: n,
        children: [
            (0, o.jsxs)('div', {
                className: f.inner,
                style: h,
                children: [
                    v,
                    (0, o.jsxs)(i.animated.div, {
                        style: { opacity: y },
                        className: d()(f.coverContent, f.progressTextWrapper),
                        children: [
                            (0, o.jsx)('div', { className: d()(f.coverContent, f.progressTextOverlay) }),
                            (0, o.jsx)(s.Text, {
                                variant: C,
                                color: 'text-primary',
                                className: f.progressText,
                                children: u
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsxs)('svg', {
                className: f.progressBar,
                height: r,
                width: r,
                children: [
                    (0, o.jsxs)('defs', {
                        children: [
                            (0, o.jsxs)('filter', {
                                id: 'glow',
                                children: [
                                    (0, o.jsx)('feGaussianBlur', {
                                        result: 'coloredBlur',
                                        stdDeviation: _
                                    }),
                                    (0, o.jsxs)('feMerge', {
                                        children: [(0, o.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, o.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, o.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, o.jsx)('feMergeNode', { in: 'SourceGraphic' })]
                                    })
                                ]
                            }),
                            (0, o.jsxs)('linearGradient', {
                                id: 'linear',
                                x1: '100%',
                                y1: '0%',
                                x2: '0%',
                                y2: '0%',
                                children: [
                                    (0, o.jsx)('stop', {
                                        offset: '0%',
                                        stopColor: m.backgroundTop
                                    }),
                                    (0, o.jsx)('stop', {
                                        offset: '100%',
                                        stopColor: m.backgroundBottom
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsx)('circle', {
                        className: f.progress,
                        strokeWidth: p,
                        fill: 'transparent',
                        r: x,
                        cx: g,
                        cy: g,
                        stroke: 'url(#linear)',
                        style: k
                    }),
                    (0, o.jsx)('circle', {
                        className: f.progress,
                        strokeWidth: p,
                        fill: 'transparent',
                        r: x,
                        cx: g,
                        cy: g,
                        stroke: m.foreground,
                        style: b
                    })
                ]
            })
        ]
    });
});
