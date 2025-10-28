t.d(a, {
    E: () => l,
    Z: () => s,
});
var u = t(922387),
    n = t(437525),
    r = t(580470),
    i = t(43341),
    o = t(647438);
let l = (0, o.createContext)({}),
    s = (0, o.forwardRef)(function (e, a) {
        var t, s;
        [e, a] = (0, u.pE)(e, a, l);
        let { isDisabled: d, isInvalid: c, isReadOnly: m, onHoverStart: D, onHoverChange: h, onHoverEnd: f, ...y } = e,
            { hoverProps: p, isHovered: g } = (0, n.X)({
                onHoverStart: D,
                onHoverChange: h,
                onHoverEnd: f,
                isDisabled: d,
            }),
            { isFocused: v, isFocusVisible: b, focusProps: C } = (0, r.F)({ within: !0 });
        null != d || (d = !!e["aria-disabled"] && "false" !== e["aria-disabled"]),
            null != c || (c = !!e["aria-invalid"] && "false" !== e["aria-invalid"]);
        let x = (0, u.aX)({
            ...e,
            values: {
                isHovered: g,
                isFocusWithin: v,
                isFocusVisible: b,
                isDisabled: d,
                isInvalid: c,
            },
            defaultClassName: "react-aria-Group",
        });
        return o.createElement(
            "div",
            {
                ...(0, i.d)(y, C, p),
                ...x,
                ref: a,
                role: null != (t = e.role) ? t : "group",
                slot: null != (s = e.slot) ? s : void 0,
                "data-focus-within": v || void 0,
                "data-hovered": g || void 0,
                "data-focus-visible": b || void 0,
                "data-disabled": d || void 0,
                "data-invalid": c || void 0,
                "data-readonly": m || void 0,
            },
            x.children,
        );
    });
