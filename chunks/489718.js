var t = r(477900),
    s = r(582128),
    o = r(997028),
    l = r(599291),
    n = r(120692),
    i = r(461062),
    d = r(646514),
    c = r(717421),
    p = r(603392),
    u = r(844222),
    C = r(559106),
    L = r(140735),
    _ = r(820782);
let g = "M4.10585 5.3837L5.37864 4.11091L11.884 10.61632L10.6112 11.88912L4.10585 5.3837Z",
    T = "M10.61632 4.11091L11.88912 5.3837L5.3837 11.88912L4.11091 10.61632L10.61632 4.11091Z",
    h = "M5.25333 8.80104L5.25333 7.17346L10.85336 7.17346L10.85336 8.80104L5.25333 8.80104Z",
    A = "M10.84656 7.17346L10.84656 8.80104L5.24954 8.80104L5.24954 7.17346L10.84656 7.17346Z",
    E = "M6.31649 11.88304L5.0437 10.61032L11.44792 4.20604L12.72072 5.47883L6.31649 11.88304Z",
    b = "M3.26914 8.87224L4.54194 7.59943L7.5588 10.61632L6.28601 11.88912L3.26914 8.87224Z",
    x = [0, 0.1, 0.4, 0.6, 0.9, 1],
    D = [0, 0.1, 0.9, 1],
    I = [0, 0.1, 0.2, 0.5, 0.7, 1],
    H = [0, 0.3, 0.5, 0.8, 0.9, 1];
function R() {}
r.d(
    a,
    {},
    {
        I: function (e) {
            let a,
                {
                    checked: r,
                    disabled: B,
                    displayOnly: f,
                    id: m,
                    onChange: S,
                    focusProps: U,
                    hasIcon: O = !1,
                    describedBy: j,
                    labelledBy: v,
                    innerRef: N,
                } = e,
                { reducedMotion: y } = s.useContext(u.C),
                W = s.useRef(null),
                M = s.useRef(null),
                F = N ?? M,
                k = (0, i.H)({ isSelected: r, onChange: S ?? R, isDisabled: B }),
                {
                    inputProps: w,
                    labelProps: K,
                    isPressed: G,
                } = (0, o.K)({ id: m, isDisabled: B, "aria-describedby": j, "aria-labelledby": v ?? "" }, k, F),
                { hoverProps: V, isHovered: Z } = (0, l.M)({ isDisabled: B }),
                z = (0, p.r)(d.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
                P = (0, p.r)(d.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
                Y = (0, p.r)(d.A.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT).spring(),
                q = (0, p.r)(d.A.colors.SWITCH_BACKGROUND_ACTIVE).spring(),
                J = (0, p.r)(d.A.colors.SWITCH_BORDER_DEFAULT).spring(),
                Q = (0, p.r)(d.A.colors.SWITCH_BORDER_SELECTED_DEFAULT).spring(),
                X = (0, p.r)(d.A.colors.SWITCH_BACKGROUND_HOVER).spring(),
                $ = (0, p.r)(d.A.colors.SWITCH_BACKGROUND_SELECTED_HOVER).spring(),
                ee = (0, p.r)(d.A.colors.SWITCH_BORDER_HOVER).spring(),
                ea = (0, p.r)(d.A.colors.SWITCH_BORDER_SELECTED_HOVER).spring(),
                er = (0, p.r)(d.A.colors.SWITCH_THUMB_ICON_DEFAULT).spring(),
                et = (0, p.r)(d.A.colors.SWITCH_THUMB_ICON_ACTIVE).spring(),
                es = (0, p.r)(d.A.colors.SWITCH_THUMB_BACKGROUND_DEFAULT).spring(),
                eo = (0, p.r)(d.A.colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT).spring(),
                { state: el, opacity: en } = (0, c.z)(
                    {
                        config: { duration: y.enabled ? 200 : 300 },
                        opacity: B ? 0.5 : 1,
                        state: G ? (r ? H[H.length - 2] : I[1]) : +!!r,
                    },
                    "animate-always",
                );
            function ei(e) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...e].reverse();
                return r ? el.to({ range: H, output: a }) : el.to({ range: I, output: e });
            }
            let ed = (0, t.jsx)(n.animated.div, {
                ...(f ? {} : V),
                ref: W,
                className: _.cw,
                "data-size": "md",
                "data-mana-component": "switch",
                style: {
                    opacity: en,
                    backgroundColor: el.to({ range: D, output: [Z ? X : z, P, q, Z ? $ : Y], extrapolate: "clamp" }),
                    border: "1px solid",
                    borderColor: el.to({
                        range: D,
                        output: [Z ? ee : J, Z ? ee : J, Z ? ea : Q, Z ? ea : Q],
                        extrapolate: "clamp",
                    }),
                },
                children: (0, t.jsxs)(n.animated.svg, {
                    className: _.FF,
                    viewBox: "0 0 24 24",
                    preserveAspectRatio: "xMidYMin meet",
                    style: {
                        left: el.to(
                            y.enabled
                                ? { range: D, output: [1, 1, 24, 24] }
                                : { range: x, output: [1, 1, 1, 24, 24, 24] },
                        ),
                    },
                    "aria-hidden": !0,
                    children: [
                        (0, t.jsx)(n.animated.rect, {
                            fill: el.to({ range: D, output: [es, es, eo, eo] }),
                            x: y.enabled ? 4 : ei([4, 4, 2.5, 1, 2.5, 4]),
                            y: y.enabled ? 4 : ei([4, 7, 2.5, 7, 2.5, 4]),
                            width: y.enabled ? 16 : ei([16, 16, 19, 22, 19, 16]),
                            height: y.enabled ? 16 : ei([16, 10, 19, 10, 19, 16]),
                            rx: y.enabled ? 8 : ei([8, 5, 9.5, 5, 9.5, 8]),
                        }),
                        O &&
                            ((a = el.to({ range: D, output: [er, er, et, et], extrapolate: "clamp" })),
                            (0, t.jsx)("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: (0, t.jsxs)("g", {
                                    transform: "translate(4 4)",
                                    children: [
                                        (0, t.jsx)(n.animated.path, {
                                            fill: a,
                                            d: el.to({ range: D, output: [g, h, h, E], extrapolate: "clamp" }),
                                        }),
                                        (0, t.jsx)(n.animated.path, {
                                            fill: a,
                                            d: el.to({ range: D, output: [T, A, A, b], extrapolate: "clamp" }),
                                        }),
                                    ],
                                }),
                            })),
                    ],
                }),
            });
            return f
                ? (0, t.jsx)("div", { className: _.kL, "data-disabled": B || void 0, children: ed })
                : (0, t.jsx)(C.vN, {
                      ...U,
                      ringTarget: W,
                      focusTarget: F,
                      within: !0,
                      offset: -2,
                      children: (0, t.jsxs)("label", {
                          ...K,
                          className: _.kL,
                          "data-disabled": B || void 0,
                          children: [ed, (0, t.jsx)(L.A, { children: (0, t.jsx)("input", { ...w, ref: F }) })],
                      }),
                  });
        },
    },
);
