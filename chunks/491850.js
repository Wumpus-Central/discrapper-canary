t.d(a, { E: () => s, p: () => d });
var r = t(825913),
    n = t(564004),
    i = t(967158),
    l = t(498430),
    o = t(803082),
    u = t(64700);
let s = (0, u.createContext)({}),
    d = (0, n.U7)(function (e, a) {
        [e, a] = (0, r.JT)(e, a, s);
        let { hoverProps: t, isHovered: n } = (0, i.M)(e),
            { isFocused: d, isFocusVisible: c, focusProps: m } = (0, l.o)({ isTextInput: !0, autoFocus: e.autoFocus }),
            h = !!e["aria-invalid"] && "false" !== e["aria-invalid"],
            y = (0, r.Sl)({
                ...e,
                values: { isHovered: n, isFocused: d, isFocusVisible: c, isDisabled: e.disabled || !1, isInvalid: h },
                defaultClassName: "react-aria-Input",
            });
        return u.createElement("input", {
            ...(0, o.v)(
                ((e) => {
                    let { onHoverStart: a, onHoverChange: t, onHoverEnd: r, ...n } = e;
                    return n;
                })(e),
                m,
                t,
            ),
            ...y,
            ref: a,
            "data-focused": d || void 0,
            "data-disabled": e.disabled || void 0,
            "data-hovered": n || void 0,
            "data-focus-visible": c || void 0,
            "data-invalid": h || void 0,
        });
    });
