"use strict";
n.d(t, { T: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(827734),
    u = n(717421),
    c = n(603392),
    d = n(844222),
    _ = n(426333),
    f = n(452027),
    h = n(992495);
let p = { mass: 1, tension: 250 },
    g = "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
    E = "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z",
    A = "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
    I = "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z",
    T = "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
    y = "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z";
function S(e, t, n, i) {
    let a = e.to({ output: [t, n] }),
        s = i ? [g, g, T, T] : [g, A, A, T],
        l = i ? [E, E, y, y] : [E, I, I, y];
    return (0, r.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            (0, r.jsx)(o.animated.path, { fill: a, d: e.to({ range: [0, 0.3, 0.7, 1], output: s }) }),
            (0, r.jsx)(o.animated.path, { fill: a, d: e.to({ range: [0, 0.3, 0.7, 1], output: l }) }),
        ],
    });
}
function v(e) {
    let { onChange: t, checked: n, disabled: a, focusProps: g, innerRef: E, ...A } = e,
        { reducedMotion: I } = i.useContext(d.C),
        T = i.useRef(null),
        [y, v] = i.useState(!1),
        C = (0, c.r)(l.A.colors.SLIDER_TRACK_BACKGROUND).spring(),
        b = (0, c.r)(l.A.colors.BACKGROUND_BRAND).spring(),
        { state: N } = (0, u.z)({ config: p, state: y ? (n ? 0.7 : 0.3) : +!!n }, "animate-always");
    function R(e) {
        v(!1), e.stopPropagation(), t?.(e.currentTarget.checked);
    }
    function O(e) {
        a || e.repeat || ((" " === e.key || "Enter" === e.key) && v(!0));
    }
    function D(e) {
        a || !y || e.repeat || (v(!1), "Enter" === e.key && T.current?.click());
    }
    return (0, r.jsx)(f.D, {
        ...A,
        disabled: a,
        layout: "horizontal",
        layoutConfig: { horizontalControlColumnWidth: "auto" },
        auxiliaryContentPosition: "under-label",
        children: (e) =>
            (0, r.jsx)(_.vN, {
                ...g,
                within: !0,
                offset: -2,
                children: (0, r.jsxs)(o.animated.div, {
                    "data-toggleable-component": "switch",
                    className: s()(h.kL, { [h.KD]: n, [h.r9]: a }),
                    onMouseDown: () => !a && v(!0),
                    onMouseUp: () => v(!1),
                    onMouseLeave: () => v(!1),
                    style: { backgroundColor: N.to({ output: [C, b] }) },
                    children: [
                        (0, r.jsxs)(o.animated.svg, {
                            className: h.aw,
                            viewBox: "0 0 28 20",
                            preserveAspectRatio: "xMinYMid meet",
                            style: { left: N.to({ range: [0, 0.3, 0.7, 1], output: [-4, 1, 8, 12] }) },
                            "aria-hidden": !0,
                            children: [
                                (0, r.jsx)(o.animated.rect, {
                                    fill: "white",
                                    x: N.to({ range: [0, 0.3, 0.7, 1], output: [4, 0, 0, 4] }),
                                    y: N.to({ range: [0, 0.3, 0.7, 1], output: [0, 1, 1, 0] }),
                                    height: N.to({ range: [0, 0.3, 0.7, 1], output: [20, 18, 18, 20] }),
                                    width: N.to({ range: [0, 0.3, 0.7, 1], output: [20, 28, 28, 20] }),
                                    rx: "10",
                                }),
                                S(N, C, b, I.enabled),
                            ],
                        }),
                        (0, r.jsx)("input", {
                            id: e.controlId,
                            "aria-describedby": e.describedById,
                            "aria-errormessage": e.errorMessageId,
                            "aria-invalid": null != e.errorMessageId,
                            type: "checkbox",
                            ref: (e) => {
                                (T.current = e), null != E && (E.current = e);
                            },
                            className: h.hF,
                            tabIndex: a ? -1 : 0,
                            onKeyDown: O,
                            onKeyUp: D,
                            onChange: R,
                            checked: n,
                            disabled: a,
                        }),
                    ],
                }),
            }),
    });
}
