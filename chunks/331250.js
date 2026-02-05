"use strict";
n.d(t, { q: () => s });
var r = n(284054),
    i = n(260431),
    a = n(803082);
function s(e, t, n) {
    let { isSelected: s } = t,
        { isPressed: o, buttonProps: l } = (0, r.s)({ ...e, onPress: (0, i.c)(t.toggle, e.onPress) }, n);
    return {
        isPressed: o,
        isSelected: s,
        isDisabled: e.isDisabled || !1,
        buttonProps: (0, a.v)(l, { "aria-pressed": s }),
    };
}
