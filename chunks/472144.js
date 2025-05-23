n.d(t, { Z: () => p });
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(366594),
    l = n(481060),
    c = n(569379),
    d = n(642145),
    u = n(704247);
let p = o.forwardRef((e, t) => {
    let { quest: n, percentComplete: o, size: s = 42, strokeWidth: p = 3, glowBlur: m = 0.4, percentCompleteText: f, percentCompleteTextVariant: g = 'text-lg/medium', children: x } = e,
        h = (0, c.E)(n, o > 0),
        b = s / 2,
        j = s / 2 - p / 2,
        v = 2 * Math.PI * j,
        y = v - o * v,
        _ = {
            strokeDasharray: ''.concat(v, ' ').concat(v),
            strokeDashoffset: y
        },
        O = {
            strokeDasharray: ''.concat(v, ' ').concat(v),
            strokeDashoffset: -o * v
        },
        C = { boxShadow: '0 0 30px 0px '.concat(h.glow) },
        { progressTextAnimation: w } = (0, l.q_F)({
            progressTextAnimation: +(null != f && 1 !== o),
            config: d.Y
        });
    return (0, r.jsxs)('div', {
        className: u.outer,
        ref: t,
        children: [
            (0, r.jsxs)('div', {
                className: u.inner,
                style: C,
                children: [
                    x,
                    (0, r.jsxs)(i.animated.div, {
                        style: { opacity: w },
                        className: a()(u.coverContent, u.progressTextWrapper),
                        children: [
                            (0, r.jsx)('div', { className: a()(u.coverContent, u.progressTextOverlay) }),
                            (0, r.jsx)(l.Text, {
                                variant: g,
                                color: 'text-primary',
                                className: u.progressText,
                                children: f
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
                                        stopColor: h.backgroundTop
                                    }),
                                    (0, r.jsx)('stop', {
                                        offset: '100%',
                                        stopColor: h.backgroundBottom
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)('circle', {
                        className: u.progress,
                        strokeWidth: p,
                        fill: 'transparent',
                        r: j,
                        cx: b,
                        cy: b,
                        stroke: 'url(#linear)',
                        style: O
                    }),
                    (0, r.jsx)('circle', {
                        className: u.progress,
                        strokeWidth: p,
                        fill: 'transparent',
                        r: j,
                        cx: b,
                        cy: b,
                        stroke: h.foreground,
                        style: _
                    })
                ]
            })
        ]
    });
});
