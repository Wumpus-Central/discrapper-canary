"use strict";
n.d(t, { T: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(517738),
    l = n(827734),
    u = n(717421),
    d = n(603392),
    c = n(844222),
    _ = n(187322),
    f = n(452027),
    E = n(180846);
let h = { mass: 1, tension: 250 },
    p = "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
    m = "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z",
    g = "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
    A = "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z",
    I = "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
    T = "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z";
function S(e) {
    let { onChange: t, checked: n, disabled: s, focusProps: S, innerRef: y, ...N } = e,
        { reducedMotion: O } = i.useContext(c.C),
        R = i.useRef(null),
        [v, C] = i.useState(!1),
        b = (0, d.r)(l.A.colors.SLIDER_TRACK_BACKGROUND).spring(),
        D = (0, d.r)(l.A.colors.BACKGROUND_BRAND).spring(),
        { state: L } = (0, u.z)({ config: h, state: v ? (n ? 0.7 : 0.3) : +!!n }, "animate-always");
    function w(e) {
        C(!1), e.stopPropagation(), t?.(e.currentTarget.checked);
    }
    function M(e) {
        s || e.repeat || ((" " === e.key || "Enter" === e.key) && C(!0));
    }
    function P(e) {
        s || !v || e.repeat || (C(!1), "Enter" === e.key && R.current?.click());
    }
    return (0, r.jsx)(f.D, {
        ...N,
        disabled: s,
        layout: "horizontal",
        layoutConfig: { horizontalControlColumnWidth: "auto" },
        auxiliaryContentPosition: "under-label",
        children: (e) => {
            var t;
            let i, l, u;
            return (0, r.jsx)(_.vN, {
                ...S,
                within: !0,
                offset: -2,
                children: (0, r.jsxs)(o.animated.div, {
                    "data-toggleable-component": "switch",
                    className: a()(E.kL, { [E.KD]: n, [E.r9]: s }),
                    onMouseDown: () => !s && C(!0),
                    onMouseUp: () => C(!1),
                    onMouseLeave: () => C(!1),
                    style: { backgroundColor: L.to({ output: [b, D] }) },
                    children: [
                        (0, r.jsxs)(o.animated.svg, {
                            className: E.aw,
                            viewBox: "0 0 28 20",
                            preserveAspectRatio: "xMinYMid meet",
                            style: { left: L.to({ range: [0, 0.3, 0.7, 1], output: [-4, 1, 8, 12] }) },
                            "aria-hidden": !0,
                            children: [
                                (0, r.jsx)(o.animated.rect, {
                                    fill: "white",
                                    x: L.to({ range: [0, 0.3, 0.7, 1], output: [4, 0, 0, 4] }),
                                    y: L.to({ range: [0, 0.3, 0.7, 1], output: [0, 1, 1, 0] }),
                                    height: L.to({ range: [0, 0.3, 0.7, 1], output: [20, 18, 18, 20] }),
                                    width: L.to({ range: [0, 0.3, 0.7, 1], output: [20, 28, 28, 20] }),
                                    rx: "10",
                                }),
                                ((t = O.enabled),
                                (i = L.to({ output: [b, D] })),
                                (l = t ? [p, p, I, I] : [p, g, g, I]),
                                (u = t ? [m, m, T, T] : [m, A, A, T]),
                                (0, r.jsxs)("svg", {
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    children: [
                                        (0, r.jsx)(o.animated.path, {
                                            fill: i,
                                            d: L.to({ range: [0, 0.3, 0.7, 1], output: l }),
                                        }),
                                        (0, r.jsx)(o.animated.path, {
                                            fill: i,
                                            d: L.to({ range: [0, 0.3, 0.7, 1], output: u }),
                                        }),
                                    ],
                                })),
                            ],
                        }),
                        (0, r.jsx)("input", {
                            id: e.controlId,
                            "aria-describedby": e.describedById,
                            "aria-errormessage": e.errorMessageId,
                            "aria-invalid": null != e.errorMessageId,
                            type: "checkbox",
                            ref: (e) => {
                                (R.current = e), null != y && (y.current = e);
                            },
                            className: E.hF,
                            tabIndex: s ? -1 : 0,
                            onKeyDown: M,
                            onKeyUp: P,
                            onChange: w,
                            checked: n,
                            disabled: s,
                        }),
                    ],
                }),
            });
        },
    });
}
