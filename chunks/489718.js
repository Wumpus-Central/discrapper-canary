"use strict";
n.d(t, { I: () => N });
var r = n(627968),
    i = n(64700),
    a = n(977418),
    s = n(967158),
    o = n(92674),
    l = n(823807),
    u = n(827734),
    c = n(717421),
    d = n(603392),
    _ = n(844222),
    f = n(426333),
    p = n(140735),
    h = n(443504);
let m = "M4.10585 5.3837L5.37864 4.11091L11.884 10.61632L10.6112 11.88912L4.10585 5.3837Z",
    g = "M10.61632 4.11091L11.88912 5.3837L5.3837 11.88912L4.11091 10.61632L10.61632 4.11091Z",
    E = "M5.25333 8.80104L5.25333 7.17346L10.85336 7.17346L10.85336 8.80104L5.25333 8.80104Z",
    A = "M10.84656 7.17346L10.84656 8.80104L5.24954 8.80104L5.24954 7.17346L10.84656 7.17346Z",
    I = "M6.31649 11.88304L5.0437 10.61032L11.44792 4.20604L12.72072 5.47883L6.31649 11.88304Z",
    T = "M3.26914 8.87224L4.54194 7.59943L7.5588 10.61632L6.28601 11.88912L3.26914 8.87224Z",
    y = [0, 0.1, 0.4, 0.6, 0.9, 1],
    S = [0, 0.1, 0.9, 1],
    v = [0, 0.1, 0.2, 0.5, 0.7, 1],
    C = [0, 0.3, 0.5, 0.8, 0.9, 1];
function b(e, t, n) {
    let i = e.to({ range: S, output: [t, t, n, n], extrapolate: "clamp" });
    return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        children: (0, r.jsxs)("g", {
            transform: "translate(4 4)",
            children: [
                (0, r.jsx)(o.animated.path, {
                    fill: i,
                    d: e.to({ range: S, output: [m, E, E, I], extrapolate: "clamp" }),
                }),
                (0, r.jsx)(o.animated.path, {
                    fill: i,
                    d: e.to({ range: S, output: [g, A, A, T], extrapolate: "clamp" }),
                }),
            ],
        }),
    });
}
function N(e) {
    let {
            checked: t,
            disabled: n,
            id: m,
            onChange: g,
            focusProps: E,
            hasIcon: A = !1,
            describedBy: I,
            labelledBy: T,
            innerRef: N,
        } = e,
        { reducedMotion: R } = i.useContext(_.C),
        O = i.useRef(null),
        D = i.useRef(null),
        L = N ?? D,
        w = (0, l.H)({ isSelected: t, onChange: g, isDisabled: n }),
        {
            inputProps: x,
            labelProps: P,
            isPressed: M,
        } = (0, a.K)({ id: m, isDisabled: n, "aria-describedby": I, "aria-labelledby": T }, w, L),
        { hoverProps: k, isHovered: U } = (0, s.M)({ isDisabled: n }),
        G = (0, d.r)(u.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        V = (0, d.r)(u.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        F = (0, d.r)(u.A.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT).spring(),
        B = (0, d.r)(u.A.colors.SWITCH_BACKGROUND_ACTIVE).spring(),
        j = (0, d.r)(u.A.colors.SWITCH_BORDER_DEFAULT).spring(),
        H = (0, d.r)(u.A.colors.SWITCH_BORDER_SELECTED_DEFAULT).spring(),
        Y = (0, d.r)(u.A.colors.SWITCH_BACKGROUND_HOVER).spring(),
        W = (0, d.r)(u.A.colors.SWITCH_BACKGROUND_SELECTED_HOVER).spring(),
        K = (0, d.r)(u.A.colors.SWITCH_BORDER_HOVER).spring(),
        z = (0, d.r)(u.A.colors.SWITCH_BORDER_SELECTED_HOVER).spring(),
        $ = (0, d.r)(u.A.colors.SWITCH_THUMB_ICON_DEFAULT).spring(),
        q = (0, d.r)(u.A.colors.SWITCH_THUMB_ICON_ACTIVE).spring(),
        Z = (0, d.r)(u.A.colors.SWITCH_THUMB_BACKGROUND_DEFAULT).spring(),
        Q = (0, d.r)(u.A.colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT).spring(),
        { state: X, opacity: J } = (0, c.z)(
            {
                config: { duration: R.enabled ? 200 : 300 },
                opacity: n ? 0.5 : 1,
                state: M ? (t ? C[C.length - 2] : v[1]) : +!!t,
            },
            "animate-always",
        ),
        ee = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...e].reverse();
            return t ? X.to({ range: C, output: n }) : X.to({ range: v, output: e });
        };
    return (0, r.jsx)(f.vN, {
        ...E,
        ringTarget: O,
        focusTarget: L,
        within: !0,
        offset: -2,
        children: (0, r.jsxs)("label", {
            ...P,
            className: h.kL,
            "data-disabled": n || void 0,
            children: [
                (0, r.jsx)(o.animated.div, {
                    ...k,
                    ref: O,
                    className: h.cw,
                    "data-size": "md",
                    "data-mana-component": "switch",
                    style: {
                        opacity: J,
                        backgroundColor: X.to({ range: S, output: [U ? Y : G, V, B, U ? W : F], extrapolate: "clamp" }),
                        border: "1px solid",
                        borderColor: X.to({
                            range: S,
                            output: [U ? K : j, U ? K : j, U ? z : H, U ? z : H],
                            extrapolate: "clamp",
                        }),
                    },
                    children: (0, r.jsxs)(o.animated.svg, {
                        className: h.FF,
                        viewBox: "0 0 24 24",
                        preserveAspectRatio: "xMidYMin meet",
                        style: {
                            left: X.to(
                                R.enabled
                                    ? { range: S, output: [1, 1, 24, 24] }
                                    : { range: y, output: [1, 1, 1, 24, 24, 24] },
                            ),
                        },
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)(o.animated.rect, {
                                fill: X.to({ range: S, output: [Z, Z, Q, Q] }),
                                x: R.enabled ? 4 : ee([4, 4, 2.5, 1, 2.5, 4]),
                                y: R.enabled ? 4 : ee([4, 7, 2.5, 7, 2.5, 4]),
                                width: R.enabled ? 16 : ee([16, 16, 19, 22, 19, 16]),
                                height: R.enabled ? 16 : ee([16, 10, 19, 10, 19, 16]),
                                rx: R.enabled ? 8 : ee([8, 5, 9.5, 5, 9.5, 8]),
                            }),
                            A && b(X, $, q),
                        ],
                    }),
                }),
                (0, r.jsx)(p.A, { children: (0, r.jsx)("input", { ...x, ref: L }) }),
            ],
        }),
    });
}
