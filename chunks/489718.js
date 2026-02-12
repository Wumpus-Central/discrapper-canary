"use strict";
n.d(t, { I: () => R });
var r = n(627968),
    i = n(64700),
    a = n(977418),
    s = n(967158),
    o = n(40153),
    l = n(823807),
    u = n(827734),
    c = n(717421),
    d = n(603392),
    _ = n(844222),
    f = n(426333),
    h = n(140735),
    p = n(443504);
let g = "M4.10585 5.3837L5.37864 4.11091L11.884 10.61632L10.6112 11.88912L4.10585 5.3837Z",
    E = "M10.61632 4.11091L11.88912 5.3837L5.3837 11.88912L4.11091 10.61632L10.61632 4.11091Z",
    A = "M5.25333 8.80104L5.25333 7.17346L10.85336 7.17346L10.85336 8.80104L5.25333 8.80104Z",
    I = "M10.84656 7.17346L10.84656 8.80104L5.24954 8.80104L5.24954 7.17346L10.84656 7.17346Z",
    T = "M6.31649 11.88304L5.0437 10.61032L11.44792 4.20604L12.72072 5.47883L6.31649 11.88304Z",
    y = "M3.26914 8.87224L4.54194 7.59943L7.5588 10.61632L6.28601 11.88912L3.26914 8.87224Z",
    S = [0, 0.1, 0.4, 0.6, 0.9, 1],
    v = [0, 0.1, 0.9, 1],
    C = [0, 0.1, 0.2, 0.5, 0.7, 1],
    b = [0, 0.3, 0.5, 0.8, 0.9, 1];
function N(e, t, n) {
    let i = e.to({ range: v, output: [t, t, n, n], extrapolate: "clamp" });
    return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        children: (0, r.jsxs)("g", {
            transform: "translate(4 4)",
            children: [
                (0, r.jsx)(o.animated.path, {
                    fill: i,
                    d: e.to({ range: v, output: [g, A, A, T], extrapolate: "clamp" }),
                }),
                (0, r.jsx)(o.animated.path, {
                    fill: i,
                    d: e.to({ range: v, output: [E, I, I, y], extrapolate: "clamp" }),
                }),
            ],
        }),
    });
}
function R(e) {
    let {
            checked: t,
            disabled: n,
            id: g,
            onChange: E,
            focusProps: A,
            hasIcon: I = !1,
            describedBy: T,
            labelledBy: y,
            innerRef: R,
        } = e,
        { reducedMotion: O } = i.useContext(_.C),
        D = i.useRef(null),
        L = i.useRef(null),
        w = R ?? L,
        x = (0, l.H)({ isSelected: t, onChange: E, isDisabled: n }),
        {
            inputProps: P,
            labelProps: M,
            isPressed: k,
        } = (0, a.K)({ id: g, isDisabled: n, "aria-describedby": T, "aria-labelledby": y }, x, w),
        { hoverProps: U, isHovered: G } = (0, s.M)({ isDisabled: n }),
        F = (0, d.r)(u.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        V = (0, d.r)(u.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        B = (0, d.r)(u.A.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT).spring(),
        j = (0, d.r)(u.A.colors.SWITCH_BACKGROUND_ACTIVE).spring(),
        H = (0, d.r)(u.A.colors.SWITCH_BORDER_DEFAULT).spring(),
        Y = (0, d.r)(u.A.colors.SWITCH_BORDER_SELECTED_DEFAULT).spring(),
        W = (0, d.r)(u.A.colors.SWITCH_BACKGROUND_HOVER).spring(),
        K = (0, d.r)(u.A.colors.SWITCH_BACKGROUND_SELECTED_HOVER).spring(),
        $ = (0, d.r)(u.A.colors.SWITCH_BORDER_HOVER).spring(),
        z = (0, d.r)(u.A.colors.SWITCH_BORDER_SELECTED_HOVER).spring(),
        q = (0, d.r)(u.A.colors.SWITCH_THUMB_ICON_DEFAULT).spring(),
        X = (0, d.r)(u.A.colors.SWITCH_THUMB_ICON_ACTIVE).spring(),
        Z = (0, d.r)(u.A.colors.SWITCH_THUMB_BACKGROUND_DEFAULT).spring(),
        Q = (0, d.r)(u.A.colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT).spring(),
        { state: J, opacity: ee } = (0, c.z)(
            {
                config: { duration: O.enabled ? 200 : 300 },
                opacity: n ? 0.5 : 1,
                state: k ? (t ? b[b.length - 2] : C[1]) : +!!t,
            },
            "animate-always",
        ),
        et = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...e].reverse();
            return t ? J.to({ range: b, output: n }) : J.to({ range: C, output: e });
        };
    return (0, r.jsx)(f.vN, {
        ...A,
        ringTarget: D,
        focusTarget: w,
        within: !0,
        offset: -2,
        children: (0, r.jsxs)("label", {
            ...M,
            className: p.kL,
            "data-disabled": n || void 0,
            children: [
                (0, r.jsx)(o.animated.div, {
                    ...U,
                    ref: D,
                    className: p.cw,
                    "data-size": "md",
                    "data-mana-component": "switch",
                    style: {
                        opacity: ee,
                        backgroundColor: J.to({ range: v, output: [G ? W : F, V, j, G ? K : B], extrapolate: "clamp" }),
                        border: "1px solid",
                        borderColor: J.to({
                            range: v,
                            output: [G ? $ : H, G ? $ : H, G ? z : Y, G ? z : Y],
                            extrapolate: "clamp",
                        }),
                    },
                    children: (0, r.jsxs)(o.animated.svg, {
                        className: p.FF,
                        viewBox: "0 0 24 24",
                        preserveAspectRatio: "xMidYMin meet",
                        style: {
                            left: J.to(
                                O.enabled
                                    ? { range: v, output: [1, 1, 24, 24] }
                                    : { range: S, output: [1, 1, 1, 24, 24, 24] },
                            ),
                        },
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)(o.animated.rect, {
                                fill: J.to({ range: v, output: [Z, Z, Q, Q] }),
                                x: O.enabled ? 4 : et([4, 4, 2.5, 1, 2.5, 4]),
                                y: O.enabled ? 4 : et([4, 7, 2.5, 7, 2.5, 4]),
                                width: O.enabled ? 16 : et([16, 16, 19, 22, 19, 16]),
                                height: O.enabled ? 16 : et([16, 10, 19, 10, 19, 16]),
                                rx: O.enabled ? 8 : et([8, 5, 9.5, 5, 9.5, 8]),
                            }),
                            I && N(J, q, X),
                        ],
                    }),
                }),
                (0, r.jsx)(h.A, { children: (0, r.jsx)("input", { ...P, ref: w }) }),
            ],
        }),
    });
}
