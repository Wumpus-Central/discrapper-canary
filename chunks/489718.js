"use strict";
n.d(t, { I: () => L });
var i = n(627968),
    r = n(64700),
    a = n(977418),
    s = n(967158),
    l = n(580929),
    o = n(823807),
    d = n(661531),
    c = n(717421),
    u = n(603392),
    _ = n(844222),
    E = n(187322),
    A = n(140735),
    h = n(764371);
let I = "M4.10585 5.3837L5.37864 4.11091L11.884 10.61632L10.6112 11.88912L4.10585 5.3837Z",
    f = "M10.61632 4.11091L11.88912 5.3837L5.3837 11.88912L4.11091 10.61632L10.61632 4.11091Z",
    p = "M5.25333 8.80104L5.25333 7.17346L10.85336 7.17346L10.85336 8.80104L5.25333 8.80104Z",
    T = "M10.84656 7.17346L10.84656 8.80104L5.24954 8.80104L5.24954 7.17346L10.84656 7.17346Z",
    m = "M6.31649 11.88304L5.0437 10.61032L11.44792 4.20604L12.72072 5.47883L6.31649 11.88304Z",
    g = "M3.26914 8.87224L4.54194 7.59943L7.5588 10.61632L6.28601 11.88912L3.26914 8.87224Z",
    S = [0, 0.1, 0.4, 0.6, 0.9, 1],
    N = [0, 0.1, 0.9, 1],
    C = [0, 0.1, 0.2, 0.5, 0.7, 1],
    R = [0, 0.3, 0.5, 0.8, 0.9, 1],
    O = () => {};
function L(e) {
    let t,
        {
            checked: n,
            disabled: L,
            displayOnly: D,
            id: y,
            onChange: v,
            focusProps: b,
            hasIcon: M = !1,
            describedBy: P,
            labelledBy: U,
            innerRef: w,
        } = e,
        { reducedMotion: G } = r.useContext(_.C),
        x = r.useRef(null),
        k = r.useRef(null),
        F = w ?? k,
        V = (0, o.H)({ isSelected: n, onChange: v ?? O, isDisabled: L }),
        {
            inputProps: B,
            labelProps: H,
            isPressed: j,
        } = (0, a.K)({ id: y, isDisabled: L, "aria-describedby": P, "aria-labelledby": U ?? "" }, V, F),
        { hoverProps: W, isHovered: Y } = (0, s.M)({ isDisabled: L }),
        K = (0, u.r)(d.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        $ = (0, u.r)(d.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        z = (0, u.r)(d.A.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT).spring(),
        q = (0, u.r)(d.A.colors.SWITCH_BACKGROUND_ACTIVE).spring(),
        Z = (0, u.r)(d.A.colors.SWITCH_BORDER_DEFAULT).spring(),
        X = (0, u.r)(d.A.colors.SWITCH_BORDER_SELECTED_DEFAULT).spring(),
        Q = (0, u.r)(d.A.colors.SWITCH_BACKGROUND_HOVER).spring(),
        J = (0, u.r)(d.A.colors.SWITCH_BACKGROUND_SELECTED_HOVER).spring(),
        ee = (0, u.r)(d.A.colors.SWITCH_BORDER_HOVER).spring(),
        et = (0, u.r)(d.A.colors.SWITCH_BORDER_SELECTED_HOVER).spring(),
        en = (0, u.r)(d.A.colors.SWITCH_THUMB_ICON_DEFAULT).spring(),
        ei = (0, u.r)(d.A.colors.SWITCH_THUMB_ICON_ACTIVE).spring(),
        er = (0, u.r)(d.A.colors.SWITCH_THUMB_BACKGROUND_DEFAULT).spring(),
        ea = (0, u.r)(d.A.colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT).spring(),
        { state: es, opacity: el } = (0, c.z)(
            {
                config: { duration: G.enabled ? 200 : 300 },
                opacity: L ? 0.5 : 1,
                state: j ? (n ? R[R.length - 2] : C[1]) : +!!n,
            },
            "animate-always",
        ),
        eo = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...e].reverse();
            return n ? es.to({ range: R, output: t }) : es.to({ range: C, output: e });
        },
        ed = (0, i.jsx)(l.animated.div, {
            ...(D ? {} : W),
            ref: x,
            className: h.cw,
            "data-size": "md",
            "data-mana-component": "switch",
            style: {
                opacity: el,
                backgroundColor: es.to({ range: N, output: [Y ? Q : K, $, q, Y ? J : z], extrapolate: "clamp" }),
                border: "1px solid",
                borderColor: es.to({
                    range: N,
                    output: [Y ? ee : Z, Y ? ee : Z, Y ? et : X, Y ? et : X],
                    extrapolate: "clamp",
                }),
            },
            children: (0, i.jsxs)(l.animated.svg, {
                className: h.FF,
                viewBox: "0 0 24 24",
                preserveAspectRatio: "xMidYMin meet",
                style: {
                    left: es.to(
                        G.enabled ? { range: N, output: [1, 1, 24, 24] } : { range: S, output: [1, 1, 1, 24, 24, 24] },
                    ),
                },
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(l.animated.rect, {
                        fill: es.to({ range: N, output: [er, er, ea, ea] }),
                        x: G.enabled ? 4 : eo([4, 4, 2.5, 1, 2.5, 4]),
                        y: G.enabled ? 4 : eo([4, 7, 2.5, 7, 2.5, 4]),
                        width: G.enabled ? 16 : eo([16, 16, 19, 22, 19, 16]),
                        height: G.enabled ? 16 : eo([16, 10, 19, 10, 19, 16]),
                        rx: G.enabled ? 8 : eo([8, 5, 9.5, 5, 9.5, 8]),
                    }),
                    M &&
                        ((t = es.to({ range: N, output: [en, en, ei, ei], extrapolate: "clamp" })),
                        (0, i.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: (0, i.jsxs)("g", {
                                transform: "translate(4 4)",
                                children: [
                                    (0, i.jsx)(l.animated.path, {
                                        fill: t,
                                        d: es.to({ range: N, output: [I, p, p, m], extrapolate: "clamp" }),
                                    }),
                                    (0, i.jsx)(l.animated.path, {
                                        fill: t,
                                        d: es.to({ range: N, output: [f, T, T, g], extrapolate: "clamp" }),
                                    }),
                                ],
                            }),
                        })),
                ],
            }),
        });
    return D
        ? (0, i.jsx)("div", { className: h.kL, "data-disabled": L || void 0, children: ed })
        : (0, i.jsx)(E.vN, {
              ...b,
              ringTarget: x,
              focusTarget: F,
              within: !0,
              offset: -2,
              children: (0, i.jsxs)("label", {
                  ...H,
                  className: h.kL,
                  "data-disabled": L || void 0,
                  children: [ed, (0, i.jsx)(A.A, { children: (0, i.jsx)("input", { ...B, ref: F }) })],
              }),
          });
}
