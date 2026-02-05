"use strict";
n.d(t, { Y: () => u, t: () => l });
var r = n(825913),
    i = n(967158),
    a = n(498430),
    s = n(803082),
    o = n(64700);
let l = (0, o.createContext)({}),
    u = (0, o.forwardRef)(function (e, t) {
        var n, u;
        [e, t] = (0, r.JT)(e, t, l);
        let { isDisabled: c, isInvalid: d, isReadOnly: _, onHoverStart: f, onHoverChange: p, onHoverEnd: h, ...m } = e,
            { hoverProps: g, isHovered: E } = (0, i.M)({
                onHoverStart: f,
                onHoverChange: p,
                onHoverEnd: h,
                isDisabled: c,
            }),
            { isFocused: A, isFocusVisible: I, focusProps: T } = (0, a.o)({ within: !0 });
        null != c || (c = !!e["aria-disabled"] && "false" !== e["aria-disabled"]),
            null != d || (d = !!e["aria-invalid"] && "false" !== e["aria-invalid"]);
        let y = (0, r.Sl)({
            ...e,
            values: { isHovered: E, isFocusWithin: A, isFocusVisible: I, isDisabled: c, isInvalid: d },
            defaultClassName: "react-aria-Group",
        });
        return o.createElement(
            "div",
            {
                ...(0, s.v)(m, T, g),
                ...y,
                ref: t,
                role: null != (n = e.role) ? n : "group",
                slot: null != (u = e.slot) ? u : void 0,
                "data-focus-within": A || void 0,
                "data-hovered": E || void 0,
                "data-focus-visible": I || void 0,
                "data-disabled": c || void 0,
                "data-invalid": d || void 0,
                "data-readonly": _ || void 0,
            },
            y.children,
        );
    });
