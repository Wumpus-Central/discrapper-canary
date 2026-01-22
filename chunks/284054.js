n.d(t, { s: () => o });
var r = n(803082),
    i = n(290424),
    a = n(8321),
    s = n(946020);
function o(e, t) {
    let n,
        {
            elementType: o = "button",
            isDisabled: l,
            onPress: c,
            onPressStart: u,
            onPressEnd: d,
            onPressUp: f,
            onPressChange: p,
            preventFocusOnPress: _,
            allowFocusWhenDisabled: h,
            onClick: m,
            href: g,
            target: E,
            rel: b,
            type: y = "button",
        } = e;
    n =
        "button" === o
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
                  href: "a" !== o || l ? void 0 : g,
                  target: "a" === o ? E : void 0,
                  type: "input" === o ? y : void 0,
                  disabled: "input" === o ? l : void 0,
                  "aria-disabled": l && "input" !== o ? l : void 0,
                  rel: "a" === o ? b : void 0,
              };
    let { pressProps: O, isPressed: A } = (0, a.d)({
            onPressStart: u,
            onPressEnd: d,
            onPressChange: p,
            onPress: c,
            onPressUp: f,
            onClick: m,
            isDisabled: l,
            preventFocusOnPress: _,
            ref: t,
        }),
        { focusableProps: v } = (0, s.Wc)(e, t);
    h && (v.tabIndex = l ? -1 : v.tabIndex);
    let S = (0, r.v)(v, O, (0, i.$)(e, { labelable: !0 }));
    return {
        isPressed: A,
        buttonProps: (0, r.v)(n, S, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"],
        }),
    };
}
