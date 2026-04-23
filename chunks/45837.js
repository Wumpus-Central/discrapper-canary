"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(17928),
    s = n(775602),
    a = n(253932),
    o = n(531685);
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        l = (0, r.bG)([s.A], () => s.A.useReducedMotion),
        d = (0, r.bG)([o.A], () => o.A.isFocused()),
        _ = a.kt.useSetting();
    return {
        shouldAnimate: d && (t || (!l && !e && _)),
        onMouseEnter: i.useCallback(() => n(!0), []),
        onMouseLeave: i.useCallback(() => n(!1), []),
    };
}
