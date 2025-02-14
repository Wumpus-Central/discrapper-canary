n.d(t, { Z: () => p });
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(642128),
    l = n(481060),
    c = n(569379),
    d = n(642145),
    u = n(819893);
let p = r.forwardRef((e, t) => {
    let { quest: n, percentComplete: r, size: a = 42, strokeWidth: p = 3, glowBlur: m = 0.4, percentCompleteText: x, percentCompleteTextVariant: h = 'text-lg/medium', children: g } = e,
        f = (0, c.E)(n, r > 0),
        v = a / 2,
        _ = a / 2 - p / 2,
        C = 2 * Math.PI * _,
        j = C - r * C,
        b = {
            strokeDasharray: ''.concat(C, ' ').concat(C),
            strokeDashoffset: j
        },
        T = {
            strokeDasharray: ''.concat(C, ' ').concat(C),
            strokeDashoffset: -r * C
        },
        E = { boxShadow: '0 0 30px 0px '.concat(f.glow) },
        { progressTextAnimation: S } = (0, l.q_F)({
            progressTextAnimation: null != x && 1 !== r ? 1 : 0,
            config: d.Y
        });
    return (0, s.jsxs)('div', {
        className: u.outer,
        ref: t,
        children: [
            (0, s.jsxs)('div', {
                className: u.inner,
                style: E,
                children: [
                    g,
                    (0, s.jsxs)(i.animated.div, {
                        style: { opacity: S },
                        className: o()(u.coverContent, u.progressTextWrapper),
                        children: [
                            (0, s.jsx)('div', { className: o()(u.coverContent, u.progressTextOverlay) }),
                            (0, s.jsx)(l.Text, {
                                variant: h,
                                color: 'text-primary',
                                className: u.progressText,
                                children: x
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)('svg', {
                className: u.progressBar,
                height: a,
                width: a,
                children: [
                    (0, s.jsxs)('defs', {
                        children: [
                            (0, s.jsxs)('filter', {
                                id: 'glow',
                                children: [
                                    (0, s.jsx)('feGaussianBlur', {
                                        result: 'coloredBlur',
                                        stdDeviation: m
                                    }),
                                    (0, s.jsxs)('feMerge', {
                                        children: [(0, s.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, s.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, s.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, s.jsx)('feMergeNode', { in: 'SourceGraphic' })]
                                    })
                                ]
                            }),
                            (0, s.jsxs)('linearGradient', {
                                id: 'linear',
                                x1: '100%',
                                y1: '0%',
                                x2: '0%',
                                y2: '0%',
                                children: [
                                    (0, s.jsx)('stop', {
                                        offset: '0%',
                                        stopColor: f.backgroundTop
                                    }),
                                    (0, s.jsx)('stop', {
                                        offset: '100%',
                                        stopColor: f.backgroundBottom
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsx)('circle', {
                        className: u.progress,
                        strokeWidth: p,
                        fill: 'transparent',
                        r: _,
                        cx: v,
                        cy: v,
                        stroke: 'url(#linear)',
                        style: T
                    }),
                    (0, s.jsx)('circle', {
                        className: u.progress,
                        strokeWidth: p,
                        fill: 'transparent',
                        r: _,
                        cx: v,
                        cy: v,
                        stroke: f.foreground,
                        style: b
                    })
                ]
            })
        ]
    });
});
