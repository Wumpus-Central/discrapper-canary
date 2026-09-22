t.d(n, { A: () => A });
var i = t(477900),
    l = t(582128),
    s = t(523875),
    a = t(666654),
    o = t(688810),
    r = t(980923),
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
            onClick: x,
            ...g
        } = e,
        { parentAnalyticsLocation: f } = (0, o.Ay)(),
        E = n || t || A,
        I = m ? u.l : u.A,
        v = (0, r.A)(n, t, A, h),
        { events: T, play: j, Component: N } = (0, s.L)(E ? "unmute" : "mute"),
        _ = t || A ? a.O : N;
    return (
        l.useEffect(() => () => j(), [j, E]),
        (0, i.jsx)(I, {
            ...g,
            iconComponent: _,
            isTrayButton: !0,
            caretColor: E ? "red" : "primaryDark",
            caretAriaLabel: d.intl.string(d.t["+ybWO4"]),
            color: E ? "red" : void 0,
            label: v,
            onMouseEnter: (e) => {
                (C?.(e), T.onMouseEnter());
            },
            onMouseLeave: (e) => {
                (p?.(e), T.onMouseLeave());
            },
            onClick: (e) => {
                (x?.(e), (0, c.X)(f, c.O.MIC, n));
            },
        })
    );
}
