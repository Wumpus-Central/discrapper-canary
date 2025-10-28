t.d(a, {
    I: () => d,
    r: () => s,
});
var u = t(922387),
    n = t(877015),
    r = t(437525),
    i = t(580470),
    o = t(43341),
    l = t(647438);
let s = (0, l.createContext)({}),
    d = (0, n.qW)(function (e, a) {
        [e, a] = (0, u.pE)(e, a, s);
        let { hoverProps: t, isHovered: n } = (0, r.X)(e),
            {
                isFocused: d,
                isFocusVisible: c,
                focusProps: m,
            } = (0, i.F)({
                isTextInput: !0,
                autoFocus: e.autoFocus,
            }),
            D = !!e["aria-invalid"] && "false" !== e["aria-invalid"],
            h = (0, u.aX)({
                ...e,
                values: {
                    isHovered: n,
                    isFocused: d,
                    isFocusVisible: c,
                    isDisabled: e.disabled || !1,
                    isInvalid: D,
                },
                defaultClassName: "react-aria-Input",
            });
        return l.createElement("input", {
            ...(0, o.d)(
                ((e) => {
                    let { onHoverStart: a, onHoverChange: t, onHoverEnd: u, ...n } = e;
                    return n;
                })(e),
                m,
                t,
            ),
            ...h,
            ref: a,
            "data-focused": d || void 0,
            "data-disabled": e.disabled || void 0,
            "data-hovered": n || void 0,
            "data-focus-visible": c || void 0,
            "data-invalid": D || void 0,
        });
    });
