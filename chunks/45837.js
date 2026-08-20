n.d(t, { A: () => s });
var i = n(582128),
    a = n(17928),
    r = n(775602),
    u = n(885386),
    l = n(531685);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        s = (0, a.bG)([r.Ay], () => r.Ay.useReducedMotion),
        o = (0, a.bG)([l.A], () => l.A.isFocused()),
        c = u.kt.useSetting();
    return {
        shouldAnimate: o && (t || (!s && !e && c)),
        onMouseEnter: i.useCallback(() => n(!0), []),
        onMouseLeave: i.useCallback(() => n(!1), []),
    };
}
