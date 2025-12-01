n.d(t, { Z: () => N });
var r = n(54381),
    l = n(473749),
    i = n(666917),
    s = n(872175),
    a = n(442837),
    o = n(481060),
    u = n(110924),
    c = n(714338),
    E = n(433355),
    d = n(189432),
    _ = n(727381),
    A = n(313692),
    T = n(596443),
    I = n(50493),
    m = n(981631);
function g(e, t) {
    return (n) => {
        if (0 === n) return "auto";
        let r = "forwards" === t.current,
            l = n > 0,
            i = !1;
        return (
            l && r && "left" === e && (i = !0),
            l && !r && "right" === e && (i = !0),
            !l && r && "right" === e && (i = !0),
            l || r || "left" !== e || (i = !0),
            i ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
        );
    };
}
function N(e) {
    var t;
    let { userId: n, guildId: N, onClose: h, analyticsLocation: O, className: f } = e,
        R = (0, a.e7)([E.ZP], () => E.ZP.getGuildSidebarState(N), [N]),
        S = null != (t = null == R ? void 0 : R.details.modViewPanel) ? t : I.k.INFO,
        p = (0, u.Z)(n),
        C = null == S ? null : S === I.k.INFO ? "backwards" : "forwards",
        D = (0, s.Z)(C),
        { reducedMotion: U } = l.useContext(o.Sfi),
        L = l.useCallback(
            (e) => {
                null != R && (0, d.r)(N, n, R.baseChannelId, { modViewPanel: e });
            },
            [R, N, n],
        ),
        M = l.useMemo(
            () => ({
                [m.EkH.CLOSE_MODAL]: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: () => (S === I.k.INFO ? h() : L(I.k.INFO)),
                },
            }),
            [h, S, L],
        );
    l.useEffect(() => (c.Z.enable(), c.Z.enableTemp(M), () => c.Z.disableTemp()), [M]);
    let x = (0, o.Yzy)(
        S,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 },
        },
        p !== n ? "animate-never" : "animate-always",
    );
    return (0, r.jsx)(i.animated.div, {
        style: {
            position: "relative",
            height: "100%",
            flex: 1,
            overflow: "hidden",
        },
        children: x((e, t, l) => {
            var s, a, o;
            let { key: u } = l;
            return (0, r.jsx)(
                i.animated.div,
                {
                    style: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            position: "absolute",
                            display: "flex",
                            flexDirection: "column",
                            backfaceVisibility: "hidden",
                            width: "100%",
                            height: "100%",
                        },
                        U.enabled
                            ? { opacity: null == (s = e.value) ? void 0 : s.to((e) => 1 - Math.abs(e)) }
                            : {
                                  left: null == (a = e.value) ? void 0 : a.to(g("left", D)),
                                  right: null == (o = e.value) ? void 0 : o.to(g("right", D)),
                              },
                    ),
                    children: (function (e) {
                        switch (e) {
                            case I.k.INFO:
                                return (0, r.jsx)(_.Z, {
                                    userId: n,
                                    guildId: N,
                                    onNavigate: L,
                                    className: f,
                                });
                            case I.k.MESSAGE_HISTORY:
                                return (0, r.jsx)(A.Z, {
                                    userId: n,
                                    guildId: N,
                                    onNavigate: () => L(I.k.INFO),
                                    className: f,
                                });
                            case I.k.PERMISSIONS:
                                return (0, r.jsx)(T.Z, {
                                    userId: n,
                                    guildId: N,
                                    onNavigate: () => L(I.k.INFO),
                                    className: f,
                                });
                            default:
                                return null;
                        }
                    })(t),
                },
                u,
            );
        }),
    });
}
