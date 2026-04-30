"use strict";
s.d(t, { q: () => a });
var i = s(284054),
    l = s(260431),
    r = s(318473);
function a(e, t, s) {
    let { isSelected: a } = t,
        { isPressed: o, buttonProps: d } = (0, i.s)({ ...e, onPress: (0, l.c)(t.toggle, e.onPress) }, s);
    return {
        isPressed: o,
        isSelected: a,
        isDisabled: e.isDisabled || !1,
        buttonProps: (0, r.v)(d, { "aria-pressed": a }),
    };
}
