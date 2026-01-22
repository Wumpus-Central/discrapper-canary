n.d(t, {
    I: () => P,
}),
    n(896048),
    n(264879);
var r = n(627968),
    i = n(64700),
    a = n(977418),
    s = n(967158),
    o = n(108531),
    l = n(823807),
    c = n(827734),
    u = n(717421),
    d = n(603392),
    f = n(844222),
    p = n(426333),
    _ = n(140735),
    h = n(443504);

function m(e, t, n) {
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

function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
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

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = "M4.10585 5.3837L5.37864 4.11091L11.884 10.61632L10.6112 11.88912L4.10585 5.3837Z",
    O = "M10.61632 4.11091L11.88912 5.3837L5.3837 11.88912L4.11091 10.61632L10.61632 4.11091Z",
    A = "M5.25333 8.80104L5.25333 7.17346L10.85336 7.17346L10.85336 8.80104L5.25333 8.80104Z",
    v = "M10.84656 7.17346L10.84656 8.80104L5.24954 8.80104L5.24954 7.17346L10.84656 7.17346Z",
    S = "M6.31649 11.88304L5.0437 10.61032L11.44792 4.20604L12.72072 5.47883L6.31649 11.88304Z",
    I = "M3.26914 8.87224L4.54194 7.59943L7.5588 10.61632L6.28601 11.88912L3.26914 8.87224Z",
    T = [0, 0.1, 0.4, 0.6, 0.9, 1],
    C = [0, 0.1, 0.9, 1],
    N = [0, 0.1, 0.2, 0.5, 0.7, 1],
    R = [0, 0.3, 0.5, 0.8, 0.9, 1];

function w(e, t, n) {
    let i = e.to({
        range: C,
        output: [t, t, n, n],
        extrapolate: "clamp",
    });
    return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        children: (0, r.jsxs)("g", {
            transform: "translate(4 4)",
            children: [
                (0, r.jsx)(o.animated.path, {
                    fill: i,
                    d: e.to({
                        range: C,
                        output: [y, A, A, S],
                        extrapolate: "clamp",
                    }),
                }),
                (0, r.jsx)(o.animated.path, {
                    fill: i,
                    d: e.to({
                        range: C,
                        output: [O, v, v, I],
                        extrapolate: "clamp",
                    }),
                }),
            ],
        }),
    });
}

function P(e) {
    let {
            checked: t,
            disabled: n,
            id: m,
            onChange: E,
            focusProps: y,
            hasIcon: O = !1,
            describedBy: A,
            labelledBy: v,
            innerRef: S,
        } = e,
        { reducedMotion: I } = i.useContext(f.C),
        P = i.useRef(null),
        D = i.useRef(null),
        x = null != S ? S : D,
        L = (0, l.H)({
            isSelected: t,
            onChange: E,
            isDisabled: n,
        }),
        {
            inputProps: j,
            labelProps: M,
            isPressed: k,
        } = (0, a.K)(
            {
                id: m,
                isDisabled: n,
                "aria-describedby": A,
                "aria-labelledby": v,
            },
            L,
            x,
        ),
        { hoverProps: U, isHovered: G } = (0, s.M)({
            isDisabled: n,
        }),
        V = (0, d.r)(c.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        F = (0, d.r)(c.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        B = (0, d.r)(c.A.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT).spring(),
        H = (0, d.r)(c.A.colors.SWITCH_BACKGROUND_ACTIVE).spring(),
        Y = (0, d.r)(c.A.colors.SWITCH_BORDER_DEFAULT).spring(),
        W = (0, d.r)(c.A.colors.SWITCH_BORDER_SELECTED_DEFAULT).spring(),
        K = (0, d.r)(c.A.colors.SWITCH_BACKGROUND_HOVER).spring(),
        z = (0, d.r)(c.A.colors.SWITCH_BACKGROUND_SELECTED_HOVER).spring(),
        q = (0, d.r)(c.A.colors.SWITCH_BORDER_HOVER).spring(),
        X = (0, d.r)(c.A.colors.SWITCH_BORDER_SELECTED_HOVER).spring(),
        Z = (0, d.r)(c.A.colors.SWITCH_THUMB_ICON_DEFAULT).spring(),
        Q = (0, d.r)(c.A.colors.SWITCH_THUMB_ICON_ACTIVE).spring(),
        $ = (0, d.r)(c.A.colors.SWITCH_THUMB_BACKGROUND_DEFAULT).spring(),
        J = (0, d.r)(c.A.colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT).spring(),
        { state: ee, opacity: et } = (0, u.z)(
            {
                config: {
                    duration: I.enabled ? 200 : 300,
                },
                opacity: n ? 0.5 : 1,
                state: k ? (t ? R[R.length - 2] : N[1]) : +!!t,
            },
            "animate-always",
        ),
        en = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...e].reverse();
            return t
                ? ee.to({
                      range: R,
                      output: n,
                  })
                : ee.to({
                      range: N,
                      output: e,
                  });
        };
    return (0, r.jsx)(
        p.vN,
        b(g({}, y), {
            ringTarget: P,
            focusTarget: x,
            within: !0,
            offset: -2,
            children: (0, r.jsxs)(
                "label",
                b(g({}, M), {
                    className: h.kL,
                    "data-disabled": n || void 0,
                    children: [
                        (0, r.jsx)(
                            o.animated.div,
                            b(g({}, U), {
                                ref: P,
                                className: h.cw,
                                "data-size": "md",
                                "data-mana-component": "switch",
                                style: {
                                    opacity: et,
                                    backgroundColor: ee.to({
                                        range: C,
                                        output: [G ? K : V, F, H, G ? z : B],
                                        extrapolate: "clamp",
                                    }),
                                    border: "1px solid",
                                    borderColor: ee.to({
                                        range: C,
                                        output: [G ? q : Y, G ? q : Y, G ? X : W, G ? X : W],
                                        extrapolate: "clamp",
                                    }),
                                },
                                children: (0, r.jsxs)(o.animated.svg, {
                                    className: h.FF,
                                    viewBox: "0 0 24 24",
                                    preserveAspectRatio: "xMidYMin meet",
                                    style: {
                                        left: ee.to(
                                            I.enabled
                                                ? {
                                                      range: C,
                                                      output: [1, 1, 24, 24],
                                                  }
                                                : {
                                                      range: T,
                                                      output: [1, 1, 1, 24, 24, 24],
                                                  },
                                        ),
                                    },
                                    "aria-hidden": !0,
                                    children: [
                                        (0, r.jsx)(o.animated.rect, {
                                            fill: ee.to({
                                                range: C,
                                                output: [$, $, J, J],
                                            }),
                                            x: I.enabled ? 4 : en([4, 4, 2.5, 1, 2.5, 4]),
                                            y: I.enabled ? 4 : en([4, 7, 2.5, 7, 2.5, 4]),
                                            width: I.enabled ? 16 : en([16, 16, 19, 22, 19, 16]),
                                            height: I.enabled ? 16 : en([16, 10, 19, 10, 19, 16]),
                                            rx: I.enabled ? 8 : en([8, 5, 9.5, 5, 9.5, 8]),
                                        }),
                                        O && w(ee, Z, Q),
                                    ],
                                }),
                            }),
                        ),
                        (0, r.jsx)(_.A, {
                            children: (0, r.jsx)(
                                "input",
                                b(g({}, j), {
                                    ref: x,
                                }),
                            ),
                        }),
                    ],
                }),
            ),
        }),
    );
}
