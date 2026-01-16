n.d(t, { Z: () => m });
var r = n(54381),
    l = n(473749),
    i = n(81239),
    a = n(872175),
    s = n(442837),
    o = n(481060),
    c = n(110924),
    u = n(714338),
    d = n(433355),
    E = n(189432),
    _ = n(727381),
    A = n(313692),
    f = n(596443),
    T = n(50493),
    g = n(981631);
function I(e, t) {
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
function m(e) {
    var t;
    let { userId: n, guildId: m, onClose: h, analyticsLocation: N, className: O } = e,
        p = (0, s.e7)([d.ZP], () => d.ZP.getGuildSidebarState(m), [m]),
        R = null != (t = null == p ? void 0 : p.details.modViewPanel) ? t : T.k.INFO,
        S = (0, c.Z)(n),
        C = null == R ? null : R === T.k.INFO ? "backwards" : "forwards",
        b = (0, a.Z)(C),
        { reducedMotion: D } = l.useContext(o.Sfi),
        L = l.useCallback(
            (e) => {
                null != p && (0, E.r)(m, n, p.baseChannelId, { modViewPanel: e });
            },
            [p, m, n],
        ),
        U = l.useMemo(
            () => ({
                [g.EkH.CLOSE_MODAL]: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action: () => (R === T.k.INFO ? h() : L(T.k.INFO)),
                },
            }),
            [h, R, L],
        );
    l.useEffect(() => (u.Z.enable(), u.Z.enableTemp(U), () => u.Z.disableTemp()), [U]);
    let M = (0, o.Yzy)(
        R,
        {
            value: 0,
            from: { value: 1 },
            enter: { value: 0 },
            leave: { value: -1 },
        },
        S !== n ? "animate-never" : "animate-always",
    );
    return (0, r.jsx)(i.animated.div, {
        style: {
            position: "relative",
            height: "100%",
            flex: 1,
            overflow: "hidden",
        },
        children: M((e, t, l) => {
            var a, s, o;
            let { key: c } = l;
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
                        D.enabled
                            ? { opacity: null == (a = e.value) ? void 0 : a.to((e) => 1 - Math.abs(e)) }
                            : {
                                  left: null == (s = e.value) ? void 0 : s.to(I("left", b)),
                                  right: null == (o = e.value) ? void 0 : o.to(I("right", b)),
                              },
                    ),
                    children: (function (e) {
                        switch (e) {
                            case T.k.INFO:
                                return (0, r.jsx)(_.Z, {
                                    userId: n,
                                    guildId: m,
                                    onNavigate: L,
                                    className: O,
                                });
                            case T.k.MESSAGE_HISTORY:
                                return (0, r.jsx)(A.Z, {
                                    userId: n,
                                    guildId: m,
                                    onNavigate: () => L(T.k.INFO),
                                    className: O,
                                });
                            case T.k.PERMISSIONS:
                                return (0, r.jsx)(f.Z, {
                                    userId: n,
                                    guildId: m,
                                    onNavigate: () => L(T.k.INFO),
                                    className: O,
                                });
                            default:
                                return null;
                        }
                    })(t),
                },
                c,
            );
        }),
    });
}
