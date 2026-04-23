n.d(t, { A: () => m });
var l = n(627968),
    a = n(64700),
    r = n(419354),
    i = n(66455),
    s = n(311907),
    E = n(844222),
    _ = n(866323),
    u = n(475743),
    o = n(775121),
    c = n(761640),
    d = n(706752),
    A = n(290294),
    g = n(420775),
    T = n(684968),
    I = n(486974),
    N = n(652215);
function G(e, t) {
    return (n) => {
        if (0 === n) return "auto";
        let l = "forwards" === t.current,
            a = n > 0,
            r = !1;
        return (
            a && l && "left" === e && (r = !0),
            a && !l && "right" === e && (r = !0),
            !a && l && "right" === e && (r = !0),
            a || l || "left" !== e || (r = !0),
            r ? `calc(${100 * Math.abs(n)}% + ${Math.round(12 * Math.abs(n))}px)` : "auto"
        );
    };
}
function m(e) {
    let { userId: t, guildId: n, onClose: m, analyticsLocation: O, className: S } = e,
        R = (0, s.bG)([c.Ay], () => c.Ay.getGuildSidebarState(n), [n]),
        D = R?.details.modViewPanel ?? I.g.INFO,
        h = (0, u.A)(t),
        L = null == D ? null : D === I.g.INFO ? "backwards" : "forwards",
        C = (0, i.A)(L),
        { reducedMotion: M } = a.useContext(E.C),
        f = a.useCallback(
            (e) => {
                null != R && (0, d.z)(n, t, R.baseChannelId, { modViewPanel: e });
            },
            [R, n, t],
        ),
        x = a.useMemo(
            () => ({
                [N.IWg.CLOSE_MODAL]: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: () => (D === I.g.INFO ? m() : f(I.g.INFO)),
                },
            }),
            [m, D, f],
        );
    a.useEffect(() => (o.A.enable(), o.A.enableTemp(x), () => o.A.disableTemp()), [x]);
    let U = (0, _.p)(
        D,
        { value: 0, from: { value: 1 }, enter: { value: 0 }, leave: { value: -1 } },
        h !== t ? "animate-never" : "animate-always",
    );
    return (0, l.jsx)(r.animated.div, {
        style: { position: "relative", height: "100%", flex: 1, overflow: "hidden" },
        children: U((e, a, i) => {
            let { key: s } = i;
            return (0, l.jsx)(
                r.animated.div,
                {
                    style: {
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        width: "100%",
                        height: "100%",
                        ...(M.enabled
                            ? { opacity: e.value?.to((e) => 1 - Math.abs(e)) }
                            : { left: e.value?.to(G("left", C)), right: e.value?.to(G("right", C)) }),
                    },
                    children: (function (e) {
                        switch (e) {
                            case I.g.INFO:
                                return (0, l.jsx)(A.A, {
                                    userId: t,
                                    guildId: n,
                                    onClose: m,
                                    onNavigate: f,
                                    className: S,
                                });
                            case I.g.MESSAGE_HISTORY:
                                return (0, l.jsx)(g.A, {
                                    userId: t,
                                    guildId: n,
                                    onNavigate: () => f(I.g.INFO),
                                    className: S,
                                });
                            case I.g.PERMISSIONS:
                                return (0, l.jsx)(T.A, {
                                    userId: t,
                                    guildId: n,
                                    onNavigate: () => f(I.g.INFO),
                                    className: S,
                                });
                            default:
                                return null;
                        }
                    })(a),
                },
                s,
            );
        }),
    });
}
