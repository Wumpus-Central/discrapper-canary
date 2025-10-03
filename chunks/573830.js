n.d(t, { J: () => A }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(958610),
    o = n(137317),
    s = n(692547),
    l = n(251052),
    c = n(673824),
    u = n(213305),
    d = n(155127),
    f = n(571755);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = "M4.10585 5.3837L5.37864 4.11091L11.884 10.61632L10.6112 11.88912L4.10585 5.3837Z",
    E = "M10.61632 4.11091L11.88912 5.3837L5.3837 11.88912L4.11091 10.61632L10.61632 4.11091Z",
    b = "M5.25333 8.80104L5.25333 7.17346L10.85336 7.17346L10.85336 8.80104L5.25333 8.80104Z",
    y = "M10.84656 7.17346L10.84656 8.80104L5.24954 8.80104L5.24954 7.17346L10.84656 7.17346Z",
    O = "M6.31649 11.88304L5.0437 10.61032L11.44792 4.20604L12.72072 5.47883L6.31649 11.88304Z",
    v = "M3.26914 8.87224L4.54194 7.59943L7.5588 10.61632L6.28601 11.88912L3.26914 8.87224Z",
    I = [0, 0.1, 0.2, 0.8, 0.9, 1],
    T = [0, 0.1, 0.9, 1];
function S(e, t, n, i) {
    let a = e.to({
            range: T,
            output: [t, t, n, n],
            extrapolate: "clamp",
        }),
        s = i ? [g, g, O, O] : [g, b, b, O],
        l = i ? [E, E, v, v] : [E, y, y, v];
    return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        children: (0, r.jsxs)("g", {
            transform: "translate(4 4)",
            children: [
                (0, r.jsx)(o.animated.path, {
                    fill: a,
                    d: e.to({
                        range: T,
                        output: s,
                        extrapolate: "clamp",
                    }),
                }),
                (0, r.jsx)(o.animated.path, {
                    fill: a,
                    d: e.to({
                        range: T,
                        output: l,
                        extrapolate: "clamp",
                    }),
                }),
            ],
        }),
    });
}
function A(e) {
    let {
            checked: t,
            disabled: n,
            id: _,
            onChange: h,
            focusProps: g,
            hasIcon: E = !1,
            describedBy: b,
            innerRef: y,
        } = e,
        { reducedMotion: O } = i.useContext(u.S),
        v = (0, c.d)(s.Z.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        A = (0, c.d)(s.Z.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        C = (0, c.d)(s.Z.colors.SWITCH_BACKGROUND_DEFAULT_SELECTED).spring(),
        N = (0, c.d)(s.Z.colors.SWITCH_BACKGROUND_ACTIVE).spring(),
        R = (0, c.d)(s.Z.colors.SWITCH_BORDER_DEFAULT).spring(),
        P = (0, c.d)(s.Z.colors.SWITCH_BORDER_DEFAULT_SELECTED).spring(),
        w = (0, c.d)(s.Z.colors.SWITCH_BACKGROUND_HOVER).spring(),
        D = (0, c.d)(s.Z.colors.SWITCH_BACKGROUND_HOVER_SELECTED).spring(),
        L = (0, c.d)(s.Z.colors.SWITCH_BORDER_HOVER).spring(),
        x = (0, c.d)(s.Z.colors.SWITCH_BORDER_HOVER_SELECTED).spring(),
        M = (0, c.d)(s.Z.colors.SWITCH_THUMB_FOREGROUND_DEFAULT).spring(),
        j = (0, c.d)(s.Z.colors.SWITCH_THUMB_FOREGROUND_ACTIVE).spring(),
        k = (0, c.d)(s.Z.colors.SWITCH_THUMB_BACKGROUND_DEFAULT).spring(),
        U = (0, c.d)(s.Z.colors.SWITCH_THUMB_BACKGROUND_DEFAULT_SELECTED).spring(),
        [G, B] = i.useState(!1),
        [Z, F] = i.useState(!1),
        V = i.useRef(null),
        H = i.useRef(null),
        { state: Y, opacity: W } = (0, l.q)(
            {
                config: {
                    mass: 1,
                    tension: 600,
                    friction: 26,
                },
                opacity: n ? 0.5 : 1,
                state: G ? (t ? I[I.length - 2] : I[1]) : +!!t,
            },
            "animate-always",
        );
    return (0, r.jsx)(
        d.tE,
        m(p({}, g), {
            ringTarget: V,
            focusTarget: H,
            within: !0,
            offset: -2,
            children: (0, r.jsx)(a.r, {
                id: _,
                className: f.container,
                onHoverChange: (e) => !n && F(e),
                onMouseDown: () => !n && B(!0),
                onMouseUp: () => B(!1),
                onMouseLeave: () => {
                    B(!1);
                },
                inputRef: null != y ? y : H,
                isDisabled: n,
                isSelected: t,
                onChange: h,
                "aria-describedby": b,
                children: (0, r.jsx)(o.animated.div, {
                    ref: V,
                    className: f.switchIndicator,
                    "data-size": "md",
                    "data-mana-component": "switch",
                    style: {
                        opacity: W,
                        backgroundColor: Y.to({
                            range: T,
                            output: [G ? A : Z ? w : v, G ? A : Z ? w : v, G ? N : Z ? D : C, G ? N : Z ? D : C],
                            extrapolate: "clamp",
                        }),
                        border: "1px solid",
                        borderColor: Y.to({
                            range: T,
                            output: [G || Z ? L : R, G || Z ? L : R, G || Z ? x : P, G || Z ? x : P],
                            extrapolate: "clamp",
                        }),
                    },
                    children: (0, r.jsxs)(o.animated.svg, {
                        className: f.thumb,
                        viewBox: "0 0 24 24",
                        preserveAspectRatio: "xMidYMin meet",
                        style: {
                            left: Y.to({
                                range: I,
                                output: [1, 1, 1, 24, 24, 24],
                            }),
                        },
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)(o.animated.rect, {
                                fill: Y.to({
                                    range: I,
                                    output: [k, k, k, U, U, U],
                                }),
                                x: Y.to({
                                    range: I,
                                    output: [4, 4, 1, 1, 4, 4],
                                }),
                                y: Y.to({
                                    range: I,
                                    output: [4, 7, 7, 7, 7, 4],
                                }),
                                height: Y.to({
                                    range: I,
                                    output: [16, 10, 10, 10, 10, 16],
                                }),
                                width: Y.to({
                                    range: I,
                                    output: [16, 16, 22, 22, 16, 16],
                                }),
                                rx: Y.to({
                                    range: I,
                                    output: [8, 5, 5, 5, 5, 8],
                                }),
                            }),
                            E && S(Y, M, j, O.enabled),
                        ],
                    }),
                }),
            }),
        }),
    );
}
