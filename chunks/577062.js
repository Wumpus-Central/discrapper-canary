"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(688810),
    a = n(980923),
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
            onMouseEnter: p,
            onMouseLeave: g,
            onClick: m,
            ..._
        } = e,
        { parentAnalyticsLocation: f } = (0, r.Ay)(),
        x = t || n || u,
        C = h ? d.l : d.A,
        E = (0, a.A)(t, n, u, A),
        { events: I, play: N, Component: b } = (0, c.q)(x),
        S = n || u ? l.O1p : b;
    return (
        s.useEffect(() => () => N(), [N, x]),
        (0, i.jsx)(C, {
            iconComponent: S,
            isTrayButton: !0,
            caretColor: x ? "red" : "primaryDark",
            color: x ? "red" : void 0,
            label: E,
            onMouseEnter: (e) => {
                p?.(e), I.onMouseEnter();
            },
            onMouseLeave: (e) => {
                g?.(e), I.onMouseLeave();
            },
            onClick: (e) => {
                m?.(e), (0, o.X)(f, o.O.MIC, t);
            },
            ..._,
        })
    );
}
