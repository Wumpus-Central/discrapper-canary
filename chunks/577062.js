t.d(n, { A: () => A });
var l = t(477900),
    i = t(582128),
    s = t(523875),
    a = t(666654),
    r = t(688810),
    o = t(980923),
    c = t(384059),
    u = t(204651),
    d = t(375708);
function A(e) {
    let {
            selfMute: n,
            serverMute: t,
            suppress: A,
            centerButton: m = !1,
            awaitingRemote: h,
            onMouseEnter: C,
            onMouseLeave: p,
            onClick: g,
            ...E
        } = e,
        { parentAnalyticsLocation: f } = (0, r.Ay)(),
        x = n || t || A,
        v = m ? u.l : u.A,
        I = (0, o.A)(n, t, A, h),
        { events: T, play: j, Component: N } = (0, s.L)(x ? "unmute" : "mute"),
        _ = t || A ? a.O : N;
    return (
        i.useEffect(() => () => j(), [j, x]),
        (0, l.jsx)(v, {
            ...E,
            iconComponent: _,
            isTrayButton: !0,
            caretColor: x ? "red" : "primaryDark",
            caretAriaLabel: d.intl.string(d.t["+ybWO4"]),
            color: x ? "red" : void 0,
            label: I,
            onMouseEnter: (e) => {
                (C?.(e), T.onMouseEnter());
            },
            onMouseLeave: (e) => {
                (p?.(e), T.onMouseLeave());
            },
            onClick: (e) => {
                (g?.(e), (0, c.X)(f, c.O.MIC, n));
            },
        })
    );
}
