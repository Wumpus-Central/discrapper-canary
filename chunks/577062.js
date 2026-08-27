t.d(n, { A: () => A });
var l = t(477900),
    i = t(582128),
    a = t(523875),
    s = t(666654),
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
            onMouseLeave: f,
            onClick: E,
            ...p
        } = e,
        { parentAnalyticsLocation: g } = (0, r.Ay)(),
        x = n || t || A,
        I = m ? u.l : u.A,
        v = (0, o.A)(n, t, A, h),
        { events: T, play: _, Component: j } = (0, a.L)(x ? "unmute" : "mute"),
        N = t || A ? s.O : j;
    return (
        i.useEffect(() => () => _(), [_, x]),
        (0, l.jsx)(I, {
            ...p,
            iconComponent: N,
            isTrayButton: !0,
            caretColor: x ? "red" : "primaryDark",
            caretAriaLabel: d.intl.string(d.t["+ybWO4"]),
            color: x ? "red" : void 0,
            label: v,
            onMouseEnter: (e) => {
                C?.(e), T.onMouseEnter();
            },
            onMouseLeave: (e) => {
                f?.(e), T.onMouseLeave();
            },
            onClick: (e) => {
                E?.(e), (0, c.X)(g, c.O.MIC, n);
            },
        })
    );
}
