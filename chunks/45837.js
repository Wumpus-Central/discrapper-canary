"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(311907),
    a = n(775602),
    s = n(531685);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = r.useState(!1),
        o = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        l = (0, i.bG)([s.A], () => s.A.isFocused()),
        u = !o && !e,
        c = l && (t || u);
    return {
        shouldAnimate: c,
        onMouseEnter: r.useCallback(() => n(!0), []),
        onMouseLeave: r.useCallback(() => n(!1), []),
    };
}
