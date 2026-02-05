"use strict";
n.d(t, { E: () => u, p: () => d });
var r = n(825913),
    i = n(564004),
    a = n(967158),
    s = n(498430),
    o = n(803082),
    l = n(64700);
let u = (0, l.createContext)({}),
    c = (e) => {
        let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
        return i;
    },
    d = (0, i.U7)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, u);
        let { hoverProps: n, isHovered: i } = (0, a.M)(e),
            { isFocused: d, isFocusVisible: _, focusProps: f } = (0, s.o)({ isTextInput: !0, autoFocus: e.autoFocus }),
            p = !!e["aria-invalid"] && "false" !== e["aria-invalid"],
            h = (0, r.Sl)({
                ...e,
                values: { isHovered: i, isFocused: d, isFocusVisible: _, isDisabled: e.disabled || !1, isInvalid: p },
                defaultClassName: "react-aria-Input",
            });
        return l.createElement("input", {
            ...(0, o.v)(c(e), f, n),
            ...h,
            ref: t,
            "data-focused": d || void 0,
            "data-disabled": e.disabled || void 0,
            "data-hovered": i || void 0,
            "data-focus-visible": _ || void 0,
            "data-invalid": p || void 0,
        });
    });
