var r = t(980807),
    n = t(599291),
    i = t(652664),
    o = t(582128),
    l = t(736570);
let s = (0, o.createContext)({}),
    d = (0, o.forwardRef)(function (e, a) {
        [e, a] = (0, r.JT)(e, a, s);
        let { isDisabled: t, isInvalid: d, isReadOnly: u, onHoverStart: c, onHoverChange: m, onHoverEnd: h, ...y } = e;
        ((t ??= !!e["aria-disabled"] && "false" !== e["aria-disabled"]),
            (d ??= !!e["aria-invalid"] && "false" !== e["aria-invalid"]));
        let { hoverProps: g, isHovered: p } = (0, n.M)({
                onHoverStart: c,
                onHoverChange: m,
                onHoverEnd: h,
                isDisabled: t,
            }),
            { isFocused: f, isFocusVisible: D, focusProps: v } = (0, l.o)({ within: !0 }),
            b = (0, r.Sl)({
                ...e,
                values: { isHovered: p, isFocusWithin: f, isFocusVisible: D, isDisabled: t, isInvalid: d },
                defaultClassName: "react-aria-Group",
            });
        return o.createElement(
            r.tT.div,
            {
                ...(0, i.v)(y, v, g),
                ...b,
                ref: a,
                role: e.role ?? "group",
                slot: e.slot ?? void 0,
                "data-focus-within": f || void 0,
                "data-hovered": p || void 0,
                "data-focus-visible": D || void 0,
                "data-disabled": t || void 0,
                "data-invalid": d || void 0,
                "data-readonly": u || void 0,
            },
            b.children,
        );
    });
t.d(a, {}, { Y: d, t: s });
