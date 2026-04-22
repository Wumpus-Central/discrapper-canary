t.d(n, { A: () => A });
var l = t(627968),
    i = t(64700),
    a = t(523875),
    s = t(666654),
    r = t(688810),
    o = t(980923),
    c = t(384059),
    u = t(709562),
    d = t(985018);
function A(e) {
    let {
            selfMute: n,
            serverMute: t,
            suppress: A,
            centerButton: h = !1,
            awaitingRemote: p,
            onMouseEnter: m,
            onMouseLeave: g,
            onClick: f,
            ...C
        } = e,
        { parentAnalyticsLocation: E } = (0, r.Ay)(),
        v = n || t || A,
        I = h ? u.l : u.A,
        x = (0, o.A)(n, t, A, p),
        { events: T, play: _, Component: j } = (0, a.L)(v ? "unmute" : "mute"),
        N = t || A ? s.O : j;
    return (
        i.useEffect(() => () => _(), [_, v]),
        (0, l.jsx)(I, {
            ...C,
            iconComponent: N,
            isTrayButton: !0,
            caretColor: v ? "red" : "primaryDark",
            caretAriaLabel: d.intl.string(d.t["+ybWO4"]),
            color: v ? "red" : void 0,
            label: x,
            onMouseEnter: (e) => {
                m?.(e), T.onMouseEnter();
            },
            onMouseLeave: (e) => {
                g?.(e), T.onMouseLeave();
            },
            onClick: (e) => {
                f?.(e), (0, c.X)(E, c.O.MIC, n);
            },
        })
    );
}
