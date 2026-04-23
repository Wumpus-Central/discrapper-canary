"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(311907),
    s = n(775602),
    a = n(253932),
    o = n(531685);
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = r.useState(!1),
        l = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        u = (0, i.bG)([o.A], () => o.A.isFocused()),
        c = a.kt.useSetting();
    return {
        shouldAnimate: u && (t || (!l && !e && c)),
        onMouseEnter: r.useCallback(() => n(!0), []),
        onMouseLeave: r.useCallback(() => n(!1), []),
    };
}
