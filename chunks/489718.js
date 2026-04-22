"use strict";
n.d(t, { I: () => R });
var r = n(627968),
    i = n(64700),
    s = n(977418),
    a = n(967158),
    o = n(517738),
    l = n(823807),
    u = n(827734),
    d = n(717421),
    c = n(603392),
    _ = n(844222),
    f = n(187322),
    E = n(140735),
    h = n(764371);
let p = "M4.10585 5.3837L5.37864 4.11091L11.884 10.61632L10.6112 11.88912L4.10585 5.3837Z",
    m = "M10.61632 4.11091L11.88912 5.3837L5.3837 11.88912L4.11091 10.61632L10.61632 4.11091Z",
    g = "M5.25333 8.80104L5.25333 7.17346L10.85336 7.17346L10.85336 8.80104L5.25333 8.80104Z",
    A = "M10.84656 7.17346L10.84656 8.80104L5.24954 8.80104L5.24954 7.17346L10.84656 7.17346Z",
    I = "M6.31649 11.88304L5.0437 10.61032L11.44792 4.20604L12.72072 5.47883L6.31649 11.88304Z",
    T = "M3.26914 8.87224L4.54194 7.59943L7.5588 10.61632L6.28601 11.88912L3.26914 8.87224Z",
    S = [0, 0.1, 0.4, 0.6, 0.9, 1],
    y = [0, 0.1, 0.9, 1],
    N = [0, 0.1, 0.2, 0.5, 0.7, 1],
    O = [0, 0.3, 0.5, 0.8, 0.9, 1];
function R(e) {
    let t,
        {
            checked: n,
            disabled: R,
            id: v,
            onChange: C,
            focusProps: b,
            hasIcon: D = !1,
            describedBy: L,
            labelledBy: w,
            innerRef: M,
        } = e,
        { reducedMotion: P } = i.useContext(_.C),
        U = i.useRef(null),
        k = i.useRef(null),
        x = M ?? k,
        G = (0, l.H)({ isSelected: n, onChange: C, isDisabled: R }),
        {
            inputProps: V,
            labelProps: F,
            isPressed: B,
        } = (0, s.K)({ id: v, isDisabled: R, "aria-describedby": L, "aria-labelledby": w }, G, x),
        { hoverProps: H, isHovered: Y } = (0, a.M)({ isDisabled: R }),
        W = (0, c.r)(u.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        j = (0, c.r)(u.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        K = (0, c.r)(u.A.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT).spring(),
        $ = (0, c.r)(u.A.colors.SWITCH_BACKGROUND_ACTIVE).spring(),
        z = (0, c.r)(u.A.colors.SWITCH_BORDER_DEFAULT).spring(),
        q = (0, c.r)(u.A.colors.SWITCH_BORDER_SELECTED_DEFAULT).spring(),
        X = (0, c.r)(u.A.colors.SWITCH_BACKGROUND_HOVER).spring(),
        Q = (0, c.r)(u.A.colors.SWITCH_BACKGROUND_SELECTED_HOVER).spring(),
        J = (0, c.r)(u.A.colors.SWITCH_BORDER_HOVER).spring(),
        Z = (0, c.r)(u.A.colors.SWITCH_BORDER_SELECTED_HOVER).spring(),
        ee = (0, c.r)(u.A.colors.SWITCH_THUMB_ICON_DEFAULT).spring(),
        et = (0, c.r)(u.A.colors.SWITCH_THUMB_ICON_ACTIVE).spring(),
        en = (0, c.r)(u.A.colors.SWITCH_THUMB_BACKGROUND_DEFAULT).spring(),
        er = (0, c.r)(u.A.colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT).spring(),
        { state: ei, opacity: es } = (0, d.z)(
            {
                config: { duration: P.enabled ? 200 : 300 },
                opacity: R ? 0.5 : 1,
                state: B ? (n ? O[O.length - 2] : N[1]) : +!!n,
            },
            "animate-always",
        ),
        ea = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...e].reverse();
            return n ? ei.to({ range: O, output: t }) : ei.to({ range: N, output: e });
        };
    return (0, r.jsx)(f.vN, {
        ...b,
        ringTarget: U,
        focusTarget: x,
        within: !0,
        offset: -2,
        children: (0, r.jsxs)("label", {
            ...F,
            className: h.kL,
            "data-disabled": R || void 0,
            children: [
                (0, r.jsx)(o.animated.div, {
                    ...H,
                    ref: U,
                    className: h.cw,
                    "data-size": "md",
                    "data-mana-component": "switch",
                    style: {
                        opacity: es,
                        backgroundColor: ei.to({
                            range: y,
                            output: [Y ? X : W, j, $, Y ? Q : K],
                            extrapolate: "clamp",
                        }),
                        border: "1px solid",
                        borderColor: ei.to({
                            range: y,
                            output: [Y ? J : z, Y ? J : z, Y ? Z : q, Y ? Z : q],
                            extrapolate: "clamp",
                        }),
                    },
                    children: (0, r.jsxs)(o.animated.svg, {
                        className: h.FF,
                        viewBox: "0 0 24 24",
                        preserveAspectRatio: "xMidYMin meet",
                        style: {
                            left: ei.to(
                                P.enabled
                                    ? { range: y, output: [1, 1, 24, 24] }
                                    : { range: S, output: [1, 1, 1, 24, 24, 24] },
                            ),
                        },
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)(o.animated.rect, {
                                fill: ei.to({ range: y, output: [en, en, er, er] }),
                                x: P.enabled ? 4 : ea([4, 4, 2.5, 1, 2.5, 4]),
                                y: P.enabled ? 4 : ea([4, 7, 2.5, 7, 2.5, 4]),
                                width: P.enabled ? 16 : ea([16, 16, 19, 22, 19, 16]),
                                height: P.enabled ? 16 : ea([16, 10, 19, 10, 19, 16]),
                                rx: P.enabled ? 8 : ea([8, 5, 9.5, 5, 9.5, 8]),
                            }),
                            D &&
                                ((t = ei.to({ range: y, output: [ee, ee, et, et], extrapolate: "clamp" })),
                                (0, r.jsx)("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: (0, r.jsxs)("g", {
                                        transform: "translate(4 4)",
                                        children: [
                                            (0, r.jsx)(o.animated.path, {
                                                fill: t,
                                                d: ei.to({ range: y, output: [p, g, g, I], extrapolate: "clamp" }),
                                            }),
                                            (0, r.jsx)(o.animated.path, {
                                                fill: t,
                                                d: ei.to({ range: y, output: [m, A, A, T], extrapolate: "clamp" }),
                                            }),
                                        ],
                                    }),
                                })),
                        ],
                    }),
                }),
                (0, r.jsx)(E.A, { children: (0, r.jsx)("input", { ...V, ref: x }) }),
            ],
        }),
    });
}
