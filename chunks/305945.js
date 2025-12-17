n.d(t, { T: () => P }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(236726),
    l = n(692547),
    c = n(251052),
    u = n(673824),
    d = n(213305),
    f = n(155127),
    p = n(483566),
    _ = n(117325);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
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
    S = "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z",
    I = "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
    T = "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z",
    C = "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
    A = "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z";
function N(e, t, n, i) {
    let a = e.to({
            output: [t, n],
        }),
        o = i ? [v, v, C, C] : [v, I, I, C],
        l = i ? [S, S, A, A] : [S, T, T, A];
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
function P(e) {
    let { onChange: t, checked: n, disabled: a, focusProps: m, innerRef: g } = e,
        y = b(e, ["onChange", "checked", "disabled", "focusProps", "innerRef"]),
        { reducedMotion: v } = i.useContext(d.S),
        S = i.useRef(null),
        [I, T] = i.useState(!1),
        C = (0, u.d)(l.Z.colors.INTERACTIVE_MUTED).spring(),
        A = (0, u.d)(l.Z.colors.BACKGROUND_BRAND).spring(),
        { state: P } = (0, c.q)(
            {
                config: O,
                state: I ? (n ? 0.7 : 0.3) : +!!n,
            },
            "animate-always",
        );
    function R(e) {
        T(!1), e.stopPropagation(), null == t || t(e.currentTarget.checked);
    }
    function w(e) {
        a || e.repeat || ((" " === e.key || "Enter" === e.key) && T(!0));
    }
    function D(e) {
        var t;
        a || !I || e.repeat || (T(!1), "Enter" === e.key && (null == (t = S.current) || t.click()));
    }
    return (0, r.jsx)(
        p.g,
        E(h({}, y), {
            disabled: a,
            layout: "horizontal",
            layoutConfig: { horizontalControlColumnWidth: "auto" },
            auxiliaryContentPosition: "under-label",
            children: (e) =>
                (0, r.jsx)(
                    f.tE,
                    E(h({}, m), {
                        within: !0,
                        offset: -2,
                        children: (0, r.jsxs)(s.animated.div, {
                            "data-toggleable-component": "switch",
                            className: o()(_.container, {
                                [_.checked]: n,
                                [_.disabled]: a,
                            }),
                            onMouseDown: () => !a && T(!0),
                            onMouseUp: () => T(!1),
                            onMouseLeave: () => T(!1),
                            style: {
                                backgroundColor: P.to({
                                    output: [C, A],
                                }),
                            },
                            children: [
                                (0, r.jsxs)(s.animated.svg, {
                                    className: _.slider,
                                    viewBox: "0 0 28 20",
                                    preserveAspectRatio: "xMinYMid meet",
                                    style: {
                                        left: P.to({
                                            range: [0, 0.3, 0.7, 1],
                                            output: [-4, 1, 8, 12],
                                        }),
                                    },
                                    "aria-hidden": !0,
                                    children: [
                                        (0, r.jsx)(s.animated.rect, {
                                            fill: "white",
                                            x: P.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: [4, 0, 0, 4],
                                            }),
                                            y: P.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: [0, 1, 1, 0],
                                            }),
                                            height: P.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: [20, 18, 18, 20],
                                            }),
                                            width: P.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: [20, 28, 28, 20],
                                            }),
                                            rx: "10",
                                        }),
                                        N(P, C, A, v.enabled),
                                    ],
                                }),
                                (0, r.jsx)("input", {
                                    id: e.controlId,
                                    "aria-describedby": e.describedById,
                                    "aria-errormessage": e.errorMessageId,
                                    "aria-invalid": null != e.errorMessageId,
                                    type: "checkbox",
                                    ref: (e) => {
                                        (S.current = e), null != g && (g.current = e);
                                    },
                                    className: _.input,
                                    tabIndex: a ? -1 : 0,
                                    onKeyDown: w,
                                    onKeyUp: D,
                                    onChange: R,
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
