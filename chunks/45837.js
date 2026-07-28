"use strict";
n.d(t, { A: () => o });
var i = n(582128),
    r = n(17928),
    a = n(775602),
    s = n(885386),
    l = n(531685);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        o = (0, r.bG)([a.Ay], () => a.Ay.useReducedMotion),
        d = (0, r.bG)([l.A], () => l.A.isFocused()),
        c = s.kt.useSetting();
    return {
        shouldAnimate: d && (t || (!o && !e && c)),
        onMouseEnter: i.useCallback(() => n(!0), []),
        onMouseLeave: i.useCallback(() => n(!1), []),
    };
}
