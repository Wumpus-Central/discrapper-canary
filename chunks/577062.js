"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(688810),
    a = n(980923),
    o = n(384059),
    c = n(709562);
function d(e) {
    var t, n;
    let {
            selfMute: d,
            serverMute: u,
            suppress: h,
            centerButton: A = !1,
            awaitingRemote: p,
            onMouseEnter: g,
            onMouseLeave: m,
            onClick: _,
            ...f
        } = e,
        { parentAnalyticsLocation: x } = (0, r.Ay)(),
        C = d || u || h,
        E = A ? c.l : c.A,
        I = (0, a.A)(d, u, h, p),
        N = s.useRef(null),
        b =
            ((t = C),
            (n = N),
            s.useMemo(
                () =>
                    (0, i.jsx)(l.F0F, {
                        defaultViewModelInstance: t ? "Off" : "On",
                        allowAnimationWhileUnfocused: !0,
                        eventTargetRef: n,
                        dataBinding: { on: !t, fill: "currentColor" },
                        className: l.d5l.refresh_sm,
                    }),
                [t, n],
            ));
    return (0, i.jsx)("div", {
        ref: N,
        children: (0, i.jsx)(E, {
            iconComponent: u || h ? l.O1p : b,
            isTrayButton: !0,
            caretColor: C ? "red" : "primaryDark",
            color: C ? "red" : void 0,
            label: I,
            onMouseEnter: (e) => {
                g?.(e);
            },
            onMouseLeave: (e) => {
                m?.(e);
            },
            onClick: (e) => {
                _?.(e), (0, o.X)(x, o.O.MIC, d);
            },
            ...f,
        }),
    });
}
