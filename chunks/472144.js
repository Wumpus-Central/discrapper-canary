n.d(t, { Z: () => p });
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(642128),
    l = n(481060),
    c = n(569379),
    d = n(642145),
    u = n(593579);
let p = o.forwardRef((e, t) => {
    let { quest: n, percentComplete: o, size: s = 42, strokeWidth: p = 3, glowBlur: m = 0.4, percentCompleteText: x, percentCompleteTextVariant: h = 'text-lg/medium', children: g } = e,
        f = (0, c.E)(n, o > 0),
        _ = s / 2,
        C = s / 2 - p / 2,
        v = 2 * Math.PI * C,
        j = v - o * v,
        b = {
            strokeDasharray: ''.concat(v, ' ').concat(v),
            strokeDashoffset: j
        },
        T = {
            strokeDasharray: ''.concat(v, ' ').concat(v),
            strokeDashoffset: -o * v
        },
        E = { boxShadow: '0 0 30px 0px '.concat(f.glow) },
        { progressTextAnimation: N } = (0, l.q_F)({
            progressTextAnimation: null != x && 1 !== o ? 1 : 0,
            config: d.Y
        });
    return (0, r.jsxs)('div', {
        className: u.outer,
        ref: t,
        children: [
            (0, r.jsxs)('div', {
                className: u.inner,
                style: E,
                children: [
                    g,
                    (0, r.jsxs)(i.animated.div, {
                        style: { opacity: N },
                        className: a()(u.coverContent, u.progressTextWrapper),
                        children: [
                            (0, r.jsx)('div', { className: a()(u.coverContent, u.progressTextOverlay) }),
                            (0, r.jsx)(l.Text, {
                                variant: h,
                                color: 'text-primary',
                                className: u.progressText,
                                children: x
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('svg', {
                className: u.progressBar,
                height: s,
                width: s,
                children: [
                    (0, r.jsxs)('defs', {
                        children: [
                            (0, r.jsxs)('filter', {
                                id: 'glow',
                                children: [
                                    (0, r.jsx)('feGaussianBlur', {
                                        result: 'coloredBlur',
                                        stdDeviation: m
                                    }),
                                    (0, r.jsxs)('feMerge', {
                                        children: [(0, r.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, r.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, r.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, r.jsx)('feMergeNode', { in: 'SourceGraphic' })]
                                    })
                                ]
                            }),
                            (0, r.jsxs)('linearGradient', {
                                id: 'linear',
                                x1: '100%',
                                y1: '0%',
                                x2: '0%',
                                y2: '0%',
                                children: [
                                    (0, r.jsx)('stop', {
                                        offset: '0%',
                                        stopColor: f.backgroundTop
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '100%',
                                        stopColor: f.backgroundBottom
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)('circle', {
                        className: u.progress,
                        strokeWidth: p,
                        fill: 'transparent',
                        r: C,
                        cx: _,
                        cy: _,
                        stroke: 'url(#linear)',
                        style: T
                    }),
                    (0, r.jsx)('circle', {
                        className: u.progress,
                        strokeWidth: p,
                        fill: 'transparent',
                        r: C,
                        cx: _,
                        cy: _,
                        stroke: f.foreground,
                        style: b
                    })
                ]
            })
        ]
    });
});
