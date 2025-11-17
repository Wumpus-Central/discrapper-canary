n.d(t, { U: () => s });
var r = n(158821),
    i = n(880016),
    a = n(226098),
    o = n(497448);
function s(e, t) {
    let n,
        {
            elementType: s = "button",
            isDisabled: l,
            onPress: c,
            onPressStart: u,
            onPressEnd: d,
            onPressUp: f,
            onPressChange: _,
            preventFocusOnPress: p,
            allowFocusWhenDisabled: h,
            onClick: m,
            href: g,
            target: E,
            rel: b,
            type: y = "button",
        } = e;
    n =
        "button" === s
            ? {
                  type: y,
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
                  href: "a" !== s || l ? void 0 : g,
                  target: "a" === s ? E : void 0,
                  type: "input" === s ? y : void 0,
                  disabled: "input" === s ? l : void 0,
                  "aria-disabled": l && "input" !== s ? l : void 0,
                  rel: "a" === s ? b : void 0,
              };
    let { pressProps: O, isPressed: v } = (0, a.r)({
            onPressStart: u,
            onPressEnd: d,
            onPressChange: _,
            onPress: c,
            onPressUp: f,
            onClick: m,
            isDisabled: l,
            preventFocusOnPress: p,
            ref: t,
        }),
        { focusableProps: I } = (0, o.kc)(e, t);
    h && (I.tabIndex = l ? -1 : I.tabIndex);
    let T = (0, r.d)(I, O, (0, i.z)(e, { labelable: !0 }));
    return {
        isPressed: v,
        buttonProps: (0, r.d)(n, T, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"],
        }),
    };
}
