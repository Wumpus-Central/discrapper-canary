var i = t(477900),
    l = t(582128),
    s = t(523875),
    a = t(666654),
    r = t(688810),
    o = t(980923),
    c = t(384059),
    d = t(693409),
    u = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
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
                j = h ? d.l : d.A,
                I = (0, o.A)(n, t, A, m),
                { events: v, play: N, Component: _ } = (0, s.L)(E ? "unmute" : "mute"),
                T = t || A ? a.O : _;
            return (
                l.useEffect(() => () => N(), [N, E]),
                (0, i.jsx)(j, {
                    ...f,
                    iconComponent: T,
                    isTrayButton: !0,
                    caretColor: E ? "red" : "primaryDark",
                    caretAriaLabel: u.intl.string(u.t["+ybWO4"]),
                    color: E ? "red" : void 0,
                    label: I,
                    onMouseEnter: (e) => {
                        (g?.(e), v.onMouseEnter());
                    },
                    onMouseLeave: (e) => {
                        (x?.(e), v.onMouseLeave());
                    },
                    onClick: (e) => {
                        (C?.(e), (0, c.XJ)(p, c.OP.MIC, n));
                    },
                })
            );
        },
    },
);
