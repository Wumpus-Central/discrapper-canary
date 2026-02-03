n.d(t, {
    T: () => w,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
    l = n(827734),
    c = n(717421),
    u = n(603392),
    d = n(844222),
    f = n(426333),
    p = n(452027),
    _ = n(992495);

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

function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let O = {
        mass: 1,
        tension: 250,
    },
    v = "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
    A = "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z",
    I = "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
    S = "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z",
    T = "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
    C = "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z";

function N(e, t, n, i) {
    let a = e.to({
            output: [t, n],
        }),
        o = i ? [v, v, T, T] : [v, I, I, T],
        l = i ? [A, A, C, C] : [A, S, S, C];
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

function w(e) {
    let { onChange: t, checked: n, disabled: a, focusProps: h, innerRef: g } = e,
        b = y(e, ["onChange", "checked", "disabled", "focusProps", "innerRef"]),
        { reducedMotion: v } = i.useContext(d.C),
        A = i.useRef(null),
        [I, S] = i.useState(!1),
        T = (0, u.r)(l.A.colors.SLIDER_TRACK_BACKGROUND).spring(),
        C = (0, u.r)(l.A.colors.BACKGROUND_BRAND).spring(),
        { state: w } = (0, c.z)(
            {
                config: O,
                state: I ? (n ? 0.7 : 0.3) : +!!n,
            },
            "animate-always",
        );

    function R(e) {
        S(!1), e.stopPropagation(), null == t || t(e.currentTarget.checked);
    }

    function P(e) {
        a || e.repeat || ((" " === e.key || "Enter" === e.key) && S(!0));
    }

    function D(e) {
        var t;
        a || !I || e.repeat || (S(!1), "Enter" === e.key && (null == (t = A.current) || t.click()));
    }
    return (0, r.jsx)(
        p.D,
        E(m({}, b), {
            disabled: a,
            layout: "horizontal",
            layoutConfig: {
                horizontalControlColumnWidth: "auto",
            },
            auxiliaryContentPosition: "under-label",
            children: (e) =>
                (0, r.jsx)(
                    f.vN,
                    E(m({}, h), {
                        within: !0,
                        offset: -2,
                        children: (0, r.jsxs)(s.animated.div, {
                            "data-toggleable-component": "switch",
                            className: o()(_.kL, {
                                [_.KD]: n,
                                [_.r9]: a,
                            }),
                            onMouseDown: () => !a && S(!0),
                            onMouseUp: () => S(!1),
                            onMouseLeave: () => S(!1),
                            style: {
                                backgroundColor: w.to({
                                    output: [T, C],
                                }),
                            },
                            children: [
                                (0, r.jsxs)(s.animated.svg, {
                                    className: _.aw,
                                    viewBox: "0 0 28 20",
                                    preserveAspectRatio: "xMinYMid meet",
                                    style: {
                                        left: w.to({
                                            range: [0, 0.3, 0.7, 1],
                                            output: [-4, 1, 8, 12],
                                        }),
                                    },
                                    "aria-hidden": !0,
                                    children: [
                                        (0, r.jsx)(s.animated.rect, {
                                            fill: "white",
                                            x: w.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: [4, 0, 0, 4],
                                            }),
                                            y: w.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: [0, 1, 1, 0],
                                            }),
                                            height: w.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: [20, 18, 18, 20],
                                            }),
                                            width: w.to({
                                                range: [0, 0.3, 0.7, 1],
                                                output: [20, 28, 28, 20],
                                            }),
                                            rx: "10",
                                        }),
                                        N(w, T, C, v.enabled),
                                    ],
                                }),
                                (0, r.jsx)("input", {
                                    id: e.controlId,
                                    "aria-describedby": e.describedById,
                                    "aria-errormessage": e.errorMessageId,
                                    "aria-invalid": null != e.errorMessageId,
                                    type: "checkbox",
                                    ref: (e) => {
                                        (A.current = e), null != g && (g.current = e);
                                    },
                                    className: _.hF,
                                    tabIndex: a ? -1 : 0,
                                    onKeyDown: P,
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
