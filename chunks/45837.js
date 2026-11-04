var i = n(582128),
    a = n(855986),
    r = n(775602),
    u = n(253932),
    l = n(531685);
n.d(
    t,
    {},
    {
        A: function () {
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
        },
    },
);
