"use strict";
n.d(t, { T: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(382222),
    l = n(827734),
    u = n(717421),
    c = n(603392),
    d = n(844222),
    _ = n(426333),
    f = n(452027),
    p = n(619422);
let h = { mass: 1, tension: 250 },
    m = "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
    E = "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z",
    g = "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
    A = "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z",
    I = "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
    T = "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z";
function S(e, t, n, i) {
    let s = e.to({ output: [t, n] }),
        a = i ? [m, m, I, I] : [m, g, g, I],
        l = i ? [E, E, T, T] : [E, A, A, T];
    return (0, r.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            (0, r.jsx)(o.animated.path, { fill: s, d: e.to({ range: [0, 0.3, 0.7, 1], output: a }) }),
            (0, r.jsx)(o.animated.path, { fill: s, d: e.to({ range: [0, 0.3, 0.7, 1], output: l }) }),
        ],
    });
}
function y(e) {
    let { onChange: t, checked: n, disabled: s, focusProps: m, innerRef: E, ...g } = e,
        { reducedMotion: A } = i.useContext(d.C),
        I = i.useRef(null),
        [T, y] = i.useState(!1),
        v = (0, c.r)(l.A.colors.SLIDER_TRACK_BACKGROUND).spring(),
        N = (0, c.r)(l.A.colors.BACKGROUND_BRAND).spring(),
        { state: C } = (0, u.z)({ config: h, state: T ? (n ? 0.7 : 0.3) : +!!n }, "animate-always");
    function R(e) {
        y(!1), e.stopPropagation(), t?.(e.currentTarget.checked);
    }
    function O(e) {
        s || e.repeat || ((" " === e.key || "Enter" === e.key) && y(!0));
    }
    function b(e) {
        s || !T || e.repeat || (y(!1), "Enter" === e.key && I.current?.click());
    }
    return (0, r.jsx)(f.D, {
        ...g,
        disabled: s,
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
                    className: a()(p.kL, { [p.KD]: n, [p.r9]: s }),
                    onMouseDown: () => !s && y(!0),
                    onMouseUp: () => y(!1),
                    onMouseLeave: () => y(!1),
                    style: { backgroundColor: C.to({ output: [v, N] }) },
                    children: [
                        (0, r.jsxs)(o.animated.svg, {
                            className: p.aw,
                            viewBox: "0 0 28 20",
                            preserveAspectRatio: "xMinYMid meet",
                            style: { left: C.to({ range: [0, 0.3, 0.7, 1], output: [-4, 1, 8, 12] }) },
                            "aria-hidden": !0,
                            children: [
                                (0, r.jsx)(o.animated.rect, {
                                    fill: "white",
                                    x: C.to({ range: [0, 0.3, 0.7, 1], output: [4, 0, 0, 4] }),
                                    y: C.to({ range: [0, 0.3, 0.7, 1], output: [0, 1, 1, 0] }),
                                    height: C.to({ range: [0, 0.3, 0.7, 1], output: [20, 18, 18, 20] }),
                                    width: C.to({ range: [0, 0.3, 0.7, 1], output: [20, 28, 28, 20] }),
                                    rx: "10",
                                }),
                                S(C, v, N, A.enabled),
                            ],
                        }),
                        (0, r.jsx)("input", {
                            id: e.controlId,
                            "aria-describedby": e.describedById,
                            "aria-errormessage": e.errorMessageId,
                            "aria-invalid": null != e.errorMessageId,
                            type: "checkbox",
                            ref: (e) => {
                                (I.current = e), null != E && (E.current = e);
                            },
                            className: p.hF,
                            tabIndex: s ? -1 : 0,
                            onKeyDown: O,
                            onKeyUp: b,
                            onChange: R,
                            checked: n,
                            disabled: s,
                        }),
                    ],
                }),
            }),
    });
}
