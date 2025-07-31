r.d(t, { Z: () => f });
var n = r(255367),
    s = r(73800),
    o = r(120356),
    l = r.n(o),
    c = r(855659),
    i = r(481060),
    a = r(569379),
    u = r(642145),
    d = r(704247);
let f = s.forwardRef((e, t) => {
    let { quest: r, percentComplete: s, size: o = 42, strokeWidth: f = 3, glowBlur: p = 0.4, percentCompleteText: x, percentCompleteTextVariant: j = 'text-lg/medium', children: g } = e,
        h = (0, a.E)(r, s > 0),
        b = o / 2,
        m = o / 2 - f / 2,
        y = 2 * Math.PI * m,
        C = y - s * y,
        O = {
            strokeDasharray: ''.concat(y, ' ').concat(y),
            strokeDashoffset: C
        },
        k = {
            strokeDasharray: ''.concat(y, ' ').concat(y),
            strokeDashoffset: -s * y
        },
        v = { boxShadow: '0 0 30px 0px '.concat(h.glow) },
        { progressTextAnimation: S } = (0, i.q_F)({
            progressTextAnimation: +(null != x && 1 !== s),
            config: u.Y
        });
    return (0, n.jsxs)('div', {
        className: d.outer,
        ref: t,
        children: [
            (0, n.jsxs)('div', {
                className: d.inner,
                style: v,
                children: [
                    g,
                    (0, n.jsxs)(c.animated.div, {
                        style: { opacity: S },
                        className: l()(d.coverContent, d.progressTextWrapper),
                        children: [
                            (0, n.jsx)('div', { className: l()(d.coverContent, d.progressTextOverlay) }),
                            (0, n.jsx)(i.Text, {
                                variant: j,
                                color: 'text-primary',
                                className: d.progressText,
                                children: x
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsxs)('svg', {
                className: d.progressBar,
                height: o,
                width: o,
                children: [
                    (0, n.jsxs)('defs', {
                        children: [
                            (0, n.jsxs)('filter', {
                                id: 'glow',
                                children: [
                                    (0, n.jsx)('feGaussianBlur', {
                                        result: 'coloredBlur',
                                        stdDeviation: p
                                    }),
                                    (0, n.jsxs)('feMerge', {
                                        children: [(0, n.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, n.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, n.jsx)('feMergeNode', { in: 'coloredBlur' }), (0, n.jsx)('feMergeNode', { in: 'SourceGraphic' })]
                                    })
                                ]
                            }),
                            (0, n.jsxs)('linearGradient', {
                                id: 'linear',
                                x1: '100%',
                                y1: '0%',
                                x2: '0%',
                                y2: '0%',
                                children: [
                                    (0, n.jsx)('stop', {
                                        offset: '0%',
                                        stopColor: h.backgroundTop
                                    }),
                                    (0, n.jsx)('stop', {
                                        offset: '100%',
                                        stopColor: h.backgroundBottom
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)('circle', {
                        className: d.progress,
                        strokeWidth: f,
                        fill: 'transparent',
                        r: m,
                        cx: b,
                        cy: b,
                        stroke: 'url(#linear)',
                        style: k
                    }),
                    (0, n.jsx)('circle', {
                        className: d.progress,
                        strokeWidth: f,
                        fill: 'transparent',
                        r: m,
                        cx: b,
                        cy: b,
                        stroke: h.foreground,
                        style: O
                    })
                ]
            })
        ]
    });
});
