n.d(t, { Z: () => o }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(607070),
    s = n(451478);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        o = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        l = (0, r.e7)([s.Z], () => s.Z.isFocused()),
        u = !o && !e,
        c = l && (t || u);
    return {
        shouldAnimate: c,
        onMouseEnter: i.useCallback(() => n(!0), []),
        onMouseLeave: i.useCallback(() => n(!1), [])
    };
}
