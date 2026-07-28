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
            centerButton: h = !1,
            awaitingRemote: m,
            onMouseEnter: C,
            onMouseLeave: E,
            onClick: p,
            ...g
        } = e,
        { parentAnalyticsLocation: x } = (0, r.Ay)(),
        f = n || t || A,
        I = h ? u.l : u.A,
        T = (0, o.A)(n, t, A, m),
        { events: v, play: _, Component: j } = (0, s.L)(f ? "unmute" : "mute"),
        N = t || A ? a.O : j;
    return (
        i.useEffect(() => () => _(), [_, f]),
        (0, l.jsx)(I, {
            ...g,
            iconComponent: N,
            isTrayButton: !0,
            caretColor: f ? "red" : "primaryDark",
            caretAriaLabel: d.intl.string(d.t["+ybWO4"]),
            color: f ? "red" : void 0,
            label: T,
            onMouseEnter: (e) => {
                C?.(e), v.onMouseEnter();
            },
            onMouseLeave: (e) => {
                E?.(e), v.onMouseLeave();
            },
            onClick: (e) => {
                p?.(e), (0, c.X)(x, c.O.MIC, n);
            },
        })
    );
}
