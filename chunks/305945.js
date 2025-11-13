n.d(t, { T: () => R }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(509442),
    l = n(692547),
    c = n(251052),
    u = n(673824),
    d = n(213305),
    f = n(155127),
    _ = n(483566),
    p = n(406751);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = {
        mass: 1,
        tension: 250,
    },
    v = "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
    I = "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z",
    T = "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
    S = "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z",
    A = "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
    C = "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z";
function N(e, t, n, i) {
    let a = e.to({
            output: [t, n],
        }),
        o = i ? [v, v, A, A] : [v, T, T, A],
        l = i ? [I, I, C, C] : [I, S, S, C];
    return (0, r.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            (0, r.jsx)(s.animated.path, {
                fill: a,
                d: e.to({
                    range: [0, 0.3, 0.7, 1],
                    output: o,
                }),
            }),
            (0, r.jsx)(s.animated.path, {
                fill: a,
                d: e.to({
                    range: [0, 0.3, 0.7, 1],
                    output: l,
                }),
            }),
        ],
    });
}
function R(e) {
    let { onChange: t, checked: n, disabled: a, focusProps: h, innerRef: g } = e,
        y = b(e, ["onChange", "checked", "disabled", "focusProps", "innerRef"]),
        { reducedMotion: v } = i.useContext(d.S),
        I = i.useRef(null),
        [T, S] = i.useState(!1),
        A = (0, u.d)(l.Z.colors.INTERACTIVE_MUTED).spring(),
        C = (0, u.d)(l.Z.colors.BG_BRAND).spring(),
        { state: R } = (0, c.q)(
            {
                config: O,
                state: T ? (n ? 0.7 : 0.3) : +!!n,
            },
            "animate-always",
        );
    function P(e) {
        S(!1), e.stopPropagation(), null == t || t(e.currentTarget.checked);
    }
    function D(e) {
        a || e.repeat || ((" " === e.key || "Enter" === e.key) && S(!0));
    }
    function w(e) {
        var t;
        a || !T || e.repeat || (S(!1), "Enter" === e.key && (null == (t = I.current) || t.click()));
    }
    return (0, r.jsx)(
        _.g,
        E(m({}, y), {
            disabled: a,
            layout: "horizontal",
            children: (e) =>
                (0, r.jsx)(
                    f.tE,
                    E(m({}, h), {
                        within: !0,
                        offset: -2,
                        children: (0, r.jsxs)(s.animated.div, {
                            "data-toggleable-component": "switch",
                            className: o()(p.container, {
                                [p.checked]: n,
                                [p.disabled]: a,
                            }),
                            onMouseDown: () => !a && S(!0),
                            onMouseUp: () => S(!1),
                            onMouseLeave: () => S(!1),
                            style: {
                                backgroundColor: R.to({
                                    output: [A, C],
                                }),
                            },
                            children: [
                                (0, r.jsxs)(s.animated.svg, {
                                    className: p.slider,
                                    viewBox: "0 0 28 20",
                                    preserveAspectRatio: "xMinYMid meet",
                                    style: {
                                        left: R.to({
                                            range: [0, 0.3, 0.7, 1],
                                            output: [-4, 1, 8, 12],
                                        }),
                                    },
                                    "aria-hidden": !0,
                                    children: [
                                        (0, r.jsx)(s.animated.rect, {
                                            fill: "white",
                                            x: R.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: [4, 0, 0, 4],
                                            }),
                                            y: R.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: [0, 1, 1, 0],
                                            }),
                                            height: R.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: [20, 18, 18, 20],
                                            }),
                                            width: R.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: [20, 28, 28, 20],
                                            }),
                                            rx: "10",
                                        }),
                                        N(R, A, C, v.enabled),
                                    ],
                                }),
                                (0, r.jsx)("input", {
                                    id: e.controlId,
                                    "aria-describedby": e.describedById,
                                    "aria-errormessage": e.errorMessageId,
                                    "aria-invalid": null != e.errorMessageId,
                                    type: "checkbox",
                                    ref: (e) => {
                                        (I.current = e), null != g && (g.current = e);
                                    },
                                    className: p.input,
                                    tabIndex: a ? -1 : 0,
                                    onKeyDown: D,
                                    onKeyUp: w,
                                    onChange: P,
                                    checked: n,
                                    disabled: a,
                                }),
                            ],
                        }),
                    }),
                ),
        }),
    );
}
