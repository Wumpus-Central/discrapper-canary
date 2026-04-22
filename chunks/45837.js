n.d(t, { A: () => s });
var a = n(64700),
    r = n(311907),
    l = n(775602),
    i = n(253932),
    o = n(531685);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = a.useState(!1),
        s = (0, r.bG)([l.A], () => l.A.useReducedMotion),
        c = (0, r.bG)([o.A], () => o.A.isFocused()),
        u = i.kt.useSetting();
    return {
        shouldAnimate: c && (t || (!s && !e && u)),
        onMouseEnter: a.useCallback(() => n(!0), []),
        onMouseLeave: a.useCallback(() => n(!1), []),
    };
}
