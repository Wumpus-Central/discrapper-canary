n.d(t, { r: () => E }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(642128),
    l = n(692547),
    u = n(186325),
    c = n(84735),
    d = n(180035),
    f = n(481060),
    _ = n(540059),
    p = n(348749);
let h = {
        mass: 1,
        tension: 250
    },
    m = {
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
function g(e, t, n, r) {
    let a = e.to({
            output: [t, n]
        }),
        s = r ? [m.X.TOP, m.X.TOP, m.CHECK.TOP, m.CHECK.TOP] : [m.X.TOP, m.BAR.TOP, m.BAR.TOP, m.CHECK.TOP],
        l = r ? [m.X.BOTTOM, m.X.BOTTOM, m.CHECK.BOTTOM, m.CHECK.BOTTOM] : [m.X.BOTTOM, m.BAR.BOTTOM, m.BAR.BOTTOM, m.CHECK.BOTTOM];
    return (0, i.jsxs)('svg', {
        viewBox: '0 0 20 20',
        fill: 'none',
        children: [
            (0, i.jsx)(o.animated.path, {
                fill: a,
                d: e.to({
                    range: [0, 0.3, 0.7, 1],
                    output: s
                })
            }),
            (0, i.jsx)(o.animated.path, {
                fill: a,
                d: e.to({
                    range: [0, 0.3, 0.7, 1],
                    output: l
                })
            })
        ]
    });
}
let E = function (e) {
    let { id: t, onChange: n, checked: a, disabled: m, className: E, focusProps: v, innerRef: y } = e,
        { reducedMotion: I } = r.useContext(u.S),
        b = r.useRef(null),
        [T, S] = r.useState(!1),
        A = (0, _.Q3)('Switch'),
        N = (0, d.d)(A ? l.Z.colors.INTERACTIVE_MUTED : l.Z.unsafe_rawColors.PRIMARY_400).spring(),
        C = (0, d.d)(A ? l.Z.colors.REDESIGN_INPUT_CONTROL_SELECTED : l.Z.unsafe_rawColors.GREEN_360).spring(),
        { state: R, opacity: O } = (0, f.q_F)(
            {
                config: h,
                opacity: m ? (A ? 0.5 : 0.3) : 1,
                state: T ? (a ? 0.7 : 0.3) : a ? 1 : 0
            },
            'animate-always'
        );
    function D(e) {
        S(!1), null == n || n(e.currentTarget.checked, e);
    }
    function x(e) {
        !m && !e.repeat && (' ' === e.key || 'Enter' === e.key) && S(!0);
    }
    function L(e) {
        var t;
        !m && T && !e.repeat && (S(!1), 'Enter' === e.key && (null === (t = b.current) || void 0 === t || t.click()));
    }
    return (0, i.jsx)(c.t, {
        ...v,
        within: !0,
        offset: -2,
        children: (0, i.jsxs)(o.animated.div, {
            className: s()(p.container, E, {
                [p.checked]: a,
                [p.disabled]: m
            }),
            onMouseDown: () => !m && S(!0),
            onMouseUp: () => S(!1),
            onMouseLeave: () => S(!1),
            style: {
                opacity: O,
                backgroundColor: R.to({
                    output: [N, C]
                })
            },
            children: [
                (0, i.jsxs)(o.animated.svg, {
                    className: p.slider,
                    viewBox: '0 0 28 20',
                    preserveAspectRatio: 'xMinYMid meet',
                    style: {
                        left: R.to({
                            range: [0, 0.3, 0.7, 1],
                            output: [A ? -4 : -3, 1, 8, 12]
                        })
                    },
                    'aria-hidden': !0,
                    children: [
                        (0, i.jsx)(o.animated.rect, {
                            fill: 'white',
                            x: R.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [4, 0, 0, 4]
                            }),
                            y: R.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [0, 1, 1, 0]
                            }),
                            height: R.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [20, 18, 18, 20]
                            }),
                            width: R.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [20, 28, 28, 20]
                            }),
                            rx: '10'
                        }),
                        g(R, N, C, I.enabled)
                    ]
                }),
                (0, i.jsx)('input', {
                    id: t,
                    type: 'checkbox',
                    ref: (e) => {
                        (b.current = e), null != y && (y.current = e);
                    },
                    className: p.input,
                    tabIndex: m ? -1 : 0,
                    onKeyDown: x,
                    onKeyUp: L,
                    onChange: D,
                    checked: a,
                    disabled: m
                })
            ]
        })
    });
};
