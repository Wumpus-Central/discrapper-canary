n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(523875),
    a = n(397927),
    r = n(688810),
    o = n(980923),
    d = n(384059),
    c = n(709562);
function u(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: u,
            centerButton: h = !1,
            awaitingRemote: A,
            onMouseEnter: _,
            onMouseLeave: m,
            onClick: g,
            ...p
        } = e,
        { parentAnalyticsLocation: f } = (0, r.Ay)(),
        x = t || n || u,
        E = h ? c.l : c.A,
        I = (0, o.A)(t, n, u, A),
        { events: C, play: N, Component: T } = (0, s.L)(x ? "unmute" : "mute"),
        S = n || u ? a.O1p : T;
    return (
        l.useEffect(() => () => N(), [N, x]),
        (0, i.jsx)(E, {
            iconComponent: S,
            isTrayButton: !0,
            caretColor: x ? "red" : "primaryDark",
            color: x ? "red" : void 0,
            label: I,
            onMouseEnter: (e) => {
                _?.(e), C.onMouseEnter();
            },
            onMouseLeave: (e) => {
                m?.(e), C.onMouseLeave();
            },
            onClick: (e) => {
                g?.(e), (0, d.X)(f, d.O.MIC, t);
            },
            ...p,
        })
    );
}
