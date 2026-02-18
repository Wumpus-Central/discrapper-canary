t.d(a, { Y: () => s, t: () => l });
var r = t(825913),
    n = t(967158),
    i = t(498430),
    o = t(803082),
    u = t(64700);
let l = (0, u.createContext)({}),
    s = (0, u.forwardRef)(function (e, a) {
        var t, s;
        [e, a] = (0, r.JT)(e, a, l);
        let { isDisabled: d, isInvalid: c, isReadOnly: m, onHoverStart: h, onHoverChange: D, onHoverEnd: y, ...p } = e,
            { hoverProps: g, isHovered: f } = (0, n.M)({
                onHoverStart: h,
                onHoverChange: D,
                onHoverEnd: y,
                isDisabled: d,
            }),
            { isFocused: v, isFocusVisible: b, focusProps: A } = (0, i.o)({ within: !0 });
        null != d || (d = !!e["aria-disabled"] && "false" !== e["aria-disabled"]),
            null != c || (c = !!e["aria-invalid"] && "false" !== e["aria-invalid"]);
        let $ = (0, r.Sl)({
            ...e,
            values: { isHovered: f, isFocusWithin: v, isFocusVisible: b, isDisabled: d, isInvalid: c },
            defaultClassName: "react-aria-Group",
        });
        return u.createElement(
            "div",
            {
                ...(0, o.v)(p, A, g),
                ...$,
                ref: a,
                role: null != (t = e.role) ? t : "group",
                slot: null != (s = e.slot) ? s : void 0,
                "data-focus-within": v || void 0,
                "data-hovered": f || void 0,
                "data-focus-visible": b || void 0,
                "data-disabled": d || void 0,
                "data-invalid": c || void 0,
                "data-readonly": m || void 0,
            },
            $.children,
        );
    });
