n.d(t, {
    E: () => l,
    Z: () => c,
});
var r = n(595707),
    i = n(69771),
    a = n(984940),
    o = n(158821),
    s = n(473749);
let l = (0, s.createContext)({}),
    c = (0, s.forwardRef)(function (e, t) {
        var n, c;
        [e, t] = (0, r.pE)(e, t, l);
        let { isDisabled: u, isInvalid: d, isReadOnly: f, onHoverStart: p, onHoverChange: _, onHoverEnd: m, ...h } = e,
            { hoverProps: g, isHovered: E } = (0, i.X)({
                onHoverStart: p,
                onHoverChange: _,
                onHoverEnd: m,
                isDisabled: u,
            }),
            { isFocused: b, isFocusVisible: y, focusProps: O } = (0, a.F)({ within: !0 });
        null != u || (u = !!e["aria-disabled"] && "false" !== e["aria-disabled"]),
            null != d || (d = !!e["aria-invalid"] && "false" !== e["aria-invalid"]);
        let v = (0, r.aX)({
            ...e,
            values: {
                isHovered: E,
                isFocusWithin: b,
                isFocusVisible: y,
                isDisabled: u,
                isInvalid: d,
            },
            defaultClassName: "react-aria-Group",
        });
        return s.createElement(
            "div",
            {
                ...(0, o.d)(h, O, g),
                ...v,
                ref: t,
                role: null != (n = e.role) ? n : "group",
                slot: null != (c = e.slot) ? c : void 0,
                "data-focus-within": b || void 0,
                "data-hovered": E || void 0,
                "data-focus-visible": y || void 0,
                "data-disabled": u || void 0,
                "data-invalid": d || void 0,
                "data-readonly": f || void 0,
            },
            v.children,
        );
    });
