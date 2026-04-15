n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(523875),
    a = n(397927),
    r = n(688810),
    o = n(980923),
    d = n(384059),
    c = n(709562),
    u = n(985018);
function h(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: h,
            centerButton: A = !1,
            awaitingRemote: _,
            onMouseEnter: m,
            onMouseLeave: p,
            onClick: g,
            ...f
        } = e,
        { parentAnalyticsLocation: E } = (0, r.Ay)(),
        x = t || n || h,
        I = A ? c.l : c.A,
        C = (0, o.A)(t, n, h, _),
        { events: N, play: T, Component: S } = (0, s.L)(x ? "unmute" : "mute"),
        b = n || h ? a.O1p : S;
    return (
        l.useEffect(() => () => T(), [T, x]),
        (0, i.jsx)(I, {
            ...f,
            iconComponent: b,
            isTrayButton: !0,
            caretColor: x ? "red" : "primaryDark",
            caretAriaLabel: u.intl.string(u.t["+ybWO4"]),
            color: x ? "red" : void 0,
            label: C,
            onMouseEnter: (e) => {
                m?.(e), N.onMouseEnter();
            },
            onMouseLeave: (e) => {
                p?.(e), N.onMouseLeave();
            },
            onClick: (e) => {
                g?.(e), (0, d.X)(E, d.O.MIC, t);
            },
        })
    );
}
