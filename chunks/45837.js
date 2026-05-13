n.d(t, { A: () => s });
var i = n(64700),
    r = n(17928),
    a = n(775602),
    u = n(885386),
    l = n(531685);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        s = (0, r.bG)([a.A], () => a.A.useReducedMotion),
        o = (0, r.bG)([l.A], () => l.A.isFocused()),
        c = u.kt.useSetting();
    return {
        shouldAnimate: o && (t || (!s && !e && c)),
        onMouseEnter: i.useCallback(() => n(!0), []),
        onMouseLeave: i.useCallback(() => n(!1), []),
    };
}
