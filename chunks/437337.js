r.d(n, {
    r: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(642128),
    c = r(692547),
    d = r(186325),
    f = r(84735),
    p = r(180035),
    h = r(481060),
    _ = r(540059),
    m = r(348749);
let g = {
        mass: 1,
        tension: 250
    },
    E = {
        X: {
            TOP: 'M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z',
            BOTTOM: 'M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z'
        },
        BAR: {
            TOP: 'M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z',
            BOTTOM: 'M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z'
        },
        CHECK: {
            TOP: 'M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z',
            BOTTOM: 'M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z'
        }
    };
function v(e, n, r, i) {
    let o = e.to({
            output: [n, r]
        }),
        s = i ? [E.X.TOP, E.X.TOP, E.CHECK.TOP, E.CHECK.TOP] : [E.X.TOP, E.BAR.TOP, E.BAR.TOP, E.CHECK.TOP],
        l = i ? [E.X.BOTTOM, E.X.BOTTOM, E.CHECK.BOTTOM, E.CHECK.BOTTOM] : [E.X.BOTTOM, E.BAR.BOTTOM, E.BAR.BOTTOM, E.CHECK.BOTTOM];
    return (0, a.jsxs)('svg', {
        viewBox: '0 0 20 20',
        fill: 'none',
        children: [
            (0, a.jsx)(u.animated.path, {
                fill: o,
                d: e.to({
                    range: [0, 0.3, 0.7, 1],
                    output: s
                })
            }),
            (0, a.jsx)(u.animated.path, {
                fill: o,
                d: e.to({
                    range: [0, 0.3, 0.7, 1],
                    output: l
                })
            })
        ]
    });
}
let y = function e(e) {
    let { id: n, onChange: r, checked: i, disabled: s, className: E, focusProps: y, innerRef: b } = e,
        { reducedMotion: I } = o.useContext(d.S),
        T = o.useRef(null),
        [S, A] = o.useState(!1),
        C = (0, _.Q3)('Switch'),
        N = (0, p.d)(C ? c.Z.colors.INTERACTIVE_MUTED : c.Z.unsafe_rawColors.PRIMARY_400).spring(),
        R = (0, p.d)(C ? c.Z.colors.REDESIGN_INPUT_CONTROL_SELECTED : c.Z.unsafe_rawColors.GREEN_360).spring(),
        { state: O, opacity: D } = (0, h.useSpring)(
            {
                config: g,
                opacity: s ? (C ? 0.5 : 0.3) : 1,
                state: S ? (i ? 0.7 : 0.3) : i ? 1 : 0
            },
            'animate-always'
        );
    function L(e) {
        A(!1), null == r || r(e.currentTarget.checked, e);
    }
    function x(e) {
        if (!s && !e.repeat) (' ' === e.key || 'Enter' === e.key) && A(!0);
    }
    function w(e) {
        var n;
        if (!s && !!S && !e.repeat) A(!1), 'Enter' === e.key && (null === (n = T.current) || void 0 === n || n.click());
    }
    return (0, a.jsx)(f.t, {
        ...y,
        within: !0,
        offset: -2,
        children: (0, a.jsxs)(u.animated.div, {
            className: l()(m.container, E, {
                [m.checked]: i,
                [m.disabled]: s
            }),
            onMouseDown: () => !s && A(!0),
            onMouseUp: () => A(!1),
            onMouseLeave: () => A(!1),
            style: {
                opacity: D,
                backgroundColor: O.to({
                    output: [N, R]
                })
            },
            children: [
                (0, a.jsxs)(u.animated.svg, {
                    className: m.slider,
                    viewBox: '0 0 28 20',
                    preserveAspectRatio: 'xMinYMid meet',
                    style: {
                        left: O.to({
                            range: [0, 0.3, 0.7, 1],
                            output: [C ? -4 : -3, 1, 8, 12]
                        })
                    },
                    'aria-hidden': !0,
                    children: [
                        (0, a.jsx)(u.animated.rect, {
                            fill: 'white',
                            x: O.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [4, 0, 0, 4]
                            }),
                            y: O.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [0, 1, 1, 0]
                            }),
                            height: O.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [20, 18, 18, 20]
                            }),
                            width: O.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [20, 28, 28, 20]
                            }),
                            rx: '10'
                        }),
                        v(O, N, R, I.enabled)
                    ]
                }),
                (0, a.jsx)('input', {
                    id: n,
                    type: 'checkbox',
                    ref: (e) => {
                        (T.current = e), null != b && (b.current = e);
                    },
                    className: m.input,
                    tabIndex: s ? -1 : 0,
                    onKeyDown: x,
                    onKeyUp: w,
                    onChange: L,
                    checked: i,
                    disabled: s
                })
            ]
        })
    });
};
