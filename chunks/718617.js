n.d(t, { Z: () => h });
var r = n(255367),
    l = n(73800),
    i = n(717976),
    s = n(442837),
    a = n(186325),
    o = n(481060),
    u = n(110924),
    c = n(714338),
    E = n(237617),
    d = n(433355),
    _ = n(189432),
    A = n(727381),
    T = n(313692),
    m = n(596443),
    I = n(50493),
    g = n(981631);
function N(e, t) {
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
function h(e) {
    var t;
    let { userId: n, guildId: h, onClose: f, analyticsLocation: O, className: p } = e,
        R = (0, s.e7)([d.ZP], () => d.ZP.getGuildSidebarState(h), [h]),
        S = null != (t = null == R ? void 0 : R.details.modViewPanel) ? t : I.k.INFO,
        C = (0, u.Z)(n),
        D = null == S ? null : S === I.k.INFO ? "backwards" : "forwards",
        L = (0, E.Z)(D),
        { reducedMotion: U } = l.useContext(a.S),
        M = l.useCallback(
            (e) => {
                null != R && (0, _.r)(h, n, R.baseChannelId, { modViewPanel: e });
            },
            [R, h, n],
        ),
        v = l.useMemo(
            () => ({
                [g.EkH.CLOSE_MODAL]: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: () => (S === I.k.INFO ? f() : M(I.k.INFO)),
                },
            }),
            [f, S, M],
        );
    l.useEffect(() => (c.Z.enable(), c.Z.enableTemp(v), () => c.Z.disableTemp()), [v]);
    let b = (0, o.Yzy)(
        S,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 },
        },
        C !== n ? "animate-never" : "animate-always",
    );
    return (0, r.jsx)(i.animated.div, {
        style: {
            position: "relative",
            height: "100%",
            flex: 1,
            overflow: "hidden",
        },
        children: b((e, t, l) => {
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
                                  left: null == (a = e.value) ? void 0 : a.to(N("left", L)),
                                  right: null == (o = e.value) ? void 0 : o.to(N("right", L)),
                              },
                    ),
                    children: (function (e) {
                        switch (e) {
                            case I.k.INFO:
                                return (0, r.jsx)(A.Z, {
                                    userId: n,
                                    guildId: h,
                                    onNavigate: M,
                                    className: p,
                                });
                            case I.k.MESSAGE_HISTORY:
                                return (0, r.jsx)(T.Z, {
                                    userId: n,
                                    guildId: h,
                                    onNavigate: () => M(I.k.INFO),
                                    className: p,
                                });
                            case I.k.PERMISSIONS:
                                return (0, r.jsx)(m.Z, {
                                    userId: n,
                                    guildId: h,
                                    onNavigate: () => M(I.k.INFO),
                                    className: p,
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
