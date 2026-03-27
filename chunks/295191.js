n.d(t, { A: () => h });
var l = n(627968),
    r = n(64700),
    a = n(880013),
    i = n(66455),
    s = n(311907),
    o = n(397927),
    E = n(475743),
    u = n(775121),
    c = n(761640),
    _ = n(706752),
    d = n(290294),
    A = n(420775),
    g = n(684968),
    T = n(486974),
    I = n(652215);
function N(e, t) {
    return (n) => {
        if (0 === n) return "auto";
        let l = "forwards" === t.current,
            r = n > 0,
            a = !1;
        return (
            r && l && "left" === e && (a = !0),
            r && !l && "right" === e && (a = !0),
            !r && l && "right" === e && (a = !0),
            r || l || "left" !== e || (a = !0),
            a ? `calc(${100 * Math.abs(n)}% + ${Math.round(12 * Math.abs(n))}px)` : "auto"
        );
    };
}
function h(e) {
    let { userId: t, guildId: n, onClose: h, analyticsLocation: m, className: S } = e,
        G = (0, s.bG)([c.Ay], () => c.Ay.getGuildSidebarState(n), [n]),
        O = G?.details.modViewPanel ?? T.g.INFO,
        R = (0, E.A)(t),
        C = null == O ? null : O === T.g.INFO ? "backwards" : "forwards",
        L = (0, i.A)(C),
        { reducedMotion: D } = r.useContext(o.CZY),
        f = r.useCallback(
            (e) => {
                null != G && (0, _.z)(n, t, G.baseChannelId, { modViewPanel: e });
            },
            [G, n, t],
        ),
        x = r.useMemo(
            () => ({
                [I.IWg.CLOSE_MODAL]: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: () => (O === T.g.INFO ? h() : f(T.g.INFO)),
                },
            }),
            [h, O, f],
        );
    r.useEffect(() => (u.A.enable(), u.A.enableTemp(x), () => u.A.disableTemp()), [x]);
    let M = (0, o.pnh)(
        O,
        { value: 0, from: { value: 1 }, enter: { value: 0 }, leave: { value: -1 } },
        R !== t ? "animate-never" : "animate-always",
    );
    return (0, l.jsx)(a.animated.div, {
        style: { position: "relative", height: "100%", flex: 1, overflow: "hidden" },
        children: M((e, r, i) => {
            let { key: s } = i;
            return (0, l.jsx)(
                a.animated.div,
                {
                    style: {
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        width: "100%",
                        height: "100%",
                        ...(D.enabled
                            ? { opacity: e.value?.to((e) => 1 - Math.abs(e)) }
                            : { left: e.value?.to(N("left", L)), right: e.value?.to(N("right", L)) }),
                    },
                    children: (function (e) {
                        switch (e) {
                            case T.g.INFO:
                                return (0, l.jsx)(d.A, { userId: t, guildId: n, onNavigate: f, className: S });
                            case T.g.MESSAGE_HISTORY:
                                return (0, l.jsx)(A.A, {
                                    userId: t,
                                    guildId: n,
                                    onNavigate: () => f(T.g.INFO),
                                    className: S,
                                });
                            case T.g.PERMISSIONS:
                                return (0, l.jsx)(g.A, {
                                    userId: t,
                                    guildId: n,
                                    onNavigate: () => f(T.g.INFO),
                                    className: S,
                                });
                            default:
                                return null;
                        }
                    })(r),
                },
                s,
            );
        }),
    });
}
