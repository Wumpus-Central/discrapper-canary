"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(17928),
    s = n(775602),
    a = n(885386),
    o = n(531685);
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        l = (0, r.bG)([s.A], () => s.A.useReducedMotion),
        u = (0, r.bG)([o.A], () => o.A.isFocused()),
        c = a.kt.useSetting();
    return {
        shouldAnimate: u && (t || (!l && !e && c)),
        onMouseEnter: i.useCallback(() => n(!0), []),
        onMouseLeave: i.useCallback(() => n(!1), []),
    };
}
