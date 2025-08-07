n.d(t, { Z: () => N });
var r = n(255367),
    l = n(73800),
    s = n(126663),
    i = n(442837),
    a = n(186325),
    o = n(481060),
    u = n(110924),
    c = n(714338),
    d = n(237617),
    E = n(433355),
    _ = n(189432),
    A = n(727381),
    T = n(313692),
    m = n(596443),
    I = n(50493),
    g = n(981631);
function f(e, t) {
    return (n) => {
        if (0 === n) return "auto";
        let r = "forwards" === t.current,
            l = n > 0,
            s = !1;
        return (
            l && r && "left" === e && (s = !0),
            l && !r && "right" === e && (s = !0),
            !l && r && "right" === e && (s = !0),
            l || r || "left" !== e || (s = !0),
            s ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
        );
    };
}
function N(e) {
    var t;
    let { userId: n, guildId: N, onClose: h, analyticsLocation: O, className: p } = e,
        R = (0, i.e7)([E.ZP], () => E.ZP.getGuildSidebarState(N), [N]),
        S = null != (t = null == R ? void 0 : R.details.modViewPanel) ? t : I.k.INFO,
        C = (0, u.Z)(n),
        v = null == S ? null : S === I.k.INFO ? "backwards" : "forwards",
        D = (0, d.Z)(v),
        { reducedMotion: b } = l.useContext(a.S),
        L = l.useCallback(
            (e) => {
                null != R && (0, _.r)(N, n, R.baseChannelId, { modViewPanel: e });
            },
            [R, N, n],
        ),
        x = l.useMemo(
            () => ({
                [g.EkH.CLOSE_MODAL]: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: () => (S === I.k.INFO ? h() : L(I.k.INFO)),
                },
            }),
            [h, S, L],
        );
    l.useEffect(() => (c.Z.enable(), c.Z.enableTemp(x), () => c.Z.disableTemp()), [x]);
    let U = (0, o.Yzy)(
        S,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 },
        },
        C !== n ? "animate-never" : "animate-always",
    );
    return (0, r.jsx)(s.animated.div, {
        style: {
            position: "relative",
            height: "100%",
            flex: 1,
            overflow: "hidden",
        },
        children: U((e, t, l) => {
            var i, a, o;
            let { key: u } = l;
            return (0, r.jsx)(
                s.animated.div,
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
                        b.enabled
                            ? { opacity: null == (i = e.value) ? void 0 : i.to((e) => 1 - Math.abs(e)) }
                            : {
                                  left: null == (a = e.value) ? void 0 : a.to(f("left", D)),
                                  right: null == (o = e.value) ? void 0 : o.to(f("right", D)),
                              },
                    ),
                    children: (function (e) {
                        switch (e) {
                            case I.k.INFO:
                                return (0, r.jsx)(A.Z, {
                                    userId: n,
                                    guildId: N,
                                    onNavigate: L,
                                    className: p,
                                });
                            case I.k.MESSAGE_HISTORY:
                                return (0, r.jsx)(T.Z, {
                                    userId: n,
                                    guildId: N,
                                    onNavigate: () => L(I.k.INFO),
                                    className: p,
                                });
                            case I.k.PERMISSIONS:
                                return (0, r.jsx)(m.Z, {
                                    userId: n,
                                    guildId: N,
                                    onNavigate: () => L(I.k.INFO),
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
