n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(688810),
    r = n(980923),
    o = n(384059),
    c = n(277342),
    d = n(709562);
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
        { parentAnalyticsLocation: f } = (0, a.Ay)(),
        x = t || n || u,
        E = h ? d.l : d.A,
        I = (0, r.A)(t, n, u, A),
        { events: C, play: N, Component: T } = (0, c.q)(x),
        S = n || u ? s.O1p : T;
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
                g?.(e), (0, o.X)(f, o.O.MIC, t);
            },
            ...p,
        })
    );
}
