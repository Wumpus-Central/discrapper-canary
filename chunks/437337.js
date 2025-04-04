n.d(t, { r: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(692547),
    c = n(186325),
    u = n(84735),
    d = n(180035),
    f = n(481060),
    _ = n(540059),
    p = n(333903);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = {
        mass: 1,
        tension: 250
    },
    y = {
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
function v(e, t, n, i) {
    let o = e.to({
            output: [t, n]
        }),
        a = i ? [y.X.TOP, y.X.TOP, y.CHECK.TOP, y.CHECK.TOP] : [y.X.TOP, y.BAR.TOP, y.BAR.TOP, y.CHECK.TOP],
        l = i ? [y.X.BOTTOM, y.X.BOTTOM, y.CHECK.BOTTOM, y.CHECK.BOTTOM] : [y.X.BOTTOM, y.BAR.BOTTOM, y.BAR.BOTTOM, y.CHECK.BOTTOM];
    return (0, r.jsxs)('svg', {
        viewBox: '0 0 20 20',
        fill: 'none',
        children: [
            (0, r.jsx)(s.animated.path, {
                fill: o,
                d: e.to({
                    range: [0, 0.3, 0.7, 1],
                    output: a
                })
            }),
            (0, r.jsx)(s.animated.path, {
                fill: o,
                d: e.to({
                    range: [0, 0.3, 0.7, 1],
                    output: l
                })
            })
        ]
    });
}
let O = function (e) {
    let { id: t, onChange: n, checked: o, disabled: h, className: g, focusProps: y, innerRef: O } = e,
        { reducedMotion: I } = i.useContext(c.S),
        S = i.useRef(null),
        [T, N] = i.useState(!1),
        A = (0, _.Q3)('Switch'),
        C = (0, d.d)(A ? l.Z.colors.INTERACTIVE_MUTED : l.Z.unsafe_rawColors.PRIMARY_400).spring(),
        R = (0, d.d)(A ? l.Z.colors.REDESIGN_INPUT_CONTROL_SELECTED : l.Z.unsafe_rawColors.GREEN_360).spring(),
        { state: P, opacity: w } = (0, f.q_F)(
            {
                config: b,
                opacity: h ? (A ? 0.5 : 0.3) : 1,
                state: T ? (o ? 0.7 : 0.3) : +!!o
            },
            'animate-always'
        );
    function D(e) {
        N(!1), null == n || n(e.currentTarget.checked, e);
    }
    function L(e) {
        h || e.repeat || ((' ' === e.key || 'Enter' === e.key) && N(!0));
    }
    function x(e) {
        var t;
        h || !T || e.repeat || (N(!1), 'Enter' === e.key && (null == (t = S.current) || t.click()));
    }
    return (0, r.jsx)(
        u.t,
        E(m({}, y), {
            within: !0,
            offset: -2,
            children: (0, r.jsxs)(s.animated.div, {
                className: a()(p.container, g, {
                    [p.checked]: o,
                    [p.disabled]: h
                }),
                onMouseDown: () => !h && N(!0),
                onMouseUp: () => N(!1),
                onMouseLeave: () => N(!1),
                style: {
                    opacity: w,
                    backgroundColor: P.to({
                        output: [C, R]
                    })
                },
                children: [
                    (0, r.jsxs)(s.animated.svg, {
                        className: p.slider,
                        viewBox: '0 0 28 20',
                        preserveAspectRatio: 'xMinYMid meet',
                        style: {
                            left: P.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [A ? -4 : -3, 1, 8, 12]
                            })
                        },
                        'aria-hidden': !0,
                        children: [
                            (0, r.jsx)(s.animated.rect, {
                                fill: 'white',
                                x: P.to({
                                    range: [0, 0.3, 0.7, 1],
                                    output: [4, 0, 0, 4]
                                }),
                                y: P.to({
                                    range: [0, 0.3, 0.7, 1],
                                    output: [0, 1, 1, 0]
                                }),
                                height: P.to({
                                    range: [0, 0.3, 0.7, 1],
                                    output: [20, 18, 18, 20]
                                }),
                                width: P.to({
                                    range: [0, 0.3, 0.7, 1],
                                    output: [20, 28, 28, 20]
                                }),
                                rx: '10'
                            }),
                            v(P, C, R, I.enabled)
                        ]
                    }),
                    (0, r.jsx)('input', {
                        id: t,
                        type: 'checkbox',
                        ref: (e) => {
                            (S.current = e), null != O && (O.current = e);
                        },
                        className: p.input,
                        tabIndex: h ? -1 : 0,
                        onKeyDown: L,
                        onKeyUp: x,
                        onChange: D,
                        checked: o,
                        disabled: h
                    })
                ]
            })
        })
    );
};
