n.d(t, { O: () => l });
var r = n(506364),
    i = n(436242),
    a = n(571818),
    o = n(459613),
    s = n(312238);
function l(e, t, n) {
    let {
            isDisabled: l = !1,
            isReadOnly: c = !1,
            value: u,
            name: d,
            children: f,
            "aria-label": _,
            "aria-labelledby": p,
            validationState: h = "valid",
            isInvalid: m,
        } = e,
        g = (e) => {
            e.stopPropagation(), t.setSelected(e.target.checked);
        },
        E = null != _ || null != p;
    null != f || E || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
    let { pressProps: b, isPressed: y } = (0, o.r)({ isDisabled: l }),
        { pressProps: O, isPressed: v } = (0, o.r)({
            onPress() {
                var e;
                t.toggle(), null == (e = n.current) || e.focus();
            },
            isDisabled: l || c,
        }),
        { focusableProps: I } = (0, s.kc)(e, n),
        T = (0, r.d)(b, I),
        S = (0, i.z)(e, { labelable: !0 });
    return (
        (0, a.y)(n, t.isSelected, t.setSelected),
        {
            labelProps: (0, r.d)(O, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, r.d)(S, {
                "aria-invalid": m || "invalid" === h || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-controls": e["aria-controls"],
                "aria-readonly": c || void 0,
                onChange: g,
                disabled: l,
                ...(null == u ? {} : { value: u }),
                name: d,
                type: "checkbox",
                ...T,
            }),
            isSelected: t.isSelected,
            isPressed: y || v,
            isDisabled: l,
            isReadOnly: c,
            isInvalid: m || "invalid" === h,
        }
    );
}
