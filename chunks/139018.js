t.d(a, { Y: () => s, t: () => u });
var r = t(407815),
    n = t(500731),
    i = t(184093),
    o = t(582128),
    l = t(288378);
let u = (0, o.createContext)({}),
    s = (0, o.forwardRef)(function (e, a) {
        [e, a] = (0, r.JT)(e, a, u);
        let { isDisabled: t, isInvalid: s, isReadOnly: d, onHoverStart: c, onHoverChange: m, onHoverEnd: h, ...y } = e;
        (t ??= !!e["aria-disabled"] && "false" !== e["aria-disabled"]),
            (s ??= !!e["aria-invalid"] && "false" !== e["aria-invalid"]);
        let { hoverProps: D, isHovered: p } = (0, n.M)({
                onHoverStart: c,
                onHoverChange: m,
                onHoverEnd: h,
                isDisabled: t,
            }),
            { isFocused: g, isFocusVisible: f, focusProps: v } = (0, l.o)({ within: !0 }),
            b = (0, r.Sl)({
                ...e,
                values: { isHovered: p, isFocusWithin: g, isFocusVisible: f, isDisabled: t, isInvalid: s },
                defaultClassName: "react-aria-Group",
            });
        return o.createElement(
            r.tT.div,
            {
                ...(0, i.v)(y, v, D),
                ...b,
                ref: a,
                role: e.role ?? "group",
                slot: e.slot ?? void 0,
                "data-focus-within": g || void 0,
                "data-hovered": p || void 0,
                "data-focus-visible": f || void 0,
                "data-disabled": t || void 0,
                "data-invalid": s || void 0,
                "data-readonly": d || void 0,
            },
            b.children,
        );
    });
