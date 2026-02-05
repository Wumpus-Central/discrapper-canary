"use strict";
n.d(t, { T: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(827734),
    u = n(717421),
    c = n(603392),
    d = n(844222),
    _ = n(426333),
    f = n(452027),
    p = n(992495);
let h = { mass: 1, tension: 250 },
    m = "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
    g = "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z",
    E = "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
    A = "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z",
    I = "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
    T = "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z";
function y(e, t, n, i) {
    let a = e.to({ output: [t, n] }),
        s = i ? [m, m, I, I] : [m, E, E, I],
        l = i ? [g, g, T, T] : [g, A, A, T];
    return (0, r.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            (0, r.jsx)(o.animated.path, { fill: a, d: e.to({ range: [0, 0.3, 0.7, 1], output: s }) }),
            (0, r.jsx)(o.animated.path, { fill: a, d: e.to({ range: [0, 0.3, 0.7, 1], output: l }) }),
        ],
    });
}
function S(e) {
    let { onChange: t, checked: n, disabled: a, focusProps: m, innerRef: g, ...E } = e,
        { reducedMotion: A } = i.useContext(d.C),
        I = i.useRef(null),
        [T, S] = i.useState(!1),
        v = (0, c.r)(l.A.colors.SLIDER_TRACK_BACKGROUND).spring(),
        C = (0, c.r)(l.A.colors.BACKGROUND_BRAND).spring(),
        { state: b } = (0, u.z)({ config: h, state: T ? (n ? 0.7 : 0.3) : +!!n }, "animate-always");
    function N(e) {
        S(!1), e.stopPropagation(), t?.(e.currentTarget.checked);
    }
    function R(e) {
        a || e.repeat || ((" " === e.key || "Enter" === e.key) && S(!0));
    }
    function O(e) {
        a || !T || e.repeat || (S(!1), "Enter" === e.key && I.current?.click());
    }
    return (0, r.jsx)(f.D, {
        ...E,
        disabled: a,
        layout: "horizontal",
        layoutConfig: { horizontalControlColumnWidth: "auto" },
        auxiliaryContentPosition: "under-label",
        children: (e) =>
            (0, r.jsx)(_.vN, {
                ...m,
                within: !0,
                offset: -2,
                children: (0, r.jsxs)(o.animated.div, {
                    "data-toggleable-component": "switch",
                    className: s()(p.kL, { [p.KD]: n, [p.r9]: a }),
                    onMouseDown: () => !a && S(!0),
                    onMouseUp: () => S(!1),
                    onMouseLeave: () => S(!1),
                    style: { backgroundColor: b.to({ output: [v, C] }) },
                    children: [
                        (0, r.jsxs)(o.animated.svg, {
                            className: p.aw,
                            viewBox: "0 0 28 20",
                            preserveAspectRatio: "xMinYMid meet",
                            style: { left: b.to({ range: [0, 0.3, 0.7, 1], output: [-4, 1, 8, 12] }) },
                            "aria-hidden": !0,
                            children: [
                                (0, r.jsx)(o.animated.rect, {
                                    fill: "white",
                                    x: b.to({ range: [0, 0.3, 0.7, 1], output: [4, 0, 0, 4] }),
                                    y: b.to({ range: [0, 0.3, 0.7, 1], output: [0, 1, 1, 0] }),
                                    height: b.to({ range: [0, 0.3, 0.7, 1], output: [20, 18, 18, 20] }),
                                    width: b.to({ range: [0, 0.3, 0.7, 1], output: [20, 28, 28, 20] }),
                                    rx: "10",
                                }),
                                y(b, v, C, A.enabled),
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
                            className: p.hF,
                            tabIndex: a ? -1 : 0,
                            onKeyDown: R,
                            onKeyUp: O,
                            onChange: N,
                            checked: n,
                            disabled: a,
                        }),
                    ],
                }),
            }),
    });
}
