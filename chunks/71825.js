n.d(t, {
    I: () => d,
    r: () => c,
});
var r = n(922387),
    i = n(877015),
    a = n(437525),
    o = n(580470),
    s = n(43341),
    l = n(647438);
let c = (0, l.createContext)({}),
    u = (e) => {
        let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
        return i;
    },
    d = (0, i.qW)(function (e, t) {
        [e, t] = (0, r.pE)(e, t, c);
        let { hoverProps: n, isHovered: i } = (0, a.X)(e),
            {
                isFocused: d,
                isFocusVisible: f,
                focusProps: _,
            } = (0, o.F)({
                isTextInput: !0,
                autoFocus: e.autoFocus,
            }),
            p = !!e["aria-invalid"] && "false" !== e["aria-invalid"],
            h = (0, r.aX)({
                ...e,
                values: {
                    isHovered: i,
                    isFocused: d,
                    isFocusVisible: f,
                    isDisabled: e.disabled || !1,
                    isInvalid: p,
                },
                defaultClassName: "react-aria-Input",
            });
        return l.createElement("input", {
            ...(0, s.d)(u(e), _, n),
            ...h,
            ref: t,
            "data-focused": d || void 0,
            "data-disabled": e.disabled || void 0,
            "data-hovered": i || void 0,
            "data-focus-visible": f || void 0,
            "data-invalid": p || void 0,
        });
    });
