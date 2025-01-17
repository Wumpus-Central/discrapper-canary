var o = t(200651),
    r = t(192379),
    c = t(120356),
    a = t.n(c),
    i = t(642128),
    s = t(481060),
    l = t(569379),
    d = t(642145),
    f = t(793436);
n.Z = r.forwardRef((e, n) => {
    let { quest: t, percentComplete: r, size: c = 42, strokeWidth: u = 3, glowBlur: p = 0.4, percentCompleteText: _, percentCompleteTextVariant: C = 'text-lg/medium', children: v } = e,
        g = (0, l.E)(t, r > 0),
        B = c / 2,
        m = c / 2 - u / 2,
        S = 2 * Math.PI * m,
        x = S - r * S,
        b = {
            strokeDasharray: ''.concat(S, ' ').concat(S),
            strokeDashoffset: x
        },
        h = {
            strokeDasharray: ''.concat(S, ' ').concat(S),
            strokeDashoffset: -r * S
        },
        y = { boxShadow: '0 0 30px 0px '.concat(g.glow) },
        { progressTextAnimation: T } = (0, s.useSpring)({
            progressTextAnimation: null != _ && 1 !== r ? 1 : 0,
            config: d.Y
        });
    return (0, o.jsxs)('div', {
        className: f.outer,
        ref: n,
        children: [
            (0, o.jsxs)('div', {
                className: f.inner,
                style: y,
                children: [
                    v,
                    (0, o.jsxs)(i.animated.div, {
                        style: { opacity: T },
                        className: a()(f.coverContent, f.progressTextWrapper),
                        children: [
                            (0, o.jsx)('div', { className: a()(f.coverContent, f.progressTextOverlay) }),
                            (0, o.jsx)(s.Text, {
                                variant: C,
                                color: 'text-primary',
                                className: f.progressText,
                                children: _
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsxs)('svg', {
                className: f.progressBar,
                height: c,
                width: c,
                children: [
                    (0, o.jsxs)('defs', {
                        children: [
                            (0, o.jsxs)('filter', {
                                id: 'glow',
                                children: [
                                    (0, o.jsx)('feGaussianBlur', {
                                        result: 'coloredBlur',
                                        stdDeviation: p
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
                                        stopColor: g.backgroundTop
                                    }),
                                    (0, o.jsx)('stop', {
                                        offset: '100%',
                                        stopColor: g.backgroundBottom
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsx)('circle', {
                        className: f.progress,
                        strokeWidth: u,
                        fill: 'transparent',
                        r: m,
                        cx: B,
                        cy: B,
                        stroke: 'url(#linear)',
                        style: h
                    }),
                    (0, o.jsx)('circle', {
                        className: f.progress,
                        strokeWidth: u,
                        fill: 'transparent',
                        r: m,
                        cx: B,
                        cy: B,
                        stroke: g.foreground,
                        style: b
                    })
                ]
            })
        ]
    });
});
