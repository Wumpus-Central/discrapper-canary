t.d(n, { A: () => A });
var i = t(477900),
    l = t(582128),
    s = t(523875),
    a = t(666654),
    r = t(688810),
    o = t(980923),
    c = t(384059),
    u = t(204651),
    d = t(105292);
function A(e) {
    let {
            selfMute: n,
            serverMute: t,
            suppress: A,
            centerButton: h = !1,
            awaitingRemote: m,
            onMouseEnter: g,
            onMouseLeave: x,
            onClick: C,
            ...f
        } = e,
        { parentAnalyticsLocation: p } = (0, r.Ay)(),
        E = n || t || A,
        j = h ? u.l : u.A,
        v = (0, o.A)(n, t, A, m),
        { events: I, play: N, Component: _ } = (0, s.L)(E ? "unmute" : "mute"),
        T = t || A ? a.O : _;
    return (
        l.useEffect(() => () => N(), [N, E]),
        (0, i.jsx)(j, {
            ...f,
            iconComponent: T,
            isTrayButton: !0,
            caretColor: E ? "red" : "primaryDark",
            caretAriaLabel: d.intl.string(d.t["+ybWO4"]),
            color: E ? "red" : void 0,
            label: v,
            onMouseEnter: (e) => {
                (g?.(e), I.onMouseEnter());
            },
            onMouseLeave: (e) => {
                (x?.(e), I.onMouseLeave());
            },
            onClick: (e) => {
                (C?.(e), (0, c.X)(p, c.O.MIC, n));
            },
        })
    );
}
