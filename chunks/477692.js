r.d(t, { s: () => s });
var n = r(892730),
    i = r(519837),
    o = r(994965),
    a = r(682603);
function s(e, t) {
    let r,
        {
            elementType: s = "button",
            isDisabled: l,
            onPress: u,
            onPressStart: c,
            onPressEnd: f,
            onPressUp: d,
            onPressChange: p,
            preventFocusOnPress: h,
            allowFocusWhenDisabled: m,
            onClick: v,
            href: y,
            target: g,
            rel: b,
            type: w = "button",
        } = e;
    r =
        "button" === s
            ? {
                  type: w,
                  disabled: l,
                  form: e.form,
                  formAction: e.formAction,
                  formEncType: e.formEncType,
                  formMethod: e.formMethod,
                  formNoValidate: e.formNoValidate,
                  formTarget: e.formTarget,
                  name: e.name,
                  value: e.value,
              }
            : {
                  role: "button",
                  href: "a" !== s || l ? void 0 : y,
                  target: "a" === s ? g : void 0,
                  type: "input" === s ? w : void 0,
                  disabled: "input" === s ? l : void 0,
                  "aria-disabled": l && "input" !== s ? l : void 0,
                  rel: "a" === s ? b : void 0,
              };
    let { pressProps: _, isPressed: S } = (0, a.d)({
            onPressStart: c,
            onPressEnd: f,
            onPressChange: p,
            onPress: u,
            onPressUp: d,
            onClick: v,
            isDisabled: l,
            preventFocusOnPress: h,
            ref: t,
        }),
        { focusableProps: E } = (0, o.Wc)(e, t);
    m && (E.tabIndex = l ? -1 : E.tabIndex);
    let x = (0, i.v)(E, _, (0, n.$)(e, { labelable: !0 }));
    return {
        isPressed: S,
        buttonProps: (0, i.v)(r, x, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"],
        }),
    };
}
