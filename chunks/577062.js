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
            onMouseLeave: E,
            onClick: p,
            ...g
        } = e,
        { parentAnalyticsLocation: f } = (0, r.Ay)(),
        x = n || t || A,
        I = m ? u.l : u.A,
        T = (0, o.A)(n, t, A, h),
        { events: v, play: _, Component: j } = (0, s.L)(x ? "unmute" : "mute"),
        N = t || A ? a.O : j;
    return (
        i.useEffect(() => () => _(), [_, x]),
        (0, l.jsx)(I, {
            ...g,
            iconComponent: N,
            isTrayButton: !0,
            caretColor: x ? "red" : "primaryDark",
            caretAriaLabel: d.intl.string(d.t["+ybWO4"]),
            color: x ? "red" : void 0,
            label: T,
            onMouseEnter: (e) => {
                C?.(e), v.onMouseEnter();
            },
            onMouseLeave: (e) => {
                E?.(e), v.onMouseLeave();
            },
            onClick: (e) => {
                p?.(e), (0, c.X)(f, c.O.MIC, n);
            },
        })
    );
}
