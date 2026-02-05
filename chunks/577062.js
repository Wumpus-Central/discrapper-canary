n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(688810),
    r = n(980923),
    o = n(384059),
    d = n(277342),
    c = n(709562);
function u(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: u,
            centerButton: h = !1,
            awaitingRemote: A,
            onMouseEnter: g,
            onMouseLeave: m,
            onClick: p,
            ..._
        } = e,
        { parentAnalyticsLocation: x } = (0, a.Ay)(),
        f = t || n || u,
        E = h ? c.l : c.A,
        C = (0, r.A)(t, n, u, A),
        { events: I, play: S, Component: b } = (0, d.q)(f),
        N = n || u ? s.O1p : b;
    return (
        l.useEffect(() => () => S(), [S, f]),
        (0, i.jsx)(E, {
            iconComponent: N,
            isTrayButton: !0,
            caretColor: f ? "red" : "primaryDark",
            color: f ? "red" : void 0,
            label: C,
            onMouseEnter: (e) => {
                g?.(e), I.onMouseEnter();
            },
            onMouseLeave: (e) => {
                m?.(e), I.onMouseLeave();
            },
            onClick: (e) => {
                p?.(e), (0, o.X)(x, o.O.MIC, t);
            },
            ..._,
        })
    );
}
