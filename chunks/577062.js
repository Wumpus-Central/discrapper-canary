n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(688810),
    r = n(980923),
    o = n(384059),
    d = n(709562),
    c = n(985018);
function u(e) {
    var t, n;
    let {
            selfMute: u,
            serverMute: h,
            suppress: A,
            centerButton: _ = !1,
            awaitingRemote: m,
            onMouseEnter: p,
            onMouseLeave: g,
            onClick: f,
            ...E
        } = e,
        { parentAnalyticsLocation: x } = (0, a.Ay)(),
        I = u || h || A,
        C = _ ? d.l : d.A,
        N = (0, r.A)(u, h, A, m),
        T = l.useRef(null),
        S =
            ((t = I),
            (n = T),
            l.useMemo(
                () =>
                    (0, i.jsx)(s.F0F, {
                        defaultViewModelInstance: t ? "Off" : "On",
                        allowAnimationWhileUnfocused: !0,
                        eventTargetRef: n,
                        dataBinding: { on: !t, fill: "currentColor" },
                        className: s.d5l.refresh_sm,
                    }),
                [t, n],
            ));
    return (0, i.jsx)(C, {
        ...E,
        iconComponent: h || A ? s.O1p : S,
        isTrayButton: !0,
        caretColor: I ? "red" : "primaryDark",
        caretAriaLabel: c.intl.string(c.t["+ybWO4"]),
        color: I ? "red" : void 0,
        label: N,
        onMouseEnter: (e) => {
            p?.(e);
        },
        onMouseLeave: (e) => {
            g?.(e);
        },
        onClick: (e) => {
            f?.(e), (0, o.X)(x, o.O.MIC, u);
        },
        buttonRef: T,
    });
}
