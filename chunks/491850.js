n.d(t, {
    E: () => c,
    p: () => d,
});
var r = n(825913),
    i = n(564004),
    a = n(967158),
    s = n(498430),
    o = n(803082),
    l = n(64700);
let c = (0, l.createContext)({}),
    u = (e) => {
        let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
        return i;
    },
    d = (0, i.U7)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, c);
        let { hoverProps: n, isHovered: i } = (0, a.M)(e),
            {
                isFocused: d,
                isFocusVisible: f,
                focusProps: p,
            } = (0, s.o)({
                isTextInput: !0,
                autoFocus: e.autoFocus,
            }),
            _ = !!e["aria-invalid"] && "false" !== e["aria-invalid"],
            h = (0, r.Sl)({
                ...e,
                values: {
                    isHovered: i,
                    isFocused: d,
                    isFocusVisible: f,
                    isDisabled: e.disabled || !1,
                    isInvalid: _,
                },
                defaultClassName: "react-aria-Input",
            });
        return l.createElement("input", {
            ...(0, o.v)(u(e), p, n),
            ...h,
            ref: t,
            "data-focused": d || void 0,
            "data-disabled": e.disabled || void 0,
            "data-hovered": i || void 0,
            "data-focus-visible": f || void 0,
            "data-invalid": _ || void 0,
        });
    });
