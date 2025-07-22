(n.d(t, { r: () => O }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(42133),
    l = n(692547),
    c = n(186325),
    u = n(84735),
    d = n(180035),
    f = n(481060),
    _ = n(333903);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = {
        mass: 1,
        tension: 250
    },
    b = {
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
function y(e, t, n, i) {
    let a = e.to({
            output: [t, n]
        }),
        o = i ? [b.X.TOP, b.X.TOP, b.CHECK.TOP, b.CHECK.TOP] : [b.X.TOP, b.BAR.TOP, b.BAR.TOP, b.CHECK.TOP],
        l = i ? [b.X.BOTTOM, b.X.BOTTOM, b.CHECK.BOTTOM, b.CHECK.BOTTOM] : [b.X.BOTTOM, b.BAR.BOTTOM, b.BAR.BOTTOM, b.CHECK.BOTTOM];
    return (0, r.jsxs)('svg', {
        viewBox: '0 0 20 20',
        fill: 'none',
        children: [
            (0, r.jsx)(s.animated.path, {
                fill: a,
                d: e.to({
                    range: [0, 0.3, 0.7, 1],
                    output: o
                })
            }),
            (0, r.jsx)(s.animated.path, {
                fill: a,
                d: e.to({
                    range: [0, 0.3, 0.7, 1],
                    output: l
                })
            })
        ]
    });
}
let O = function (e) {
    let { id: t, onChange: n, checked: a, disabled: p, className: m, focusProps: b, innerRef: O } = e,
        { reducedMotion: v } = i.useContext(c.S),
        I = i.useRef(null),
        [T, S] = i.useState(!1),
        A = (0, d.d)(l.Z.colors.INTERACTIVE_MUTED).spring(),
        N = (0, d.d)(l.Z.colors.BG_BRAND).spring(),
        { state: C, opacity: R } = (0, f.q_F)(
            {
                config: E,
                opacity: p ? 0.5 : 1,
                state: T ? (a ? 0.7 : 0.3) : +!!a
            },
            'animate-always'
        );
    function P(e) {
        (S(!1), null == n || n(e.currentTarget.checked, e));
    }
    function w(e) {
        p || e.repeat || ((' ' === e.key || 'Enter' === e.key) && S(!0));
    }
    function D(e) {
        var t;
        p || !T || e.repeat || (S(!1), 'Enter' === e.key && (null == (t = I.current) || t.click()));
    }
    return (0, r.jsx)(
        u.t,
        g(h({}, b), {
            within: !0,
            offset: -2,
            children: (0, r.jsxs)(s.animated.div, {
                className: o()(_.container, m, {
                    [_.checked]: a,
                    [_.disabled]: p
                }),
                onMouseDown: () => !p && S(!0),
                onMouseUp: () => S(!1),
                onMouseLeave: () => S(!1),
                style: {
                    opacity: R,
                    backgroundColor: C.to({
                        output: [A, N]
                    })
                },
                children: [
                    (0, r.jsxs)(s.animated.svg, {
                        className: _.slider,
                        viewBox: '0 0 28 20',
                        preserveAspectRatio: 'xMinYMid meet',
                        style: {
                            left: C.to({
                                range: [0, 0.3, 0.7, 1],
                                output: [-4, 1, 8, 12]
                            })
                        },
                        'aria-hidden': !0,
                        children: [
                            (0, r.jsx)(s.animated.rect, {
                                fill: 'white',
                                x: C.to({
                                    range: [0, 0.3, 0.7, 1],
                                    output: [4, 0, 0, 4]
                                }),
                                y: C.to({
                                    range: [0, 0.3, 0.7, 1],
                                    output: [0, 1, 1, 0]
                                }),
                                height: C.to({
                                    range: [0, 0.3, 0.7, 1],
                                    output: [20, 18, 18, 20]
                                }),
                                width: C.to({
                                    range: [0, 0.3, 0.7, 1],
                                    output: [20, 28, 28, 20]
                                }),
                                rx: '10'
                            }),
                            y(C, A, N, v.enabled)
                        ]
                    }),
                    (0, r.jsx)('input', {
                        id: t,
                        type: 'checkbox',
                        ref: (e) => {
                            ((I.current = e), null != O && (O.current = e));
                        },
                        className: _.input,
                        tabIndex: p ? -1 : 0,
                        onKeyDown: w,
                        onKeyUp: D,
                        onChange: P,
                        checked: a,
                        disabled: p
                    })
                ]
            })
        })
    );
};
