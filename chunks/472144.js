n.d(t, { Z: () => f });
var r = n(255367),
    o = n(73800),
    s = n(120356),
    l = n.n(s),
    i = n(481752),
    c = n(481060),
    a = n(569379),
    u = n(642145),
    d = n(704247);
let f = o.forwardRef((e, t) => {
    let { quest: n, percentComplete: o, size: s = 42, strokeWidth: f = 3, glowBlur: p = 0.4, percentCompleteText: x, percentCompleteTextVariant: g = 'text-lg/medium', children: j } = e,
        b = (0, a.E)(n, o > 0),
        k = s / 2,
        m = s / 2 - f / 2,
        h = 2 * Math.PI * m,
        y = h - o * h,
        O = {
            strokeDasharray: ''.concat(h, ' ').concat(h),
            strokeDashoffset: y
        },
        S = {
            strokeDasharray: ''.concat(h, ' ').concat(h),
            strokeDashoffset: -o * h
        },
        v = { boxShadow: '0 0 30px 0px '.concat(b.glow) },
        { progressTextAnimation: C } = (0, c.q_F)({
            progressTextAnimation: +(null != x && 1 !== o),
            config: u.Y
        });
    return (0, r.jsxs)('div', {
        className: d.outer,
        ref: t,
        children: [
            (0, r.jsxs)('div', {
                className: d.inner,
                style: v,
                children: [
                    j,
                    (0, r.jsxs)(i.animated.div, {
                        style: { opacity: C },
                        className: l()(d.coverContent, d.progressTextWrapper),
                        children: [
                            (0, r.jsx)('div', { className: l()(d.coverContent, d.progressTextOverlay) }),
                            (0, r.jsx)(c.Text, {
                                variant: g,
                                color: 'text-primary',
                                className: d.progressText,
                                children: x
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('svg', {
                className: d.progressBar,
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
                                        stdDeviation: p
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
                                        stopColor: b.backgroundTop
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '100%',
                                        stopColor: b.backgroundBottom
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)('circle', {
                        className: d.progress,
                        strokeWidth: f,
                        fill: 'transparent',
                        r: m,
                        cx: k,
                        cy: k,
                        stroke: 'url(#linear)',
                        style: S
                    }),
                    (0, r.jsx)('circle', {
                        className: d.progress,
                        strokeWidth: f,
                        fill: 'transparent',
                        r: m,
                        cx: k,
                        cy: k,
                        stroke: b.foreground,
                        style: O
                    })
                ]
            })
        ]
    });
});
