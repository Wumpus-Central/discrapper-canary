(n.d(t, {
    S: () => p,
    m: () => _
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(607070),
    l = n(426563),
    c = n(998502),
    u = n(388032),
    d = n(860918);
let f = c.ZP.getEnableHardwareAcceleration() ? a.Xo$ : a.qEK;
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = i.useState(!1),
        r = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        a = i.useMemo(() => {
            let n = t || (!r && !e);
            return (0, l.j)(n);
        }, [t, r, e]);
    return {
        avatarSrc: a,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => n(!0), []),
            onMouseLeave: i.useCallback(() => n(!1), [])
        }
    };
}
function p(e) {
    let { src: t } = e;
    return (0, r.jsx)('div', {
        className: d.avatarContainer,
        children: (0, r.jsx)(f, {
            src: t,
            size: a.EFr.SIZE_40,
            'aria-label': u.intl.string(u.t.hG1StL)
        })
    });
}
