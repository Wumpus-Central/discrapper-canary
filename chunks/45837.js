n.d(t, { A: () => o });
var r = n(582128),
    a = n(17928),
    i = n(775602),
    l = n(885386),
    u = n(531685);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = r.useState(!1),
        o = (0, a.bG)([i.Ay], () => i.Ay.useReducedMotion),
        s = (0, a.bG)([u.A], () => u.A.isFocused()),
        A = l.kt.useSetting();
    return {
        shouldAnimate: s && (t || (!o && !e && A)),
        onMouseEnter: r.useCallback(() => n(!0), []),
        onMouseLeave: r.useCallback(() => n(!1), []),
    };
}
