n.d(t, {
    S: () => f,
    m: () => m
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(426563),
    c = n(998502),
    u = n(388032),
    d = n(860918);
let p = c.ZP.getEnableHardwareAcceleration() ? a.Xo$ : a.qEK;
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        r = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        a = i.useMemo(() => {
            let n = t || (!r && !e);
            return (0, s.j)(n);
        }, [t, r, e]);
    return {
        avatarSrc: a,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => n(!0), []),
            onMouseLeave: i.useCallback(() => n(!1), [])
        }
    };
}
function f(e) {
    let { src: t } = e;
    return (0, r.jsx)('div', {
        className: d.avatarContainer,
        children: (0, r.jsx)(p, {
            src: t,
            size: a.EFr.SIZE_40,
            'aria-label': u.intl.string(u.t.hG1StL)
        })
    });
}
