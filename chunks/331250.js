"use strict";
n.d(t, { q: () => a });
var i = n(284054),
    r = n(260431),
    s = n(318473);
function a(e, t, n) {
    let { isSelected: a } = t,
        { isPressed: o, buttonProps: l } = (0, i.s)({ ...e, onPress: (0, r.c)(t.toggle, e.onPress) }, n);
    return {
        isPressed: o,
        isSelected: a,
        isDisabled: e.isDisabled || !1,
        buttonProps: (0, s.v)(l, { "aria-pressed": a }),
    };
}
