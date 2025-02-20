n.d(t, { Z: () => s }), n(47120);
var r = n(192379),
    i = n(442837),
    o = n(607070),
    a = n(451478);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = r.useState(!1),
        s = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        l = (0, i.e7)([a.Z], () => a.Z.isFocused()),
        c = !s && !e,
        u = l && (t || c);
    return {
        shouldAnimate: u,
        onMouseEnter: r.useCallback(() => n(!0), []),
        onMouseLeave: r.useCallback(() => n(!1), [])
    };
}
