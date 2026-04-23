"use strict";
n.d(t, { s: () => o });
var r = n(803082),
    i = n(290424),
    s = n(8321),
    a = n(946020);
function o(e, t) {
    let n,
        {
            elementType: o = "button",
            isDisabled: l,
            onPress: u,
            onPressStart: c,
            onPressEnd: d,
            onPressUp: _,
            onPressChange: f,
            preventFocusOnPress: p,
            allowFocusWhenDisabled: h,
            onClick: E,
            href: m,
            target: g,
            rel: A,
            type: I = "button",
        } = e;
    n =
        "button" === o
            ? {
                  type: I,
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
                  href: "a" !== o || l ? void 0 : m,
                  target: "a" === o ? g : void 0,
                  type: "input" === o ? I : void 0,
                  disabled: "input" === o ? l : void 0,
                  "aria-disabled": l && "input" !== o ? l : void 0,
                  rel: "a" === o ? A : void 0,
              };
    let { pressProps: T, isPressed: S } = (0, s.d)({
            onPressStart: c,
            onPressEnd: d,
            onPressChange: f,
            onPress: u,
            onPressUp: _,
            onClick: E,
            isDisabled: l,
            preventFocusOnPress: p,
            ref: t,
        }),
        { focusableProps: y } = (0, a.Wc)(e, t);
    h && (y.tabIndex = l ? -1 : y.tabIndex);
    let N = (0, r.v)(y, T, (0, i.$)(e, { labelable: !0 }));
    return {
        isPressed: S,
        buttonProps: (0, r.v)(n, N, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"],
        }),
    };
}
