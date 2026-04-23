"use strict";
r.d(t, { s: () => o });
var n = r(318473),
    a = r(290424),
    s = r(775133),
    i = r(877247);
function o(e, t) {
    let r,
        {
            elementType: o = "button",
            isDisabled: l,
            onPress: u,
            onPressStart: c,
            onPressEnd: d,
            onPressUp: f,
            onPressChange: p,
            preventFocusOnPress: h,
            allowFocusWhenDisabled: m,
            onClick: _,
            href: g,
            target: v,
            rel: b,
            type: y = "button",
        } = e;
    r =
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
                  target: "a" === o ? v : void 0,
                  type: "input" === o ? y : void 0,
                  disabled: "input" === o ? l : void 0,
                  "aria-disabled": l && "input" !== o ? l : void 0,
                  rel: "a" === o ? b : void 0,
              };
    let { pressProps: E, isPressed: S } = (0, s.d)({
            onPressStart: c,
            onPressEnd: d,
            onPressChange: p,
            onPress: u,
            onPressUp: f,
            onClick: _,
            isDisabled: l,
            preventFocusOnPress: h,
            ref: t,
        }),
        { focusableProps: T } = (0, i.Wc)(e, t);
    m && (T.tabIndex = l ? -1 : T.tabIndex);
    let x = (0, n.v)(T, E, (0, a.$)(e, { labelable: !0 }));
    return {
        isPressed: S,
        buttonProps: (0, n.v)(r, x, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"],
        }),
    };
}
