var i = t(477900),
    l = t(582128),
    s = t(523875),
    a = t(666654),
    r = t(688810),
    o = t(980923),
    c = t(384059),
    u = t(693409),
    d = t(792996);
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
                I = h ? u.l : u.A,
                j = (0, o.A)(n, t, A, m),
                { events: v, play: N, Component: _ } = (0, s.L)(E ? "unmute" : "mute"),
                T = t || A ? a.MicrophoneDenyIcon : _;
            return (
                l.useEffect(() => () => N(), [N, E]),
                (0, i.jsx)(I, {
                    ...f,
                    iconComponent: T,
                    isTrayButton: !0,
                    caretColor: E ? "red" : "primaryDark",
                    caretAriaLabel: d.intl.string(d.t["+ybWO4"]),
                    color: E ? "red" : void 0,
                    label: j,
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
