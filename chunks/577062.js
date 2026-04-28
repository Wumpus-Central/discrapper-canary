n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    s = n(523875),
    a = n(666654),
    r = n(688810),
    o = n(980923),
    c = n(384059),
    u = n(709562),
    d = n(985018);
function A(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: A,
            centerButton: E = !1,
            awaitingRemote: m,
            onMouseEnter: h,
            onMouseLeave: C,
            onClick: g,
            ...I
        } = e,
        { parentAnalyticsLocation: p } = (0, r.Ay)(),
        x = t || n || A,
        T = E ? u.l : u.A,
        _ = (0, o.A)(t, n, A, m),
        { events: v, play: N, Component: f } = (0, s.L)(x ? "unmute" : "mute"),
        j = n || A ? a.O : f;
    return (
        i.useEffect(() => () => N(), [N, x]),
        (0, l.jsx)(T, {
            ...I,
            iconComponent: j,
            isTrayButton: !0,
            caretColor: x ? "red" : "primaryDark",
            caretAriaLabel: d.intl.string(d.t["+ybWO4"]),
            color: x ? "red" : void 0,
            label: _,
            onMouseEnter: (e) => {
                h?.(e), v.onMouseEnter();
            },
            onMouseLeave: (e) => {
                C?.(e), v.onMouseLeave();
            },
            onClick: (e) => {
                g?.(e), (0, c.X)(p, c.O.MIC, t);
            },
        })
    );
}
